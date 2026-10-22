import React, { useState, useEffect } from 'react';
import { 
  Flame, CalendarCheck, RotateCw, Volume2, Award, 
  CheckCircle2, AlertCircle, HelpCircle, Trophy, 
  Sparkles, Zap, Headphones, BookMarked, ArrowRight, 
  ListFilter, RefreshCw, PlusCircle
} from 'lucide-react';
import { 
  getSrsDeck, getDueItemsToday, getMistakeItems, 
  submitReviewResult, getStreakData, getTodayString 
} from '../utils/srsEngine';
import { playJapaneseAudio } from '../utils/speech';
import confetti from 'canvas-confetti';

export default function DailyReviewView() {
  const [activeSubTab, setActiveSubTab] = useState('session'); // 'session' | 'quiz' | 'shadowing' | 'mistakes'
  const [deck, setDeck] = useState(getSrsDeck);
  const [dueItems, setDueItems] = useState(getDueItemsToday);
  const [streakInfo, setStreakInfo] = useState(getStreakData);
  
  // Daily session state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [sessionStats, setSessionStats] = useState({ good: 0, partial: 0, forgot: 0 });

  // Quick Speed Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);

  // Refresh data on render or subtab change
  useEffect(() => {
    setDeck(getSrsDeck());
    setDueItems(getDueItemsToday());
    setStreakInfo(getStreakData());
  }, [activeSubTab, sessionCompleted]);

  const currentItem = dueItems[currentIndex];

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped && currentItem?.front) {
      playJapaneseAudio(currentItem.reading || currentItem.front);
    }
  };

  const handleRating = (rating) => {
    if (!currentItem) return;

    // Submit rating to SRS algorithm
    submitReviewResult(currentItem.id, rating);
    setSessionStats(prev => ({ ...prev, [rating]: prev[rating] + 1 }));

    if (currentIndex + 1 < dueItems.length) {
      setIsFlipped(false);
      setCurrentIndex(prev => prev + 1);
    } else {
      setSessionCompleted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const restartSession = () => {
    setDueItems(getDueItemsToday());
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionCompleted(false);
    setSessionStats({ good: 0, partial: 0, forgot: 0 });
  };

  // Speed Quiz options generator
  const currentQuizItem = deck[quizIndex % deck.length];
  const generateQuizOptions = (correctItem) => {
    if (!correctItem) return [];
    const others = deck.filter(d => d.id !== correctItem.id);
    const shuffledOthers = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
    return [correctItem, ...shuffledOthers].sort(() => 0.5 - Math.random());
  };
  const [quizOptions, setQuizOptions] = useState(() => generateQuizOptions(currentQuizItem));

  useEffect(() => {
    setQuizOptions(generateQuizOptions(currentQuizItem));
  }, [quizIndex]);

  const handleSelectQuiz = (opt) => {
    if (selectedQuizOption !== null) return;
    setSelectedQuizOption(opt);
    const isCorrect = opt.id === currentQuizItem.id;
    if (isCorrect) setQuizScore(s => s + 1);

    setTimeout(() => {
      if (quizIndex + 1 < 10) {
        setQuizIndex(i => i + 1);
        setSelectedQuizOption(null);
      } else {
        setQuizFinished(true);
        confetti({ particleCount: 80, spread: 70 });
      }
    }, 1100);
  };

  // Metrics
  const totalCards = deck.length;
  const masteredCards = deck.filter(d => d.stage >= 3).length;
  const learningCards = deck.filter(d => d.stage < 3).length;
  const mistakeItems = getMistakeItems();

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-linear-to-r from-red-600 via-orange-600 to-amber-600 text-white rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Flame className="w-4 h-4 text-amber-300" /> Hệ Thống Lặp Lại Ngắt Quãng (Spaced Repetition)
          </div>
          <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
            TRUNG TÂM ÔN LUYỆN HÀNG NGÀY
          </h1>
          <p className="text-orange-100 text-xs md:text-sm mt-2 leading-relaxed font-medium">
            Học mà không ôn như đổ nước vào rổ thủng. Thuật toán SRS tự động đo lường độ quên của não bộ và nhắc bạn ôn tập đúng <strong>"Thời điểm vàng"</strong> trước khi kiến thức bị trôi mất.
          </p>
        </div>
      </div>

      {/* 4 Key Dashboard Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        
        {/* Streak card */}
        <div className="p-4 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6 fill-amber-500 text-amber-500" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Chuỗi học liên tục
            </span>
            <span className="text-xl font-black text-slate-900">
              {streakInfo.streak} ngày 🔥
            </span>
          </div>
        </div>

        {/* Due Today */}
        <div className="p-4 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-600 flex items-center justify-center shrink-0">
            <CalendarCheck className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Cần ôn hôm nay
            </span>
            <span className="text-xl font-black text-red-600">
              {dueItems.length} mục
            </span>
          </div>
        </div>

        {/* Total Deck */}
        <div className="p-4 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center shrink-0">
            <BookMarked className="w-6 h-6 text-sky-600" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Thẻ trong bộ nhớ
            </span>
            <span className="text-xl font-black text-slate-900">
              {totalCards} thẻ
            </span>
          </div>
        </div>

        {/* Mastered percentage */}
        <div className="p-4 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Đã khắc sâu (Guru)
            </span>
            <span className="text-xl font-black text-emerald-600">
              {masteredCards} ({totalCards > 0 ? Math.round((masteredCards / totalCards) * 100) : 0}%)
            </span>
          </div>
        </div>

      </div>

      {/* Review Mode Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/80 pb-3">
        {[
          { id: 'session', label: `1. Phiên ôn tập SRS hôm nay (${dueItems.length})`, icon: Sparkles },
          { id: 'quiz', label: '2. Trắc nghiệm phản xạ 10 câu', icon: Zap },
          { id: 'shadowing', label: '3. Luyện nghe & Shadowing', icon: Headphones },
          { id: 'mistakes', label: `4. Sổ tay lỗi sai (${mistakeItems.length})`, icon: AlertCircle }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition ${
                isActive
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: DAILY SRS REVIEW SESSION */}
      {activeSubTab === 'session' && (
        <div className="max-w-xl mx-auto space-y-6">
          {!sessionCompleted && dueItems.length > 0 ? (
            <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200 shadow-md space-y-5">
              
              {/* Card Header & Progress */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Thẻ ôn tập {currentIndex + 1} / {dueItems.length}
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-xs font-black px-2 py-0.5 rounded-md bg-red-50 text-red-700">
                      {currentItem.level}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase">
                      [{currentItem.type}]
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-400">
                    Cấp độ nhớ: Stage {currentItem.stage}/4
                  </span>
                  <button
                    onClick={() => playJapaneseAudio(currentItem.reading || currentItem.front)}
                    className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition"
                    title="Nghe phát âm"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-red-500 h-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / dueItems.length) * 100}%` }}
                />
              </div>

              {/* 3D Flashcard Container */}
              <div
                onClick={handleCardFlip}
                className="relative w-full h-80 rounded-3xl border-2 border-red-100 bg-linear-to-b from-red-50/30 to-white shadow-md p-6 flex flex-col items-center justify-center cursor-pointer select-none transition transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <span className="absolute top-4 right-4 text-xs font-semibold text-slate-400 flex items-center gap-1">
                  <RotateCw className="w-3.5 h-3.5" /> Chạm để lật đáp án
                </span>

                {!isFlipped ? (
                  /* FRONT */
                  <div className="flex flex-col items-center justify-center text-center space-y-2 animate-in zoom-in-95 duration-150">
                    <span className="text-7xl md:text-8xl font-black kanji-font text-slate-900">
                      {currentItem.front}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      (Nhớ lại âm Hán Việt, cách đọc và ý nghĩa rồi chạm để lật thẻ)
                    </span>
                  </div>
                ) : (
                  /* BACK */
                  <div className="flex flex-col items-center text-center space-y-2 animate-in zoom-in-95 duration-150 w-full overflow-y-auto max-h-72">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-black text-red-600">
                        {currentItem.backHanViet}
                      </span>
                      {currentItem.reading && (
                        <span className="text-sm font-bold text-slate-600">
                          [{currentItem.reading}]
                        </span>
                      )}
                    </div>

                    <p className="text-base font-extrabold text-slate-800">
                      👉 {currentItem.backMeaning}
                    </p>

                    {/* Mnemonic / Story */}
                    {currentItem.mnemonic && (
                      <div className="mt-2 p-3 bg-amber-50/80 border border-amber-200/60 rounded-xl text-xs text-amber-950 font-medium text-left w-full">
                        💡 <strong>Mẹo nhớ chiết tự:</strong> {currentItem.mnemonic}
                      </div>
                    )}

                    {/* Example sentence */}
                    {currentItem.example && (
                      <div className="mt-2 p-3 bg-slate-50 border border-slate-200/70 rounded-xl text-xs text-slate-700 text-left w-full space-y-0.5">
                        <p className="font-bold text-slate-900 kanji-font">{currentItem.example}</p>
                        <p className="text-slate-500">{currentItem.exampleVi}</p>
                      </div>
                    )}

                    {/* Compounds */}
                    {currentItem.compounds && currentItem.compounds.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-1.5 justify-center">
                        {currentItem.compounds.map((c, i) => (
                          <span key={i} className="text-[11px] font-bold px-2 py-0.5 bg-slate-100 rounded-lg text-slate-700">
                            {c.word}: {c.meaning}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* SRS Action Buttons */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block text-center mb-1">
                  Đánh giá mức độ ghi nhớ của bạn:
                </span>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    onClick={() => handleRating('forgot')}
                    className="p-3.5 rounded-2xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs flex flex-col items-center gap-1 transition shadow-2xs"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span>Chưa nhớ</span>
                    <span className="text-[10px] font-normal opacity-80">(Học lại ngay)</span>
                  </button>

                  <button
                    onClick={() => handleRating('partial')}
                    className="p-3.5 rounded-2xl border border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs flex flex-col items-center gap-1 transition shadow-2xs"
                  >
                    <HelpCircle className="w-5 h-5 text-amber-500" />
                    <span>Nhớ mang máng</span>
                    <span className="text-[10px] font-normal opacity-80">(+2 ngày nữa)</span>
                  </button>

                  <button
                    onClick={() => handleRating('good')}
                    className="p-3.5 rounded-2xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs flex flex-col items-center gap-1 transition shadow-2xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Đã thuộc vững</span>
                    <span className="text-[10px] font-normal opacity-80">(+5 ~ 25 ngày)</span>
                  </button>
                </div>
              </div>

            </div>
          ) : sessionCompleted ? (
            /* Session Completed Screen */
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-md text-center space-y-5">
              <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
                <Trophy className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  Hoàn Thành Mục Tiêu Ôn Tập Hôm Nay!
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Tuyệt vời! Bạn vừa duy trì chuỗi <strong>{streakInfo.streak} ngày học liên tiếp</strong>. Não bộ của bạn đã củng cố thêm các liên kết nơ-ron thần kinh mới.
                </p>
              </div>

              {/* Stats Summary */}
              <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto py-2">
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <span className="block text-2xl font-black text-emerald-600">{sessionStats.good}</span>
                  <span className="text-[11px] font-bold text-emerald-700">Đã thuộc</span>
                </div>
                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-100">
                  <span className="block text-2xl font-black text-amber-600">{sessionStats.partial}</span>
                  <span className="text-[11px] font-bold text-amber-700">Nhớ sơ</span>
                </div>
                <div className="p-3 rounded-2xl bg-red-50 border border-red-100">
                  <span className="block text-2xl font-black text-red-600">{sessionStats.forgot}</span>
                  <span className="text-[11px] font-bold text-red-700">Cần ôn lại</span>
                </div>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={restartSession}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-2xl transition shadow-md"
                >
                  Tiếp tục phiên ôn mới
                </button>
                <button
                  onClick={() => setActiveSubTab('quiz')}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-2xl transition"
                >
                  Chuyển sang làm Quiz
                </button>
              </div>
            </div>
          ) : (
            /* All Clean / No due items */
            <div className="p-10 bg-white rounded-3xl border border-slate-200 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Bạn đã hoàn thành tất cả thẻ cần ôn hôm nay!
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Không còn thẻ nào rơi vào chu kỳ quên hôm nay. Bạn có thể sang mục <strong>Trắc nghiệm phản xạ</strong> hoặc thư giãn để não bộ tự động củng cố trí nhớ dài hạn.
              </p>
              <button
                onClick={() => setActiveSubTab('quiz')}
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-2xl transition"
              >
                Làm Quiz kiểm tra phản xạ
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: SPEED QUIZ */}
      {activeSubTab === 'quiz' && (
        <div className="max-w-xl mx-auto p-6 md:p-8 bg-white rounded-3xl border border-slate-200 shadow-md">
          {!quizFinished ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Câu hỏi {quizIndex + 1} / 10
                  </span>
                  <p className="text-xs text-slate-500 font-medium">Chọn đáp án đúng nhanh nhất</p>
                </div>
                <span className="text-xs font-black text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Điểm: {quizScore} / 10
                </span>
              </div>

              {/* Target Character / Word */}
              <div className="text-center py-8 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                <span className="text-6xl font-black kanji-font text-slate-900 block">
                  {currentQuizItem?.front}
                </span>
                {currentQuizItem?.reading && (
                  <span className="text-xs font-bold text-slate-400">
                    [{currentQuizItem.reading}]
                  </span>
                )}
              </div>

              {/* 4 Choices */}
              <div className="space-y-2.5">
                {quizOptions.map((opt, i) => {
                  let optStyle = "border-slate-200 bg-white hover:border-amber-400 text-slate-800";
                  if (selectedQuizOption !== null) {
                    if (opt.id === currentQuizItem.id) {
                      optStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold";
                    } else if (selectedQuizOption.id === opt.id) {
                      optStyle = "border-red-400 bg-red-50 text-red-900 line-through";
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelectQuiz(opt)}
                      disabled={selectedQuizOption !== null}
                      className={`w-full p-4 rounded-2xl border text-left text-sm font-medium transition flex items-center justify-between ${optStyle}`}
                    >
                      <span>{opt.backMeaning} {opt.backHanViet ? `(${opt.backHanViet})` : ''}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Kết quả kiểm tra: {quizScore} / 10 điểm!
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {quizScore >= 8 
                  ? "Xuất sắc! Phản xạ truy hồi ngữ nghĩa của bạn đang hoạt động cực kỳ nhạy bén."
                  : "Khá tốt! Hãy tiếp tục duy trì thói quen làm bài kiểm tra hàng ngày."}
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setQuizIndex(0);
                    setQuizScore(0);
                    setQuizFinished(false);
                    setSelectedQuizOption(null);
                  }}
                  className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl transition"
                >
                  Làm lại 10 câu mới
                </button>
                <button
                  onClick={() => setActiveSubTab('session')}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition"
                >
                  Về phiên ôn tập
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: SHADOWING PRACTICE */}
      {activeSubTab === 'shadowing' && (
        <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-black text-slate-900">
              Luyện Nghe Bắt Âm &amp; Shadowing Hàng Ngày
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Bấm nút phát âm, nhắm mắt nghe nhại lại ngữ điệu ngay sau người bản xứ (độ trễ 0.5s).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {deck.filter(d => d.example || d.type === 'tango').slice(0, 10).map((it, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex items-center justify-between gap-3">
                <div>
                  <span className="text-lg font-bold kanji-font text-slate-900 block">
                    {it.example || it.front}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {it.exampleVi || it.backMeaning}
                  </span>
                </div>

                <button
                  onClick={() => playJapaneseAudio(it.example || it.reading || it.front)}
                  className="p-3 bg-white hover:bg-red-50 text-slate-600 hover:text-red-600 border border-slate-200 rounded-2xl transition shadow-2xs shrink-0"
                  title="Nghe và nhại lại"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: MISTAKE NOTEBOOK (SỔ TỬ THẦN) */}
      {activeSubTab === 'mistakes' && (
        <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-black text-slate-900">
                Sổ Tay Lỗi Sai (Những Từ Hay Nhầm Lẫn)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Các mục bạn đã từng bấm 'Chưa nhớ'. Tập trung đào sâu các điểm yếu này để không bị mất điểm oan khi thi thật.
              </p>
            </div>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-red-100 text-red-700">
              {mistakeItems.length} lỗi cần khắc phục
            </span>
          </div>

          {mistakeItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {mistakeItems.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-red-200 bg-red-50/30 flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black kanji-font text-slate-900">{m.front}</span>
                      <span className="text-xs font-bold text-red-600">{m.backHanViet}</span>
                    </div>
                    <p className="text-xs font-medium text-slate-600 mt-0.5">{m.backMeaning}</p>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-bold text-red-600 block">
                      Đã sai {m.mistakeCount} lần
                    </span>
                    <button
                      onClick={() => {
                        playJapaneseAudio(m.reading || m.front);
                      }}
                      className="mt-1 p-1.5 text-slate-400 hover:text-red-600 rounded-lg"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-400 text-xs">
              🎉 Bạn chưa có lỗi sai nào! Hãy tiếp tục duy trì phong độ ôn tập.
            </div>
          )}
        </div>
      )}

    </div>
  );
}
