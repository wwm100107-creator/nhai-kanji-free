import React, { useState } from 'react';
import { X, RotateCw, Volume2, CheckCircle2, AlertCircle, HelpCircle, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playJapaneseAudio } from '../utils/speech';

export default function FlashcardModal({ items = [], title = "Ôn tập Flashcard", onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [stats, setStats] = useState({ remembered: 0, partial: 0, forgot: 0 });
  const [isCompleted, setIsCompleted] = useState(false);

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped && currentItem?.kanji) {
      playJapaneseAudio(currentItem.kun?.[0] || currentItem.kanji);
    }
  };

  const handleAnswer = (type) => {
    // type: 'remembered' | 'partial' | 'forgot'
    const newStats = { ...stats, [type]: stats[type] + 1 };
    setStats(newStats);

    // Save SRS state to local storage
    try {
      const srsData = JSON.parse(localStorage.getItem('srs_progress') || '{}');
      const key = currentItem.kanji || currentItem.char || currentItem.word;
      srsData[key] = {
        level: type,
        updatedAt: Date.now()
      };
      localStorage.setItem('srs_progress', JSON.stringify(srsData));
    } catch (e) {
      console.warn("SRS save error", e);
    }

    if (currentIndex + 1 < items.length) {
      setIsFlipped(false);
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setStats({ remembered: 0, partial: 0, forgot: 0 });
    setIsCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="font-extrabold text-slate-800 text-base">{title}</h3>
            <p className="text-xs text-slate-400">
              Thẻ {currentIndex + 1} / {items.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-100 h-1.5 rounded-full my-3 overflow-hidden">
          <div
            className="bg-red-500 h-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
          />
        </div>

        {/* Content area */}
        {!isCompleted ? (
          <div className="py-4 space-y-5">
            {/* 3D Flashcard container */}
            <div
              onClick={handleFlip}
              className="relative w-full h-72 rounded-3xl border-2 border-red-100 bg-linear-to-b from-red-50/40 to-white shadow-md p-6 flex flex-col items-center justify-center cursor-pointer select-none transition transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <span className="absolute top-4 right-4 text-xs font-semibold text-slate-400 flex items-center gap-1">
                <RotateCw className="w-3.5 h-3.5" /> Chạm để lật
              </span>

              {!isFlipped ? (
                /* Mặt trước (Front) */
                <div className="flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-150">
                  <span className="text-8xl font-black kanji-font text-slate-900 mb-2">
                    {currentItem.kanji || currentItem.char || currentItem.word}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    (Nhấp chuột hoặc chạm để xem âm Hán Việt và chiết tự)
                  </span>
                </div>
              ) : (
                /* Mặt sau (Back) */
                <div className="flex flex-col items-center text-center space-y-2 animate-in zoom-in-95 duration-150 w-full">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-red-600">
                      {currentItem.hanViet || currentItem.meaning}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playJapaneseAudio(currentItem.kun?.[0] || currentItem.word || currentItem.kanji);
                      }}
                      className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-sm font-semibold text-slate-700">
                    {currentItem.meaning}
                  </p>

                  {currentItem.on && (
                    <div className="text-xs text-slate-500">
                      <span className="font-bold text-sky-700">On:</span> {currentItem.on.join(', ')} |{" "}
                      <span className="font-bold text-amber-700">Kun:</span> {currentItem.kun?.join(', ') || '―'}
                    </div>
                  )}

                  {currentItem.mnemonic && (
                    <div className="mt-2 p-2.5 bg-amber-50/70 border border-amber-200/50 rounded-xl text-xs text-amber-900 font-medium text-left w-full">
                      💡 <strong>Mẹo nhớ:</strong> {currentItem.mnemonic}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Action Buttons (Chưa thuộc - Nhớ mang máng - Đã thuộc) */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleAnswer('forgot')}
                className="flex flex-col items-center py-2.5 px-3 rounded-2xl border border-red-200 bg-red-50/50 hover:bg-red-100 text-red-700 font-bold text-xs transition"
              >
                <AlertCircle className="w-4 h-4 mb-0.5 text-red-500" />
                Chưa thuộc
              </button>
              <button
                onClick={() => handleAnswer('partial')}
                className="flex flex-col items-center py-2.5 px-3 rounded-2xl border border-amber-200 bg-amber-50/50 hover:bg-amber-100 text-amber-700 font-bold text-xs transition"
              >
                <HelpCircle className="w-4 h-4 mb-0.5 text-amber-500" />
                Nhớ mang máng
              </button>
              <button
                onClick={() => handleAnswer('remembered')}
                className="flex flex-col items-center py-2.5 px-3 rounded-2xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs transition"
              >
                <CheckCircle2 className="w-4 h-4 mb-0.5 text-emerald-600" />
                Đã thuộc
              </button>
            </div>
          </div>
        ) : (
          /* Finished Screen */
          <div className="py-8 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shadow-inner">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-800">Hoàn thành phiên ôn tập!</h4>
              <p className="text-xs text-slate-500 mt-1">
                Bộ não của bạn vừa ghi nhớ thêm {items.length} đơn vị kiến thức mới.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full max-w-xs py-2">
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
                <span className="block text-xl font-black text-emerald-600">{stats.remembered}</span>
                <span className="text-[11px] font-medium text-emerald-700">Đã thuộc</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 text-center">
                <span className="block text-xl font-black text-amber-600">{stats.partial}</span>
                <span className="text-[11px] font-medium text-amber-700">Nhớ sơ</span>
              </div>
              <div className="p-3 rounded-xl bg-red-50 border border-red-100 text-center">
                <span className="block text-xl font-black text-red-600">{stats.forgot}</span>
                <span className="text-[11px] font-medium text-red-700">Chưa nhớ</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleRestart}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition shadow-md"
              >
                Ôn tập lại từ đầu
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition"
              >
                Đóng
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
