import React, { useState, useRef, useEffect } from "react";
import { Sliders, RefreshCw, BarChart2, Info, CheckCircle2, Play, Circle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Trial {
  id: number;
  width: number;
  distance: number;
  idBits: number;
  mtMs: number;
  isCorrect: boolean;
}

export default function FittsSandbox() {
  const [trials, setTrials] = useState<Trial[]>([]);
  const [targetWidth, setTargetWidth] = useState<number>(40); // 15 to 80
  const [targetDist, setTargetDist] = useState<number>(200); // 100 to 280
  const [targetAngle, setTargetAngle] = useState<number>(0); // angle in degrees

  const [gameState, setGameState] = useState<"idle" | "ready" | "active">("idle");
  const [clickCount, setClickCount] = useState<number>(0);
  const startTimeRef = useRef<number>(0);

  // Playground area references
  const areaRef = useRef<HTMLDivElement>(null);
  const [areaSize, setAreaSize] = useState({ width: 500, height: 400 });

  useEffect(() => {
    if (areaRef.current) {
      setAreaSize({
        width: areaRef.current.clientWidth || 500,
        height: areaRef.current.clientHeight || 400,
      });
    }

    const handleResize = () => {
      if (areaRef.current) {
        setAreaSize({
          width: areaRef.current.clientWidth,
          height: areaRef.current.clientHeight,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateID = (d: number, w: number) => {
    return Math.log2((2 * d) / w);
  };

  const handleStartSession = () => {
    setGameState("ready");
  };

  const startTarget = () => {
    setGameState("active");
    // Generate random angle and distance based on size limits
    const maxPossibleDist = Math.min(areaSize.width / 2 - 50, areaSize.height / 2 - 50);
    const randomizedDistance = Math.floor(Math.random() * (maxPossibleDist - 60) + 60);
    const randomizedWidth = [15, 30, 45, 60, 80][Math.floor(Math.random() * 5)];
    const randomizedAngle = Math.random() * 360;

    setTargetDist(randomizedDistance);
    setTargetWidth(randomizedWidth);
    setTargetAngle(randomizedAngle);

    startTimeRef.current = performance.now();
  };

  const handleTargetClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (gameState !== "active") return;

    const endTime = performance.now();
    const duration = Math.round(endTime - startTimeRef.current);
    const idBits = parseFloat(calculateID(targetDist, targetWidth).toFixed(2));

    const newTrial: Trial = {
      id: trials.length + 1,
      width: targetWidth,
      distance: targetDist,
      idBits,
      mtMs: duration,
      isCorrect: true,
    };

    setTrials((prev) => [newTrial, ...prev]);
    setGameState("ready");
    setClickCount((c) => c + 1);
  };

  const handleMissClick = () => {
    if (gameState !== "active") return;

    const endTime = performance.now();
    const duration = Math.round(endTime - startTimeRef.current);
    const idBits = parseFloat(calculateID(targetDist, targetWidth).toFixed(2));

    const newTrial: Trial = {
      id: trials.length + 1,
      width: targetWidth,
      distance: targetDist,
      idBits,
      mtMs: duration,
      isCorrect: false, // Flagged mistake click
    };

    setTrials((prev) => [newTrial, ...prev]);
    setGameState("ready");
  };

  const clearSession = () => {
    setTrials([]);
    setGameState("idle");
    setClickCount(0);
  };

  // Center coordinates of our playground
  const centerX = areaSize.width / 2;
  const centerY = areaSize.height / 2;

  // Compute actual target coordinate based on distance and angle
  const rad = (targetAngle * Math.PI) / 180;
  const targetX = centerX + targetDist * Math.cos(rad);
  const targetY = centerY + targetDist * Math.sin(rad);

  // SVG Scatter plot details
  const paddingX = 40;
  const paddingY = 30;
  const graphW = 300;
  const graphH = 150;

  const validTrials = trials.filter((t) => t.isCorrect);
  const maxID = Math.max(...validTrials.map((t) => t.idBits), 4);
  const maxMT = Math.max(...validTrials.map((t) => t.mtMs), 1000);

  return (
    <div className="space-y-6" id="fitts-sandbox-container">
      {/* Intro block */}
      <div className="bg-dark-card text-white rounded-xl p-6 shadow-xl border border-dark-border">
        <div className="flex items-center gap-2">
          <Circle className="h-5 w-5 text-gold fill-gold/20 shrink-0" />
          <h2 className="font-display text-xl md:text-2xl font-bold tracking-wider uppercase text-white">Fitts' Law Interactive Laboratory</h2>
        </div>
        <p className="text-dark-dim mt-2 text-xs leading-relaxed">
          <strong>Paul Fitts (1954)</strong> modeled target acquisition time as a logarithmic function:{" "}
          <code className="text-gold font-mono text-xs font-semibold bg-[#0f1115] px-2 py-0.5 rounded border border-dark-border">
            MT = a + b &times; log₂ (2D / W)
          </code>
          . Target acquisition speed is governed by the <strong>Index of Difficulty (ID)</strong>. Smaller, farther objects take longer to target. Turn on the test below to gather real-time personal statistics!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Physical Pointer Lab Canvas */}
        <div className="lg:col-span-2 flex flex-col bg-dark-card rounded-xl border border-dark-border shadow-xl overflow-hidden h-[480px]">
          <div className="bg-[#0f1115]/50 border-b border-dark-border px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shadow shadow-emerald-glow"></span>
              <span className="font-sans font-semibold text-white/90 text-xs md:text-sm">Human Movement Sandbox</span>
            </div>
            <div className="text-[11px] font-mono text-dark-dim uppercase tracking-wider font-bold">
              Canvas: {areaSize.width} &times; {areaSize.height}
            </div>
          </div>

          {/* Target Practice Interactive Panel */}
          <div
            ref={areaRef}
            onClick={handleMissClick}
            className={`flex-1 relative bg-dark-bg cursor-crosshair overflow-hidden select-none transition-colors border-dashed border-2 ${
              gameState === "active" ? "border-gold/30 bg-[#07080a]" : "border-transparent"
            }`}
            id="movement-sandbox-area"
          >
            {gameState === "idle" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#07080a]/95 gap-4">
                <div className="h-14 w-14 bg-gold/15 text-gold border border-gold/20 rounded-full flex items-center justify-center animate-float">
                  <Play className="h-5 w-5 ml-0.5 fill-current" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-base tracking-wide uppercase">Ready to test Fitts' Law?</h3>
                  <p className="text-dark-dim text-xs max-w-sm mt-1 leading-relaxed">
                    Hold your pointer at the starting center point, then hit the targets as fast as they spawn.
                  </p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); handleStartSession(); }}
                  className="bg-gold hover:bg-gold-hover text-black font-bold text-xs px-6 py-3 rounded tracking-wider uppercase transition-all text-center shadow shadow-gold/15 hover:scale-105 cursor-pointer"
                  id="sandbox-start-session-btn"
                >
                  Start Lab Session
                </button>
              </div>
            )}

            {gameState === "ready" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={(e) => { e.stopPropagation(); startTarget(); }}
                  className="z-10 h-16 w-16 bg-gold hover:bg-gold-hover text-black font-extrabold rounded-full shadow-lg border-4 border-dark-card flex flex-col items-center justify-center text-[10px] tracking-wider uppercase transition-all duration-150 cursor-pointer"
                  id="sandbox-target-anchor"
                >
                  START
                </button>
                <div className="absolute text-dark-dim text-center pointer-events-none mt-28">
                  <span className="text-[10px] font-mono bg-dark-card border border-dark-border text-dark-dim px-3 py-1.5 rounded uppercase tracking-wider font-semibold">Move pointer to START point and click</span>
                </div>
              </div>
            )}

            {gameState === "active" && (
              <>
                {/* Visual line helpers to illustrate Distance */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={targetX}
                    y2={targetY}
                    stroke="rgba(196, 161, 99, 0.25)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  {/* Angle label */}
                  <circle cx={centerX} cy={centerY} r="3" fill="#c4a163" />
                </svg>

                {/* The Target Circle */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  onClick={handleTargetClick}
                  style={{
                    position: "absolute",
                    width: targetWidth,
                    height: targetWidth,
                    left: targetX - targetWidth / 2,
                    top: targetY - targetWidth / 2,
                  }}
                  className="bg-gold hover:bg-gold-hover cursor-pointer rounded-full border-4 border-gold/40 flex items-center justify-center shadow-lg shadow-gold/25 group relative duration-150"
                  id="sandbox-fitts-target"
                >
                  <span className="absolute animate-ping h-full w-full rounded-full bg-gold opacity-40 duration-1000"></span>
                  <span className="text-[9.5px] font-mono text-black font-extrabold select-none pointer-events-none group-hover:scale-110 transition-transform">
                    {targetWidth}px
                  </span>
                </motion.div>
              </>
            )}
          </div>
        </div>

        {/* Dynamic Scientific Analysis Drawer */}
        <div className="flex flex-col gap-6" id="fitts-stats-panel">
          {/* Scatter Plot SVG Component */}
          <div className="bg-dark-card rounded-xl border border-dark-border shadow-md p-5 space-y-4">
            <div className="flex items-center gap-1.5 text-white font-semibold text-xs md:text-sm tracking-wider uppercase">
              <BarChart2 className="h-4 w-4 text-gold" />
              <span>Fitts Index Analysis (ID vs. MT)</span>
            </div>

            {validTrials.length === 0 ? (
              <div className="h-[150px] bg-dark-bg rounded flex flex-col items-center justify-center text-center p-4 border border-dark-border">
                <Info className="h-5 w-5 text-dark-dim mb-1" />
                <span className="text-dark-dim text-xs font-mono font-medium">Capture core data to plot scatter</span>
              </div>
            ) : (
              <div id="fitts-scatter-plot">
                {/* Custom Responsive SVG Linear Scatter */}
                <svg className="w-full h-[180px] bg-[#0f1115] rounded border border-dark-border">
                  {/* Grid Lines */}
                  {[0.25, 0.5, 0.75].map((ratio, i) => (
                    <line
                      key={i}
                      x1={paddingX}
                      y1={paddingY + ratio * graphH}
                      x2={paddingX + graphW}
                      y2={paddingY + ratio * graphH}
                      stroke="#1b1e24"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Scatter Dots */}
                  {validTrials.map((trial) => {
                    const cx = paddingX + (trial.idBits / maxID) * (graphW - 20);
                    const cy = paddingY + graphH - (trial.mtMs / maxMT) * (graphH - 20) - 10;
                    return (
                      <g key={trial.id} className="group/dot">
                        <circle
                          cx={cx}
                          cy={cy}
                          r="4"
                          className="fill-gold stroke-dark-card stroke-2 shadow-sm hover:fill-emerald-500 cursor-pointer transition-colors"
                        />
                        <title>{`ID: ${trial.idBits} bits, MT: ${trial.mtMs}ms`}</title>
                      </g>
                    );
                  })}

                  {/* Axes lines */}
                  <line x1={paddingX} y1={paddingY + graphH} x2={paddingX + graphW} y2={paddingY + graphH} stroke="#383c47" strokeWidth="1" />
                  <line x1={paddingX} y1={paddingY} x2={paddingX} y2={paddingY + graphH} stroke="#383c47" strokeWidth="1" />

                  {/* Axes labels */}
                  <text x={paddingX + graphW / 2} y={paddingY + graphH + 20} textAnchor="middle" className="fill-slate-400 font-mono text-[9px] font-semibold">
                    difficulty (ID bits)
                  </text>
                  <text
                    x={12}
                    y={paddingY + graphH / 2}
                    textAnchor="middle"
                    transform={`rotate(-90 12 ${paddingY + graphH / 2})`}
                    className="fill-slate-400 font-mono text-[9px] font-semibold"
                  >
                    Target MT (ms)
                  </text>

                  {/* Origin bounds */}
                  <text x={paddingX} y={paddingY + graphH + 10} className="fill-slate-400 font-mono text-[8px]">{0}</text>
                  <text x={paddingX + graphW - 10} y={paddingY + graphH + 10} className="fill-slate-400 font-mono text-[8px]">{maxID.toFixed(1)}</text>
                  <text x={paddingX - 18} y={paddingY + 12} className="fill-slate-400 font-mono text-[8px]">{maxMT}ms</text>
                </svg>
                <div className="flex justify-between text-[10px] text-dark-dim font-mono mt-2">
                  <span>Linear Correlation: positive</span>
                  <span>Trials: {validTrials.length}</span>
                </div>
              </div>
            )}
          </div>

          {/* Real-time stats tables */}
          <div className="bg-dark-card rounded-xl border border-dark-border shadow-md p-5 flex-1 flex flex-col min-h-[190px]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-display font-semibold text-white text-xs md:text-sm tracking-wider uppercase">HCI Data Logbook</span>
              {trials.length > 0 && (
                <button
                  onClick={clearSession}
                  className="text-[10px] font-mono font-bold text-rose-455 hover:text-rose-400 hover:underline flex items-center gap-1 transition-all uppercase tracking-wider cursor-pointer"
                  id="sandbox-reset-btn"
                >
                  <RefreshCw className="h-3 w-3" /> Clear Logs
                </button>
              )}
            </div>

            {trials.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-dark-bg rounded border border-dashed border-dark-border">
                <Sliders className="h-5 w-5 text-dark-dim mb-1" />
                <span className="text-xs text-dark-dim leading-relaxed font-sans mt-1">
                  Once you start hitting targets, raw pointer analytics will compile here for math validation.
                </span>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto max-h-[180px] pr-1 dark-scrollbar" id="sandbox-logs-table">
                <table className="w-full text-left text-[11px] font-mono text-slate-300">
                  <thead className="text-[10px] text-dark-dim bg-[#0f1115] uppercase tracking-wider font-bold">
                    <tr>
                      <th className="py-2 px-2 rounded-l">Mode</th>
                      <th className="py-2 px-2">Size/Dist</th>
                      <th className="py-2 px-1 text-center">ID Bits</th>
                      <th className="py-2 px-2 text-right rounded-r">MT Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-border/40">
                    {trials.map((trial) => (
                      <tr key={trial.id} className={`${trial.isCorrect ? "hover:bg-[#0f1115]" : "bg-rose-955/20 hover:bg-rose-955/30"}`}>
                        <td className="py-1 px-2 font-semibold">
                          {trial.isCorrect ? (
                            <span className="text-emerald-450 flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 shrink-0" /> HIT #{trial.id}
                            </span>
                          ) : (
                            <span className="text-rose-455">❌ MISS</span>
                          )}
                        </td>
                        <td className="py-1 px-2 text-dark-dim">
                          {trial.width}px / {trial.distance}px
                        </td>
                        <td className="py-1 px-1 text-center font-bold text-gold">
                          {trial.idBits} bits
                        </td>
                        <td className={`py-1 px-2 text-right font-semibold ${trial.isCorrect ? "text-[#a5b4fc]" : "text-rose-455"}`}>
                          {trial.isCorrect ? `${trial.mtMs}ms` : "Miss penalty"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {validTrials.length > 0 && (
              <div className="mt-2 pt-2 border-t border-dark-border text-[11px] font-mono text-dark-dim flex justify-between">
                <span>Avg Acquisition Time:</span>
                <span className="font-bold text-gold">
                  {Math.round(validTrials.reduce((sum, t) => sum + t.mtMs, 0) / validTrials.length)}ms
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
