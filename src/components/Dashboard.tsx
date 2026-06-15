import { useState, useEffect } from "react";
import { BookOpen, Star, Award, Zap, Play, Trophy, ChevronRight, GraduationCap } from "lucide-react";
import { Question, hciQuestions } from "../questions";

interface DashboardProps {
  onStartQuiz: (lectureKey: string | null, randomShuffle: boolean) => void;
  onSetTab: (tab: "dashboard" | "quiz" | "mock" | "flashcards" | "fitts" | "cheatsheet") => void;
  attemptedList: number[];
  correctList: number[];
  bookmarkedList: number[];
}

interface LectureStat {
  key: string;
  name: string;
  count: number;
}

const lectureMetadata: LectureStat[] = [
  { key: "L1: Intro", name: "Lecture 1: Introduction", count: 9 },
  { key: "L2: Cognition", name: "Lecture 2: Human & Memory", count: 18 },
  { key: "L4: Computer", name: "Lecture 4: The Computer", count: 9 },
  { key: "L5: Styles", name: "Lecture 5: Interaction Styles", count: 14 },
  { key: "L8: Design", name: "Lecture 8: Screen Layout Design", count: 14 },
  { key: "L9-10: Patterns", name: "Lecture 9-10: Interaction Patterns", count: 16 },
  { key: "L11: Rules", name: "Lecture 11: Design Rules & Heuristics", count: 11 },
  { key: "L12: Proto", name: "Lecture 12: Prototyping Systems", count: 9 },
  { key: "L13-14: Slips", name: "Lecture 13-14: Common GUI Mistakes", count: 10 }
];

export default function Dashboard({
  onStartQuiz,
  onSetTab,
  attemptedList,
  correctList,
  bookmarkedList,
}: DashboardProps) {
  const [mockHighScore, setMockHighScore] = useState<number | null>(null);
  const [mockRecentScore, setMockRecentScore] = useState<number | null>(null);

  useEffect(() => {
    const cachedHigh = localStorage.getItem("hci_mock_high_score");
    const cachedRecent = localStorage.getItem("hci_mock_recent_score");
    if (cachedHigh) setMockHighScore(parseInt(cachedHigh));
    if (cachedRecent) setMockRecentScore(parseInt(cachedRecent));
  }, []);

  // Compute stats
  const totalQuestions = hciQuestions.length;
  const attemptedCount = attemptedList.length;
  const correctCount = correctList.length;
  const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
  const progressPercent = Math.round((attemptedCount / totalQuestions) * 100);

  return (
    <div className="space-y-6" id="dashboard-root">
      {/* Dynamic Welcome Hero Panel */}
      <div className="bg-dark-card text-white rounded-xl p-6 md:p-8 shadow-xl border border-dark-border relative overflow-hidden">
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-5 pointer-events-none hidden md:block">
          {/* Subtle graphic accent */}
          <div className="w-full h-full bg-gradient-to-tl from-gold to-transparent rounded-full translate-x-12 translate-y-12 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/20 px-3 py-1 rounded text-xs font-semibold uppercase tracking-widest mb-4">
            <GraduationCap className="h-3.5 w-3.5 text-gold" />
            <span>Syllabus HCI Exam Simulator</span>
          </div>
          <h1 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Perfect Your Human-Computer Interaction Grade
          </h1>
          <p className="text-dark-dim mt-2.5 text-sm leading-relaxed">
            Practice over <strong>{totalQuestions} high-fidelity exam questions</strong> directly compiled from curriculum lectures. Master rods vs cones, Fitts' law formulas, Norman's principles, and avoid common GUI mistakes.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => onStartQuiz(null, false)}
              className="px-6 py-3 bg-gold hover:bg-gold-hover active:bg-gold-hover/90 text-black font-bold rounded text-xs tracking-widest uppercase shadow transition-all flex items-center gap-2 cursor-pointer"
              id="dash-quickstart-full-btn"
            >
              <Play className="h-4 w-4 fill-current" /> Start Full Quiz Run
            </button>
            <button
              onClick={() => onSetTab("mock")}
              className="px-6 py-3 bg-transparent hover:bg-gold/5 border border-dark-border hover:border-gold text-white font-bold rounded text-xs tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer"
              id="dash-quickstart-mock-btn"
            >
              <Trophy className="h-4 w-4 text-gold" /> Start Timed Mock
            </button>
          </div>
        </div>
      </div>

      {/* Main Core Statistics Counters */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" id="stats-counter-grid">
        <div className="bg-dark-card rounded-xl p-5 border border-dark-border flex items-center gap-4">
          <div className="p-3 bg-gold/5 text-gold border border-gold/10 rounded-sm shrink-0">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono text-dark-dim font-bold tracking-widest">Total Progress</div>
            <div className="text-xl font-bold text-white font-display mt-0.5" id="stat-progress-val">
              {attemptedCount} <span className="text-dark-dim text-xs font-normal">/ {totalQuestions}</span>
            </div>
            <div className="text-[10px] text-[#4ade80] font-mono tracking-wide font-medium">{progressPercent}% Completed</div>
          </div>
        </div>

        <div className="bg-dark-card rounded-xl p-5 border border-dark-border flex items-center gap-4">
          <div className="p-3 bg-gold/5 text-gold border border-gold/10 rounded-sm shrink-0">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono text-dark-dim font-bold tracking-widest">Study Accuracy</div>
            <div className="text-xl font-bold text-white font-display mt-0.5" id="stat-accuracy-val">
              {accuracy}%
            </div>
            <div className="text-[10px] text-dark-dim font-mono tracking-wide">
              {correctCount} Mastered targets
            </div>
          </div>
        </div>

        <div className="bg-dark-card rounded-xl p-5 border border-dark-border flex items-center gap-4">
          <div className="p-3 bg-gold/5 text-gold border border-gold/10 rounded-sm shrink-0">
            <Trophy className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono text-dark-dim font-bold tracking-widest">Mock Exam Peak</div>
            <div className="text-xl font-bold text-white font-display mt-0.5" id="stat-mockscore-val">
              {mockHighScore !== null ? `${mockHighScore}%` : "No attempts"}
            </div>
            <div className="text-[10px] text-dark-dim font-mono tracking-wide">
              {mockRecentScore !== null ? `Recent: ${mockRecentScore}%` : "Test your timing"}
            </div>
          </div>
        </div>

        <div className="bg-dark-card rounded-xl p-5 border border-dark-border flex items-center gap-4">
          <div className="p-3 bg-gold/5 text-gold border border-gold/10 rounded-sm shrink-0">
            <Star className="h-5 w-5 fill-gold/20" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono text-dark-dim font-bold tracking-widest">Bookmarked Keys</div>
            <div className="text-xl font-bold text-white font-display mt-0.5" id="stat-flagged-val">
              {bookmarkedList.length} <span className="text-dark-dim text-xs font-normal">questions</span>
            </div>
            <div className="text-[10px] text-dark-dim font-mono tracking-wide" id="stat-flagged-desc">
              Starred for focused review
            </div>
          </div>
        </div>
      </div>

      {/* Lectures Syllabus Grid */}
      <div className="space-y-4" id="lectures-grid-wrapper">
        <h2 className="font-display font-bold text-white text-lg md:text-xl tracking-wider uppercase">Study Drill by Syllabus Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="lectures-cards-grid">
          {lectureMetadata.map((lect) => {
            // Count attempted per lecture
            const lectQuestions = hciQuestions.filter((q) => q.lectureKey === lect.key);
            const lectAttempted = lectQuestions.filter((q) => attemptedList.includes(q.id)).length;
            const percent = lectQuestions.length > 0 ? Math.round((lectAttempted / lectQuestions.length) * 100) : 0;

            return (
              <div
                key={lect.key}
                onClick={() => onStartQuiz(lect.key, false)}
                className="group bg-dark-card rounded-xl p-5 border border-dark-border hover:border-gold/40 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
                id={`lecture-card-${lect.key.replace(/[^a-zA-Z0-9]/g, "")}`}
              >
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold bg-[#0d0d12] text-gold px-2.5 py-0.5 rounded border border-dark-border">
                      {lect.key}
                    </span>
                    <span className="text-xs font-mono text-dark-dim font-semibold">
                      {lect.count} Qs
                    </span>
                  </div>
                  <h3 className="font-display font-medium text-white text-base mt-4 group-hover:text-gold transition-colors leading-snug">
                    {lect.name}
                  </h3>
                </div>

                <div className="mt-5 pt-4 border-t border-dark-border">
                  <div className="flex justify-between items-center text-[10px] text-dark-dim font-mono uppercase tracking-widest mb-1.5">
                    <span>Topic Progress</span>
                    <span className="font-bold text-white">{percent}%</span>
                  </div>
                  <div className="w-full h-1 bg-[#0c0d10] rounded overflow-hidden">
                    <div className="h-full bg-gold transition-all duration-300" style={{ width: `${percent}%` }}></div>
                  </div>

                  <div className="mt-3 text-[10px] font-bold text-gold group-hover:text-gold-hover hover:underline flex items-center justify-end gap-1 uppercase tracking-widest">
                    <span>Launch Drill</span>
                    <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Experimental Laboratory teaser card */}
      <div className="bg-gradient-to-r from-gold-muted/65 via-dark-card to-dark-card text-white rounded-xl p-6 border border-gold/20 shadow-md flex flex-col md:flex-row items-center justify-between gap-4" id="dashboard-fitts-teaser">
        <div>
          <h3 className="font-display font-semibold text-[#c4a163] text-lg">Fitts' Law Motor Control Lab</h3>
          <p className="text-dark-dim text-xs mt-1.5 max-w-lg">
            Don't just read about Fitts' Law formula — launchpointing experiments directly! This interactive sandbox captures precision coordinates and charts user motor index output relative to target sizing.
          </p>
        </div>
        <button
          onClick={() => onSetTab("fitts")}
          className="px-5 py-2.5 bg-gold hover:bg-gold-hover active:scale-95 text-black font-bold text-xs uppercase tracking-wider rounded transition-all text-center shadow shrink-0 cursor-pointer"
          id="dash-launch-sandbox-btn"
        >
          Launch Interactive Lab
        </button>
      </div>
    </div>
  );
}
