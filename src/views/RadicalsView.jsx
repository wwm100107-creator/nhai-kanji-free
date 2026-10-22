import React, { useState } from 'react';
import { Search, Layers, Sparkles, BookOpen } from 'lucide-react';
import { radicalsData } from '../data/radicalsData';
import FlashcardModal from '../components/FlashcardModal';

export default function RadicalsView({ onSelectRadical }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [strokeFilter, setStrokeFilter] = useState('ALL');
  const [showFlashcard, setShowFlashcard] = useState(false);

  const strokesList = ['ALL', ...Array.from(new Set(radicalsData.map(r => r.strokes))).sort((a, b) => a - b)];

  const filteredRadicals = radicalsData.filter(rad => {
    const matchQuery =
      rad.char.includes(searchQuery) ||
      rad.hanViet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rad.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (rad.variant && rad.variant.includes(searchQuery));

    const matchStroke = strokeFilter === 'ALL' || rad.strokes === strokeFilter;
    return matchQuery && matchStroke;
  });

  return (
    <div className="space-y-6">
      
      {/* Hero Header */}
      <div className="bg-linear-to-r from-purple-700 via-indigo-600 to-blue-600 text-white rounded-3xl p-6 md:p-8 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
            214 部首 · Kangxi Radicals
          </span>
          <h1 className="text-2xl md:text-3xl font-black mt-2 tracking-tight">
            214 Bộ Thủ Khang Hy Tiếng Nhật
          </h1>
          <p className="text-purple-100 text-xs md:text-sm mt-1 max-w-xl font-medium">
            Bộ thủ là "chữ cái" tạo nên Kanji. Nắm vững 214 bộ thủ giúp bạn chiết tự và nhớ nghĩa của bất kỳ chữ Hán phức tạp nào một cách kỳ diệu.
          </p>
        </div>

        <button
          onClick={() => setShowFlashcard(true)}
          className="flex items-center gap-2 px-5 py-3 bg-white text-purple-700 hover:bg-purple-50 font-bold text-xs md:text-sm rounded-2xl shadow-md transition shrink-0"
        >
          <BookOpen className="w-4 h-4" /> Luyện Flashcard Bộ thủ
        </button>
      </div>

      {/* Search & Strokes Filter */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo bộ thủ, âm Hán Việt (Nhân, Mộc, Thủy...) hoặc nghĩa..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-slate-800 text-sm font-medium focus:outline-none focus:border-purple-400 shadow-2xs transition"
          />
        </div>

        {/* Stroke Filter Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {strokesList.map(st => (
            <button
              key={st}
              onClick={() => setStrokeFilter(st)}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition shrink-0 ${
                strokeFilter === st
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {st === 'ALL' ? 'Tất cả' : `${st} nét`}
            </button>
          ))}
        </div>
      </div>

      {/* Radicals Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filteredRadicals.map(rad => (
          <div
            key={rad.num}
            onClick={() => onSelectRadical && onSelectRadical(rad.char)}
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-md transition cursor-pointer flex flex-col justify-between group"
          >
            <div className="flex items-start justify-between">
              <span className="text-3xl font-black kanji-font text-slate-800 group-hover:text-purple-600 transition">
                {rad.char}
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                #{rad.num} · {rad.strokes}n
              </span>
            </div>

            <div className="mt-2 space-y-0.5">
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-bold text-purple-700">
                  {rad.hanViet}
                </span>
                {rad.variant && (
                  <span className="text-xs text-slate-400 kanji-font">
                    ({rad.variant})
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-600 line-clamp-2 font-medium">
                {rad.meaning}
              </p>
            </div>

            {rad.examples && (
              <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] text-slate-400 font-medium kanji-font line-clamp-1">
                {rad.examples}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Flashcard Modal */}
      {showFlashcard && (
        <FlashcardModal
          items={filteredRadicals}
          title="Flashcard 214 Bộ Thủ"
          onClose={() => setShowFlashcard(false)}
        />
      )}

    </div>
  );
}
