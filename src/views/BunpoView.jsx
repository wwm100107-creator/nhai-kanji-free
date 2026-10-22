import React, { useState } from 'react';
import { Search, Sparkles, BookOpen, Volume2, GitFork, ChevronDown, ChevronUp } from 'lucide-react';
import { bunpoData } from '../data/bunpoData';
import SentenceAnalyzer from '../components/SentenceAnalyzer';
import ConjugationTable from '../components/ConjugationTable';
import { playJapaneseAudio } from '../utils/speech';

export default function BunpoView() {
  const [selectedLevel, setSelectedLevel] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(bunpoData[0]?.id || null);

  const filteredBunpo = bunpoData.filter(item => {
    const matchQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.structure.toLowerCase().includes(searchQuery.toLowerCase());

    const matchLevel = selectedLevel === 'ALL' || item.level === selectedLevel;
    return matchQuery && matchLevel;
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-8">
      
      {/* Hero Header */}
      <div className="bg-linear-to-r from-orange-600 via-rose-600 to-pink-600 text-white rounded-3xl p-6 md:p-8 shadow-lg">
        <div className="max-w-2xl">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
            Nhai Bunpo · Ngữ Pháp Mindmap
          </span>
          <h1 className="text-2xl md:text-3xl font-black mt-2 tracking-tight">
            JLPT Mindmap – Càng Học Càng Cuốn
          </h1>
          <p className="text-orange-100 text-xs md:text-sm mt-2 leading-relaxed font-medium">
            Không chỉ để đi thi mà còn để dùng thực tế, hiểu bản chất trong từng ngữ cảnh. Mở rộng tư duy ngữ pháp theo sơ đồ Mindmap trực quan từ N5 đến N1.
          </p>
        </div>
      </div>

      {/* Interactive Sentence Analyzer Tool */}
      <SentenceAnalyzer />

      {/* Verb Conjugation Table */}
      <ConjugationTable />

      {/* Grammar Library Section */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-black text-slate-800">
              Thư viện Mẫu Ngữ Pháp JLPT
            </h3>
            <p className="text-xs text-slate-500">
              Tổng hợp cấu trúc, giải thích ý nghĩa, ví dụ câu và sơ đồ liên tưởng
            </p>
          </div>

          {/* Level Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {['ALL', 'N5', 'N4', 'N3', 'N2', 'N1'].map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition shrink-0 ${
                  selectedLevel === lvl
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {lvl === 'ALL' ? 'Tất cả' : lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm mẫu ngữ pháp, cấu trúc, ý nghĩa..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-slate-800 text-sm font-medium focus:outline-none focus:border-rose-400 shadow-2xs transition"
          />
        </div>

        {/* Grammar Cards List */}
        <div className="space-y-3">
          {filteredBunpo.map(item => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition hover:border-rose-300"
              >
                {/* Collapsible Header */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-5 flex items-center justify-between cursor-pointer select-none"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="px-2.5 py-0.5 rounded-lg text-xs font-black bg-rose-50 text-rose-700 border border-rose-100">
                      {item.level}
                    </span>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900 kanji-font">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        👉 {item.meaning}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-400 hidden sm:inline">
                      {item.structure}
                    </span>
                    <button className="p-1 text-slate-400 hover:text-slate-700">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 space-y-4 bg-slate-50/50">
                    
                    {/* Structure banner */}
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                      <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                        Cấu trúc:
                      </span>
                      <span className="text-sm font-bold text-slate-800 font-mono">
                        {item.structure}
                      </span>
                    </div>

                    {/* Explanation */}
                    <div className="text-xs leading-relaxed text-slate-700 font-medium">
                      <span className="font-bold text-slate-900 block mb-1">💡 Giải thích chi tiết:</span>
                      {item.explanation}
                    </div>

                    {/* Example sentences */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-900 block">Ví dụ thực tế:</span>
                      {item.examples?.map((ex, exIdx) => (
                        <div
                          key={exIdx}
                          className="p-3 bg-white rounded-xl border border-slate-200/80 flex items-center justify-between gap-3"
                        >
                          <div>
                            <p className="text-sm font-bold text-slate-900 kanji-font">
                              {ex.ja}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5">
                              {ex.vi}
                            </p>
                          </div>
                          <button
                            onClick={() => playJapaneseAudio(ex.ja)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition shrink-0"
                            title="Nghe câu này"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Mindmap if available */}
                    {item.mindmap && (
                      <div className="p-4 bg-rose-50/60 border border-rose-100 rounded-2xl space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                          <GitFork className="w-4 h-4" /> Sơ đồ tư duy ngữ pháp: {item.mindmap.root}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {item.mindmap.branches?.map((b, bIdx) => (
                            <div key={bIdx} className="p-2.5 bg-white rounded-xl border border-rose-200/60 shadow-2xs">
                              <span className="text-xs font-bold text-rose-700 block">{b.concept}</span>
                              <span className="text-[11px] font-mono text-slate-600 block">{b.rule}</span>
                              <span className="text-[11px] font-medium text-slate-400 mt-1 block italic">{b.ex}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
