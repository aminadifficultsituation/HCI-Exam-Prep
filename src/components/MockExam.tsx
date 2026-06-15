import { useState, useEffect, useRef } from "react";
import { AlertTriangle, Clock, Play, RefreshCw, Star, CheckCircle, HelpCircle, ArrowLeft, ArrowRight, Award } from "lucide-react";
import { Question, hciQuestions } from "../questions";
import { motion, AnimatePresence } from "motion/react";

export default function MockExam() {
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);

  // Exam variables
  const [mockQuestions, setMockQuestions] = useState<Question[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({}); // questionId -> selectedOptionIndex

  // Timing variables
  const [timeLeft, setTimeLeft] = useState<number>(900); // 15 minutes in seconds
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Save score state
  const [finalScoreStats, setFinalScoreStats] = useState<{
    correct: number;
    incorrect: number;
    skipped: number;
    percentage: number;
    elapsedSec: number;
  } | null>(null);

  // Generate 20 random, non-repetitive questions when starting
  const initializeExam = () => {
    // Shuffle and pick 20
    const shuffled = [...hciQuestions].sort(() => Math.random() - 0.5);
    const chosen = shuffled.slice(0, 20);

    setMockQuestions(chosen);
    setActiveIndex(0);
    setUserAnswers({});
    setTimeLeft(900);
    setElapsedTime(0);
    setExamStarted(true);
    setExamSubmitted(false);
    setFinalScoreStats(null);
  };

  // Start countdown timer
  useEffect(() => {
    if (examStarted && !examSubmitted && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [examStarted, examSubmitted]);

  const handleSelectOption = (questionId: number, oIdx: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: oIdx,
    }));
  };

  const handleAutoSubmit = () => {
    submitEvaluation(true); // Forced submission on time expiration
  };

  const handleManualSubmit = () => {
    const unansweredCount = mockQuestions.length - Object.keys(userAnswers).length;
    let confirmMsg = "Are you ready to submit your exam for grading?";
    if (unansweredCount > 0) {
      confirmMsg += ` Warning: You have left ${unansweredCount} questions blank or skipped.`;
    }

    if (window.confirm(confirmMsg)) {
      submitEvaluation(false);
    }
  };

  const submitEvaluation = (isForced: boolean) => {
    if (timerRef.current) clearInterval(timerRef.current);

    let correctCount = 0;
    let incorrectCount = 0;
    let skippedCount = 0;

    mockQuestions.forEach((q) => {
      const ans = userAnswers[q.id];
      if (ans === undefined) {
        skippedCount++;
      } else if (ans === q.c) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });

    const percent = Math.round((correctCount / mockQuestions.length) * 100);

    setFinalScoreStats({
      correct: correctCount,
      incorrect: incorrectCount,
      skipped: skippedCount,
      percentage: percent,
      elapsedSec: elapsedTime,
    });

    setExamSubmitted(true);

    // Save persistent metric logs
    localStorage.setItem("hci_mock_recent_score", percent.toString());

    const currentHigh = localStorage.getItem("hci_mock_high_score");
    if (!currentHigh || percent > parseInt(currentHigh)) {
      localStorage.setItem("hci_mock_high_score", percent.toString());
    }
  };

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remainingSecs = sec % 60;
    return `${mins.toString().padStart(2, "0")}:${remainingSecs.toString().padStart(2, "0")}`;
  };

  // Grading thresholds
  const getLetterGrade = (p: number) => {
    if (p >= 90) return { grade: "A", title: "Usability Guru (HCI Pro)", color: "text-emerald-400 bg-emerald-955/20 border-emerald-900/40" };
    if (p >= 80) return { grade: "B", title: "Interaction Specialist", color: "text-indigo-300 bg-indigo-955/20 border-indigo-900/40" };
    if (p >= 70) return { grade: "C", title: "HCI Apprentice", color: "text-amber-400 bg-amber-955/20 border-amber-900/40" };
    return { grade: "F", title: "Lipstick on a Bulldog (Design Fail)", color: "text-rose-455 bg-rose-955/30 border-rose-900/40" };
  };

  const activeQuestion = mockQuestions[activeIndex];

  return (
    <div className="space-y-6" id="mock-exam-container">
      {/* Intro menu */}
      {!examStarted && (
        <div className="bg-dark-card rounded-xl border border-dark-border p-6 md:p-8 shadow-xl flex flex-col items-center justify-center text-center max-w-lg mx-auto space-y-6" id="mock-launcher-panel">
          <div className="h-14 w-14 bg-gold/10 border border-gold/20 rounded-full text-gold flex items-center justify-center animate-pulse shrink-0">
            <Clock className="h-7 w-7" />
          </div>
          <div>
            <h2 className="font-display font-bold text-xl md:text-2xl text-white tracking-wide uppercase">Timed Simulation</h2>
            <p className="text-dark-dim text-xs mt-2 leading-relaxed max-w-sm mx-auto">
              Simulate true testing environments: <strong>20 randomized questions</strong> from syllabus lectures subject to a <strong>15-minute countdown clock</strong>. Explanations are hidden until grading submission.
            </p>
          </div>

          <div className="bg-dark-bg border border-dark-border rounded p-4 text-left space-y-2.5 text-[11px] font-mono text-dark-dim w-full" id="mock-instructions">
            <p className="font-bold uppercase text-gold tracking-wider">Exam Standard Protocols:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Time duration: 900 seconds.</li>
              <li>You may revisit previous questions to edit your choices.</li>
              <li>Questions skipped or left blank count as incorrect.</li>
              <li>Red timer flashes trigger under 120 seconds.</li>
            </ul>
          </div>

          <button
            onClick={initializeExam}
            className="w-full py-3.5 bg-gold hover:bg-gold-hover active:scale-95 text-black font-bold text-xs tracking-widest uppercase rounded shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
            id="start-exam-button"
          >
            <Play className="h-4 w-4 fill-current" /> Start Official Mock Exam
          </button>
        </div>
      )}

      {/* active running exam */}
      {examStarted && !examSubmitted && activeQuestion && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" id="active-exam-grid">
          {/* Main Workspace */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-dark-card rounded-xl border border-dark-border shadow-xl p-6 md:p-8 space-y-6">
              {/* Question metadata */}
              <div className="flex justify-between items-center pb-4 border-b border-dark-border text-xs font-mono text-dark-dim">
                <span className="uppercase tracking-wider">QUESTION {activeIndex + 1} OF {mockQuestions.length}</span>
                <span className="font-bold text-gold uppercase tracking-widest">Exam Mode Active</span>
              </div>

              {/* Question Text */}
              <div className="py-2">
                <span className="text-gold text-xs font-bold uppercase tracking-wider mb-2 block font-mono">Exam Target #{activeQuestion.id}</span>
                <h3 className="font-display font-medium text-white text-lg md:text-2xl leading-normal serif-display">
                  {activeQuestion.q}
                </h3>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3.5">
                {activeQuestion.a.map((opt, oIdx) => {
                  const isSelected = userAnswers[activeQuestion.id] === oIdx;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectOption(activeQuestion.id, oIdx)}
                      className={`p-4 md:p-5 border text-left text-xs md:text-sm rounded transition-all duration-200 flex items-center gap-4 cursor-pointer w-full ${
                        isSelected
                          ? "border-gold bg-gold-muted/20 text-white font-medium"
                          : "border-dark-border bg-dark-bg/40 text-dark-dim hover:text-white hover:border-gold/50"
                      }`}
                      id={`mock-choice-btn-${oIdx}`}
                    >
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all border ${
                        isSelected 
                          ? "bg-gold border-gold text-black" 
                          : "border-dark-border bg-dark-card text-dark-dim"
                      }`}>
                        {["A", "B", "C", "D"][oIdx]}
                      </span>
                      <span className="font-sans leading-relaxed">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation row */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => setActiveIndex((p) => Math.max(0, p - 1))}
                disabled={activeIndex === 0}
                className="px-5 py-3 border border-dark-border text-dark-dim bg-dark-card hover:bg-dark-bg hover:text-white hover:border-gold text-xs font-semibold uppercase tracking-widest rounded transition-all disabled:opacity-30 cursor-pointer flex items-center gap-1.5"
                id="mock-prev-btn"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>

              <button
                onClick={() => setActiveIndex((p) => Math.min(mockQuestions.length - 1, p + 1))}
                disabled={activeIndex === mockQuestions.length - 1}
                className="px-5 py-3 border border-dark-border text-dark-dim bg-dark-card hover:bg-dark-bg hover:text-white hover:border-gold text-xs font-semibold uppercase tracking-widest rounded transition-all disabled:opacity-30 cursor-pointer flex items-center gap-1.5"
                id="mock-next-btn"
              >
                Next <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Exam Sidebar Tracker / timer */}
          <div className="space-y-4">
            {/* Timer card */}
            <div className="bg-dark-card rounded-xl border border-dark-border p-5 shadow-sm text-center space-y-2">
              <span className="text-[10px] font-mono tracking-wider font-bold text-dark-dim uppercase">Time Remaining</span>
              <div className={`flex items-center justify-center gap-2 font-mono text-2xl font-bold py-1.5 ${
                timeLeft < 120 
                  ? "text-rose-400 bg-rose-955/20 border border-rose-900/30 rounded py-2 animate-pulse" 
                  : "text-white"
              }`} id="exam-timer-clock">
                <Clock className="h-5 w-5 text-gold" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>

            {/* Questions Answer Matrix */}
            <div className="bg-dark-card rounded-xl border border-dark-border p-5 shadow-sm space-y-4">
              <span className="block text-[10px] font-mono uppercase font-bold text-dark-dim tracking-wider">Indexed Monitor</span>
              <div className="grid grid-cols-5 gap-2" id="mock-index-matrix">
                {mockQuestions.map((q, idx) => {
                  const isAnswered = userAnswers[q.id] !== undefined;
                  const isCur = idx === activeIndex;

                  return (
                    <button
                      key={q.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-9 rounded font-mono text-[11px] font-semibold border transition-all cursor-pointer ${
                        isCur
                          ? "border-gold bg-gold-muted/40 text-gold shadow shadow-gold-glow"
                          : isAnswered
                          ? "border-gold/30 bg-gold/5 text-gold"
                          : "border-dark-border bg-dark-bg text-dark-dim hover:border-gold/30 hover:text-white"
                      }`}
                      id={`mock-matrix-index-${idx}`}
                    >
                      {(idx + 1).toString().padStart(2, "0")}
                    </button>
                  );
                })}
              </div>
              <div className="text-[10px] font-mono text-dark-dim flex justify-between pt-3 border-t border-dark-border">
                <span>Filled: {Object.keys(userAnswers).length} / 20</span>
                <span>Left: {20 - Object.keys(userAnswers).length}</span>
              </div>
            </div>

            {/* Turn in button */}
            <button
              onClick={handleManualSubmit}
              className="w-full py-3.5 bg-indigo-950/40 hover:bg-indigo-900/80 border border-indigo-700/50 hover:border-indigo-600 text-indigo-200 text-xs font-bold uppercase tracking-widest rounded transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              id="mock-submit-form-btn"
            >
              Grade & Submit Exam
            </button>
          </div>
        </div>
      )}

      {/* Post-exam Diagnostic Evaluation Report */}
      {examSubmitted && finalScoreStats && (
        <div className="space-y-6" id="exam-diagnostics-report">
          {/* Certificate evaluation block */}
          {(() => {
            const evaluation = getLetterGrade(finalScoreStats.percentage);
            return (
              <div className="bg-[#0f1115] border border-dark-border rounded-xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center gap-6 justify-between">
                <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                  <div className={`h-16 w-16 rounded-full border-2 flex items-center justify-center font-display font-extrabold text-2xl shrink-0 ${evaluation.color}`}>
                    {evaluation.grade}
                  </div>
                  <div>
                    <span className="text-gold text-xs font-mono font-bold uppercase tracking-[0.2em] block">Diagnostic Result</span>
                    <h2 className="font-display font-medium text-lg md:text-2xl text-white mt-1">
                      {evaluation.title}
                    </h2>
                    <p className="text-dark-dim text-xs mt-1.5 leading-relaxed">
                      Final Verified Grade Score: <span className="font-bold text-white text-sm">{finalScoreStats.correct}</span> / 20 correct answers ({finalScoreStats.percentage}% correct). Elapsed study testing duration: <span className="font-bold font-mono text-white text-sm">{formatTime(finalScoreStats.elapsedSec)}</span>.
                    </p>
                  </div>
                </div>

                <button
                  onClick={initializeExam}
                  className="px-6 py-3 bg-gold hover:bg-gold-hover text-black font-bold text-xs uppercase tracking-widest rounded transition-colors shadow flex items-center gap-2 cursor-pointer shrink-0"
                  id="mock-restart-test-btn"
                >
                  <RefreshCw className="h-3.5 w-3.5" /> Re-take Simulator
                </button>
              </div>
            );
          })()}

          {/* Detailed Question Review List */}
          <div className="space-y-4" id="mock-questions-review">
            <h3 className="font-display font-bold text-white text-base md:text-lg uppercase tracking-wider">Itemized Syllabus Review Analysis</h3>
            <div className="space-y-4">
              {mockQuestions.map((q, idx) => {
                const userChoice = userAnswers[q.id];
                const isCorrect = userChoice === q.c;

                return (
                  <div
                    key={q.id}
                    className={`bg-dark-card rounded-xl border p-5 md:p-6 space-y-4 transition-all shadow-md ${
                      isCorrect ? "border-emerald-500/20" : "border-rose-900/30"
                    }`}
                    id={`review-card-${q.id}`}
                  >
                    {/* Header line */}
                    <div className="flex justify-between items-center text-[10px] font-mono border-b border-dark-border pb-3">
                      <span className="font-bold uppercase tracking-wider text-dark-dim">Item {(idx + 1).toString().padStart(2, "0")} of 20 | {q.lectureKey}</span>
                      <span className={`font-bold uppercase tracking-widest ${isCorrect ? "text-emerald-400" : "text-rose-450"}`}>
                        {userChoice === undefined ? "SKIPPED/BLANK" : isCorrect ? "CORRECT MATCH" : "INCORRECT MATCH"}
                      </span>
                    </div>

                    {/* Question text */}
                    <span className="text-gold text-[10px] font-mono font-bold uppercase tracking-wider block">Target Question</span>
                    <p className="font-display font-medium text-white text-sm md:text-base leading-relaxed">
                      {q.q}
                    </p>

                    {/* Answer options review grids */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2">
                      <div className="bg-dark-bg p-3.5 rounded border border-dark-border flex flex-col gap-1 text-white">
                        <span className="text-[9px] font-bold text-dark-dim font-mono tracking-widest uppercase">Your submitted choice</span>
                        <span className={`font-sans ${userChoice === undefined ? "italic text-dark-dim text-sm" : isCorrect ? "text-emerald-450 font-medium text-sm" : "text-rose-450 font-medium text-sm"}`}>
                          {userChoice === undefined ? "No option submitted" : q.a[userChoice]}
                        </span>
                      </div>

                      <div className="bg-[#121c16] p-3.5 rounded border border-emerald-950 flex flex-col gap-1">
                        <span className="text-[9px] font-bold text-emerald-500 font-mono tracking-widest uppercase">Verified correct solution</span>
                        <span className="text-emerald-300 font-sans font-medium text-sm">{q.a[q.c]}</span>
                      </div>
                    </div>

                    {/* Explanation */}
                    <div className="bg-[#0f1115] p-4 rounded border border-dark-border text-xs text-dark-dim">
                      <span className="block font-mono font-bold text-[9px] uppercase tracking-wide text-gold mb-1.5">Academic Reference and Core Guidance</span>
                      <p className="font-sans leading-relaxed text-sm italic text-[#c8c8cf]">"{q.e}"</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
