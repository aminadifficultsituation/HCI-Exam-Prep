import { useState } from "react";
import { Search, Info, CheckCircle, AlertOctagon, HelpCircle, Layers, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SheetItem {
  id: string;
  num: number;
  title: string;
  desc: string;
  good: string;
  bad: string;
}

const nielsenHeuristics: SheetItem[] = [
  {
    id: "nh1",
    num: 1,
    title: "Visibility of System Status",
    desc: "The design should always keep users informed about what is going on, through appropriate feedback within a reasonable time.",
    good: "A file uploader displaying a progress bar, elapsed time, and speed estimates.",
    bad: "Clicking a 'Pay Now' button with zero visual change or spinner, leaving the user clicking repeatedly."
  },
  {
    id: "nh2",
    num: 2,
    title: "Match Between System and Real World",
    desc: "The system should speak the users' language. Use words, phrases, and concepts familiar to the user, rather than internal jargon.",
    good: "Using an icon of a physical shopping cart for e-commerce or a trash bin for file deletion.",
    bad: "Displaying database table index errors like 'System Error Code: 0x89DF-9A' directly to normal buyers."
  },
  {
    id: "nh3",
    num: 3,
    title: "User Control and Freedom",
    desc: "Users often perform actions by mistake. They need a clearly marked 'emergency exit' to leave the unwanted action without hassle.",
    good: "Providing an 'Undo' button immediately after archiving an email or deleting a row.",
    bad: "Forcing users through a five-step registration form with no 'Cancel' or 'Back' button."
  },
  {
    id: "nh4",
    num: 4,
    title: "Consistency and Standards",
    desc: "Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform conventions.",
    good: "Placing settings/profile in the top-right corner, and using Ctrl+Z for Undo consistently.",
    bad: "Having 'Save' act as a disk save on one page, but acts as 'Send Email' on a secondary menu."
  },
  {
    id: "nh5",
    num: 5,
    title: "Error Prevention",
    desc: "Even better than good error messages is a careful design which prevents a problem from occurring in the first place.",
    good: "Disabling a 'Submit' button until all fields are typed correctly, or showing suggestions when typing search terms.",
    bad: "Letting users type characters into an 'Age' input box, only to crash the database after submitting."
  },
  {
    id: "nh6",
    num: 6,
    title: "Recognition Rather Than Recall",
    desc: "Minimize the user's memory load by making elements, actions, and options visible. Avoid forcing users to remember info across views.",
    good: "Showing a list of 'Recently opened files' or rendering a menu of selectable categories.",
    bad: "Forcing users to type the exact system path name of a document from memory to edit it."
  },
  {
    id: "nh7",
    num: 7,
    title: "Flexibility and Efficiency of Use",
    desc: "Accelerators — unseen by the novice user — may often speed up the interaction for the expert user so that the system can cater to both.",
    good: "Keyboard shortcuts (like Ctrl+C/Ctrl+V), macro command suites, and custom workspace presets.",
    bad: "Forcing power-users to navigate three layers of nested popup dialogs to complete a frequent action."
  },
  {
    id: "nh8",
    num: 8,
    title: "Aesthetic and Minimalist Design",
    desc: "Interfaces should not contain information which is irrelevant or rarely needed. Every extra unit of info competes with the vital content.",
    good: "A Google home page with a centered input box and ample visual white space to focus user attention.",
    bad: "Cramming dozens of ads, rotating banners, and dense, multi-colored gridlines on the center landing panel."
  },
  {
    id: "nh9",
    num: 9,
    title: "Help Diagnose and Recover from Errors",
    desc: "Error messages should be expressed in plain language (no error codes), precisely indicate the problem, and constructively suggest a solution.",
    good: "Message: 'Invalid Email Format. Please ensure it contains @ and a domain name (e.g., mail@example.com)'.",
    bad: "Red screen: 'Fatal Exception in Thread 5. Transaction Rollback failed!'"
  },
  {
    id: "nh10",
    num: 10,
    title: "Help and Documentation",
    desc: "It’s best if the system doesn't need additional explanation. However, it may be necessary to provide documentation to help users complete tasks.",
    good: "A searchable, step-by-step FAQ portal combined with context-sensitive floating tooltips next to complex metrics.",
    bad: "A giant 600-page unsearchable dry PDF loaded onto a slow server that users must comb through for basic fixes."
  }
];

const shneidermanRules: SheetItem[] = [
  {
    id: "sr1",
    num: 1,
    title: "Strive for Consistency",
    desc: "Identical terminology, prompts, menus, and color schemes should be integrated. Consistent actions should be required in similar situations.",
    good: "Using the same blue color for clickable links and gray for disabled buttons across the entire app ecosystem.",
    bad: "Varying button layouts between left-aligned and right-aligned arbitrarily on consecutive pages."
  },
  {
    id: "sr2",
    num: 2,
    title: "Seek Universal Usability",
    desc: "Design for diverse users, accommodating variations in physical ability, computer literacy, age, and cultural backgrounds.",
    good: "Providing custom font scalability, color contrast toggles, screen reader alt tags, and keyboard-only layouts.",
    bad: "Developing an interface that strictly requires a high-performance gaming mouse and color vision to operate."
  },
  {
    id: "sr3",
    num: 3,
    title: "Offer Informative Feedback",
    desc: "For every user action, there should be clear system feedback. For frequent tasks, modest responses; for rare actions, robust responses.",
    good: "A subtle sound click when typing a key, and a double-confirmation modal dialog when deleting an entire database.",
    bad: "Deleting an entire user directory immediately without warning or visual change, leaving the screen looking idle."
  },
  {
    id: "sr4",
    num: 4,
    title: "Design Dialogs to Yield Closure",
    desc: "Sequences of actions should be organized into groups with a beginning, middle, and end. Informative feedback gives users satisfaction.",
    good: "A 'Thank You for Your Order!' summary page at the end of checkout, reassuring the customer the transaction is complete.",
    bad: "A multi-step setup that sends you back to a blank step-1 page after clicking 'Finish', without saving confirmation."
  },
  {
    id: "sr5",
    num: 5,
    title: "Prevent Errors",
    desc: "Limit opportunities for errors. If an error is made, the system should catch it instantly and offer simple, constructive handling.",
    good: "Graying out dates already fully booked on a calendar reservation widget.",
    bad: "Allowing users to type illegal characters in credit card codes and waiting until submit to show error lines."
  },
  {
    id: "sr6",
    num: 6,
    title: "Permit Easy Reversal of Actions",
    desc: "As much as possible, actions should be easily reversible. This relieves anxiety and encourages exploration.",
    good: "Always implementing a robust 'Undo' button or providing trash folders from which items can easily be recovered.",
    bad: "Instant permanent file deletion on a single mouse click with zero undo backups."
  },
  {
    id: "sr7",
    num: 7,
    title: "Keep Users in Control (Support Locus of Control)",
    desc: "Experienced users strongly desire to feel they are in charge of the system, responding to their explicit initiators.",
    good: "Providing customizable settings, manual saving, and allowing advanced users to turn off auto-completions.",
    bad: "Forcing automatic reboots, unexpected visual relocations, or unsolicited music playbacks."
  },
  {
    id: "sr8",
    num: 8,
    title: "Reduce Short-Term Memory Load",
    desc: "Humans have limited short-term memory capacity (7 ± 2 chunks). Accessing information shouldn't require jumping pages back and forth.",
    good: "Keeping previous form inputs visible as users progress, or providing reference summaries on sidebar columns.",
    bad: "Forcing users to memorize code numbers on page 1, which they must manually type into text boxes on page 5."
  }
];

const normanPrinciples: SheetItem[] = [
  {
    id: "np1",
    num: 1,
    title: "Affordances",
    desc: "Perceived and actual properties of an object that suggest how it can be used physically or virtually.",
    good: "A push door containing a flat, wide metal bar; a digital button displaying a rounded elevated drop-shadow.",
    bad: "A door equipped with a physical handle that must be pushed (leading to pulling errors); a flat label looking identical to buttons."
  },
  {
    id: "np2",
    num: 2,
    title: "Signifiers",
    desc: "Any physical or visual signal that highlights where an action should take place (giving direction to the affordance).",
    good: "A glowing colored border flashing around the active input field, or a text label reading 'Click to download file'.",
    bad: "An interactive button hidden inside normal text blocks with zero underlining or color cues to signify clickability."
  },
  {
    id: "np3",
    num: 3,
    title: "Mapping",
    desc: "The physical or visual layout relationship between controls and their actual operational outcomes in the world.",
    good: "Arranging four stove-top knobs in a grid matching the physical layout of the four burners.",
    bad: "Having four knobs positioned in a straight line, leaving users to guess which burner corresponds to which controller."
  },
  {
    id: "np4",
    num: 4,
    title: "Feedback",
    desc: "Sending information back to the user about what action has been completed and what system result has been obtained.",
    good: "A physical button producing an audible tactile click; a software input glowing blue when typing.",
    bad: "A button that doesn't depress or change states, leaving users guessing if their tap registered."
  },
  {
    id: "np5",
    num: 5,
    title: "Constraints",
    desc: "Restricting the physical or logical actions a user can carry out, preventing errors and guiding the correct choices.",
    good: "Formatting a port plug so it only fits in a socket in the correct direction; locking inputs past character size limits.",
    bad: "Allowing cables to plug into unstable sockets incorrectly, damaging hardware components."
  },
  {
    id: "np6",
    num: 6,
    title: "Conceptual Model",
    desc: "Forming a clear, cohesive mental understanding of how a device operates, aligning the user's mental model with the system's true mechanics.",
    good: "A drawing tablet mimicking standard pen-on-paper mechanics with instant line output matching touch coordinates.",
    bad: "An folder interface that uploads items in a queue but hides where they reside inside directories."
  }
];

export default function CheatSheet() {
  const [activeTab, setActiveTab] = useState<"nielsen" | "shneiderman" | "norman">("nielsen");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getActiveList = () => {
    switch (activeTab) {
      case "nielsen":
        return nielsenHeuristics;
      case "shneiderman":
        return shneidermanRules;
      case "norman":
        return normanPrinciples;
    }
  };

  const filteredItems = getActiveList().filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.good.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.bad.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-6" id="cheatsheet-root">
      {/* Intro and Search Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800">
        <h2 className="font-display text-2xl font-semibold tracking-tight">HCI Heuristics & Rules Crib</h2>
        <p className="text-slate-400 mt-1 text-sm">
          Master the golden rules of interaction design. Essential criteria representing Jakob Nielsen, Ben Shneiderman, and Don Norman guidelines.
        </p>

        <div className="mt-4 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search terms, good habits, or mistakes..."
              className="w-full bg-slate-800 text-slate-100 rounded-lg pl-10 pr-4 py-2 text-sm border border-slate-700 focus:outline-none focus:border-sky-500 placeholder:text-slate-500 transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="heuristic-search"
            />
          </div>
          <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700">
            <button
              onClick={() => { setActiveTab("nielsen"); setSearchQuery(""); setExpandedId(null); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                activeTab === "nielsen"
                  ? "bg-sky-500 text-white shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              id="nielsen-tab-btn"
            >
              Nielsen's 10
            </button>
            <button
              onClick={() => { setActiveTab("shneiderman"); setSearchQuery(""); setExpandedId(null); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                activeTab === "shneiderman"
                  ? "bg-sky-500 text-white shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              id="shneiderman-tab-btn"
            >
              Shneiderman's 8
            </button>
            <button
              onClick={() => { setActiveTab("norman"); setSearchQuery(""); setExpandedId(null); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                activeTab === "norman"
                  ? "bg-sky-500 text-white shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              id="norman-tab-btn"
            >
              Norman's Principles
            </button>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="cheatsheet-grid">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                layoutId={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: Math.min(index * 0.03, 0.3) }}
                onClick={() => toggleExpand(item.id)}
                className={`group bg-white rounded-xl p-5 border shadow-sm hover:shadow transition-all duration-200 cursor-pointer ${
                  isExpanded ? "border-sky-400 ring-2 ring-sky-50/50 md:col-span-2" : "border-slate-100 hover:border-slate-300"
                }`}
                id={`card-${item.id}`}
              >
                <div className="flex items-start justify-between">
                  {/* Left Title details */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg flex items-center justify-center font-display font-bold text-sm h-9 w-9 border ${
                      isExpanded ? "bg-sky-500 text-white border-transparent" : "bg-slate-50 text-slate-600 border-slate-100 group-hover:bg-slate-100"
                    }`}>
                      #{item.num}
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-slate-800 text-sm md:text-base group-hover:text-slate-900 transition-colors">
                        {item.title}
                      </h3>
                      <span className="inline-block text-[10px] font-mono font-medium text-slate-400 mt-0.5 tracking-wider uppercase">
                        {activeTab === "nielsen" ? "Jakob Nielsen Heuristic" : activeTab === "shneiderman" ? "Shneiderman Gold Rule" : "Norman Core Principle"}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Info className={`h-4 w-4 ${isExpanded ? "text-sky-500" : "text-slate-300 group-hover:text-slate-400"} transition-colors`} />
                  </div>
                </div>

                <p className="text-slate-600 text-xs md:text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>

                {/* Expaned Good vs Bad examples */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs"
                      onClick={(e) => e.stopPropagation()} // Prevent double trigger
                    >
                      <div className="bg-emerald-50/60 rounded-lg p-3 border border-emerald-100/50">
                        <div className="flex items-center gap-2 text-emerald-800 font-semibold mb-1">
                          <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>HCI Success Habit (Good UX)</span>
                        </div>
                        <p className="text-emerald-700 leading-relaxed font-sans">{item.good}</p>
                      </div>

                      <div className="bg-rose-50/60 rounded-lg p-3 border border-rose-100/50">
                        <div className="flex items-center gap-2 text-rose-800 font-semibold mb-1">
                          <AlertOctagon className="h-4 w-4 text-rose-600 shrink-0" />
                          <span>Common Interface Mistake (Bad UX)</span>
                        </div>
                        <p className="text-rose-700 leading-relaxed font-sans">{item.bad}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isExpanded && (
                  <div className="text-[11px] text-slate-400 font-medium mt-3 flex items-center gap-1">
                    <span>Click to reveal real-world examples</span>
                    <span className="text-sky-500 group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-400 bg-white rounded-xl border border-dashed border-slate-200" id="no-search-results">
            <HelpCircle className="h-8 w-8 mx-auto text-slate-300 mb-2" />
            <p className="text-sm font-medium">No heuristics matched "{searchQuery}"</p>
            <p className="text-xs text-slate-400 mt-1">Try searching for keywords like "consistency", "error", or "undo".</p>
          </div>
        )}
      </div>

      {/* Multidisciplinary Concept Corner */}
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex flex-col md:flex-row gap-4 items-center" id="heuristic-footer">
        <div className="p-3 bg-sky-100 text-sky-700 rounded-full shrink-0">
          <Award className="h-6 w-6" />
        </div>
        <div>
          <h4 className="font-display font-semibold text-slate-800 text-sm">Exam Preparation Tip</h4>
          <p className="text-slate-600 text-xs mt-1 leading-relaxed">
            HCI exams frequently request you to evaluate a buggy screen drawing using Jakob Nielsen's Heuristics or list how you would fix a Gulf of Execution using affordance and feedback design. Open any card above to study comparative designs!
          </p>
        </div>
      </div>
    </div>
  );
}
