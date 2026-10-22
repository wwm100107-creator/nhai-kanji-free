import React, { useState } from 'react';
import { Table, Volume2, Sparkles, BookOpen } from 'lucide-react';
import { playJapaneseAudio } from '../utils/speech';

export default function ConjugationTable() {
  const verbsList = [
    {
      word: "食べる",
      reading: "たべる",
      hanViet: "THỰC",
      meaning: "Ăn",
      group: "Nhóm 2 (Động từ Ichidan)",
      forms: {
        dictionary: { form: "食べる", reading: "たべる", desc: "Thể từ điển (Thể thường hiện tại)" },
        masu: { form: "食べます", reading: "たべます", desc: "Thể lịch sự" },
        te: { form: "食べて", reading: "たべて", desc: "Thể Te (Nối câu, nhờ vả)" },
        nai: { form: "食べない", reading: "たべない", desc: "Thể phủ định ngắn" },
        ta: { form: "食べた", reading: "たべた", desc: "Thể quá khứ ngắn" },
        potential: { form: "食べられる", reading: "たべられる", desc: "Thể khả năng (Có thể ăn)" },
        passive: { form: "食べられる", reading: "たべられる", desc: "Thể bị động (Bị ăn)" },
        causative: { form: "食べさせる", reading: "たべさせる", desc: "Thể sai khiến (Bắt/Cho phép ăn)" },
        ba: { form: "食べれば", reading: "たべれば", desc: "Thể điều kiện Ba" },
        tara: { form: "食べたら", reading: "たべたら", desc: "Thể điều kiện Tara" },
        volitional: { form: "食べよう", reading: "たべよう", desc: "Thể ý chí (Cùng ăn nào)" },
        imperative: { form: "食べろ", reading: "たべろ", desc: "Thể mệnh lệnh" },
        keigoHonorific: { form: "召し上がる", reading: "めしあがる", desc: "Tôn kính ngữ (Kính trọng người đối diện)" },
        keigoHumble: { form: "いただく", reading: "いただく", desc: "Khiêm nhường ngữ (Hạ mình khiêm tốn)" }
      }
    },
    {
      word: "行く",
      reading: "いく",
      hanViet: "HÀNH",
      meaning: "Đi tới",
      group: "Nhóm 1 (Động từ Godan)",
      forms: {
        dictionary: { form: "行く", reading: "いく", desc: "Thể từ điển" },
        masu: { form: "行きます", reading: "いきます", desc: "Thể lịch sự" },
        te: { form: "行って", reading: "いって", desc: "Thể Te (Bất quy tắc nette)" },
        nai: { form: "行かない", reading: "いかない", desc: "Thể phủ định" },
        ta: { form: "行った", reading: "いった", desc: "Thể quá khứ" },
        potential: { form: "行ける", reading: "いける", desc: "Thể khả năng (Có thể đi)" },
        passive: { form: "行かれる", reading: "いかれる", desc: "Thể bị động" },
        causative: { form: "行かせる", reading: "いかせる", desc: "Thể sai khiến" },
        ba: { form: "行けば", reading: "いけば", desc: "Thể điều kiện Ba" },
        tara: { form: "行ったら", reading: "いったら", desc: "Thể điều kiện Tara" },
        volitional: { form: "行こう", reading: "いこう", desc: "Thể ý chí" },
        imperative: { form: "行け", reading: "いけ", desc: "Thể mệnh lệnh" },
        keigoHonorific: { form: "いらっしゃる", reading: "いらっしゃる", desc: "Tôn kính ngữ" },
        keigoHumble: { form: "参る", reading: "まいる", desc: "Khiêm nhường ngữ" }
      }
    },
    {
      word: "話す",
      reading: "はなす",
      hanViet: "THOẠI",
      meaning: "Nói chuyện, đàm thoại",
      group: "Nhóm 1 (Động từ Godan đuôi す)",
      forms: {
        dictionary: { form: "話す", reading: "はなす", desc: "Thể từ điển" },
        masu: { form: "話します", reading: "はなします", desc: "Thể lịch sự" },
        te: { form: "話して", reading: "はなして", desc: "Thể Te" },
        nai: { form: "話さない", reading: "はなさない", desc: "Thể phủ định" },
        ta: { form: "話した", reading: "はなした", desc: "Thể quá khứ" },
        potential: { form: "話せる", reading: "はなせる", desc: "Thể khả năng (Biết nói)" },
        passive: { form: "話される", reading: "はなされる", desc: "Thể bị động" },
        causative: { form: "話させる", reading: "はなさせる", desc: "Thể sai khiến" },
        ba: { form: "話せば", reading: "はなせば", desc: "Thể điều kiện Ba" },
        tara: { form: "話したら", reading: "はなしたら", desc: "Thể điều kiện Tara" },
        volitional: { form: "話そう", reading: "はなそう", desc: "Thể ý chí" },
        imperative: { form: "話せ", reading: "はなせ", desc: "Thể mệnh lệnh" },
        keigoHonorific: { form: "お話しになる", reading: "おはなしになる", desc: "Tôn kính ngữ" },
        keigoHumble: { form: "お話しする", reading: "おはなしする", desc: "Khiêm nhường ngữ" }
      }
    },
    {
      word: "する",
      reading: "する",
      hanViet: "VI",
      meaning: "Làm, thực hiện",
      group: "Nhóm 3 (Bất quy tắc)",
      forms: {
        dictionary: { form: "する", reading: "する", desc: "Thể từ điển" },
        masu: { form: "します", reading: "します", desc: "Thể lịch sự" },
        te: { form: "して", reading: "して", desc: "Thể Te" },
        nai: { form: "しない", reading: "しない", desc: "Thể phủ định" },
        ta: { form: "した", reading: "した", desc: "Thể quá khứ" },
        potential: { form: "できる", reading: "できる", desc: "Thể khả năng" },
        passive: { form: "される", reading: "される", desc: "Thể bị động" },
        causative: { form: "させる", reading: "させる", desc: "Thể sai khiến" },
        ba: { form: "すれば", reading: "すれば", desc: "Thể điều kiện Ba" },
        tara: { form: "したら", reading: "したら", desc: "Thể điều kiện Tara" },
        volitional: { form: "しよう", reading: "しよう", desc: "Thể ý chí" },
        imperative: { form: "しろ / せよ", reading: "しろ", desc: "Thể mệnh lệnh" },
        keigoHonorific: { form: "なさる", reading: "なさる", desc: "Tôn kính ngữ" },
        keigoHumble: { form: "いたす", reading: "いたす", desc: "Khiêm nhường ngữ" }
      }
    },
    {
      word: "来る",
      reading: "くる",
      hanViet: "LAI",
      meaning: "Đến, tới nơi",
      group: "Nhóm 3 (Bất quy tắc)",
      forms: {
        dictionary: { form: "来る", reading: "くる", desc: "Thể từ điển" },
        masu: { form: "来ます", reading: "きます", desc: "Thể lịch sự" },
        te: { form: "来て", reading: "きて", desc: "Thể Te" },
        nai: { form: "来ない", reading: "こない", desc: "Thể phủ định" },
        ta: { form: "来た", reading: "きた", desc: "Thể quá khứ" },
        potential: { form: "来られる", reading: "こられる", desc: "Thể khả năng" },
        passive: { form: "来られる", reading: "こられる", desc: "Thể bị động" },
        causative: { form: "来させる", reading: "こさせる", desc: "Thể sai khiến" },
        ba: { form: "来れば", reading: "くれば", desc: "Thể điều kiện Ba" },
        tara: { form: "来たら", reading: "きたら", desc: "Thể điều kiện Tara" },
        volitional: { form: "来よう", reading: "こよう", desc: "Thể ý chí" },
        imperative: { form: "来い", reading: "こい", desc: "Thể mệnh lệnh" },
        keigoHonorific: { form: "いらっしゃる", reading: "いらっしゃる", desc: "Tôn kính ngữ" },
        keigoHumble: { form: "参る", reading: "まいる", desc: "Khiêm nhường ngữ" }
      }
    }
  ];

  const [selectedVerb, setSelectedVerb] = useState(verbsList[0]);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-lg uppercase tracking-wide">
            動詞の活用
          </span>
          <h3 className="text-lg font-black text-slate-800">
            Bảng chia thể Động từ & Tính từ toàn diện
          </h3>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Xem quy tắc và các thể biến đổi chuẩn xác (Thể từ điển, thể て, thể ない, khả năng, bị động, sai khiến, kính ngữ).
        </p>
      </div>

      {/* Select verb chips */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-slate-400 mr-1">Chọn từ:</span>
        {verbsList.map((v, i) => (
          <button
            key={i}
            onClick={() => setSelectedVerb(v)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              selectedVerb.word === v.word
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <span className="kanji-font text-sm">{v.word}</span>
            <span className="text-[10px] opacity-80">({v.hanViet})</span>
          </button>
        ))}
      </div>

      {/* Verb Info Summary */}
      <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-black kanji-font text-slate-900">
            {selectedVerb.word}
          </span>
          <div>
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md mr-2">
              {selectedVerb.reading} - {selectedVerb.hanViet}
            </span>
            <span className="text-xs font-medium text-slate-600">
              {selectedVerb.meaning}
            </span>
          </div>
        </div>
        <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
          {selectedVerb.group}
        </span>
      </div>

      {/* Conjugation Grid Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Object.entries(selectedVerb.forms).map(([key, val]) => (
          <div
            key={key}
            className="p-3.5 rounded-2xl border border-slate-200/80 bg-white hover:border-red-300 hover:shadow-xs transition group flex items-start justify-between"
          >
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide block mb-0.5">
                {val.desc}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-black kanji-font text-slate-800 group-hover:text-red-600 transition">
                  {val.form}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  [{val.reading}]
                </span>
              </div>
            </div>

            <button
              onClick={() => playJapaneseAudio(val.form)}
              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
              title="Nghe phát âm"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
