import { useState } from "react";
import { Zap, HelpCircle, RefreshCw, Award, Check, AlertTriangle, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Flashcard {
  id: number;
  lecture: string;
  topic: string;
  front: string;
  back: string;
  tip: string;
}

const flashcardsData: Flashcard[] = [
  {
    id: 1,
    lecture: "Lecture 2: Human & Memory",
    topic: "Rods vs Cones",
    front: "What is the primary operational difference between Rods and Cones in human visual perception?",
    back: "Rods are highly sensitive to low light (night vision) and detect motion in the periphery but are colour-blind. Cones resolve fine details and colour vision, highly concentrated in the center fovea.",
    tip: "Remember: 'Cones' = 'Colour'."
  },
  {
    id: 2,
    lecture: "Lecture 2: Human & Memory",
    topic: "Saccades vs Fixations",
    front: "How do 'Saccades' and 'Fixations' coordinate when a user reads text on a computer screen?",
    back: "Saccades are rapid, ballistic eye movements (jumps) during which visual capture is fully blocked. Fixations are static resting points (lasts ~200-600ms) where actual information processing takes place.",
    tip: "Reading is not a smooth slide; it's a series of jumps."
  },
  {
    id: 3,
    lecture: "Lecture 2: Human & Memory",
    topic: "Short-Term Memory (STM)",
    front: "What is George Miller's classic formula for human Short-Term Memory capacity, and what is its constraint?",
    back: "STM is limited to 7 ± 2 chunks of information. Working structures easily leak or decay under cognitive interference or multitasking.",
    tip: "Miller (1956) - 'The Magical Number Seven, Plus or Minus Two'."
  },
  {
    id: 4,
    lecture: "Lecture 2: Human & Memory",
    topic: "LTM: Semantic vs Episodic",
    front: "What is the difference between Semantic Memory and Episodic Memory in Long-Term Memory (LTM)?",
    back: "Semantic memory stores structured general knowledge, rules, facts and language meanings (like 'Ctrl+S saves'). Episodic memory stores chronological personal life events (like 'I took my HCI exam yesterday').",
    tip: "Semantic is facts/language; Episodic is stories/events."
  },
  {
    id: 5,
    lecture: "Lecture 2: Human & Memory",
    topic: "Fitts' Law",
    front: "State the equation for Fitts' Law, and explain what its variable variables represent.",
    back: "MT = a + b * log₂ (2D / W). MT is movement time to reach a target, D is distance to travel, and W is width of the target. Making buttons larger and closer makes target acquisition faster.",
    tip: "Index of Difficulty (ID) is the log portion."
  },
  {
    id: 6,
    lecture: "Lecture 4: Computer",
    topic: "Keyboard Layouts",
    front: "Why does the Dvorak keyboard layout theoretically outperform QWERTY in speed and ergonomics?",
    back: "Dvorak groups high-frequency English vowels and consonants on the home row (the middle row), reducing finger travel distance by up to 60%, boosting speeds, and mitigating muscle fatigue.",
    tip: "QWERTY was made to avoid typewriter jam errors."
  },
  {
    id: 7,
    lecture: "Lecture 5: Interaction",
    topic: "CLI vs GUI Load",
    front: "In cognitive psychology, why does CLI demand higher mental processing than a graphical WIMP interface?",
    back: "CLI relies on active RECALL of precise command syntax from long-term memory. WIMP uses visual lists that rely on simple visual RECOGNITION (requires less cognitive strain).",
    tip: "Recognition is always easier than recall!"
  },
  {
    id: 8,
    lecture: "Lecture 8: Screen Design",
    topic: "Color Usability",
    front: "What is the primary usability guideline regarding using color alone to signal system information?",
    back: "Never use color alone to convey crucial statuses (e.g. green for OK, red for Error) because ~8% of males are color-blind. Always pair color with secondary cues like icons, text, or patterns.",
    tip: "Contrast and redundancy are keys."
  },
  {
    id: 9,
    lecture: "Lecture 9-10: Patterns",
    topic: "Modal Panel Trap",
    front: "When is it appropriate to use a Modal Dialog panel, and why should they be used sparingly?",
    back: "Appropriate only when the application cannot proceed safely without immediate user response (e.g. confirming folder deletion). Sparingly because they interrupt task flow and disable the parent system.",
    tip: "Modal panels lock background inputs."
  },
  {
    id: 10,
    lecture: "Lecture 11: Rules",
    topic: "Nielsen Heuristic #1",
    front: "Explain Jakob Nielsen's first heuristic: 'Visibility of System Status' with an example.",
    back: "The client must always know what the system is doing via quick, clear feedback. Example: A download progress bar displaying percentage completion and current speeds.",
    tip: "Never let the user guess if program is frozen."
  },
  {
    id: 11,
    lecture: "Lecture 12: Prototyping",
    topic: "Wizard of Oz",
    front: "What is a 'Wizard of Oz' evaluation, and what is its primary benefit?",
    back: "A test where users interact with what they think is an autonomous system, but a human developer manually operates outcomes from behind the scenes. It tests interaction assumptions before investing in complex backends.",
    tip: "Named after the movie character pulling hidden levers."
  },
  {
    id: 12,
    lecture: "Lecture 13-14: Mistakes",
    topic: "GUI: Single Radio Button",
    front: "Why is placing an isolated, single radio button on an interactive form considered a major layout slip?",
    back: "Once checked, a radio button cannot be unchecked by clicking it again—it requires an contrasting mutually exclusive partner. Users become trapped with that selection with no self-correct path.",
    tip: "Use a single checkbox instead of a single radio button."
  }
];

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownIds, setKnownIds] = useState<number[]>([]);
  const [reviewIds, setReviewIds] = useState<number[]>([]);

  const card = flashcardsData[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const traverseNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % flashcardsData.length);
    }, 150);
  };

  const traversePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + flashcardsData.length) % flashcardsData.length);
    }, 150);
  };

  const markAsKnown = (id: number) => {
    if (!knownIds.includes(id)) {
      setKnownIds((prev) => [...prev, id]);
      setReviewIds((prev) => prev.filter((i) => i !== id));
    }
    traverseNext();
  };

  const markForReview = (id: number) => {
    if (!reviewIds.includes(id)) {
      setReviewIds((prev) => [...prev, id]);
      setKnownIds((prev) => prev.filter((i) => i !== id));
    }
    traverseNext();
  };

  const resetProgress = () => {
    setKnownIds([]);
    setReviewIds([]);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const progressPercent = Math.round(((currentIndex + 1) / flashcardsData.length) * 100);

  return (
    <div className="space-y-6" id="flashcards-root">
      {/* Header details */}
      <div className="bg-dark-card text-white rounded-xl p-6 shadow-xl border border-dark-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-xl md:text-2xl font-bold tracking-wider uppercase text-white">Active Recall Flashcards</h2>
          <p className="text-dark-dim mt-1.5 text-xs">
            Self-test the ultimate design definitions from the standard HCI syllabus. Press cards to flip.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#0f1115] px-3.5 py-1.5 rounded border border-dark-border text-xs font-mono text-dark-dim">
            Mastered: <span className="text-emerald-400 font-bold">{knownIds.length}</span> / {flashcardsData.length}
          </div>
          <button
            onClick={resetProgress}
            className="p-2 bg-[#0f1115] hover:bg-dark-bg rounded border border-dark-border text-dark-dim hover:text-white transition-colors cursor-pointer"
            title="Reset study statistics"
            id="reset-flashcards-btn"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="max-w-xl mx-auto space-y-4">
        {/* Progress Tracker Bar */}
        <div className="flex items-center justify-between text-xs text-dark-dim font-mono">
          <span>CARD {currentIndex + 1} OF {flashcardsData.length}</span>
          <span className="font-bold uppercase tracking-wider">{progressPercent}% Completed</span>
        </div>
        <div className="w-full h-1 bg-[#0b0c0e] rounded overflow-hidden">
          <div className="h-full bg-gold transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
        </div>

        {/* The Flip Card Container */}
        <div className="relative h-72 select-none" style={{ perspective: "1000px" }} onClick={handleFlip} id="flashcard-interactive-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex + (isFlipped ? "-back" : "-front")}
              initial={{ rotateY: isFlipped ? -90 : 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: isFlipped ? 90 : -90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`absolute inset-0 w-full h-full rounded-xl border p-6 md:p-8 shadow-xl flex flex-col justify-between cursor-pointer transition-all duration-200 ${
                isFlipped
                  ? "bg-dark-card border-gold text-white shadow-sm shadow-gold-glow/10"
                  : "bg-dark-card border-dark-border text-white hover:border-gold/60"
              }`}
            >
              {/* Card Header details */}
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-gold font-mono uppercase tracking-widest text-[9.5px] font-bold">{card.lecture}</span>
                <span className={`px-2.5 py-0.5 rounded border font-sans text-[10px] uppercase font-bold tracking-wider ${isFlipped ? "bg-gold-muted/40 text-gold border-gold/30" : "bg-dark-bg text-dark-dim border-dark-border"}`}>
                  {card.topic}
                </span>
              </div>

              {/* Main Text body */}
              <div className="flex-1 flex flex-col items-center justify-center text-center px-4 my-2">
                {!isFlipped ? (
                  <div className="space-y-4">
                    <p className="font-display font-medium text-base md:text-xl leading-relaxed text-white serif-display">
                      {card.front}
                    </p>
                    <span className="inline-block text-[9px] font-mono text-dark-dim bg-[#0f1115] px-3.5 py-1.5 rounded border border-dark-border uppercase tracking-[0.15em] font-bold">
                      Click to Reveal Answer
                    </span>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="font-sans text-xs md:text-sm leading-relaxed text-slate-200">
                      {card.back}
                    </p>
                    {card.tip && (
                      <p className="text-amber-400 text-xs italic bg-amber-955/20 px-3.5 py-2.5 rounded border border-amber-900/30 mt-2 text-left">
                        💡 Tip: {card.tip}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Card Footer details */}
              <div className="text-[10px] font-mono text-center text-dark-dim uppercase tracking-wider">
                {!isFlipped ? "Tap card to flip" : "Tap card to see question"}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Post-Flip Grading Controllers */}
        <div className="flex items-center justify-between gap-3 mt-4">
          <button
            onClick={traversePrev}
            className="p-3 bg-dark-card text-dark-dim border border-dark-border rounded hover:border-gold hover:text-white active:bg-dark-bg transition-all flex items-center justify-center shadow cursor-pointer"
            id="flashcard-prev-btn"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <div className="flex-1 flex gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); markForReview(card.id); }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded font-sans text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                reviewIds.includes(card.id)
                  ? "bg-amber-955/20 text-amber-400 border border-amber-900/40"
                  : "bg-dark-card text-dark-dim border border-dark-border hover:border-amber-400 hover:text-white"
              }`}
              id="flashcard-repeat-btn"
            >
              <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
              <span>Review Again</span>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); markAsKnown(card.id); }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded font-sans text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                knownIds.includes(card.id)
                  ? "bg-emerald-955/20 text-emerald-450 border border-emerald-900/40"
                  : "bg-gold text-black border-transparent hover:bg-gold-hover shadow-lg shadow-gold/10"
              }`}
              id="flashcard-know-btn"
            >
              <Check className="h-3.5 w-3.5 text-black" />
              <span>Mastered!</span>
            </button>
          </div>

          <button
            onClick={traverseNext}
            className="p-3 bg-dark-card text-dark-dim border border-dark-border rounded hover:border-gold hover:text-white active:bg-dark-bg transition-all flex items-center justify-center shadow cursor-pointer"
            id="flashcard-next-btn"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Progress Tracker grid overview */}
        <div className="grid grid-cols-6 gap-1.5 mt-6 border-t border-dark-border pt-5" id="flashcards-dot-grid">
          {flashcardsData.map((deckItem, idx) => {
            const isKnown = knownIds.includes(deckItem.id);
            const isReview = reviewIds.includes(deckItem.id);
            const isCur = idx === currentIndex;

            return (
              <button
                key={deckItem.id}
                onClick={(() => { setCurrentIndex(idx); setIsFlipped(false); })}
                className={`h-8 rounded text-[10px] font-mono font-bold transition-all border cursor-pointer ${
                  isCur
                    ? "border-gold bg-gold-muted/30 text-gold ring-1 ring-gold/40"
                    : isKnown
                    ? "border-emerald-500/30 bg-emerald-950/20 text-emerald-455"
                    : isReview
                    ? "border-amber-500/30 bg-amber-955/20 text-amber-400"
                    : "border-dark-border bg-dark-bg text-dark-dim hover:border-gold/30 hover:text-white"
                }`}
                title={deckItem.topic}
              >
                {(idx + 1).toString().padStart(2, "0")}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
