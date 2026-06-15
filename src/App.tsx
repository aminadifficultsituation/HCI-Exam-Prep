import { useState, useEffect } from "react";
import { BookOpen, Trophy, Zap, Sliders, Home, GraduationCap, Grid, Info, Trash2 } from "lucide-react";
import Dashboard from "./components/Dashboard";
import QuizEngine from "./components/QuizEngine";
import MockExam from "./components/MockExam";
import Flashcards from "./components/Flashcards";
import FittsSandbox from "./components/FittsSandbox";
import CheatSheet from "./components/CheatSheet";

type Tab = "dashboard" | "quiz" | "mock" | "flashcards" | "fitts" | "cheatsheet";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [drillLectureKey, setDrillLectureKey] = useState<string | null>(null);

  // Persistence lists
  const [attemptedList, setAttemptedList] = useState<number[]>([]);
  const [correctList, setCorrectList] = useState<number[]>([]);
  const [bookmarkedList, setBookmarkedList] = useState<number[]>([]);

  // Load from LocalStorage
  useEffect(() => {
    const rawAttempted = localStorage.getItem("hci_attempted_list");
    const rawCorrect = localStorage.getItem("hci_correct_list");
    const rawBookmarked = localStorage.getItem("hci_bookmarked_list");

    if (rawAttempted) setAttemptedList(JSON.parse(rawAttempted));
    if (rawCorrect) setCorrectList(JSON.parse(rawCorrect));
    if (rawBookmarked) setBookmarkedList(JSON.parse(rawBookmarked));
  }, []);

  // Update LocalStorage on change
  const saveAttempted = (list: number[]) => {
    setAttemptedList(list);
    localStorage.setItem("hci_attempted_list", JSON.stringify(list));
  };

  const saveCorrect = (list: number[]) => {
    setCorrectList(list);
    localStorage.setItem("hci_correct_list", JSON.stringify(list));
  };

  const saveBookmarked = (list: number[]) => {
    setBookmarkedList(list);
    localStorage.setItem("hci_bookmarked_list", JSON.stringify(list));
  };

  // Recording results from Quiz
  const handleRecordAnswer = (questionId: number, isCorrect: boolean) => {
    if (!attemptedList.includes(questionId)) {
      saveAttempted([...attemptedList, questionId]);
    }

    if (isCorrect) {
      if (!correctList.includes(questionId)) {
        saveCorrect([...correctList, questionId]);
      }
    } else {
      if (correctList.includes(questionId)) {
        saveCorrect(correctList.filter((id) => id !== questionId));
      }
    }
  };

  // Bookmarking
  const handleToggleBookmark = (questionId: number) => {
    if (bookmarkedList.includes(questionId)) {
      saveBookmarked(bookmarkedList.filter((id) => id !== questionId));
    } else {
      saveBookmarked([...bookmarkedList, questionId]);
    }
  };

  // Launching specialized topic drill
  const handleStartDrill = (lectureKey: string | null) => {
    setDrillLectureKey(lectureKey);
    setActiveTab("quiz");
  };

  // Clear student records
  const handlePurgeRecords = () => {
    if (window.confirm("Are you sure you want to delete your study attempts, star tags, and accuracy scores? This cannot be undone.")) {
      setAttemptedList([]);
      setCorrectList([]);
      setBookmarkedList([]);
      localStorage.removeItem("hci_attempted_list");
      localStorage.removeItem("hci_correct_list");
      localStorage.removeItem("hci_bookmarked_list");
    }
  };

  // Navigation config
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "quiz", label: "Practice Drill", icon: BookOpen },
    { id: "mock", label: "Timed Exam", icon: Trophy },
    { id: "flashcards", label: "Recall Decks", icon: Zap },
    { id: "fitts", label: "Fitts' law Lab", icon: Sliders },
    { id: "cheatsheet", label: "HCI Cheat Sheet", icon: Grid },
  ];

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col antialiased text-[#e0e0e0]" id="app-main-layout">
      {/* Top Brand Banner Header */}
      <header className="bg-dark-bg border-b border-dark-border sticky top-0 z-40 px-4 md:px-8 py-4 shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-gold flex items-center justify-center rounded-sm shrink-0 bg-dark-card">
              <span className="text-gold font-bold text-xl serif-display font-display">H</span>
            </div>
            <div>
              <span className="font-display font-bold text-white tracking-[0.2em] uppercase text-sm md:text-base leading-none block">
                HCI Exam Simulator
              </span>
              <span className="text-[10px] font-mono text-dark-dim font-bold uppercase tracking-widest mt-1 block">
                Advanced Human-Computer Interaction | 2026
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            {/* Quick clean action */}
            {(attemptedList.length > 0 || bookmarkedList.length > 0) && (
              <button
                onClick={handlePurgeRecords}
                title="Wipe study metrics"
                className="p-2 text-dark-dim hover:text-rose-400 hover:bg-rose-950/30 rounded-lg transition-colors border border-transparent hover:border-rose-950"
                id="purge-system-progress-btn"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            )}
            
            <div className="text-right hidden sm:block">
              <div className="text-[10px] text-dark-dim uppercase tracking-widest font-mono font-bold">Score Accuracy</div>
              <div className="text-base font-display text-gold">
                {attemptedList.length > 0 ? `${Math.round((correctList.length / attemptedList.length) * 100)}%` : "0.0%"}
              </div>
            </div>
            <div className="h-8 w-px bg-dark-border hidden sm:block"></div>
            <div className="text-right">
              <div className="text-[10px] text-dark-dim uppercase tracking-widest font-mono font-bold">Total Progress</div>
              <div className="text-base font-display text-white">
                {attemptedList.length} <span className="text-dark-dim text-xs">/ 110 Qs</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Core View Area */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex flex-col md:flex-row pb-12 gap-6 p-4 md:p-8">
        {/* Navigation Sidebar */}
        <aside className="shrink-0 w-full md:w-56" id="app-nav-container">
          {/* Scrollable layout for quick mobile access */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-1.5 pb-2 md:pb-0 scrollbar-none border-b md:border-b-0 md:space-y-2 border-dark-border">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isCur = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as Tab);
                    if (item.id !== "quiz") {
                      setDrillLectureKey(null); // Reset single topic locks of quiz
                    }
                  }}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded text-xs tracking-wider uppercase font-semibold whitespace-nowrap transition-all border shrink-0 ${
                    isCur
                      ? "bg-gold-muted/40 border-gold text-gold font-bold shadow-sm shadow-gold-glow"
                      : "bg-dark-card border-dark-border text-dark-dim hover:border-gold/30 hover:text-white"
                  }`}
                  id={`nav-tab-button-${item.id}`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${isCur ? "text-gold" : "text-dark-dim"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Dynamic Canvas Container */}
        <main className="flex-grow flex-1 min-w-0" id="app-canvas-container">
          {activeTab === "dashboard" && (
            <Dashboard
              onStartQuiz={handleStartDrill}
              onSetTab={setActiveTab}
              attemptedList={attemptedList}
              correctList={correctList}
              bookmarkedList={bookmarkedList}
            />
          )}

          {activeTab === "quiz" && (
            <QuizEngine
              initialLectureKey={drillLectureKey}
              attemptedList={attemptedList}
              correctList={correctList}
              bookmarkedList={bookmarkedList}
              onRecordAnswer={handleRecordAnswer}
              onToggleBookmark={handleToggleBookmark}
              onSetTab={setActiveTab}
              onClearProgress={() => {
                saveAttempted([]);
                saveCorrect([]);
              }}
            />
          )}

          {activeTab === "mock" && <MockExam />}

          {activeTab === "flashcards" && <Flashcards />}

          {activeTab === "fitts" && <FittsSandbox />}

          {activeTab === "cheatsheet" && <CheatSheet />}
        </main>
      </div>

      {/* Footer details */}
      <footer className="shrink-0 border-t border-dark-border bg-dark-sidebar/50 p-4 text-center text-[9px] text-dark-dim uppercase tracking-widest mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex gap-4">
            <span>Mode: Simulation & Prep</span>
            <span>Difficulty: Standard Syllabus</span>
            <span>ID: HCI-EXAM-9920</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gold font-semibold">Active Encryption: Secure</span>
            <span>v3.1.0-STABLE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
