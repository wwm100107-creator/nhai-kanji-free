// Thuật toán Lặp lại ngắt quãng (SRS) & Theo dõi chuỗi học tập cá nhân (Daily Streak)
import { kanjiData } from '../data/kanjiData';
import { tangoData } from '../data/tangoData';
import { bunpoData } from '../data/bunpoData';

const SRS_STORAGE_KEY = 'nhai_kanji_srs_deck_v2';
const STREAK_STORAGE_KEY = 'nhai_kanji_study_streak_v2';
const REVIEW_HISTORY_KEY = 'nhai_kanji_review_history_v2';

// Định dạng ngày: YYYY-MM-DD
export const getTodayString = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

// Khởi tạo deck ban đầu nếu người học chưa có dữ liệu
export const getInitialSrsDeck = () => {
  const defaultItems = [];

  // Thêm 15 chữ Kanji tiêu biểu N5-N4
  kanjiData.slice(0, 15).forEach(k => {
    defaultItems.push({
      id: `kanji_${k.kanji}`,
      type: 'kanji',
      item: k,
      front: k.kanji,
      backHanViet: k.hanViet,
      backMeaning: k.meaning,
      reading: k.kun?.[0] || k.on?.[0] || '',
      mnemonic: k.mnemonic,
      compounds: k.compounds?.slice(0, 2) || [],
      level: k.level,
      stage: 0, // 0: Mới, 1: Nhớ sơ, 2: Thuộc, 3: Vững, 4: Thành thạo
      intervalDays: 0,
      nextReviewDate: getTodayString(),
      lastReviewed: null,
      reviewCount: 0,
      mistakeCount: 0
    });
  });

  // Thêm 15 từ vựng Tango N5-N4
  tangoData.slice(0, 15).forEach(t => {
    defaultItems.push({
      id: `tango_${t.id}`,
      type: 'tango',
      item: t,
      front: t.word,
      backHanViet: t.hanViet,
      backMeaning: t.meaning,
      reading: t.reading,
      pitch: t.pitch,
      pitchType: t.pitchType,
      example: t.exampleJa,
      exampleVi: t.exampleVi,
      level: t.level,
      stage: 0,
      intervalDays: 0,
      nextReviewDate: getTodayString(),
      lastReviewed: null,
      reviewCount: 0,
      mistakeCount: 0
    });
  });

  // Thêm 5 mẫu ngữ pháp Bunpo cốt lõi
  bunpoData.slice(0, 5).forEach(b => {
    defaultItems.push({
      id: `bunpo_${b.id}`,
      type: 'bunpo',
      item: b,
      front: b.title,
      backHanViet: 'NGỮ PHÁP',
      backMeaning: b.meaning,
      reading: b.structure,
      example: b.examples?.[0]?.ja || '',
      exampleVi: b.examples?.[0]?.vi || '',
      level: b.level,
      stage: 0,
      intervalDays: 0,
      nextReviewDate: getTodayString(),
      lastReviewed: null,
      reviewCount: 0,
      mistakeCount: 0
    });
  });

  return defaultItems;
};

// Lấy toàn bộ bộ thẻ SRS hiện tại
export const getSrsDeck = () => {
  try {
    const raw = localStorage.getItem(SRS_STORAGE_KEY);
    if (!raw) {
      const initial = getInitialSrsDeck();
      localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.warn("Error reading SRS deck", e);
    return getInitialSrsDeck();
  }
};

// Lưu bộ thẻ
export const saveSrsDeck = (deck) => {
  try {
    localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(deck));
  } catch (e) {
    console.warn("Error saving SRS deck", e);
  }
};

// Lấy danh sách cần ôn tập hôm nay (nextReviewDate <= today)
export const getDueItemsToday = () => {
  const deck = getSrsDeck();
  const today = getTodayString();
  return deck.filter(item => item.nextReviewDate <= today);
};

// Lấy danh sách sổ tay lỗi sai (những mục bị trả lời sai nhiều nhất)
export const getMistakeItems = () => {
  const deck = getSrsDeck();
  return deck.filter(item => item.mistakeCount > 0).sort((a, b) => b.mistakeCount - a.mistakeCount);
};

// Cập nhật kết quả sau khi ôn tập 1 thẻ
// rating: 'forgot' (Quên / Cần học lại) | 'partial' (Nhớ mang máng) | 'good' (Đã thuộc tốt)
export const submitReviewResult = (itemId, rating) => {
  const deck = getSrsDeck();
  const index = deck.findIndex(it => it.id === itemId);
  if (index === -1) return;

  const item = { ...deck[index] };
  const today = new Date();
  const todayStr = getTodayString();

  let nextIntervalDays = 1;

  if (rating === 'forgot') {
    // Quên -> Reset về stage 0, ngày mai ôn lại
    item.stage = 0;
    item.mistakeCount = (item.mistakeCount || 0) + 1;
    nextIntervalDays = 1;
  } else if (rating === 'partial') {
    // Nhớ mang máng -> Stage 1, 2 ngày sau ôn
    item.stage = Math.max(1, item.stage);
    nextIntervalDays = 2;
  } else if (rating === 'good') {
    // Thuộc tốt -> Tăng stage theo cấp số nhân
    item.stage = Math.min(4, item.stage + 1);
    if (item.stage === 1) nextIntervalDays = 2;
    else if (item.stage === 2) nextIntervalDays = 5;
    else if (item.stage === 3) nextIntervalDays = 12;
    else if (item.stage === 4) nextIntervalDays = 25;
  }

  // Tính ngày ôn tập kế tiếp
  const nextDate = new Date();
  nextDate.setDate(today.getDate() + nextIntervalDays);
  const nextDateStr = `${nextDate.getFullYear()}-${String(nextDate.getMonth() + 1).padStart(2, '0')}-${String(nextDate.getDate()).padStart(2, '0')}`;

  item.intervalDays = nextIntervalDays;
  item.nextReviewDate = nextDateStr;
  item.lastReviewed = todayStr;
  item.reviewCount = (item.reviewCount || 0) + 1;

  deck[index] = item;
  saveSrsDeck(deck);

  // Cập nhật chuỗi ngày học liên tục (Streak)
  updateDailyStreak();
};

// Quản lý Chuỗi ngày học liên tục (Streak)
export const getStreakData = () => {
  try {
    const raw = localStorage.getItem(STREAK_STORAGE_KEY);
    if (!raw) {
      return { streak: 1, lastDate: getTodayString(), reviewsToday: 0 };
    }
    return JSON.parse(raw);
  } catch {
    return { streak: 1, lastDate: getTodayString(), reviewsToday: 0 };
  }
};

export const updateDailyStreak = () => {
  try {
    const streakData = getStreakData();
    const today = getTodayString();

    if (streakData.lastDate === today) {
      // Đã học hôm nay, tăng số lượt ôn
      streakData.reviewsToday = (streakData.reviewsToday || 0) + 1;
    } else {
      // Kiểm tra xem hôm qua có học không
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

      if (streakData.lastDate === yStr) {
        streakData.streak = (streakData.streak || 0) + 1;
      } else {
        streakData.streak = 1; // Đứt chuỗi, bắt đầu lại
      }
      streakData.lastDate = today;
      streakData.reviewsToday = 1;
    }

    localStorage.setItem(STREAK_STORAGE_KEY, JSON.stringify(streakData));
    return streakData;
  } catch (e) {
    console.warn("Streak update error", e);
  }
};
