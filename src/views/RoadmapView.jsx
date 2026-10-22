import React, { useState, useEffect } from 'react';
import { 
  Compass, Headphones, MessageSquare, BookOpen, PenTool, 
  Clock, Award, AlertTriangle, CheckSquare, Square, 
  Calendar, Flame, Sparkles, ArrowRight, ShieldCheck, BookMarked
} from 'lucide-react';
import { roadmapData } from '../data/roadmapData';
import confetti from 'canvas-confetti';

export default function RoadmapView() {
  const [selectedStageId, setSelectedStageId] = useState(roadmapData[0].id);
  const [activeSkillTab, setActiveSkillTab] = useState('listening'); // 'listening' | 'speaking' | 'reading' | 'writing'
  const [completedMilestones, setCompletedMilestones] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('roadmap_milestones') || '{}');
    } catch {
      return {};
    }
  });

  const stage = roadmapData.find(s => s.id === selectedStageId) || roadmapData[0];

  const toggleMilestone = (stageId, index) => {
    const key = `${stageId}_${index}`;
    const nextState = { ...completedMilestones, [key]: !completedMilestones[key] };
    setCompletedMilestones(nextState);
    try {
      localStorage.setItem('roadmap_milestones', JSON.stringify(nextState));
    } catch (e) {
      console.warn("Save milestone error", e);
    }

    if (!completedMilestones[key]) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  const getStageCompletedCount = (stageId, total) => {
    let count = 0;
    for (let i = 0; i < total; i++) {
      if (completedMilestones[`${stageId}_${i}`]) count++;
    }
    return count;
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-linear-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4 text-amber-400" /> Lộ Trình Tự Học Thực Chiến Chuẩn JLPT
          </div>
          <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
            LỘ TRÌNH TỰ HỌC TỪ 0 ĐẾN N1 (THI ĐẬU ĐIỂM THẬT)
          </h1>
          <p className="text-indigo-100 text-xs md:text-sm mt-2 leading-relaxed font-medium">
            Thiết kế khoa học dành riêng cho người tự học. Cân bằng trọn vẹn 4 kỹ năng <strong>Nghe — Nói — Đọc — Viết</strong>, loại bỏ triệt để học vẹt, phòng ngừa điểm liệt và làm chủ thời gian phòng thi.
          </p>

          <div className="flex flex-wrap gap-2 mt-4 pt-2 border-t border-white/20 text-xs font-semibold">
            <span className="px-2.5 py-1 rounded-lg bg-white/10">🎯 5 Chặng bám sát JLPT</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/10">🛡️ Chiến lược chống điểm liệt (&lt;19đ)</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/10">⏱️ Phân bổ thời gian phòng thi từng phút</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/10">📚 Bộ giáo trình tinh hoa Shinkanzen &amp; Minna</span>
          </div>
        </div>
      </div>

      {/* Stage Selector Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {roadmapData.map(st => {
          const isSelected = selectedStageId === st.id;
          const completedCount = getStageCompletedCount(st.id, st.milestones.length);
          const percent = Math.round((completedCount / st.milestones.length) * 100);

          return (
            <button
              key={st.id}
              onClick={() => setSelectedStageId(st.id)}
              className={`p-3.5 rounded-2xl border text-left transition transform hover:-translate-y-0.5 flex flex-col justify-between ${
                isSelected
                  ? 'bg-white border-indigo-600 shadow-md ring-2 ring-indigo-100'
                  : 'bg-white border-slate-200/90 hover:border-slate-300 text-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                    isSelected ? 'bg-indigo-50 text-indigo-700' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {st.badge}
                  </span>
                  <span className="text-xs font-black text-indigo-600 kanji-font">
                    {st.level}
                  </span>
                </div>
                <h4 className="font-extrabold text-xs text-slate-900 line-clamp-1">
                  {st.title.split(' ')[0]} {st.title.split(' ')[1]}
                </h4>
              </div>

              {/* Progress bar */}
              <div className="mt-3">
                <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                  <span>Tiến độ</span>
                  <span>{percent}%</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-indigo-600 h-full transition-all duration-300"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Header Card */}
      <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-black text-xs">
                CẤP ĐỘ {stage.level}
              </span>
              <span className="text-xs font-bold text-slate-400">
                {stage.overview.duration}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              {stage.title}
            </h2>
            <p className="text-xs md:text-sm text-slate-500 mt-1 font-medium">
              {stage.subtitle}
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center gap-4 shrink-0">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Điểm chuẩn đỗ JLPT
              </span>
              <span className="text-xl font-black text-indigo-600">
                {stage.overview.jlptPassingScore}
              </span>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Tổng giờ tự học
              </span>
              <span className="text-sm font-extrabold text-slate-800">
                {stage.overview.totalHours.split(' ')[0]} {stage.overview.totalHours.split(' ')[1]}
              </span>
            </div>
          </div>
        </div>

        {/* 4 Quantitative Target Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 bg-sky-50/60 border border-sky-100 rounded-2xl">
            <span className="text-[10px] font-bold text-sky-800 uppercase tracking-wider block">
              Mục tiêu Từ vựng
            </span>
            <span className="text-base font-black text-sky-950 mt-1 block">
              {stage.overview.vocabTarget}
            </span>
          </div>
          <div className="p-3.5 bg-amber-50/60 border border-amber-100 rounded-2xl">
            <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
              Mục tiêu Chữ Hán
            </span>
            <span className="text-base font-black text-amber-950 mt-1 block">
              {stage.overview.kanjiTarget}
            </span>
          </div>
          <div className="p-3.5 bg-emerald-50/60 border border-emerald-100 rounded-2xl">
            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
              Mục tiêu Ngữ pháp
            </span>
            <span className="text-base font-black text-emerald-950 mt-1 block">
              {stage.overview.grammarTarget}
            </span>
          </div>
          <div className="p-3.5 bg-rose-50/60 border border-rose-100 rounded-2xl">
            <span className="text-[10px] font-bold text-rose-800 uppercase tracking-wider block">
              Điểm liệt cần tránh
            </span>
            <span className="text-xs font-bold text-rose-950 mt-1 block line-clamp-1">
              {stage.overview.sectionPassing}
            </span>
          </div>
        </div>
      </div>

      {/* 4 CORE SKILLS BREAKDOWN SECTION */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-amber-500" />
          <h3 className="text-xl font-black text-slate-900">
            Lộ Trình Đột Phá Toàn Diện 4 Kỹ Năng
          </h3>
        </div>

        {/* Skill Tab Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'listening', label: '1. Nghe (Choukai)', icon: Headphones, color: 'text-sky-600 bg-sky-50 border-sky-200' },
            { id: 'speaking', label: '2. Nói (Kaiwa)', icon: MessageSquare, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
            { id: 'reading', label: '3. Đọc (Dokkai)', icon: BookOpen, color: 'text-amber-600 bg-amber-50 border-amber-200' },
            { id: 'writing', label: '4. Viết & Kanji', icon: PenTool, color: 'text-rose-600 bg-rose-50 border-rose-200' }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeSkillTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSkillTab(tab.id)}
                className={`p-3 rounded-2xl border font-bold text-xs flex items-center justify-center gap-2 transition ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Content Card */}
        <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-sm space-y-6 animate-in fade-in duration-150">
          {(() => {
            const skill = stage.skills[activeSkillTab];
            return (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                    Chuẩn đầu ra {stage.level}
                  </span>
                  <h4 className="text-xl font-extrabold text-slate-900">
                    {skill.title}
                  </h4>
                  <p className="mt-1.5 text-sm text-slate-600 font-medium leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    🎯 <strong>Mục tiêu:</strong> {skill.target}
                  </p>
                </div>

                {/* Methods / Strategies */}
                <div>
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Phương pháp &amp; Kỹ thuật tự học tối ưu:
                  </h5>
                  <div className="space-y-2.5">
                    {skill.method.map((m, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                        <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs md:text-sm text-slate-800 font-medium leading-relaxed">
                          {m}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Nguồn tài liệu khuyên dùng cho kỹ năng này:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {skill.resources.map((r, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200"
                      >
                        <BookMarked className="w-3.5 h-3.5 text-indigo-500" />
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* CORE MATERIALS & RECOMMENDED BOOKS */}
      <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-black text-slate-900">
            Giáo Trình Cốt Lõi Cho Kỳ Thi {stage.level} Thật
          </h3>
        </div>
        <p className="text-xs text-slate-500">
          Chỉ tập trung vào những đầu sách tinh hoa nhất, tránh sa đà mua nhiều sách làm loãng kiến thức.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Core books */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider flex items-center gap-1.5">
              ⭐ Sách Bắt Buộc (Xương Sống):
            </span>
            {stage.materials.core.map((book, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-indigo-50/40 border border-indigo-100 space-y-1">
                <h4 className="font-bold text-sm text-slate-900">{book.name}</h4>
                <p className="text-xs text-indigo-900 font-medium">👉 {book.role}</p>
              </div>
            ))}
          </div>

          {/* Supplementary books */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
              💡 Sách Bổ Trợ &amp; Thực Hành:
            </span>
            {stage.materials.supplementary.map((book, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <h4 className="font-bold text-sm text-slate-900">{book.name}</h4>
                <p className="text-xs text-slate-600 font-medium">👉 {book.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REAL EXAM TACTICS & TIME ALLOCATION */}
      <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-rose-500" />
          <div>
            <h3 className="text-lg font-black text-slate-900">
              Chiến Thuật Thi Thật &amp; Phân Bổ Thời Gian Từng Phút
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              70% người tự học trượt JLPT do thiếu kỹ năng quản lý thời gian và sập bẫy câu hỏi.
            </p>
          </div>
        </div>

        {/* Time allocation table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {stage.examTactics.timeAllocation.map((t, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-rose-50/30 border border-rose-100 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-xs text-slate-900">{t.section}</span>
                <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 font-black text-xs">
                  {t.time}
                </span>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {t.tip}
              </p>
            </div>
          ))}
        </div>

        {/* Traps to avoid */}
        <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
          <span className="font-bold text-xs text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-600" /> Các Bẫy Đề Thi Cần Cảnh Giác:
          </span>
          <div className="space-y-1.5 text-xs text-amber-950 font-medium">
            {stage.examTactics.trapsToAvoid.map((trap, idx) => (
              <p key={idx} className="leading-relaxed">
                • {trap}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* DAILY ROUTINE & MILESTONE CHECKLIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Daily Schedule (2 hours/day) */}
        <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-black text-slate-900">
              Thời Gian Biểu 1 Ngày Mẫu (2 tiếng/ngày)
            </h3>
          </div>
          <p className="text-xs text-slate-500">
            Duy trì đều đặn mỗi ngày quan trọng gấp 10 lần việc học dồn 10 tiếng vào cuối tuần.
          </p>

          <div className="space-y-3 pt-2">
            {stage.dailyRoutine.map((r, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-800 text-[11px] font-black shrink-0">
                  {r.time}
                </span>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  {r.task}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Milestones Checklist */}
        <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-emerald-600" />
              <h3 className="text-base font-black text-slate-900">
                Checklist Mục Tiêu Hoàn Thành
              </h3>
            </div>
            <span className="text-xs font-bold text-slate-400">
              {getStageCompletedCount(stage.id, stage.milestones.length)} / {stage.milestones.length}
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Đánh dấu tick khi bạn đã nắm chắc kỹ năng (dữ liệu lưu tự động trên trình duyệt).
          </p>

          <div className="space-y-2.5 pt-2">
            {stage.milestones.map((m, idx) => {
              const key = `${stage.id}_${idx}`;
              const isChecked = !!completedMilestones[key];

              return (
                <div
                  key={idx}
                  onClick={() => toggleMilestone(stage.id, idx)}
                  className={`p-3.5 rounded-2xl border transition cursor-pointer flex items-start gap-3 ${
                    isChecked
                      ? 'bg-emerald-50/60 border-emerald-300 text-emerald-950 font-bold'
                      : 'bg-white border-slate-200/90 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <button className="mt-0.5 text-emerald-600 shrink-0">
                    {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 text-slate-300" />}
                  </button>
                  <span className={`text-xs md:text-sm font-medium ${isChecked ? 'line-through text-slate-500' : ''}`}>
                    {m}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
