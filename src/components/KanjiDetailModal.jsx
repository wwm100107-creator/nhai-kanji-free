import React, { useState } from 'react';
import { X, Volume2, BookOpen, GitFork, Sparkles, ChevronRight, Bookmark, ArrowRight, Share2, Check } from 'lucide-react';
import KanjiStrokeAnimator from './KanjiStrokeAnimator';
import { playJapaneseAudio } from '../utils/speech';

export default function KanjiDetailModal({ kanjiItem, onClose, onSelectRadical }) {
  const [activeTab, setActiveTab] = useState('kanji'); // 'kanji' | 'vocab' | 'mindmap'
  const [copied, setCopied] = useState(false);
  const [isSaved, setIsSaved] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('saved_kanji') || '[]');
      return saved.includes(kanjiItem?.kanji);
    } catch {
      return false;
    }
  });

  if (!kanjiItem) return null;

  const toggleSave = () => {
    try {
      const saved = JSON.parse(localStorage.getItem('saved_kanji') || '[]');
      let updated;
      if (saved.includes(kanjiItem.kanji)) {
        updated = saved.filter(k => k !== kanjiItem.kanji);
        setIsSaved(false);
      } else {
        updated = [...saved, kanjiItem.kanji];
        setIsSaved(true);
      }
      localStorage.setItem('saved_kanji', JSON.stringify(updated));
    } catch (e) {
      console.warn("Save error", e);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${kanjiItem.kanji} - ${kanjiItem.hanViet}: ${kanjiItem.meaning}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black kanji-font text-red-600">
              {kanjiItem.kanji}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-extrabold text-slate-800 tracking-wide">
                  {kanjiItem.hanViet}
                </h2>
                <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-red-100 text-red-700">
                  {kanjiItem.level}
                </span>
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-slate-200 text-slate-700">
                  {kanjiItem.strokes} nét
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">{kanjiItem.meaning}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 rounded-xl transition"
              title="Sao chép chữ Kanji"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Share2 className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleSave}
              className={`p-2 rounded-xl transition ${isSaved ? 'text-amber-500 bg-amber-50' : 'text-slate-500 hover:bg-slate-200/60'}`}
              title={isSaved ? "Bỏ lưu" : "Lưu vào sổ tay"}
            >
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-amber-500' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-100 px-6 gap-2 bg-white">
          <button
            onClick={() => setActiveTab('kanji')}
            className={`flex items-center gap-2 py-3 px-4 font-bold text-sm border-b-2 transition ${
              activeTab === 'kanji'
                ? 'border-red-500 text-red-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4" /> Chiết tự & Nét vẽ
          </button>
          <button
            onClick={() => setActiveTab('vocab')}
            className={`flex items-center gap-2 py-3 px-4 font-bold text-sm border-b-2 transition ${
              activeTab === 'vocab'
                ? 'border-red-500 text-red-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" /> Từ vựng ghép ({kanjiItem.compounds?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab('mindmap')}
            className={`flex items-center gap-2 py-3 px-4 font-bold text-sm border-b-2 transition ${
              activeTab === 'mindmap'
                ? 'border-red-500 text-red-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <GitFork className="w-4 h-4" /> Sơ đồ tư duy (Mindmap)
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'kanji' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Stroke Animator & Canvas */}
              <div className="md:col-span-5 flex flex-col items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <KanjiStrokeAnimator kanji={kanjiItem.kanji} strokesCount={kanjiItem.strokes} />
                
                <button
                  onClick={() => playJapaneseAudio(kanjiItem.kun?.[0] || kanjiItem.kanji)}
                  className="mt-4 flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-300 rounded-xl text-xs font-semibold shadow-sm transition"
                >
                  <Volume2 className="w-4 h-4 text-red-500" /> Nghe phát âm
                </button>
              </div>

              {/* Right Column: Decomposition, Readings, Mnemonics */}
              <div className="md:col-span-7 space-y-4">
                
                {/* On / Kun Readings Card */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 bg-amber-50/60 border border-amber-100 rounded-2xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                      Âm Kun (Kunyomi)
                    </span>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {kanjiItem.kun && kanjiItem.kun.length > 0 ? (
                        kanjiItem.kun.map((k, i) => (
                          <span
                            key={i}
                            onClick={() => playJapaneseAudio(k.replace('.', ''))}
                            className="inline-flex items-center gap-1 font-bold text-sm text-slate-800 bg-white px-2 py-0.5 rounded-lg border border-amber-200 hover:text-red-600 cursor-pointer transition shadow-2xs"
                          >
                            {k} <Volume2 className="w-3 h-3 text-amber-500 opacity-60" />
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-400 italic">Không có âm Kun</span>
                      )}
                    </div>
                  </div>

                  <div className="p-3.5 bg-sky-50/60 border border-sky-100 rounded-2xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                      Âm On (Onyomi)
                    </span>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {kanjiItem.on && kanjiItem.on.length > 0 ? (
                        kanjiItem.on.map((o, i) => (
                          <span
                            key={i}
                            onClick={() => playJapaneseAudio(o)}
                            className="inline-flex items-center gap-1 font-bold text-sm text-slate-800 bg-white px-2 py-0.5 rounded-lg border border-sky-200 hover:text-sky-600 cursor-pointer transition shadow-2xs"
                          >
                            {o} <Volume2 className="w-3 h-3 text-sky-500 opacity-60" />
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-400 italic">Không có âm On</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Chiết tự (Decomposition) */}
                <div className="p-4 bg-red-50/50 border border-red-100 rounded-2xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Chiết tự cấu thành (Bộ thủ)
                  </span>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {kanjiItem.radicals?.map((rad, idx) => (
                      <div
                        key={idx}
                        onClick={() => onSelectRadical && onSelectRadical(rad)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-white border border-red-200 rounded-xl hover:border-red-400 cursor-pointer transition group shadow-2xs"
                      >
                        <span className="w-7 h-7 flex items-center justify-center font-black kanji-font text-lg text-red-600 bg-red-50 rounded-lg group-hover:bg-red-500 group-hover:text-white transition">
                          {rad}
                        </span>
                        <span className="text-xs font-medium text-slate-700">
                          {kanjiItem.radicalNames?.[idx] || rad}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mẹo ghi nhớ (Mnemonic Story) */}
                <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    💡 Mẹo nhớ chiết tự (Mnemonic)
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 font-medium">
                    {kanjiItem.mnemonic}
                  </p>
                </div>

                {/* Quy tắc chuyển âm */}
                {kanjiItem.phoneticRule && (
                  <div className="p-4 bg-purple-50/50 border border-purple-100 rounded-2xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-800">
                      ⚡ Quy tắc chuyển âm Hán Việt → Nhật
                    </span>
                    <p className="mt-2 text-xs leading-relaxed text-purple-950 font-medium">
                      {kanjiItem.phoneticRule}
                    </p>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* Tab 2: Vocabulary Compounds */}
          {activeTab === 'vocab' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-100">
                <p className="text-xs font-semibold text-emerald-800">
                  🎉 Toàn bộ từ vựng ghép được mở khóa 100% miễn phí (không bắt đăng nhập)
                </p>
                <span className="text-xs font-bold text-emerald-700">
                  {kanjiItem.compounds?.length || 0} từ ghép
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {kanjiItem.compounds?.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-red-200 hover:shadow-md transition group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-black kanji-font text-slate-900 group-hover:text-red-600 transition">
                            {comp.word}
                          </span>
                          <span className="text-xs font-medium text-slate-500">
                            [{comp.furigana}]
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                            {comp.hanViet}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => playJapaneseAudio(comp.word)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="mt-2 text-sm text-slate-700 font-medium">
                      👉 {comp.meaning}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Mindmap (Sơ đồ tư duy) */}
          {activeTab === 'mindmap' && (
            <div className="space-y-6">
              <div className="text-center max-w-md mx-auto">
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  Sơ đồ tư duy gốc - rễ
                </span>
                <h3 className="text-lg font-extrabold text-slate-800 mt-1">
                  Hiểu bản chất gốc từ chữ {kanjiItem.kanji} ({kanjiItem.hanViet})
                </h3>
              </div>

              {/* Graphical Mindmap Tree */}
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200/80 flex flex-col items-center">
                
                {/* Center / Root Node */}
                <div className="px-6 py-3 bg-red-600 text-white rounded-2xl shadow-lg shadow-red-500/20 text-center font-black kanji-font text-xl md:text-2xl flex flex-col items-center">
                  <span>{kanjiItem.kanji}</span>
                  <span className="text-xs font-normal text-red-100">{kanjiItem.hanViet}: {kanjiItem.meaning}</span>
                </div>

                <div className="w-0.5 h-6 bg-red-300"></div>

                {/* Branches Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                  {kanjiItem.mindmap?.branches?.map((branch, bIdx) => (
                    <div
                      key={bIdx}
                      className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="px-2 py-1 bg-red-50 border border-red-200 rounded-lg text-sm font-bold text-red-700 kanji-font">
                            {branch.part}
                          </span>
                          <span className="text-xs font-bold text-slate-700">
                            {branch.meaning}
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-slate-100 space-y-1">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Từ ghép sinh ra:
                        </span>
                        {branch.compounds?.map((c, cIdx) => (
                          <div key={cIdx} className="flex items-center gap-1.5 text-xs font-medium text-slate-800">
                            <ArrowRight className="w-3 h-3 text-red-400 shrink-0" />
                            <span>{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>Học Kanji qua chiết tự · Nhớ lâu không cần học vẹt</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-xl transition"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
}
