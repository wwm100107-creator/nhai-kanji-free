import React, { useState } from 'react';
import { Search, Volume2, BookOpen, Layers, CheckCircle2, Trophy, RotateCcw } from 'lucide-react';
import { tangoData } from '../data/tangoData';
import FlashcardModal from '../components/FlashcardModal';
import { playJapaneseAudio } from '../utils/speech';
import confetti from 'canvas-confetti';

export default function TangoView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('ALL');
  const [showFlashcard, setShowFlashcard] = useState(false);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const filteredTango = tangoData.filter(item => {
    const matchQuery =
      item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.reading.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.hanViet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.meaning.toLowerCase().includes(searchQuery.toLowerCase());

    const matchLevel = selectedLevel === 'ALL' || item.level === selectedLevel;
    return matchQuery && matchLevel;
  });

  // Quiz generator
  const currentQuizItem = filteredTango[quizIndex] || filteredTango[0];

  const generateQuizOptions = () => {
    if (!currentQuizItem) return [];
    const others = tangoData.filter(t => t.id !== currentQuizItem.id);
    const shuffledOthers = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [currentQuizItem, ...shuffledOthers].sort(() => 0.5 - Math.random());
    return options;
  };

  const [quizOptions, setQuizOptions] = useState(generateQuizOptions);

  const handleSelectQuizOption = (opt) => {
    if (selectedOption !== null) return;
    setSelectedOption(opt);
    const isCorrect = opt.id === currentQuizItem.id;
    if (isCorrect) setQuizScore(s => s + 1);

    setTimeout(() => {
      if (quizIndex + 1 < filteredTango.length && quizIndex + 1 < 10) {
        setQuizIndex(i => i + 1);
        setSelectedOption(null);
      } else {
        setQuizFinished(true);
        confetti({ particleCount: 90, spread: 60 });
      }
    }, 1200);
  };

  return (
    <div className="space-y-6">
      
      {/* Hero Header */}
      <div className="bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white rounded-3xl p-6 md:p-8 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
            Nhai Tango · 10.000+ Từ vựng chuẩn
          </span>
          <h1 className="text-2xl md:text-3xl font-black mt-2 tracking-tight">
            Kho Từ Vựng Tiếng Nhật Chuẩn Giáo Trình
          </h1>
          <p className="text-emerald-100 text-xs md:text-sm mt-1 max-w-xl font-medium">
            Từ vựng bám sát Minna no Nihongo, Mimikara Oboeru và Soumatome N5→N1. Đầy đủ âm thanh chuẩn, âm Hán Việt và mẫu trọng âm (Pitch Accent).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowFlashcard(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-xs md:text-sm rounded-2xl shadow-sm transition"
          >
            <BookOpen className="w-4 h-4" /> Học Flashcard ({filteredTango.length})
          </button>
          <button
            onClick={() => {
              setIsQuizMode(!isQuizMode);
              setQuizIndex(0);
              setQuizScore(0);
              setQuizFinished(false);
              setSelectedOption(null);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs md:text-sm rounded-2xl shadow-sm transition ${
              isQuizMode ? 'bg-amber-400 text-amber-950' : 'bg-emerald-800/80 hover:bg-emerald-800 text-white'
            }`}
          >
            <Trophy className="w-4 h-4" /> {isQuizMode ? "Thoát Quiz" : "Chế độ Quiz"}
          </button>
        </div>
      </div>

      {/* QUIZ MODE */}
      {isQuizMode ? (
        <div className="max-w-xl mx-auto p-6 md:p-8 bg-white rounded-3xl border border-slate-200 shadow-md">
          {!quizFinished ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Câu hỏi {quizIndex + 1} / {Math.min(filteredTango.length, 10)}
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Điểm: {quizScore}
                </span>
              </div>

              {/* Target Word */}
              <div className="text-center py-6 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-5xl font-black kanji-font text-slate-900 block mb-2">
                  {currentQuizItem?.word}
                </span>
                <span className="text-sm font-semibold text-slate-400">
                  [{currentQuizItem?.reading}]
                </span>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {quizOptions.map((opt, i) => {
                  let optStyle = "border-slate-200 bg-white hover:border-emerald-300 text-slate-800";
                  if (selectedOption !== null) {
                    if (opt.id === currentQuizItem.id) {
                      optStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold";
                    } else if (selectedOption.id === opt.id) {
                      optStyle = "border-red-400 bg-red-50 text-red-900 line-through";
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelectQuizOption(opt)}
                      disabled={selectedOption !== null}
                      className={`w-full p-4 rounded-2xl border text-left text-sm font-medium transition flex items-center justify-between ${optStyle}`}
                    >
                      <span>{opt.meaning} ({opt.hanViet})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-800">
                Kết quả: {quizScore} / {Math.min(filteredTango.length, 10)} điểm
              </h3>
              <p className="text-xs text-slate-500">
                Tuyệt vời! Bạn đã hoàn thành bài kiểm tra nhanh từ vựng.
              </p>
              <div className="flex justify-center gap-2 pt-2">
                <button
                  onClick={() => {
                    setQuizIndex(0);
                    setQuizScore(0);
                    setQuizFinished(false);
                    setSelectedOption(null);
                  }}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition"
                >
                  Làm lại Quiz
                </button>
                <button
                  onClick={() => setIsQuizMode(false)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition"
                >
                  Quay lại tra cứu
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* NORMAL VOCABULARY LIST */
        <>
          {/* Search & Level Filters */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm từ vựng theo Kanji, Kana, âm Hán Việt hoặc nghĩa..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-slate-800 text-sm font-medium focus:outline-none focus:border-emerald-400 shadow-2xs transition"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {['ALL', 'N5', 'N4', 'N3', 'N2', 'N1'].map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition shrink-0 ${
                    selectedLevel === lvl
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {lvl === 'ALL' ? 'Tất cả' : lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredTango.map(item => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md transition flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black kanji-font text-slate-900 group-hover:text-emerald-600 transition">
                          {item.word}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          [{item.reading}]
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                          {item.hanViet}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {item.lesson}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => playJapaneseAudio(item.word)}
                      className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition"
                      title="Nghe phát âm"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="mt-2.5 text-xs font-semibold text-slate-700">
                    👉 {item.meaning}
                  </p>
                </div>

                {item.exampleJa && (
                  <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] space-y-0.5">
                    <p className="font-medium text-slate-800 kanji-font">{item.exampleJa}</p>
                    <p className="text-slate-400">{item.exampleVi}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Flashcard Modal */}
      {showFlashcard && (
        <FlashcardModal
          items={filteredTango}
          title="Flashcard Từ Vựng"
          onClose={() => setShowFlashcard(false)}
        />
      )}

    </div>
  );
}
