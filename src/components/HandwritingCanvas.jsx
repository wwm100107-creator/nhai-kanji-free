import React, { useRef, useState, useEffect } from 'react';
import { RotateCcw, Trash2, Edit3, Loader2 } from 'lucide-react';

export default function HandwritingCanvas({ onSelectKanji }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [strokes, setStrokes] = useState([]);
  const [currentStroke, setCurrentStroke] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    redrawCanvas();
  }, [strokes, currentStroke]);

  const getCanvasCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    setIsDrawing(true);
    const point = getCanvasCoordinates(e);
    setCurrentStroke([point]);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const point = getCanvasCoordinates(e);
    setCurrentStroke(prev => [...prev, point]);
  };

  const stopDrawing = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    setIsDrawing(false);
    if (currentStroke.length > 0) {
      const newStrokes = [...strokes, currentStroke];
      setStrokes(newStrokes);
      setCurrentStroke([]);
      recognizeHandwriting(newStrokes);
    }
  };

  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background guide lines (cross grid)
    ctx.strokeStyle = '#fee2e2'; // light red grid
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    // Center horizontal
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // Center vertical
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw strokes
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const allStrokes = currentStroke.length > 0 ? [...strokes, currentStroke] : strokes;

    allStrokes.forEach(stroke => {
      if (stroke.length < 2) return;
      ctx.beginPath();
      ctx.moveTo(stroke[0].x, stroke[0].y);
      for (let i = 1; i < stroke.length; i++) {
        ctx.lineTo(stroke[i].x, stroke[i].y);
      }
      ctx.stroke();
    });
  };

  const handleClear = () => {
    setStrokes([]);
    setCurrentStroke([]);
    setCandidates([]);
  };

  const handleUndo = () => {
    if (strokes.length === 0) return;
    const newStrokes = strokes.slice(0, -1);
    setStrokes(newStrokes);
    if (newStrokes.length > 0) {
      recognizeHandwriting(newStrokes);
    } else {
      setCandidates([]);
    }
  };

  const recognizeHandwriting = async (strokeList) => {
    if (!strokeList || strokeList.length === 0) return;
    setIsLoading(true);

    try {
      const ink = strokeList.map(stroke => [
        stroke.map(p => Math.round(p.x)),
        stroke.map(p => Math.round(p.y))
      ]);

      const payload = {
        app_version: 0.4,
        api_level: '537.36',
        device: '537.36',
        input_type: '0',
        options: 'enable_pre_space',
        requests: [{
          writing_guide: { writing_area_width: 280, writing_area_height: 280 },
          pre_context: '',
          max_num_results: 10,
          max_completions: 0,
          language: 'ja',
          ink: ink
        }]
      };

      const response = await fetch('https://www.google.com/inputtools/request?ime=handwriting&app=autoproxy&cs=1&oe=UTF-8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data[0] === 'SUCCESS' && data[1] && data[1][0] && data[1][0][1]) {
          // Filter candidates to Japanese characters (Kanji, Hiragana, Katakana)
          const results = data[1][0][1].filter(c => /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(c));
          setCandidates(results);
        }
      }
    } catch (err) {
      console.warn("Handwriting recognition fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Edit3 className="w-5 h-5 text-red-500" />
          <h3 className="font-bold text-slate-800 text-sm md:text-base">Bảng vẽ Kanji bằng tay</h3>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleUndo}
            disabled={strokes.length === 0}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 rounded-lg transition"
            title="Hoàn tác nét vừa vẽ"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Hoàn tác
          </button>
          <button
            onClick={handleClear}
            disabled={strokes.length === 0}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 disabled:opacity-40 rounded-lg transition"
            title="Xóa trắng bảng vẽ"
          >
            <Trash2 className="w-3.5 h-3.5" /> Xóa
          </button>
        </div>
      </div>

      <div className="relative flex justify-center">
        <div className="border-2 border-red-200 rounded-xl overflow-hidden bg-red-50/20 shadow-inner">
          <canvas
            ref={canvasRef}
            width={280}
            height={280}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="cursor-crosshair touch-none"
          />
        </div>
      </div>

      {/* Candidate Kanji suggestions */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Gợi ý nhận diện:
          </span>
          {isLoading && (
            <span className="flex items-center gap-1 text-xs text-red-500">
              <Loader2 className="w-3 h-3 animate-spin" /> Đang nhận diện...
            </span>
          )}
        </div>

        {candidates.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {candidates.map((char, idx) => (
              <button
                key={idx}
                onClick={() => onSelectKanji(char)}
                className="w-11 h-11 text-xl font-bold rounded-xl border border-slate-200 bg-slate-50 hover:bg-red-500 hover:text-white hover:border-red-500 text-slate-800 transition transform hover:scale-105 active:scale-95 flex items-center justify-center kanji-font shadow-sm"
              >
                {char}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-400 italic">
            Hãy dùng chuột hoặc ngón tay để vẽ các nét Kanji lên ô vuông phía trên.
          </p>
        )}
      </div>
    </div>
  );
}
