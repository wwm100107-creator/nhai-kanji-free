import React, { useState } from 'react';
import { Search, Edit3, BookOpen, PenTool, Bookmark, Sparkles, Filter, ChevronRight, Layers, Volume2 } from 'lucide-react';
import { kanjiData } from '../data/kanjiData';
import HandwritingCanvas from '../components/HandwritingCanvas';
import KanjiDetailModal from '../components/KanjiDetailModal';
import FlashcardModal from '../components/FlashcardModal';
import { playJapaneseAudio } from '../utils/speech';

export default function KanjiHomeView({ onNavigateRadicals }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('ALL');
  const [showHandwriting, setShowHandwriting] = useState(false);
  const [selectedKanji, setSelectedKanji] = useState(null);
  const [showFlashcard, setShowFlashcard] = useState(false);
  const [filterSavedOnly, setFilterSavedOnly] = useState(false);

  // Saved Kanji from local storage
  const savedKanjiList = (() => {
    try {
      return JSON.parse(localStorage.getItem('saved_kanji') || '[]');
    } catch {
      return [];
    }
  })();

  const levels = [
    { id: 'ALL', label: 'Tất cả' },
    { id: 'N5', label: 'N5 - Cơ bản' },
    { id: 'N4', label: 'N4 - Sơ cấp' },
    { id: 'N3', label: 'N3 - Trung cấp' },
    { id: 'N2', label: 'N2 - Trung cao cấp' },
    { id: 'N1', label: 'N1 - Cao cấp' }
  ];

  const filteredKanji = kanjiData.filter(item => {
    const q = searchQuery.trim().toLowerCase();
    const matchQuery =
      item.kanji.includes(q) ||
      item.hanViet.toLowerCase().includes(q) ||
      item.meaning.toLowerCase().includes(q) ||
      item.kun?.some(k => k.toLowerCase().includes(q)) ||
      item.on?.some(o => o.toLowerCase().includes(q)) ||
      item.radicals?.some(r => r.includes(q));

    const matchLevel = selectedLevel === 'ALL' || item.level === selectedLevel;
    const matchSaved = !filterSavedOnly || savedKanjiList.includes(item.kanji);

    return matchQuery && matchLevel && matchSaved;
  });

  const handleSelectFromCanvas = (char) => {
    // Check if character exists in our database
    const found = kanjiData.find(k => k.kanji === char);
    if (found) {
      setSelectedKanji(found);
    } else {
      setSearchQuery(char);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Hero Banner matching Nhaikanji */}
      <div className="relative overflow-hidden bg-linear-to-r from-red-600 via-rose-600 to-amber-600 text-white rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> 100% Miễn Phí · Không Cần Tài Khoản
          </div>
          <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
            XÓA MÙ KANJI — CHIẾT TỰ & SƠ ĐỒ TƯ DUY
          </h1>
          <p className="text-red-100 text-xs md:text-sm mt-2 leading-relaxed font-medium">
            Học Kanji không cần học vẹt! Phân tích từng bộ thủ, hình dung sơ đồ tư duy liên tưởng và xem hoạt hình thứ tự nét chuẩn Nhật.
          </p>

          {/* Quick Stats Badges */}
          <div className="flex flex-wrap gap-2.5 mt-4 pt-2 border-t border-white/20">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-black/20">
              ⚡ 2500+ Chữ Kanji
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-black/20">
              🌱 Chiết tự N5 → N1
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-black/20">
              🎯 Sơ đồ tư duy (Mindmap)
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-black/20">
              ✍️ Luyện viết chuẩn nét
            </span>
          </div>
        </div>

        {/* Decorative Watermark Kanji */}
        <span className="absolute -right-8 -bottom-10 text-[200px] font-black kanji-font text-white/10 select-none pointer-events-none">
          休
        </span>
      </div>

      {/* Search Bar & Handwriting Toggle */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Nhập kanji hoặc âm Hán Việt (VD: 休, Hưu, Nghỉ, N5)..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-slate-800 text-sm font-medium focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 shadow-2xs transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-3 text-xs text-slate-400 hover:text-slate-600 font-bold"
            >
              Xóa
            </button>
          )}
        </div>

        <button
          onClick={() => setShowHandwriting(!showHandwriting)}
          className={`flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs md:text-sm shadow-2xs transition shrink-0 ${
            showHandwriting
              ? 'bg-red-600 text-white'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Edit3 className="w-4 h-4 text-red-500" />
          {showHandwriting ? "Đóng bảng vẽ" : "Hoặc vẽ Kanji"}
        </button>
      </div>

      {/* Handwriting Canvas Panel (Expandable) */}
      {showHandwriting && (
        <div className="animate-in fade-in zoom-in-95 duration-150">
          <HandwritingCanvas onSelectKanji={handleSelectFromCanvas} />
        </div>
      )}

      {/* Level Filter Bar & Action Buttons */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        {/* Level Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 w-full md:w-auto">
          {levels.map(lvl => (
            <button
              key={lvl.id}
              onClick={() => { setSelectedLevel(lvl.id); setFilterSavedOnly(false); }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition shrink-0 ${
                selectedLevel === lvl.id && !filterSavedOnly
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {lvl.label}
            </button>
          ))}
          <button
            onClick={() => onNavigateRadicals && onNavigateRadicals()}
            className="px-3.5 py-2 rounded-xl text-xs font-bold transition shrink-0 bg-purple-50 border border-purple-200 text-purple-700 hover:bg-purple-100 flex items-center gap-1"
          >
            <Layers className="w-3.5 h-3.5" /> 214 Bộ thủ
          </button>
        </div>

        {/* Action Buttons: Flashcard & Bookmarks */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          <button
            onClick={() => setFilterSavedOnly(!filterSavedOnly)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition ${
              filterSavedOnly
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${filterSavedOnly ? 'fill-white' : ''}`} />
            Đã lưu ({savedKanjiList.length})
          </button>
          <button
            onClick={() => setShowFlashcard(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-red-50 border border-red-200 hover:bg-red-100 text-red-700 rounded-xl text-xs font-bold transition shadow-2xs"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Flashcard SRS ({filteredKanji.length})
          </button>
        </div>
      </div>

      {/* Kanji Cards Grid */}
      {filteredKanji.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {filteredKanji.map(item => (
            <div
              key={item.kanji}
              onClick={() => setSelectedKanji(item)}
              className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-red-400 hover:shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Level Pill */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-100">
                  {item.level}
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  {item.strokes} nét
                </span>
              </div>

              {/* Character & Sino-Vietnamese */}
              <div className="text-center py-2">
                <span className="text-5xl font-black kanji-font text-slate-900 group-hover:text-red-600 transition block">
                  {item.kanji}
                </span>
                <span className="text-sm font-extrabold text-slate-800 tracking-wider mt-1 block">
                  {item.hanViet}
                </span>
                <span className="text-xs text-slate-500 font-medium line-clamp-1 mt-0.5">
                  {item.meaning}
                </span>
              </div>

              {/* Radicals preview */}
              <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {item.radicals?.map((r, i) => (
                    <span key={i} className="text-[11px] font-bold kanji-font bg-slate-100 px-1 rounded text-slate-600">
                      {r}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] text-red-500 font-bold group-hover:translate-x-0.5 transition flex items-center">
                  Chiết tự <ChevronRight className="w-3 h-3" />
                </span>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
          <span className="text-4xl">🔍</span>
          <h4 className="text-base font-bold text-slate-800">Không tìm thấy chữ Kanji phù hợp</h4>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Hãy thử tìm bằng chữ Kanji, âm Hán Việt không dấu/có dấu, hoặc bấm "Hoặc vẽ Kanji" để tìm bằng nét vẽ tay.
          </p>
        </div>
      )}

      {/* Kanji Detail Modal */}
      {selectedKanji && (
        <KanjiDetailModal
          kanjiItem={selectedKanji}
          onClose={() => setSelectedKanji(null)}
          onSelectRadical={(rad) => {
            setSelectedKanji(null);
            setSearchQuery(rad);
          }}
        />
      )}

      {/* Flashcard SRS Modal */}
      {showFlashcard && (
        <FlashcardModal
          items={filteredKanji}
          title={`Flashcard Kanji ${selectedLevel !== 'ALL' ? selectedLevel : 'Tổng hợp'}`}
          onClose={() => setShowFlashcard(false)}
        />
      )}

    </div>
  );
}
