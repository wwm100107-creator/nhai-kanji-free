import React, { useState, useEffect } from 'react';
import { Timer, Award, CheckCircle2, XCircle, ArrowRight, RotateCcw, AlertTriangle, BookOpen } from 'lucide-react';
import { jlptData } from '../data/jlptData';
import confetti from 'canvas-confetti';

export default function JlptView() {
  const [selectedTest, setSelectedTest] = useState(jlptData[0]);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(selectedTest.durationMinutes * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Reset when selecting a new test
  useEffect(() => {
    setUserAnswers({});
    setSubmitted(false);
    setTimeLeft(selectedTest.durationMinutes * 60);
    setIsTimerRunning(true);
  }, [selectedTest]);

  // Countdown timer
  useEffect(() => {
    let interval;
    if (isTimerRunning && timeLeft > 0 && !submitted) {
      interval = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    } else if (timeLeft === 0 && !submitted) {
      handleSubmit();
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft, submitted]);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (submitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [qId]: optionIdx
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    selectedTest.questions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    return {
      correct: correctCount,
      total: selectedTest.questions.length,
      percentage: Math.round((correctCount / selectedTest.questions.length) * 100)
    };
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setIsTimerRunning(false);
    const score = calculateScore();
    if (score.percentage >= 60) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const scoreInfo = submitted ? calculateScore() : null;

  return (
    <div className="space-y-6">
      
      {/* Hero Header */}
      <div className="bg-linear-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-6 md:p-8 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
            NhaiJLPT · Đề thi mô phỏng thi thật
          </span>
          <h1 className="text-2xl md:text-3xl font-black mt-2 tracking-tight">
            Luyện thi JLPT Trực tuyến (Miễn phí 100%)
          </h1>
          <p className="text-emerald-100 text-xs md:text-sm mt-1 max-w-xl font-medium">
            Format câu hỏi bám sát chuẩn kỳ thi JLPT của Hiệp hội Hỗ trợ Giáo dục Quốc tế Nhật Bản (JEES). Có chấm điểm và giải thích chi tiết ngay lập tức!
          </p>
        </div>

        {/* Timer Box */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl flex items-center gap-3">
          <Timer className="w-6 h-6 text-emerald-200 animate-pulse" />
          <div>
            <span className="text-[11px] uppercase tracking-wider text-emerald-200 font-bold block">
              Thời gian còn lại:
            </span>
            <span className="text-2xl font-black tracking-widest font-mono">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
      </div>

      {/* Test Picker Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {jlptData.map(test => (
          <button
            key={test.id}
            onClick={() => setSelectedTest(test)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition shrink-0 flex items-center gap-2 ${
              selectedTest.id === test.id
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span className="px-1.5 py-0.5 rounded bg-white/20 text-[10px]">
              {test.level}
            </span>
            {test.title}
          </button>
        ))}
      </div>

      {/* Result Card if submitted */}
      {submitted && scoreInfo && (
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
              scoreInfo.percentage >= 60 ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
            }`}>
              <Award className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Kết quả bài thi:
              </span>
              <h3 className="text-2xl font-black text-slate-800">
                {scoreInfo.correct} / {scoreInfo.total} câu đúng ({scoreInfo.percentage}%)
              </h3>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                {scoreInfo.percentage >= 60
                  ? "🎉 Chúc mừng! Bạn đã đạt điểm ĐỖ (Goukaku) cho bài thi này."
                  : "💪 Chưa đạt điểm chuẩn, hãy xem giải thích chi tiết phía dưới để ôn tập lại nhé!"}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setUserAnswers({});
              setSubmitted(false);
              setTimeLeft(selectedTest.durationMinutes * 60);
              setIsTimerRunning(true);
            }}
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition shadow-sm"
          >
            <RotateCcw className="w-4 h-4" /> Làm lại bài thi này
          </button>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-4">
        {selectedTest.questions.map((q, idx) => {
          const isSelected = userAnswers[q.id] !== undefined;
          const isCorrect = userAnswers[q.id] === q.correctAnswer;

          return (
            <div
              key={q.id}
              className={`p-6 rounded-3xl bg-white border transition ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/10'
                    : 'border-red-300 bg-red-50/10'
                  : 'border-slate-200 shadow-2xs'
              }`}
            >
              {/* Question Header & Section Tag */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    {q.section}
                  </span>
                </div>

                {submitted && (
                  <div>
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-100 px-2.5 py-1 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Đúng
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-bold text-red-600 bg-red-100 px-2.5 py-1 rounded-full">
                        <XCircle className="w-3.5 h-3.5" /> Sai
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Reading Passage if any */}
              {q.readingPassage && (
                <div className="p-4 mb-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm leading-relaxed text-slate-800 font-medium kanji-font">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Đoạn văn đọc hiểu:
                  </span>
                  {q.readingPassage}
                </div>
              )}

              {/* Question Text */}
              <h4 className="text-base font-bold text-slate-900 kanji-font mb-4">
                {q.question}
              </h4>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {q.options.map((opt, optIdx) => {
                  const isChecked = userAnswers[q.id] === optIdx;
                  const isCorrectOpt = q.correctAnswer === optIdx;

                  let optClass = "border-slate-200 bg-white hover:border-slate-300 text-slate-700";
                  if (submitted) {
                    if (isCorrectOpt) {
                      optClass = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold";
                    } else if (isChecked && !isCorrectOpt) {
                      optClass = "border-red-400 bg-red-50 text-red-800 line-through";
                    } else {
                      optClass = "border-slate-100 text-slate-400 opacity-60";
                    }
                  } else if (isChecked) {
                    optClass = "border-emerald-600 bg-emerald-50/60 text-emerald-900 font-bold shadow-2xs";
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectAnswer(q.id, optIdx)}
                      disabled={submitted}
                      className={`p-3.5 rounded-2xl border text-left text-sm font-medium transition flex items-center justify-between ${optClass}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full border border-current text-xs font-bold flex items-center justify-center shrink-0">
                          {optIdx + 1}
                        </span>
                        <span className="kanji-font">{opt}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Detailed Explanation on Submit */}
              {submitted && (
                <div className="mt-4 p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-xs text-amber-950 space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-amber-900 uppercase tracking-wide">
                    💡 Giải thích chi tiết:
                  </span>
                  <p className="leading-relaxed font-medium">
                    {q.explanation}
                  </p>
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Submit Button Bar */}
      {!submitted && (
        <div className="sticky bottom-4 z-20 flex justify-center">
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-emerald-600/30 transition transform hover:scale-105 active:scale-95"
          >
            <CheckCircle2 className="w-5 h-5" /> Nộp bài & Xem lời giải chi tiết
          </button>
        </div>
      )}

    </div>
  );
}
