import React from 'react';
import { Sparkles, BookOpen, Layers, Activity, Award, Heart } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'kanji', label: 'Nhai Kanji', sub: 'Chiết tự & Sơ đồ', icon: Sparkles },
    { id: 'tango', label: 'Nhai Tango', sub: 'Từ vựng N5→N1', icon: BookOpen },
    { id: 'bunpo', label: 'Nhai Bunpo', sub: 'Ngữ pháp & Phân tích', icon: Layers },
    { id: 'jlpt', label: 'NhaiJLPT', sub: 'Đề thi thử', icon: Award },
    { id: 'accent', label: 'Trọng âm', sub: 'アクセント', icon: Activity },
    { id: 'radicals', label: '214 Bộ thủ', sub: 'Radicals', icon: BookOpen }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div
            onClick={() => setActiveTab('kanji')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-red-600 to-amber-500 text-white font-black kanji-font text-2xl flex items-center justify-center shadow-md shadow-red-500/20 group-hover:scale-105 transition">
              休
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-slate-900 tracking-tight text-lg">
                  Nhai Kanji
                </span>
                <span className="px-1.5 py-0.2 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider">
                  FREE
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Xóa mù Kanji · Không paywall</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                    isActive
                      ? 'bg-red-50 text-red-600'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-red-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Header Status / Badge */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-xl border border-slate-200">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> Miễn phí 100%
            </span>
          </div>

        </div>

        {/* Mobile Navigation Bar */}
        <div className="md:hidden flex items-center justify-between overflow-x-auto py-2 gap-1 border-t border-slate-100">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center py-1 px-2.5 rounded-xl text-[10px] font-bold transition shrink-0 ${
                  isActive
                    ? 'text-red-600 bg-red-50'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Icon className="w-4 h-4 mb-0.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
