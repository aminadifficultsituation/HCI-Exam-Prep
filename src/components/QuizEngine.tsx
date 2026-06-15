import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star, RefreshCw, BookOpen, HelpCircle, AlertTriangle, CheckCircle, Flame } from "lucide-react";
import { Question, hciQuestions } from "../questions";
import { motion, AnimatePresence } from "motion/react";

interface QuizEngineProps {
  initialLectureKey: string | null;
  attemptedList: number[];
  correctList: number[];
  bookmarkedList: number[];
  onRecordAnswer: (questionId: number, isCorrect: boolean) => void;
  onToggleBookmark: (questionId: number) => void;
  onSetTab: (tab: "dashboard" | "quiz" | "mock" | "flashcards" | "fitts" | "cheatsheet") => void;
  onClearProgress: () => void;
}

export default function QuizEngine({
  initialLectureKey,
  attemptedList,
  correctList,
  bookmarkedList,
  onRecordAnswer,
  onToggleBookmark,
  onSetTab,
  onClearProgress,
}: QuizEngineProps) {
  // Filters
  const [selectedLecture, setSelectedLecture] = useState<string>("ALL");
  const [filterSubset, setFilterSubset] = useState<"ALL" | "UNATTEMPTED" | "INCORRECT" | "BOOKMARKED">("ALL");
  const [shuffleMode, setShuffleMode] = useState<boolean>(false);

  // Lists of filtered questions
  const [displayQuestions, setDisplayQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  // Sync initial lecture choice if user clicked from dashboard
  useEffect(() => {
    if (initialLectureKey) {
      setSelectedLecture(initialLectureKey);
    }
  }, [initialLectureKey]);

  // Compute and compile display list whenever filters/shuffle changes
  useEffect(() => {
    let list = [...hciQuestions];

    // 1. Lecture Focus
    if (selectedLecture !== "ALL") {
      list = list.filter((q) => q.lectureKey === selectedLecture);
    }

    // 2. Subset Adaptive Mode
    if (filterSubset === "UNATTEMPTED") {
      list = list.filter((q) => !attemptedList.includes(q.id));
    } else if (filterSubset === "INCORRECT") {
      // Attempted but NOT in correct list
      list = list.filter((q) => attemptedList.includes(q.id) && !correctList.includes(q.id));
    } else if (filterSubset === "BOOKMARKED") {
      list = list.filter((q) => bookmarkedList.includes(q.id));
    }

    // 3. Order
    if (shuffleMode) {
      list.sort(() => Math.random() - 0.5);
    } else {
      list.sort((a, b) => a.id - b.id);
    }

    setDisplayQuestions(list);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [selectedLecture, filterSubset, shuffleMode, attemptedList, correctList, bookmarkedList]);

  // Reset answer states when active question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [currentIndex]);

  const activeQuestion: Question | undefined = displayQuestions[currentIndex];

  const handleOptionClick = (optionIdx: number) => {
    if (isAnswered || !activeQuestion) return;

    setSelectedAnswer(optionIdx);
    setIsAnswered(true);

    const checkCorrect = optionIdx === activeQuestion.c;
    onRecordAnswer(activeQuestion.id, checkCorrect);
  };

  const traverseNext = () => {
    if (currentIndex < displayQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const traversePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const getLectureListHeader = () => {
    const counts: Record<string, number> = {};
    counts["ALL"] = hciQuestions.length;
    hciQuestions.forEach((q) => {
      counts[q.lectureKey] = (counts[q.lectureKey] || 0) + 1;
    });
    return counts;
  };

  const lectureCounts = getLectureListHeader();

  const totalFilteredCount = displayQuestions.length;
  const isBookmarked = activeQuestion ? bookmarkedList.includes(activeQuestion.id) : false;

  return (
    <div className="space-y-6" id="quiz-engine-root">
      {/* Filters configuration header */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-5 md:p-6 space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="font-display font-medium text-white text-base md:text-xl tracking-wider uppercase">Practice Drill Parameters</h2>
            <p className="text-dark-dim text-xs mt-1">Customise your syllabus focus or filter by past errors.</p>
          </div>
          {attemptedList.length > 0 && (
            <button
              onClick={onClearProgress}
              className="text-xs font-mono font-bold text-rose-450 hover:text-rose-400 flex items-center gap-1.5 bg-rose-950/20 hover:bg-rose-950/45 px-3 py-2 rounded border border-rose-900/30 transition-colors cursor-pointer"
              id="quiz-reset-perf-btn"
            >
              <RefreshCw className="h-3 w-3" /> Reset Progress
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Lecture dropdown */}
          <div className="flex flex-col gap-1.5 text-xs">
            <label className="font-mono text-dark-dim font-bold tracking-widest uppercase">Category Focus</label>
            <select
              value={selectedLecture}
              onChange={(e) => setSelectedLecture(e.target.value)}
              className="bg-dark-bg border border-dark-border rounded p-2.5 text-white focus:outline-none focus:border-gold transition-colors font-sans cursor-pointer"
              id="quiz-lecture-select"
            >
              <option value="ALL" className="bg-dark-card">All Course Lectures ({lectureCounts["ALL"]} Qs)</option>
              {Object.keys(lectureCounts).map((key) => {
                if (key === "ALL") return null;
                return (
                  <option key={key} value={key} className="bg-dark-card">
                    {key} ({lectureCounts[key]} Qs)
                  </option>
                );
              })}
            </select>
          </div>

          {/* subset adaptive lists */}
          <div className="flex flex-col gap-1.5 text-xs">
            <label className="font-mono text-dark-dim font-bold tracking-widest uppercase">Subset filter</label>
            <select
              value={filterSubset}
              onChange={(e) => setFilterSubset(e.target.value as any)}
              className="bg-dark-bg border border-dark-border rounded p-2.5 text-white focus:outline-none focus:border-gold transition-colors font-sans cursor-pointer"
              id="quiz-subset-select"
            >
              <option value="ALL" className="bg-dark-card">All Questions</option>
              <option value="UNATTEMPTED" className="bg-dark-card">Unattempted Only</option>
              <option value="INCORRECT" className="bg-dark-card">Incorrectly Solved</option>
              <option value="BOOKMARKED" className="bg-dark-card">Bookmarked Only ({bookmarkedList.length})</option>
            </select>
          </div>

          {/* shuffle */}
          <div className="flex flex-col gap-1.5 text-xs">
            <label className="font-mono text-dark-dim font-bold tracking-widest uppercase">Question Order</label>
            <div className="flex bg-dark-bg rounded p-1 border border-dark-border h-full items-center">
              <button
                onClick={() => setShuffleMode(false)}
                className={`flex-1 py-1.5 font-sans text-xs font-semibold rounded tracking-wider uppercase transition-all cursor-pointer ${
                  !shuffleMode
                    ? "bg-gold-muted/40 text-gold border border-gold/30 shadow-sm"
                    : "text-dark-dim hover:text-white"
                }`}
                id="quiz-order-sequential"
              >
                Sequential
              </button>
              <button
                onClick={() => setShuffleMode(true)}
                className={`flex-1 py-1.5 font-sans text-xs font-semibold rounded tracking-wider uppercase transition-all cursor-pointer ${
                  shuffleMode
                    ? "bg-gold-muted/40 text-gold border border-gold/30 shadow-sm"
                    : "text-dark-dim hover:text-white"
                }`}
                id="quiz-order-shuffle"
              >
                Shuffle
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main active question interface */}
      {activeQuestion ? (
        <div className="space-y-4" id="active-question-card">
          {/* Question metadata row */}
          <div className="flex justify-between items-center text-xs font-mono text-dark-dim bg-dark-card p-3.5 rounded border border-dark-border">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-gold" />
              <span className="font-semibold uppercase tracking-wider">{activeQuestion.lecture}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="uppercase tracking-widest">Question {currentIndex + 1} of {totalFilteredCount}</span>
              <button
                onClick={() => onToggleBookmark(activeQuestion.id)}
                className={`p-1.5 hover:bg-dark-bg rounded transition-colors cursor-pointer ${
                  isBookmarked ? "text-amber-400" : "text-dark-dim hover:text-white"
                }`}
                title={isBookmarked ? "Remove Bookmark" : "Bookmark Question"}
                id="toggle-starred-btn"
              >
                <Star className={`h-4.5 w-4.5 ${isBookmarked ? "fill-current" : ""}`} />
              </button>
            </div>
          </div>

          {/* Question Text block */}
          <div className="bg-dark-card rounded-xl border border-dark-border shadow-xl p-6 md:p-10 space-y-8">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-3 block">Question Citation #{activeQuestion.id}</span>
              <h2 className="font-display text-white text-xl md:text-3xl leading-snug serif-display">
                {activeQuestion.q}
              </h2>
            </div>

            {/* Options grid */}
            <div className="grid grid-cols-1 gap-4.5" id="options-choices-grid">
              {activeQuestion.a.map((opt, oIdx) => {
                let cardStyle = "border-dark-border hover:border-gold hover:bg-gold/5 text-white";
                let bubbleStyle = "border-dark-border text-dark-dim group-hover:border-gold group-hover:text-gold";
                let checkBadge = null;

                if (isAnswered) {
                  const isThisCorrect = oIdx === activeQuestion.c;
                  const isThisSelected = oIdx === selectedAnswer;

                  if (isThisCorrect) {
                    cardStyle = "border-emerald-500 bg-emerald-950/20 text-emerald-250 font-medium";
                    bubbleStyle = "bg-emerald-500 border-emerald-500 text-black font-bold";
                    checkBadge = <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />;
                  } else if (isThisSelected) {
                    cardStyle = "border-rose-500 bg-rose-950/25 text-rose-200 font-medium";
                    bubbleStyle = "bg-rose-500 border-rose-500 text-white font-bold";
                    checkBadge = <AlertTriangle className="h-5 w-5 text-rose-450 shrink-0" />;
                  } else {
                    cardStyle = "opacity-30 border-dark-border/40 text-dark-dim cursor-not-allowed";
                    bubbleStyle = "border-dark-border/40 text-dark-dim/40";
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleOptionClick(oIdx)}
                    disabled={isAnswered}
                    className={`group flex items-center justify-between p-5 rounded border text-left text-xs md:text-sm transition-all duration-200 cursor-pointer ${cardStyle}`}
                    id={`choice-button-${oIdx}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs transition-colors shrink-0 ${bubbleStyle}`}>
                        {["A", "B", "C", "D"][oIdx]}
                      </span>
                      <span className="font-sans leading-relaxed">{opt}</span>
                    </div>
                    {checkBadge}
                  </button>
                );
              })}
            </div>

            {/* Citations/Explanation animations */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#0f1115] border border-dark-border rounded p-5 mt-6 text-xs text-[#d0d0d5] space-y-2.5"
                  id="choice-explanation"
                >
                  <div className="flex items-center gap-2 text-gold font-bold uppercase tracking-wider text-[10px]">
                    <HelpCircle className="h-4 w-4" />
                    <span>Academic Reference & Guidance</span>
                  </div>
                  <p className="leading-relaxed font-sans text-dark-dim italic text-sm">"{activeQuestion.e}"</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center pt-3">
            <button
              onClick={traversePrev}
              disabled={currentIndex === 0}
              className="px-5 py-3 border border-dark-border text-dark-dim bg-dark-card hover:bg-dark-bg hover:text-white hover:border-gold text-xs font-semibold uppercase tracking-widest rounded shadow-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
              id="quiz-prev-question-btn"
            >
              <ArrowLeft className="h-4 w-4" /> Previous Question
            </button>
            <button
              onClick={traverseNext}
              disabled={currentIndex === displayQuestions.length - 1}
              className="px-5 py-3 border border-dark-border text-dark-dim bg-dark-card hover:bg-dark-bg hover:text-white hover:border-gold text-xs font-semibold uppercase tracking-widest rounded shadow-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
              id="quiz-next-question-btn"
            >
              Next Question <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="py-12 bg-dark-card rounded-xl border border-dashed border-dark-border text-center text-dark-dim max-w-sm mx-auto space-y-4 p-6" id="quiz-empty-state">
          <HelpCircle className="h-10 w-10 mx-auto text-gold animate-float" />
          <h3 className="font-semibold text-white text-base">No matched questions</h3>
          <p className="text-xs leading-relaxed text-dark-dim">
            No questions matched your active parameters. Try loosening criteria details above or reset past stats.
          </p>
          <button
            onClick={() => { setSelectedLecture("ALL"); setFilterSubset("ALL"); }}
            className="text-xs font-bold text-black hover:bg-gold-hover bg-gold px-4 py-2 rounded.5 uppercase tracking-wider cursor-pointer"
            id="quiz-reset-filters-btn"
          >
            Clear Active Filter
          </button>
        </div>
      )}
    </div>
  );
}
