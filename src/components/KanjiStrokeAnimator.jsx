import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, PenTool, CheckCircle2 } from 'lucide-react';

export default function KanjiStrokeAnimator({ kanji, strokesCount = 6 }) {
  const [svgContent, setSvgContent] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStroke, setActiveStroke] = useState(0);
  const [practiceMode, setPracticeMode] = useState(false);
  const [userStrokes, setUserStrokes] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);

  // Convert kanji character to unicode hex (e.g. 休 -> 04f11)
  const hexCode = kanji.charCodeAt(0).toString(16).padStart(5, '0');

  useEffect(() => {
    let isMounted = true;
    const fetchSvg = async () => {
      try {
        const url = `https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/${hexCode}.svg`;
        const res = await fetch(url);
        if (res.ok) {
          const text = await res.text();
          if (isMounted) setSvgContent(text);
        } else {
          // Fallback if CDN is unreachable
          if (isMounted) setSvgContent(null);
        }
      } catch {
        if (isMounted) setSvgContent(null);
      }
    };

    fetchSvg();
    return () => { isMounted = false; };
  }, [kanji, hexCode]);

  // Stroke animation timer
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStroke(prev => {
          if (prev >= strokesCount) {
            setIsPlaying(false);
            return strokesCount;
          }
          return prev + 1;
        });
      }, 700);
    }
    return () => clearInterval(timer);
  }, [isPlaying, strokesCount]);

  const handlePlay = () => {
    setActiveStroke(0);
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setActiveStroke(strokesCount);
  };

  // Practice Canvas drawing
  const getCoords = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const startDraw = (e) => {
    e.preventDefault();
    setIsDrawing(true);
    const p = getCoords(e);
    setUserStrokes(prev => [...prev, [p]]);
  };

  const onDraw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const p = getCoords(e);
    setUserStrokes(prev => {
      const copy = [...prev];
      copy[copy.length - 1].push(p);
      return copy;
    });
  };

  const endDraw = (e) => {
    e.preventDefault();
    setIsDrawing(false);
  };

  // Redraw canvas
  useEffect(() => {
    if (!practiceMode || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    userStrokes.forEach(stroke => {
      if (stroke.length < 2) return;
      ctx.beginPath();
      ctx.moveTo(stroke[0].x, stroke[0].y);
      for (let i = 1; i < stroke.length; i++) {
        ctx.lineTo(stroke[i].x, stroke[i].y);
      }
      ctx.stroke();
    });
  }, [userStrokes, practiceMode]);

  return (
    <div className="flex flex-col items-center">
      {/* Visual Canvas / SVG display area */}
      <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-white border-2 border-red-300 shadow-md flex items-center justify-center overflow-hidden tian-grid">
        
        {/* Practice Mode Guide Kanji Background */}
        {practiceMode && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 text-slate-900 font-bold text-[150px] kanji-font select-none">
            {kanji}
          </div>
        )}

        {/* Dynamic SVG / Normal display */}
        {!practiceMode ? (
          svgContent ? (
            <div 
              className="w-full h-full p-4 [&_svg]:w-full [&_svg]:h-full [&_text]:fill-red-500 [&_text]:text-xs [&_path]:stroke-slate-800 [&_path]:stroke-[3]"
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          ) : (
            <div className="relative flex flex-col items-center justify-center">
              <span className="text-[120px] font-black kanji-font text-slate-800 select-none">
                {kanji}
              </span>
              <span className="absolute bottom-2 text-xs font-semibold text-slate-400">
                {strokesCount} nét
              </span>
            </div>
          )
        ) : (
          <canvas
            ref={canvasRef}
            width={300}
            height={300}
            onMouseDown={startDraw}
            onMouseMove={onDraw}
            onMouseUp={endDraw}
            onTouchStart={startDraw}
            onTouchMove={onDraw}
            onTouchEnd={endDraw}
            className="w-full h-full cursor-crosshair touch-none z-10"
          />
        )}
      </div>

      {/* Control Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
        {!practiceMode ? (
          <>
            <button
              onClick={isPlaying ? handlePause : handlePlay}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs md:text-sm font-semibold shadow-sm transition"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? "Tạm dừng" : "Xem nét vẽ"}
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs md:text-sm font-medium transition"
            >
              <RotateCcw className="w-4 h-4" /> Hiện đủ nét
            </button>
            <button
              onClick={() => { setPracticeMode(true); setUserStrokes([]); }}
              className="flex items-center gap-1 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs md:text-sm font-medium shadow-sm transition"
            >
              <PenTool className="w-4 h-4" /> Luyện viết
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setUserStrokes([])}
              className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs md:text-sm font-medium transition"
            >
              <RotateCcw className="w-4 h-4" /> Xóa nét đã viết
            </button>
            <button
              onClick={() => setPracticeMode(false)}
              className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs md:text-sm font-medium shadow-sm transition"
            >
              <CheckCircle2 className="w-4 h-4" /> Hoàn thành luyện
            </button>
          </>
        )}
      </div>
      <p className="text-xs text-slate-400 mt-2 text-center">
        {practiceMode ? "Vẽ đè lên nét mờ để rèn luyện thói quen viết chuẩn nét." : "Bấm 'Xem nét vẽ' để chạy hoạt hình thứ tự nét chữ."}
      </p>
    </div>
  );
}
