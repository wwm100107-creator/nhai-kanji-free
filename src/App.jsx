import React, { useState } from 'react';
import Navbar from './components/Navbar';
import KanjiHomeView from './views/KanjiHomeView';
import RoadmapView from './views/RoadmapView';
import TangoView from './views/TangoView';
import BunpoView from './views/BunpoView';
import JlptView from './views/JlptView';
import AccentView from './views/AccentView';
import RadicalsView from './views/RadicalsView';
import { Heart, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('kanji');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-red-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {activeTab === 'kanji' && (
          <KanjiHomeView onNavigateRadicals={() => setActiveTab('radicals')} />
        )}
        {activeTab === 'roadmap' && <RoadmapView />}
        {activeTab === 'tango' && <TangoView />}
        {activeTab === 'bunpo' && <BunpoView />}
        {activeTab === 'jlpt' && <JlptView />}
        {activeTab === 'accent' && <AccentView />}
        {activeTab === 'radicals' && <RadicalsView />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">Nhai Kanji Free Edition</span>
            <span>•</span>
            <span>Học Kanji chiết tự, từ vựng & ngữ pháp tiếng Nhật mở</span>
          </div>

          <div className="flex items-center gap-4 font-medium">
            <span className="flex items-center gap-1 text-emerald-600">
              <ShieldCheck className="w-4 h-4" /> 100% Free · Không Paywall
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> for Japanese learners
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
