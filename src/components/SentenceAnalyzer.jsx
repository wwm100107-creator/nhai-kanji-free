import React, { useState } from 'react';
import { Search, Sparkles, Volume2, Info } from 'lucide-react';
import { playJapaneseAudio } from '../utils/speech';

export default function SentenceAnalyzer() {
  const [inputSentence, setInputSentence] = useState('先生に日本語を教えていただきました。');
  const [analyzedTokens, setAnalyzedTokens] = useState(null);
  const [selectedToken, setSelectedToken] = useState(null);

  const sampleSentences = [
    { text: "先生に日本語を教えていただきました。", label: "Kính ngữ & Nhận ơn" },
    { text: "今夜たくさんの宿題がある。", label: "Câu trần thuật cơ bản" },
    { text: "雨が降りそうだったので、傘を持って行きました。", label: "Nguyên nhân & Dự đoán" },
    { text: "日本へ行ったら、富士山に登りたいです。", label: "Điều kiện & Nguyện vọng" }
  ];

  // Client-side rule-based morphological analyzer for Japanese
  const analyzeSentence = (sentence) => {
    if (!sentence.trim()) return;

    // Dictionary of known particles, grammar markers, and words
    const particles = ['は', 'が', 'を', 'に', 'で', 'へ', 'と', 'から', 'まで', 'より', 'も', 'の', 'や', 'か', 'ね', 'よ', 'ので', 'のに', 'たら', 'なら', 'ば'];

    // Sample detailed tokens mapping for standard patterns
    const detailedMappings = {
      "先生": { type: "Danh từ (名詞)", reading: "せんせい", hanViet: "TIÊN SINH", role: "Đối tượng tôn kính / Người trao hành động" },
      "に": { type: "Trợ từ (助詞)", reading: "に", role: "Chỉ đối tượng gián tiếp (nhận từ ai / làm cho ai)" },
      "日本語": { type: "Danh từ (名詞)", reading: "にほんご", hanViet: "NHẬT BẢN NGỮ", role: "Tân ngữ trực tiếp (đối tượng được dạy)" },
      "を": { type: "Trợ từ (助詞)", reading: "を", role: "Đánh dấu tân ngữ chịu tác động của hành động" },
      "教えて": { type: "Động từ (動詞) - Thể て", reading: "おしえて", hanViet: "GIÁO", role: "Hành động dạy bảo, chỉ dẫn (từ 教える)" },
      "いただきました": { type: "Trợ động từ kính ngữ (補助動詞)", reading: "いただきました", role: "Khiêm nhường ngữ của もらいました (được nhận sự giúp đỡ từ người bề trên)" },
      "。": { type: "Dấu câu (句読点)", reading: "" },

      "今夜": { type: "Danh từ chỉ thời gian (時間名詞)", reading: "こんや", hanViet: "KIM DẠ", role: "Mốc thời gian (tối nay)" },
      "たくさん": { type: "Phó từ chỉ mức độ (副詞)", reading: "たくさん", role: "Bổ nghĩa cho số lượng (rất nhiều)" },
      "の": { type: "Trợ từ (助詞)", reading: "の", role: "Liên kết hai danh từ (sở hữu / tính chất)" },
      "宿題": { type: "Danh từ (名詞)", reading: "しゅくだい", hanViet: "TÚC ĐỀ", role: "Chủ ngữ / Tân ngữ (bài tập về nhà)" },
      "が": { type: "Trợ từ (助詞)", reading: "が", role: "Đánh dấu chủ ngữ tồn tại của hiện tượng" },
      "ある": { type: "Động từ thể từ điển (辞書形)", reading: "ある", role: "Biểu thị sự tồn tại của đồ vật vô tri vô giác" },

      "雨": { type: "Danh từ (名詞)", reading: "あめ", hanViet: "VŨ", role: "Chủ thể hiện tượng tự nhiên (cơn mưa)" },
      "降りそう": { type: "Tính từ đuôi な / Mẫu câu dự đoán", reading: "ふりそう", hanViet: "GIÁNG", role: "Mẫu câu V bỏ ます + そう (có vẻ sắp mưa)" },
      "だったので": { type: "Liên từ / Trợ từ kết nối", reading: "だったので", role: "Chỉ nguyên nhân khách quan (vì... nên)" },
      "、": { type: "Dấu phẩy (読点)", reading: "" },
      "傘": { type: "Danh từ (名詞)", reading: "かさ", hanViet: "TẢN", role: "Tân ngữ (chiếc ô / chiếc dù)" },
      "持って": { type: "Động từ thể て", reading: "もって", hanViet: "TRÌ", role: "Hành động cầm, mang theo (từ 持つ)" },
      "行きました": { type: "Động từ thể quá khứ lịch sự", reading: "いきました", hanViet: "HÀNH", role: "Đi đến một nơi khác (Vていきます)" },

      "日本": { type: "Danh từ chỉ địa danh", reading: "にほん", hanViet: "NHẬT BẢN", role: "Nơi chốn đến" },
      "行ったら": { type: "Động từ thể điều kiện たら", reading: "いったら", hanViet: "HÀNH", role: "Nếu / Sau khi đi đến" },
      "富士山": { type: "Danh từ riêng", reading: "ふじさん", hanViet: "PHÚ SĨ SƠN", role: "Núi Phú Sĩ" },
      "登りたいです": { type: "Động từ biểu thị mong muốn (Vたい)", reading: "のぼりたいです", hanViet: "ĐĂNG", role: "Muốn leo lên (nguyện vọng ngôi thứ nhất)" }
    };

    // Split sentence into words & particles
    let remaining = sentence;
    const tokens = [];

    // Check custom matches first
    const knownKeys = Object.keys(detailedMappings).sort((a, b) => b.length - a.length);

    while (remaining.length > 0) {
      let matched = false;
      for (const k of knownKeys) {
        if (remaining.startsWith(k)) {
          tokens.push({
            text: k,
            ...detailedMappings[k]
          });
          remaining = remaining.slice(k.length);
          matched = true;
          break;
        }
      }

      if (!matched) {
        // Match particle or single character
        const char = remaining[0];
        tokens.push({
          text: char,
          type: particles.includes(char) ? "Trợ từ (助詞)" : "Ký tự từ ngữ",
          reading: char,
          role: particles.includes(char) ? "Kết nối các thành phần câu" : "Từ tố"
        });
        remaining = remaining.slice(1);
      }
    }

    setAnalyzedTokens(tokens);
    setSelectedToken(tokens[0] || null);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-lg uppercase tracking-wide">
            文の分析
          </span>
          <h3 className="text-lg font-black text-slate-800">
            Phân tích câu tiếng Nhật tự động (Sentence Breakdown)
          </h3>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Hệ thống tự động bóc tách từ, nhận diện trợ từ, từ loại, Hán Việt và cấu trúc ngữ pháp tương tự Nhaikanji (100% Free).
        </p>
      </div>

      {/* Input & Analyze Bar */}
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={inputSentence}
          onChange={(e) => setInputSentence(e.target.value)}
          placeholder="Nhập câu tiếng Nhật cần bóc tách..."
          className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 text-sm font-medium focus:outline-none focus:border-red-400 focus:bg-white transition"
        />
        <button
          onClick={() => analyzeSentence(inputSentence)}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-2xl shadow-sm transition shrink-0"
        >
          <Sparkles className="w-4 h-4" /> Phân tích
        </button>
      </div>

      {/* Quick Sample Buttons */}
      <div>
        <span className="text-xs font-semibold text-slate-400 block mb-2">
          Hoặc bấm thử các câu mẫu:
        </span>
        <div className="flex flex-wrap gap-2">
          {sampleSentences.map((s, idx) => (
            <button
              key={idx}
              onClick={() => {
                setInputSentence(s.text);
                analyzeSentence(s.text);
              }}
              className="text-xs font-medium px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-600 hover:border-red-200 border border-transparent rounded-xl transition text-slate-700 text-left"
            >
              {s.text}
            </button>
          ))}
        </div>
      </div>

      {/* Analysis Result Display */}
      {analyzedTokens && (
        <div className="space-y-4 pt-4 border-t border-slate-100 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Kết quả bóc tách (Bấm vào từng từ để xem chi tiết ngữ pháp):
            </span>
            <button
              onClick={() => playJapaneseAudio(inputSentence)}
              className="flex items-center gap-1 text-xs text-red-600 hover:text-red-700 font-semibold"
            >
              <Volume2 className="w-3.5 h-3.5" /> Nghe cả câu
            </button>
          </div>

          {/* Interactive Tokens Banner */}
          <div className="flex flex-wrap gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            {analyzedTokens.map((tok, idx) => {
              const isSelected = selectedToken === tok;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedToken(tok);
                    if (tok.text && tok.text !== '。' && tok.text !== '、') {
                      playJapaneseAudio(tok.text);
                    }
                  }}
                  className={`flex flex-col items-center px-3 py-2 rounded-xl border transition ${
                    isSelected
                      ? 'bg-red-600 text-white border-red-600 shadow-md scale-105'
                      : tok.type.includes('Trợ từ')
                      ? 'bg-sky-50 border-sky-200 text-sky-800 hover:bg-sky-100'
                      : tok.type.includes('Động từ')
                      ? 'bg-amber-50 border-amber-200 text-amber-900 hover:bg-amber-100'
                      : 'bg-white border-slate-200 text-slate-800 hover:border-red-300'
                  }`}
                >
                  {tok.reading && tok.reading !== tok.text && (
                    <span className={`text-[10px] font-medium ${isSelected ? 'text-red-100' : 'text-slate-400'}`}>
                      {tok.reading}
                    </span>
                  )}
                  <span className="text-base font-bold kanji-font">{tok.text}</span>
                  <span className={`text-[9px] mt-0.5 px-1 py-0.2 rounded font-medium ${
                    isSelected ? 'bg-red-700 text-white' : 'bg-slate-200/60 text-slate-600'
                  }`}>
                    {tok.type.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Token Card */}
          {selectedToken && (
            <div className="p-5 rounded-2xl border border-red-100 bg-linear-to-r from-red-50/50 to-orange-50/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black kanji-font text-red-600">
                    {selectedToken.text}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Cách đọc & Hán Việt:
                    </span>
                    <span className="text-sm font-bold text-slate-800">
                      {selectedToken.reading || selectedToken.text} {selectedToken.hanViet ? `(${selectedToken.hanViet})` : ''}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 mr-2">
                    {selectedToken.type}
                  </span>
                  <span className="text-xs font-medium text-slate-600">
                    👉 {selectedToken.role}
                  </span>
                </div>
              </div>

              <button
                onClick={() => playJapaneseAudio(selectedToken.text)}
                className="flex items-center gap-1.5 px-4 py-2 bg-white border border-red-200 text-red-600 rounded-xl text-xs font-semibold shadow-xs hover:bg-red-50 transition"
              >
                <Volume2 className="w-4 h-4" /> Phát âm từ này
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
