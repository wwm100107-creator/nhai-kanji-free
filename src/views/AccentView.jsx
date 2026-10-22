import React, { useState } from 'react';
import { Volume2, Search, Activity, Sparkles, Filter } from 'lucide-react';
import { tangoData } from '../data/tangoData';
import { playJapaneseAudio } from '../utils/speech';

export default function AccentView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('ALL');

  const filteredWords = tangoData.filter(item => {
    const matchQuery =
      item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.reading.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.hanViet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.meaning.toLowerCase().includes(searchQuery.toLowerCase());

    const matchLevel = selectedLevel === 'ALL' || item.level === selectedLevel;
    return matchQuery && matchLevel;
  });

  return (
    <div className="space-y-6">
      
      {/* Hero Header */}
      <div className="bg-linear-to-r from-sky-600 via-indigo-600 to-purple-600 text-white rounded-3xl p-6 md:p-8 shadow-lg">
        <div className="max-w-2xl">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
            アクセント辞典 · Pitch Accent Dictionary
          </span>
          <h1 className="text-2xl md:text-3xl font-black mt-2 tracking-tight">
            Từ điển Trọng âm tiếng Nhật (Pitch Accent)
          </h1>
          <p className="text-sky-100 text-xs md:text-sm mt-2 leading-relaxed font-medium">
            Phát âm tiếng Nhật chuẩn như người bản xứ Tokyo bằng cách nắm vững cao độ từng phách âm (Mora). Tránh nhầm lẫn các từ đồng âm khác nghĩa (như 橋 - Cầu vs 箸 - Đũa).
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo từ, Hiragana, âm Hán Việt hoặc nghĩa..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-slate-800 text-sm font-medium focus:outline-none focus:border-sky-400 shadow-2xs transition"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {['ALL', 'N5', 'N4', 'N3', 'N2', 'N1'].map(lvl => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition shrink-0 ${
                selectedLevel === lvl
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {lvl === 'ALL' ? 'Tất cả' : lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Words Grid with Pitch Accent Visualizer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredWords.map(word => {
          return (
            <div
              key={word.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition flex flex-col justify-between space-y-4 group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-black kanji-font text-slate-900 group-hover:text-sky-600 transition">
                      {word.word}
                    </span>
                    <span className="text-sm font-bold text-slate-500">
                      [{word.reading}]
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-100">
                      {word.hanViet}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 font-semibold mt-1">
                    {word.meaning}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {word.level}
                  </span>
                  <button
                    onClick={() => playJapaneseAudio(word.word)}
                    className="p-2.5 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition"
                    title="Nghe phát âm"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Pitch Contour Line Visualization */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-500 flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-sky-500" /> Dạng trọng âm:
                  </span>
                  <span className="font-bold text-sky-700">
                    Mẫu [{word.pitch}] · {word.pitchType}
                  </span>
                </div>

                {/* Mora Tone Graph */}
                <div className="flex items-center justify-start gap-1 py-1">
                  {word.pitchPattern?.map((tone, idx) => {
                    const char = word.reading[idx] || '';
                    return (
                      <div key={idx} className="flex flex-col items-center">
                        {/* High/Low Dot */}
                        <div className="h-6 flex items-center justify-center">
                          <span
                            className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                              tone === 1
                                ? 'bg-sky-600 text-white shadow-xs'
                                : 'bg-slate-300 text-slate-700'
                            }`}
                          >
                            {tone === 1 ? '高' : '低'}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-slate-800 mt-1 kanji-font">
                          {char}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sentence example */}
              {word.exampleJa && (
                <div className="text-xs text-slate-600 pt-1">
                  <p className="font-medium text-slate-800 kanji-font">{word.exampleJa}</p>
                  <p className="text-slate-400 mt-0.5">{word.exampleVi}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
