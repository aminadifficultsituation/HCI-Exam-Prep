export interface Question {
  id: number;
  lecture: string;
  lectureKey: string;
  q: string;
  a: string[];
  c: number;
  e: string;
}

export const hciQuestions: Question[] = [
  // LECTURE 1: INTRODUCTION
  {
    id: 1,
    lecture: "Lecture 1: Introduction to HCI",
    lectureKey: "L1: Intro",
    q: "What is the primary goal of HCI?",
    a: [
      "To make computers run faster and consume less electricity",
      "Designing interactive systems that support people, making them easy, efficient, and safe",
      "To replace human decision-making with automated algorithms",
      "To minimize hardware manufacturing costs"
    ],
    c: 1,
    e: "Lecture 1 states: The primary goal of Human-Computer Interaction is to design interactive computing systems that support people to carry out activities easily, efficiently, and safely."
  },
  {
    id: 2,
    lecture: "Lecture 1: Introduction to HCI",
    lectureKey: "L1: Intro",
    q: "Which of the following is NOT one of the three criteria for a successful interactive product?",
    a: [
      "Useful (supports desired activities)",
      "Usable (easy to learn and operate)",
      "Used (actually adopted by target users)",
      "Exclusive (only accessible to high-tech environments)"
    ],
    c: 3,
    e: "Lecture 1: Successful products must meet the three pillars: Useful (support required actions), Usable (user-friendly), and Used (actually adopted)."
  },
  {
    id: 3,
    lecture: "Lecture 1: Introduction to HCI",
    lectureKey: "L1: Intro",
    q: "When did the first real Graphical User Interfaces (GUIs) like Xerox Star and Apple Macintosh emerge?",
    a: [
      "Late 1960s with mainframe terminals",
      "Mid 1970s with early hobby kits",
      "The 1980s, driven by office work and personal computers",
      "The late 1990s with the browser wars"
    ],
    c: 2,
    e: "Lecture 1: The decade of GUIs was the 1980s. Xerox Star debuted in 1981, followed by the landmark Apple Macintosh in 1984."
  },
  {
    id: 4,
    lecture: "Lecture 1: Introduction to HCI",
    lectureKey: "L1: Intro",
    q: "HCI studies human-computer interfaces. Which of the following acronyms is historically used interchangeably in slides?",
    a: [
      "MMI (Man-Machine Interaction) or HMI (Human-Machine Interaction)",
      "AI-ML (Artificial Intelligence & Machine Learning)",
      "CPS (Cyber-Physical Architectures)",
      "CLI (Command Layout Interface)"
    ],
    c: 0,
    e: "Lecture 1: HCI, CHI (Computer-Human Interaction), MMI (Man-Machine Interaction), and HMI (Human-Machine Interface) are frequently used interchangeably across scientific literatures."
  },
  {
    id: 5,
    lecture: "Lecture 1: Introduction to HCI",
    lectureKey: "L1: Intro",
    q: "The Florida punch-card ballot (butterfly ballot) of the US 2000 Presidential Election is presented as a classic example of:",
    a: [
      "Excellent mechanical engineering in low-cost components",
      "How critical interface and graphic design defects can change world scale history",
      "The necessity of replacing all voting systems with online web browsers",
      "A database configuration error in voter registration lines"
    ],
    c: 1,
    e: "Lecture 1: The Florida 'Butterfly Ballot' had confusing overlapping targets that misled users into voting for the wrong candidate, demonstrating that design is not just cosmetic—it can alter historical outcomes."
  },
  {
    id: 6,
    lecture: "Lecture 1: Introduction to HCI",
    lectureKey: "L1: Intro",
    q: "Which academic discipline is concerned with the design, evaluation, and implementation of interactive computing systems for human use?",
    a: [
      "Pure Computer Engineering",
      "Human-Computer Interaction (HCI)",
      "Database Systems Management",
      "Discrete Mathematics"
    ],
    c: 1,
    e: "Lecture 1: HCI acts as the multidisciplinary domain at the intersection of psychology, computer science, and engineering focused on interactive system design."
  },
  {
    id: 7,
    lecture: "Lecture 1: Introduction to HCI",
    lectureKey: "L1: Intro",
    q: "What does 'CHI' stand for in the context of human-computer interaction communities?",
    a: [
      "Computer-Human Interaction",
      "Cognitive Hardware Integration",
      "Client Host Interoperability",
      "Core Human Indexing"
    ],
    c: 0,
    e: "Lecture 1: ACM CHI stands for the association group dedicated to Computer-Human Interaction, hosting the premier global conferences."
  },
  {
    id: 8,
    lecture: "Lecture 1: Introduction to HCI",
    lectureKey: "L1: Intro",
    q: "Which historic event is celebrated as 'The Mother of All Demos' presenting key concepts like the mouse, windows, hypertext, and video-conferencing in 1968?",
    a: [
      "The Apple Macintosh Release Keynote",
      "Douglas Engelbart's demonstration of NLS (oN Line System)",
      "The IBM PC announcement",
      "The Netscape IPO"
    ],
    c: 1,
    e: "Lecture 1: In 1968, Douglas Engelbart presented the 'NLS' system displaying the first computer mouse, word processor, linking, and collaborative windows, laying the groundwork for personal computing."
  },
  {
    id: 9,
    lecture: "Lecture 1: Introduction to HCI",
    lectureKey: "L1: Intro",
    q: "According to Lecture 1, why is HCI design inherently an iterative process of evaluation and redesign?",
    a: [
      "To allow developers to bill for more working hours",
      "Because human behavior and cognitive expectations cannot be fully predicted on paper",
      "Because web servers require continuous updates to stay online",
      "Because of the transition from desktop to cloud systems"
    ],
    c: 1,
    e: "Lecture 1: Interface design requires testing, evaluating feedback, and redesigning because developers are not standard users and cannot fully simulate a user's exact cognitive leaps."
  },

  // LECTURE 2: HUMAN & MEMORY
  {
    id: 10,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "Which photoreceptors in the human retina are highly sensitive to low light (dim light) and detect peripheral movement, but are insensitive to color?",
    a: [
      "Cones",
      "Rods",
      "Iris sphincter muscles",
      "Foveal cells"
    ],
    c: 1,
    e: "Lecture 2: Rods are abundant in the periphery of the retina, detect motion and are extremely sensitive to light (night vision), but do not distinguish colors."
  },
  {
    id: 11,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "Which photoreceptors in the retina are responsible for high-acuity color vision, read detail, and are highly concentrated in the fovea?",
    a: [
      "Rods",
      "Cones",
      "Optic blind spot cells",
      "Pupillary receptors"
    ],
    c: 1,
    e: "Lecture 2: Cones read visual details, are responsible for color vision, and are primary in the center of focus (the fovea), operating best in bright light conditions."
  },
  {
    id: 12,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "What is the term for the rapid, ballistic movements of both eyes used when scanning a static screen space or page?",
    a: [
      "Fixations",
      "Saccades",
      "Visual Acuity shifts",
      "Kinesthesis ticks"
    ],
    c: 1,
    e: "Lecture 2: The human eye scans using rapid ballistic jumps called 'saccades'. Information is only actively captured during the static rests between them, which are called 'fixations'."
  },
  {
    id: 13,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "According to screen legibility research cited in Lecture 2, what standard range of font sizes has been shown to be equally legible?",
    a: [
      "4 to 6 points",
      "9 to 12 points",
      "14 to 18 points",
      "20 to 24 points"
    ],
    c: 1,
    e: "Lecture 2: Studies show that standard text font sizes ranging between 9 and 12 points are equally legible to people under standard viewing conditions."
  },
  {
    id: 14,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "The sensory ability to register a sudden speak of your own name across a noisy, crowded room is an example of what attentional mechanism?",
    a: [
      "Fitts' Attentional Drift",
      "Stroop Interference",
      "The Cocktail Party Phenomenon",
      "The Miller Limit"
    ],
    c: 2,
    e: "Lecture 2: The 'Cocktail Party Phenomenon' demonstrates how our auditory system processes broad frequencies in parallel, prioritizing high-importance triggers (like your name) instantly to conscious attention."
  },
  {
    id: 15,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "What is Fitts' Law primarily used to calculate in human-computer interface design?",
    a: [
      "The decay rate of sensory memory structures",
      "The time taken to hit a screen target with a pointing device as a function of target distance and size",
      "The number of colors a normal cone receptor can distinguish before visual fatigue",
      "The physical wear-and-tear of a pointer device"
    ],
    c: 1,
    e: "Lecture 2: Fitts' Law determines target acquisition time (MT) based on distance (D) to travel and width (W) of the target. Making buttons larger and closer reduces selection times."
  },
  {
    id: 16,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "What is the typical storage capacity cap of Short-Term Memory (STM) according to George Miller's classic 1956 paper?",
    a: [
      "2 to 4 words",
      "7 ± 2 chunks",
      "60 random digits",
      "Unlimited size"
    ],
    c: 1,
    e: "Lecture 2: Miller's Law describes STM capacity limit as 7 ± 2 chunks of information. Working memory stores structured blocks (chunks) rather than disjointed units."
  },
  {
    id: 17,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "In list recall tests, people tend to remember the first few items unusually well. What is this psychological phenomenon called?",
    a: [
      "Recency effect",
      "Primacy effect",
      "Interference decay",
      "Stroop effect"
    ],
    c: 1,
    e: "Lecture 2: The 'Primacy Effect' happens because the first items on a list receive more cognitive rehearsing time, transferring them into Long-Term Memory before short-term capacity is saturated."
  },
  {
    id: 18,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "Which type of Long-Term Memory (LTM) stores structured, contextual facts, cultural structures, and standard word semantics, divorced from personal timeline records?",
    a: [
      "Episodic memory",
      "Semantic memory",
      "Sensory register",
      "Kinesthetic memory"
    ],
    c: 1,
    e: "Lecture 2: Semantic memory contains structured records of general knowledge, facts, rules, and word meanings. Episodic memory holds your chronological personal experiences."
  },
  {
    id: 19,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "The 'Stroop Effect' illustrates that reading text is a highly automated behavioral process. What is the classic test for this?",
    a: [
      "Naming the ink colors of written words that conflict with the color names themselves",
      "Stretching cursor buttons until targets are too tiny to click",
      "Repeating numbers backwards under intense pressure",
      "Re-arranging disorganized cards while listening to music"
    ],
    c: 0,
    e: "Lecture 2: When reading a word like 'RED' painted in green ink, naming the ink color is slow and error-prone because word-reading is automatic and interferes with color-coding cognitive processing."
  },
  {
    id: 20,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "Which memory structure captures raw sensory inputs (visual, acoustic, tactile) from the environment and decays in a fraction of a second?",
    a: [
      "Sensory Memory",
      "Working Memory",
      "Long-Term Memory",
      "Declarative database"
    ],
    c: 0,
    e: "Lecture 2: Sensory memory includes iconic (visual) which lasts under 0.5s, and echoic (auditory) memory which lasts ~3-4s. It acts as an unselective buffer for raw inputs."
  },
  {
    id: 21,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "What describes the 'Recency Effect' in serial position evaluations?",
    a: [
      "Remembering items at the middle of a list best",
      "Remembering items at the very end of a list because they are still buffered in active Short-Term Memory",
      "Remembering older childhood events better than yesterday's activities",
      "Confusing similar looking letters with one another"
    ],
    c: 1,
    e: "Lecture 2: The 'Recency Effect' is when the most recently heard items (at the end of a list) are easily recalled because they have not yet been overwritten or decayed in STM."
  },
  {
    id: 22,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "In Don Norman's Cognitive Model, what represents the 'Gulf of Execution'?",
    a: [
      "The discrepancy between the user's objective goals and the actions available to perform in the interface",
      "The speed with which raw electric commands travel through processor logic boards",
      "The duration of system latency after a click registers",
      "The amount of physical space required to move a mouse pointer to the edges"
    ],
    c: 0,
    e: "Lecture 2 / Lecture 11: The Gulf of Execution is the psychological gap between the user's mental goal (e.g., 'save progress') and their command execution actions afforded by the interface."
  },
  {
    id: 23,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "In Don Norman's Cognitive Model, what represents the 'Gulf of Evaluation'?",
    a: [
      "The costs incurred by running user usability testing labs",
      "The difficulty a user experiences in interpreting the physical state of the system to see if their goals were met",
      "Determining the numeric score of an exam",
      "The pixel deviation when measuring pointing accuracy"
    ],
    c: 1,
    e: "Lecture 2 / Lecture 11: The Gulf of Evaluation is the difficulty of translating the screen's visual feedback (e.g., loading spinner or checkmark) into progress understanding relative to the user's mental goal."
  },
  {
    id: 24,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "In Card's Model Human Processor (MHP), what are the three coordinate processing subsystems?",
    a: [
      "Input, Output, Storage",
      "Perceptual, Cognitive, and Motor",
      "Sensory, Rational, and Behavioral",
      "Keyboard, Screen, and Core"
    ],
    c: 1,
    e: "Lecture 2: Card's classic MHP models the user as integration of: Perceptual (gathering signals), Cognitive (calculating responses), and Motor (delivering physical actions)."
  },
  {
    id: 25,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "Fitts' Law is modeled as MT = a + b * log2(2D / W). What does the mathematical term log2(2D / W) represent?",
    a: [
      "Index of Difficulty (ID)",
      "Motor reaction latency constant",
      "Error percentage scale",
      "Processor cycle speed"
    ],
    c: 0,
    e: "Lecture 2: The logarithmic expression log2(2D/W) is the Index of Difficulty (ID), measured in 'bits'. It mathematically encapsulates how target size/distance scale task complexity."
  },
  {
    id: 26,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "Which human sensory input system includes proprioception, kinesthesis, and skin receptors to sense texture, temperature, and body positions?",
    a: [
      "Visual",
      "Haptic (or Somatosensory)",
      "Vestibular",
      "Acoustic"
    ],
    c: 1,
    e: "Lecture 2: Haptic perception covers somatic senses: tactile (skin contact properties) and kinesthetic (position and motion of joints/muscles)."
  },
  {
    id: 27,
    lecture: "Lecture 2: Human & Memory",
    lectureKey: "L2: Cognition",
    q: "Why is human color vision poor at the extreme peripheral borders of the eye's field of view?",
    a: [
      "Because the lens cannot refract colored wavelengths sideways",
      "Because the outer peripheral retina is dominated by rods, containing almost zero color-sensitive cones",
      "Because peripheral light does not strike the pupil",
      "Because peripheral vision is entirely processed by ears"
    ],
    c: 1,
    e: "Lecture 2: Cones are densely grouped inside the fovea (center). The periphery lacks cones and is packed with rods, causing broad movements to be spotted quickly without color definition."
  },

  // LECTURE 4: THE COMPUTER
  {
    id: 28,
    lecture: "Lecture 4: The Computer",
    lectureKey: "L4: Computer",
    q: "What does Moore's Law state about microprocessor evolution?",
    a: [
      "Hardware weight halves every 10 years",
      "Processor performance and transistor counts double approximately every 18 months to 2 years",
      "Software screens get twice as bright every 3 years",
      "Software features outgrow CPU capabilities within 6 months"
    ],
    c: 1,
    e: "Lecture 4: Gordon Moore predicted that integrated circuit transistor density (and thus speed/processing capacity) doubles every 18-24 months."
  },
  {
    id: 29,
    lecture: "Lecture 4: The Computer",
    lectureKey: "L4: Computer",
    q: "Which alternative physical keyboard layout places common vowels on the left and core consonants on the right of the home row to minimize finger movement?",
    a: [
      "QWERTY",
      "Dvorak",
      "AZERTY",
      "Alphabetic sequential"
    ],
    c: 1,
    e: "Lecture 4: The Dvorak layout places high-frequency keys on the central home row, reducing finger travel distance, resulting in up to 15% typing acceleration and reducing strain."
  },
  {
    id: 30,
    lecture: "Lecture 4: The Computer",
    lectureKey: "L4: Computer",
    q: "Why was the QWERTY keyboard layout purposefully laid out in its standard mismatched fashion originally?",
    a: [
      "To maximize ergonomic comfort of finger extensions",
      "To prevent mechanical arms of original typewriters from jamming when typists typed adjacent letters too quickly",
      "Because of secret military cryptology protocols",
      "To match the alphabet progression of the German phonetic registry"
    ],
    c: 1,
    e: "Lecture 4: QWERTY's design separated highly frequent letter pairs physically. This intentionally slowed typists down slightly and avoided typewriter arm collisions."
  },
  {
    id: 31,
    lecture: "Lecture 4: The Computer",
    lectureKey: "L4: Computer",
    q: "Which type of printer uses high-voltage electrostatic charges to attract toner powder particles onto paper before fusing them with heat?",
    a: [
      "Dot-matrix printer",
      "Ink-jet printer",
      "Laser printer",
      "Thermal wax printer"
    ],
    c: 2,
    e: "Lecture 4: Laser printers operate via static electricity charges on an organic photoconductor drum to pick up powdered carbon ink (toner), melting it to the sheet."
  },
  {
    id: 32,
    lecture: "Lecture 4: The Computer",
    lectureKey: "L4: Computer",
    q: "Which input pointing device tracks absolute coordinates by resting a physical stylus on a sensory matrix pad, widely used by illustrators?",
    a: [
      "Optical Mice",
      "Graphics Tablet / Digitizer",
      "Trackball",
      "Isotonic joystick"
    ],
    c: 1,
    e: "Lecture 4: Unlike mice that record relative displacement, a graphics tablet provides absolute coordinate mapping: clicking the top-left corner of the tablet translates to the top-left screen pixel."
  },
  {
    id: 33,
    lecture: "Lecture 4: The Computer",
    lectureKey: "L4: Computer",
    q: "What defines an 'Isometric' joystick, like the red pointing stick embedded in ThinkPad keyboards?",
    a: [
      "It moves freely and stays where you pull it",
      "It does not move physically, but detects pressure applied to it to control velocity",
      "It computes directions using ultrasonic sound reflections",
      "It operates exclusively on batteries"
    ],
    c: 1,
    e: "Lecture 4: Isometric pointing sticks do not displace. Instead, they translate applied touch vector force directly into cursor translation speed."
  },
  {
    id: 34,
    lecture: "Lecture 4: The Computer",
    lectureKey: "L4: Computer",
    q: "In screen display hardware, what is 'Dot Pitch'?",
    a: [
      "The duration a mouse button is held down",
      "The distance between adjacent phosphor or color sub-pixels of the same color on a screen",
      "The degree of viewing angle tilt",
      "The refresh frequency of pixels in hertz"
    ],
    c: 1,
    e: "Lecture 4: Dot Pitch is the diagonal distance between identical sub-pixels. A smaller dot pitch yields sharper, cleaner image projections."
  },
  {
    id: 35,
    lecture: "Lecture 4: The Computer",
    lectureKey: "L4: Computer",
    q: "Which specialized input device involves a small cluster of buttons allowing letters or whole words to be typed in by pressing chord combinations?",
    a: [
      "Chord Keyboard",
      "Flexible membrane plate",
      "Virtual laser projector",
      "Dvorak pad"
    ],
    c: 0,
    e: "Lecture 4: Chord keyboards allow inputs via finger combinations (chords). Highly portable and fast once learned, but exhibit high initial training barriers."
  },
  {
    id: 36,
    lecture: "Lecture 4: The Computer",
    lectureKey: "L4: Computer",
    q: "Which memory layer within computer processing caches holds data currently in active execution and is lost instantly when electricity cuts off?",
    a: [
      "ROM (Read Only Memory)",
      "RAM (Random Access Memory) / Volatile Working Memory",
      "Solid State Drives (SSD)",
      "Magnetic Tape Backups"
    ],
    c: 1,
    e: "Lecture 4: RAM stores system tasks undergoing immediate processing, executing with microsecond access times but requiring stable current to retain state."
  },

  // LECTURE 5: INTERACTION STYLES
  {
    id: 37,
    lecture: "Lecture 5: Interaction Styles",
    lectureKey: "L5: Styles",
    q: "Which interaction style requires high user training but offers fast execution speeds, macro scripting, and minimal visual environment layout?",
    a: [
      "Menu-driven software",
      "Form fill-in registers",
      "Command Line Interfaces (CLI)",
      "Direct Manipulation"
    ],
    c: 2,
    e: "Lecture 5: CLIs impose a high cognitive recall load because commands are not shown on screen. However, they are highly power-user optimized due to speed and scripting."
  },
  {
    id: 38,
    lecture: "Lecture 5: Interaction Styles",
    lectureKey: "L5: Styles",
    q: "What does the historical UI paradigm acronym WIMP stand for?",
    a: [
      "Windows, Icons, Menus, Pointers",
      "Websites, Images, Media, Protocols",
      "Widgets, Indicators, Mouse, Programs",
      "Wireless, Input, Modems, Packets"
    ],
    c: 0,
    e: "Lecture 5: WIMP summarizes the desktop workspace template: Windows (contain files), Icons (files/folders drawings), Menus (action lines), and Pointers (cursor focus)."
  },
  {
    id: 39,
    lecture: "Lecture 5: Interaction Styles",
    lectureKey: "L5: Styles",
    q: "Why do Pie/Radial Menus (where options spread out in a circle) outperform traditional pull-down menus in Fitts' Law calculations?",
    a: [
      "They contain fewer colors and require less CPU RAM",
      "Every menu item is exactly equidistant from the starting cursor point, and targets have a large angular click width",
      "They allow typing search strings to skip menus",
      "They are only accessible by keyboard shortcuts"
    ],
    c: 1,
    e: "Lecture 5: Radial menus make target depth minimal and uniform. The mouse only needs a short displacement in any radial direction, maximizing selection speeds."
  },
  {
    id: 40,
    lecture: "Lecture 5: Interaction Styles",
    lectureKey: "L5: Styles",
    q: "In classic WIMP systems, what is the specific term used for reducing a viewport window into a small, passive launcher representation?",
    a: [
      "Iconifying (or Minimizing)",
      "Closing",
      "Deselection buffering",
      "Maximizing"
    ],
    c: 0,
    e: "Lecture 5: 'Iconifying' means shrinking a viewport down to an icon. It frees up desktop real estate while retaining the active program's background memory."
  },
  {
    id: 41,
    lecture: "Lecture 5: Interaction Styles",
    lectureKey: "L5: Styles",
    q: "In GUI coordinates, what is the 'Hotspot' of a pointer?",
    a: [
      "The physical tracking ball inside an old optical mechanical mouse",
      "The specific pixel coordinates of the cursor image that registers click intersections",
      "The area on the screen that flashes red during an error",
      "The most frequently clicked quadrant of the screen"
    ],
    c: 1,
    e: "Lecture 5: The Hotspot is the active coordinate point of a pointer (e.g., the tip of the arrow icon, or the center of a crosshair), defining where a click fires."
  },
  {
    id: 42,
    lecture: "Lecture 5: Interaction Styles",
    lectureKey: "L5: Styles",
    q: "Which cognitive barrier explains why novice users struggle with Command Line Interfaces (CLI)?",
    a: [
      "They require heavy mouse movement",
      "They rely almost entirely on RECALL from memory rather than visual RECOGNITION of elements",
      "They cannot handle alphanumeric files",
      "They cause visual overstimulation"
    ],
    c: 1,
    e: "Lecture 5: CLI software forces the user to recall precise syntax rules with zero visual assists, contrasting with GUIs which present recognizable visual options."
  },
  {
    id: 43,
    lecture: "Lecture 5: Interaction Styles",
    lectureKey: "L5: Styles",
    q: "Which interaction style is characterized by continuous representation of objects, physical actions (dragging/resizing), and rapid, reversible incremental effects?",
    a: [
      "Form Fill-In",
      "Command Line",
      "Direct Manipulation",
      "Natural Language Dialog"
    ],
    c: 2,
    e: "Lecture 5: Defined by Ben Shneiderman, Direct Manipulation features visible representations of objects, physical actions instead of syntax, and immediate undoable feedback."
  },
  {
    id: 44,
    lecture: "Lecture 5: Interaction Styles",
    lectureKey: "L5: Styles",
    q: "Which menu type stays completely hidden until the user clicks a header on a permanent horizontal menu bar, unfolding downwards?",
    a: [
      "Pop-up context menu",
      "Pull-down menu",
      "Fall-back radial circle",
      "Command prompt list"
    ],
    c: 1,
    e: "Lecture 5: Pull-down menus fold down from a persistent bar at the top of the interface, preserving screen workspace until explicitly clicked."
  },
  {
    id: 45,
    lecture: "Lecture 5: Interaction Styles",
    lectureKey: "L5: Styles",
    q: "Which contextual menu style overrides page spacing to appear right where the user cursor is currently positioned when activated (typically by right-clicking)?",
    a: [
      "Pop-up Context Menu",
      "Tear-off menu bar",
      "Cascading sidebar directory",
      "Alphanumeric field"
    ],
    c: 0,
    e: "Lecture 5: Pop-up context menus provide immediate action options relevant to the targeted item right beneath the click point, saving pointer transit time."
  },
  {
    id: 46,
    lecture: "Lecture 5: Interaction Styles",
    lectureKey: "L5: Styles",
    q: "What does 'WYSIWYG' refer to in modern interactive layout editors?",
    a: [
      "Where Your Sockets Interface With Gateway Protocols",
      "What You See Is What You Get",
      "When Your Screen Is Wholly Yellow-Green",
      "With Your System In Word Yield Grouping"
    ],
    c: 1,
    e: "Lecture 5: WYSIWYG signifies that the document appearance on the screen perfectly matches the final production output (printed sheet or built page)."
  },
  {
    id: 47,
    lecture: "Lecture 5: Interaction Styles",
    lectureKey: "L5: Styles",
    q: "Which interaction style is highly structured, mimics paper questionnaires, and is optimal for gathering personal profiles or tax forms?",
    a: [
      "Direct Manipulation",
      "CLI prompt lines",
      "Form-Fill-In",
      "Natural Language query"
    ],
    c: 2,
    e: "Lecture 5: Form-Fill-In presents clear fields, check-boxes, and options, facilitating systematic input. It is easy to learn but is dependent on layout clarity."
  },
  {
    id: 48,
    lecture: "Lecture 5: Interaction Styles",
    lectureKey: "L5: Styles",
    q: "Which interaction design style allows users to type standard conversational requests (e.g., 'What is my bank balance?') and expects artificial intelligence matching?",
    a: [
      "Menu Selection",
      "Form fields",
      "Natural Language / Chat Interaction",
      "Direct spatial manipulation"
    ],
    c: 2,
    e: "Lecture 5: Natural Language interaction allows users to use their existing verbal habits directly, though it suffers from ambiguity and user expectation inflation."
  },
  {
    id: 49,
    lecture: "Lecture 5: Interaction Styles",
    lectureKey: "L5: Styles",
    q: "Select a major limitation of Direct Manipulation systems:",
    a: [
      "They make undoing actions very difficult",
      "They can consume significant screen real estate and are less efficient for mass macro automation compared to CLIs",
      "They force users to memorize obscure keywords",
      "They fail on graphical color displays"
    ],
    c: 1,
    e: "Lecture 5: Direct Manipulation can consume broad screen portions, require extensive manual mouse movements, and lack macro ease for heavy automation."
  },
  {
    id: 50,
    lecture: "Lecture 5: Interaction Styles",
    lectureKey: "L5: Styles",
    q: "What is a 'Tear-Off' menu in legacy window layouts?",
    a: [
      "A menu that deletes its options once selected",
      "A dropdown menu that can be dragged away from its header anchor to become a freestanding toolbox window",
      "A menu that has corrupted visual code",
      "A menu restricted strictly to mobile phones"
    ],
    c: 1,
    e: "Lecture 5: Tear-off menus allow elements to be pulled off from menu bars into floating boxes, ideal for repeated accessibility of tools."
  },

  // LECTURE 8: SCREEN DESIGN
  {
    id: 51,
    lecture: "Lecture 8: Screen Design",
    lectureKey: "L8: Design",
    q: "The design rule 'Things that are logically connected should be physically grouped together' represents which interface pillar?",
    a: [
      "Skins and themes",
      "Grouping and structure",
      "Contrast and luminance",
      "Keyboard traversal"
    ],
    c: 1,
    e: "Lecture 8: Grouping and structure mandates using spatial proximity, borders, or negative space to visually indicate when controls share common data roles."
  },
  {
    id: 52,
    lecture: "Lecture 8: Screen Design",
    lectureKey: "L8: Design",
    q: "How should a column of decimal numbers be structured inside a database reading grid for maximum human scanning readability?",
    a: [
      "Fully aligned to the left margins",
      "Justified with wide spaces between chars",
      "Aligned vertically at the decimal points",
      "Alternating center and right margins"
    ],
    c: 2,
    e: "Lecture 8: Numbers with decimal parts must always align at their decimal point, allowing eyes to evaluate order of magnitude in microseconds."
  },
  {
    id: 53,
    lecture: "Lecture 8: Screen Design",
    lectureKey: "L8: Design",
    q: "What is the ultimate 'Golden Rule' of interface design stated in Lecture 8?",
    a: [
      "Use as many colors as possible to keep menus exciting",
      "Understand your materials (the capabilities of both computers and humans)",
      "Always develop for the lowest computing screen resolution",
      "Avoid using any empty white space on screen layouts"
    ],
    c: 1,
    e: "Lecture 8: Design is about compromise. The golden rule is: Understand your materials (knowing your computer performance limits and human cognitive limits)."
  },
  {
    id: 54,
    lecture: "Lecture 8: Screen Design",
    lectureKey: "L8: Design",
    q: "Affordances correspond to the physical or perceived properties of an object that:",
    a: [
      "Suggest or indicate how that specific object should be operated",
      "Increase the financial cost of producing systems",
      "Ensure web code is accessible in foreign languages",
      "Measure target acquisition accuracy in milliseconds"
    ],
    c: 0,
    e: "Lecture 8: Popularized by J.J. Gibson and Don Norman, affordances define what interactions are possible. A button 'affords' pushing; a physical slider 'affords' dragging."
  },
  {
    id: 55,
    lecture: "Lecture 8: Screen Design",
    lectureKey: "L8: Design",
    q: "What does 'Localization' entail in global product design?",
    a: [
      "Calculating the user's continuous coordinate location via satellite APIs",
      "Adapting software resources, cultural representations, language strings, and date/currency formats for specific target regions",
      "Forcing the application to compile solely on local computer environments",
      "Dividing variables into localized memory cells"
    ],
    c: 1,
    e: "Lecture 8: Localization goes beyond translation; it adapts graphics, logic flow, numerical conventions, and layouts to fit cultural expectations of target users."
  },
  {
    id: 56,
    lecture: "Lecture 8: Screen Design",
    lectureKey: "L8: Design",
    q: "What is 'White Space' (or Negative Space) in layout design, and what is its role?",
    a: [
      "Unused background space, used to separate groups, chunk content, and give human eyes a focusing rest",
      "An error condition where stylesheet files fail to load",
      "Bright borders placed around active buttons",
      "The zone where typing text is strictly blocked"
    ],
    c: 0,
    e: "Lecture 8: White space is not 'wasted' space. It organizes visual blocks, guides the structural hierarchy of a view, and reduces cognitive overwhelm."
  },
  {
    id: 57,
    lecture: "Lecture 8: Screen Design",
    lectureKey: "L8: Design",
    q: "According to eye-tracking research on Western users scanning textual layouts, what are the two common reading path patterns?",
    a: [
      "Circular and spiral progressions",
      "Z-Pattern (for visual cards) and F-Pattern (for text blocks)",
      "Right-to-left vertical columns",
      "Random scattered hop patterns"
    ],
    c: 1,
    e: "Lecture 8: Users browse dense articles in an 'F' pattern (reads top head, then minor line, then skims down). They scan land pages in a 'Z' flow."
  },
  {
    id: 58,
    lecture: "Lecture 8: Screen Design",
    lectureKey: "L8: Design",
    q: "Which typographical alignment should generally be avoided for long, multi-line blocks of reading text?",
    a: [
      "Left-aligned (ragged right)",
      "Center-aligned",
      "Fully justified with variable spaces",
      "Right-aligned"
    ],
    c: 1,
    e: "Lecture 8: Center-alignment scrambles the starting point of every line, making long-form reading tiring because eyes must find the start position of each new row."
  },
  {
    id: 59,
    lecture: "Lecture 8: Screen Design",
    lectureKey: "L8: Design",
    q: "What is 'Skeuomorphism' in interface aesthetics?",
    a: [
      "Coding with strict functional type constraints",
      "A design style that mimics physical world materials, textures, shadows, and objects (e.g., a wood-grain vinyl skin for a music mixer)",
      "Using abstract mathematical polygons",
      "A layout consisting entirely of monospace words"
    ],
    c: 1,
    e: "Lecture 8: Skeuomorphic design replicates familiar physical textures (leather, metal, paper, wood) in digital screens to help users leverage real-world familiarity."
  },
  {
    id: 60,
    lecture: "Lecture 8: Screen Design",
    lectureKey: "L8: Design",
    q: "Why is conveying crucial system states solely via color changes (e.g., green for OK, red for emergency) considered a critical screen design defect?",
    a: [
      "Because it consumes extra CPU cycles",
      "Because millions of color-blind individuals cannot perceive the transition, requiring secondary cues like symbols, icons, or text",
      "Because screen lightbulbs wear out faster",
      "Because colored pixels are too expensive to display"
    ],
    c: 1,
    e: "Lecture 8: Roughly 8% of males suffer from color vision deficits. Cues must combine color with high-contrast shapes, icons, or descriptive words to remain accessible."
  },
  {
    id: 61,
    lecture: "Lecture 8: Screen Design",
    lectureKey: "L8: Design",
    q: "For fast form visual scanning, where should input field labels be aligned relative to their respective input fields?",
    a: [
      "Right-aligned to the far side of the page",
      "Directly above the input field (top-aligned)",
      "Centered inside the bottom bounds",
      "Intertwined throughout the textbox border"
    ],
    c: 1,
    e: "Lecture 8: Top-aligned labels require minimal eye shifts (saccades) to look back-and-forth between label and input box, speeding up completion times."
  },
  {
    id: 62,
    lecture: "Lecture 8: Screen Design",
    lectureKey: "L8: Design",
    q: "In typography, what is 'Counter'?",
    a: [
      "The database variable counting visitor numbers",
      "The white space fully or partially enclosed by a letter's glyph stroke (like the inside of 'o', 'A', or 'd')",
      "The line thickness of capital letterheads",
      "The spacing padding between rows"
    ],
    c: 1,
    e: "Lecture 8 / Lecture 13: Typography defines 'counter' as the open space inside a letterform itself. Maintaining open counters preserves legibility in small text sizes."
  },
  {
    id: 63,
    lecture: "Lecture 8: Screen Design",
    lectureKey: "L8: Design",
    q: "Which type of font family (e.g., Arial, Inter) lacks small serif strokes at the ends of character lines and are preferred for small standard body text on screen viewports?",
    a: [
      "Serif fonts",
      "Sans-serif fonts",
      "Display Cursive scripts",
      "Gothic Fraktur type"
    ],
    c: 1,
    e: "Lecture 8: Sans-serif fonts render cleanly at small sizes on pixel screens, whereas serif lines can become blurry or hard to resolve at low resolutions."
  },
  {
    id: 64,
    lecture: "Lecture 8: Screen Design",
    lectureKey: "L8: Design",
    q: "Which layout design rule ensures that identical options and workflows behave the same way across every app view, matching user expectations?",
    a: [
      "Visual balance",
      "Contrast ratio",
      "Consistency",
      "Absolute density"
    ],
    c: 2,
    e: "Lecture 8 / Lecture 11: Consistency reduces cognitive load by letting users transfer knowledge across different portions of the application landscape easily."
  },

  // LECTURE 9-10: PATTERNS
  {
    id: 65,
    lecture: "Lecture 9-10: Interaction Patterns",
    lectureKey: "L9-10: Patterns",
    q: "Which human-centric UI pattern fulfills the user's urge to 'accomplish or verify something immediately' within the first seconds of loading an app?",
    a: [
      "Habituation",
      "Two-Panel Selector",
      "Instant Gratification",
      "Prospective memory buffer"
    ],
    c: 2,
    e: "Lecture 9-10: The Instant Gratification pattern provides a direct, low-friction visual success experience upon loading the system, building long-term engagement."
  },
  {
    id: 66,
    lecture: "Lecture 9-10: Interaction Patterns",
    lectureKey: "L9-10: Patterns",
    q: "Allowing a user to pause a length-intensive workflow (like an application draft), exit, and re-launch later from the exact save point is known as:",
    a: [
      "Instant Gratification",
      "Reentrance (or Resume Capability)",
      "Safe Trial Exploration",
      "Sequence Mapping"
    ],
    c: 1,
    e: "Lecture 9-10: Reentrance respects the user's prospective memory and timeline disruptions, allowing them to exit and safely restart drafts without data loss."
  },
  {
    id: 67,
    lecture: "Lecture 9-10: Interaction Patterns",
    lectureKey: "L9-10: Patterns",
    q: "Keyboard shortcuts like Ctrl+S (Save) or Ctrl+Z (Undo) must be consistently integrated to support what cognitive physiological mechanism?",
    a: [
      "Instant feedback latency",
      "Decimal number adjustments",
      "Habituation (building muscle reflex actions)",
      "Sensory register acceleration"
    ],
    c: 2,
    e: "Lecture 9-10: Consistent mechanical mappings allow actions to transition from deliberate cognitive effort to automatic motor reflexes (habituation)."
  },
  {
    id: 68,
    lecture: "Lecture 9-10: Interaction Patterns",
    lectureKey: "L9-10: Patterns",
    q: "Which navigational pattern displays a linear list of steps with a clear 'You are here' indicator at the top of a checkout funnel?",
    a: [
      "Spoke & Hub",
      "Sequence Map",
      "Two-Panel Selector",
      "Breadcrumbs list"
    ],
    c: 1,
    e: "Lecture 9-10: A Sequence Map visually outlines a multi-stage workflow, providing orientation on left/current/upcoming tasks, reducing completion anxiety."
  },
  {
    id: 69,
    lecture: "Lecture 9-10: Interaction Patterns",
    lectureKey: "L9-10: Patterns",
    q: "What is the primary role of 'Breadcrumbs' styled navigators usually seen below header banners?",
    a: [
      "To show a history of all URL coordinates clicked during a session",
      "To map out the hierarchical path of the current category within the site's overall folder architecture",
      "To indicate database transaction latency",
      "To present list of alert windows"
    ],
    c: 1,
    e: "Lecture 9-10: Breadcrumbs show hierarchical depth, e.g., 'Home > Textbooks > Computer Science > HCI', allowing users to jump back up to parent nodes."
  },
  {
    id: 70,
    lecture: "Lecture 9-10: Interaction Patterns",
    lectureKey: "L9-10: Patterns",
    q: "The 'Hub & Spoke' pattern (a central home dashboard branching to separate dedicated task modes) is highly optimal for what context?",
    a: [
      "Multi-monitor command stations",
      "Compact screen mobile devices where multitasking space is limited",
      "Paper sketch prototypes",
      "Expert command-line tools"
    ],
    c: 1,
    e: "Lecture 9-10: Hub & Spoke isolates focus. Mobile users jump into a task ('spoke'), complete it, and return to 'hub' home, ensuring solid spatial grounding."
  },
  {
    id: 71,
    lecture: "Lecture 9-10: Interaction Patterns",
    lectureKey: "L9-10: Patterns",
    q: "What characterizes a 'Modal Panel' (or Modal Dialog window) in interactive layouts?",
    a: [
      "It runs in the background silently",
      "It takes over the workspace, blocking interaction with the main viewport until explicitly closed by the user",
      "It is restricted solely to presenting 3D modeling shapes",
      "It automatically changes background colors"
    ],
    c: 1,
    e: "Lecture 9-10: A modal panel disables the parent system beneath it. It should be used sparingly, when the program cannot proceed safely without immediate user response."
  },
  {
    id: 72,
    lecture: "Lecture 9-10: Interaction Patterns",
    lectureKey: "L9-10: Patterns",
    q: "In layout composition rules, what does 'Diagonal Balance' ask designers to perform?",
    a: [
      "Position all visual assets strictly on the left border",
      "Balance visual density and visual weight by placing elements in the upper-left and lower-right quadrants",
      "Rotate text boxes by 45 degrees",
      "Equally distribute light colors around middle cells"
    ],
    c: 1,
    e: "Lecture 9-10: Diagonal Balance mirrors standard Western viewing (starts top-left, terminates bottom-right), aligning interface elements with natural eye travel."
  },
  {
    id: 73,
    lecture: "Lecture 9-10: Interaction Patterns",
    lectureKey: "L9-10: Patterns",
    q: "Which navigational layout relies on grouping directory categories on the left pane and showing matching detail elements on the right pane?",
    a: [
      "Hub and Spoke",
      "Sequence map",
      "Two-Panel Selector (or Master-Detail)",
      "Overlay screen"
    ],
    c: 2,
    e: "Lecture 9-10: Two-Panel Selectors (Master-Detail) are prevalent in mail clients and settings apps, allowing rapid switching without losing structural state."
  },
  {
    id: 74,
    lecture: "Lecture 9-10: Interaction Patterns",
    lectureKey: "L9-10: Patterns",
    q: "In mobile design, what is the 'One-Window Drilldown' pattern?",
    a: [
      "Spawning dozens of floating sub-windows as the user navigates",
      "Keeping the interface strictly within one frame and replacing its contents entirely as the user travels deeper",
      "Restricting the software to run only on desktop platforms",
      "Deleting previous inputs automatically"
    ],
    c: 1,
    e: "Lecture 9-10: Mobile screens lack canvas for overlapping frames. One-Window Drilldown swaps viewport content in-place with a clear 'Back' navigation gesture."
  },
  {
    id: 75,
    lecture: "Lecture 9-10: Interaction Patterns",
    lectureKey: "L9-10: Patterns",
    q: "How does the 'Preferences / Settings Panel' pattern protect the main user interface from becoming visual noise?",
    a: [
      "By deleting unused variables completely",
      "By placing secondary parameters and rare configurations inside a dedicated panel, keeping active workspaces clean",
      "By forcing users to log in before typing text",
      "By disabling color variations on background containers"
    ],
    c: 1,
    e: "Lecture 9-10: Isolating complex configurations to a modular panel keeps the main screen clean, lowering cognitive load for everyday usage."
  },
  {
    id: 76,
    lecture: "Lecture 9-10: Interaction Patterns",
    lectureKey: "L9-10: Patterns",
    q: "What is the core benefit of the 'Remembered State' design pattern?",
    a: [
      "It requires users to write down password records on paper",
      "It preserves user scroll depths, text drafts, and selections when they revisit a page, preventing frustration",
      "It makes the computer run faster",
      "It translates English terms to French"
    ],
    c: 1,
    e: "Lecture 9-10: Remembered State prevents cognitive friction. If a user returns to a long list, preserving their scroll position prevents tedious backtracking."
  },
  {
    id: 77,
    lecture: "Lecture 9-10: Interaction Patterns",
    lectureKey: "L9-10: Patterns",
    q: "Which pattern mandates that users can always close a process, cancel a setup, or cancel edits at any point without negative consequences?",
    a: [
      "Modal trap",
      "Escaping (or Emergency Exit)",
      "Instant reward",
      "Two-panel partition"
    ],
    c: 1,
    e: "Lecture 9-10 / Lecture 11: A core pattern is 'Escaping/Emergency Exit'. Users need a clear, risk-free exit option (like Cancel or Escape keys) to feel in control."
  },
  {
    id: 78,
    lecture: "Lecture 9-10: Interaction Patterns",
    lectureKey: "L9-10: Patterns",
    q: "What does are pattern term 'Safe Exploration' imply?",
    a: [
      "Hiring private security for administrative offices",
      "Allowing users to interact with buttons, menus, and views without fear of corrupting state or triggering errors (e.g., via sandbox trials or Undo support)",
      "Locking down files so users can verify but never click elements",
      "Restricting software use purely to corporate intranets"
    ],
    c: 1,
    e: "Lecture 9-10: Safe Exploration builds confidence. Interactive trials, easily accessible 'Undo' buttons, and sandbox modes foster learning-by-doing."
  },
  {
    id: 79,
    lecture: "Lecture 9-10: Interaction Patterns",
    lectureKey: "L9-10: Patterns",
    q: "What is visual 'Habituation' in user behavior?",
    a: [
      "Changing the app colors daily to keep users awake",
      "The reflex of executing tasks automatically without conscious deliberation because of a highly consistent mechanical layout",
      "Forgetting a password after 5 minutes of inactivity",
      "Having eye strains when looking at screen displays"
    ],
    c: 1,
    e: "Lecture 9-10: When a standard shortcut (like CMD+Z) or button placement stays unchanged, we complete it via spatial habituation (muscle memory), lowering mental strain."
  },
  {
    id: 80,
    lecture: "Lecture 9-10: Interaction Patterns",
    lectureKey: "L9-10: Patterns",
    q: "Which design pattern is used to handle long directory indexes by loading segmented chunks of data, such as page blocks?",
    a: [
      "Reentrance folders",
      "Pagination or Infinite Scroll",
      "Two-Panel drilldowns",
      "Cascading models"
    ],
    c: 1,
    e: "Lecture 9-10: Segmenting enormous datasets via Pagination (page numbers) or infinite loading provides focus boundaries and prevents memory degradation."
  },

  // LECTURE 11: DESIGN RULES
  {
    id: 81,
    lecture: "Lecture 11: Design Rules & Heuristics",
    lectureKey: "L11: Rules",
    q: "Which category of design rules has the highest authority level but the most bounded, narrow application spectrum?",
    a: [
      "Design Principles",
      "Design Guidelines",
      "Design Standards (e.g., ISO, OS UI standards)",
      "Visual Patterns"
    ],
    c: 2,
    e: "Lecture 11: Standards possess high authority (mandated by corporate contracts or ISO rules) but are heavily narrow for specific platform guidelines."
  },
  {
    id: 82,
    lecture: "Lecture 11: Design Rules & Heuristics",
    lectureKey: "L11: Rules",
    q: "What is the first heuristic in Jakob Nielsen's famous 10 Usability Heuristics?",
    a: [
      "Flexibility and efficiency of use",
      "User control and freedom",
      "Visibility of System Status",
      "Error prevention"
    ],
    c: 2,
    e: "Lecture 11: Heuristic #1 is Visibility of System Status: The system should always keep users informed about what is going on, through timely appropriate feedback."
  },
  {
    id: 83,
    lecture: "Lecture 11: Design Rules & Heuristics",
    lectureKey: "L11: Rules",
    q: "According to Ben Shneiderman's 8 Golden Rules, the system should actively strive to:",
    a: [
      "Increase long-term data files",
      "Reduce short-term memory load (relying on recognition over recall)",
      "Always spawn multiple overlapping windows",
      "Avoid providing feedback for simple tasks"
    ],
    c: 1,
    e: "Lecture 11: Shneiderman's Rule #8 states: Reduce short-term memory load. Interfaces should be kept simple, and information should remain visible where possible."
  },
  {
    id: 84,
    lecture: "Lecture 11: Design Rules & Heuristics",
    lectureKey: "L11: Rules",
    q: "Don Norman's Principles suggest that a successful user-interaction design must bridge the:",
    a: [
      "Gaps of Speed and Resolution",
      "Gulfs of Execution and Evaluation",
      "Spaces of Input processing and Database writing",
      "Tensions between Graphic Artists and Code Developers"
    ],
    c: 1,
    e: "Lecture 11: Norman proposes that design must minimize the cognitive efforts required to bridge: formulation of action (Execution) and state assessment (Evaluation)."
  },
  {
    id: 85,
    lecture: "Lecture 11: Design Rules & Heuristics",
    lectureKey: "L11: Rules",
    q: "Under Jakob Nielsen's heuristics, what does 'Consistency and Standards' mandate?",
    a: [
      "Every program must look identical to Microsoft Word",
      "Users should not have to wonder whether different words, situations, or actions mean the same thing in your application",
      "Color choices must be restricted to grayscale",
      "System responses must occur in under 1 millisecond"
    ],
    c: 1,
    e: "Lecture 11: Nielsen Heuristic #4 (Consistency) mandates standardizing words, behaviors, and styles so the user does not have to learn custom dialects for every screen."
  },
  {
    id: 86,
    lecture: "Lecture 11: Design Rules & Heuristics",
    lectureKey: "L11: Rules",
    q: "Which implementation matches Jakob Nielsen's critical heuristic of 'Error Prevention'?",
    a: [
      "Providing a long, technical error message explaining how database index tables crashed",
      "Disabling the 'Submit Form' button until all required text boxes have valid entries",
      "Telling the user 'An error occurred' without explaining what happened",
      "Forcing page reloads when validation fails"
    ],
    c: 1,
    e: "Lecture 11: Usability improves by preventing slip conditions in advance—such as keeping input submit buttons locked until inputs pass structural boundaries."
  },
  {
    id: 87,
    lecture: "Lecture 11: Design Rules & Heuristics",
    lectureKey: "L11: Rules",
    q: "What characterizes a 'Design Guideline' compared to a 'Design Standard'?",
    a: [
      "Guidelines has low authority but highly versatile, wide-open application",
      "Guidelines must be strictly compiled in computer code",
      "Guidelines carries absolute legal weight",
      "Guidelines are exclusively written by government panels"
    ],
    c: 0,
    e: "Lecture 11: Guidelines are suggestory, low-authority tools featuring flexible application scopes. Standards are authoritative, strict templates."
  },
  {
    id: 88,
    lecture: "Lecture 11: Design Rules & Heuristics",
    lectureKey: "L11: Rules",
    q: "Which interface feature supports Jakob Nielsen's heuristic of 'Recognition rather than Recall'?",
    a: [
      "Force users to type precise file paths into terminal lines",
      "Providing a history checklist of recently opened files or search auto-completions",
      "Showing an abstract error code (e.g., Error 0x803F)",
      "Hiding navigation menus behind multiple taps"
    ],
    c: 1,
    e: "Lecture 11: Presenting a choice to select (Recognition) lowers cognitive burden compared to forcing spelling of paths from memory (Recall)."
  },
  {
    id: 89,
    lecture: "Lecture 11: Design Rules & Heuristics",
    lectureKey: "L11: Rules",
    q: "Under Shneiderman's rules, what does 'Offer Informative Feedback' imply?",
    a: [
      "Providing detailed annual analytics reports on user logins",
      "Matching every user interaction with instant, appropriate notification of system execution (like click responses or status checks)",
      "Letting users email reviews to the product authors",
      "Allowing customized background themes"
    ],
    c: 1,
    e: "Lecture 11: For frequent minor clicks, minor indicators suffice. For major rare commands (e.g., deleting folders), prominent dialogs are required."
  },
  {
    id: 90,
    lecture: "Lecture 11: Design Rules & Heuristics",
    lectureKey: "L11: Rules",
    q: "Shneiderman's Golden Rules recommend 'Support Locus of Control'. What does this mean?",
    a: [
      "Making sure the main server is securely protected from hacking",
      "Ensuring that the user feels they are the primary initiator of system actions, not the system forcing actions upon them",
      "Excluding keyboard shortcuts to control focus points",
      "Restricting system access solely to local administrators"
    ],
    c: 1,
    e: "Lecture 11: Users hate feeling controlled by software. Giving power users shortcuts, options, and full steering control increases comfort and reduces friction."
  },
  {
    id: 91,
    lecture: "Lecture 11: Design Rules & Heuristics",
    lectureKey: "L11: Rules",
    q: "Which mechanic directly implements Shneiderman's golden rule 'Permit Easy Reversal of Actions'?",
    a: [
      "Disabling the 'Back' click completely",
      "Providing an active 'Undo' feature, allowing riskless experimentation",
      "Deleting history logs automatically",
      "Creating double confirmation prompts for every simple edit"
    ],
    c: 1,
    e: "Lecture 11: Easy Reversal (Undo) relieves user anxiety, encouraging active, confident interaction because errors do not trigger terminal data disasters."
  },

  // LECTURE 12: PROTOTYPING
  {
    id: 92,
    lecture: "Lecture 12: Prototyping",
    lectureKey: "L12: Proto",
    q: "What is the defining characteristic of a Low-Fidelity prototype?",
    a: [
      "It is built in production code with minor features blocked",
      "It uses a medium unlike the final product (e.g., paper sketches, storyboards) to test overall sequence flow cheaply and quickly",
      "It has sluggish display rendering latency",
      "It operates solely on old hardware"
    ],
    c: 1,
    e: "Lecture 12: Low-fidelity prototypes use cheap materials (paper, cards) and are fast to make, allowing teams to scrap concepts easily and iterate on structural flow."
  },
  {
    id: 93,
    lecture: "Lecture 12: Prototyping",
    lectureKey: "L12: Proto",
    q: "What distinguishes a 'Horizontal' prototype?",
    a: [
      "A mockup designed only for wide panoramic televisions",
      "A prototype that shows the broad range of system features, screens, and functions, but without depth or background logic",
      "A prototype made entirely of horizontal scrolling text lines",
      "A prototype that takes over half the screen area"
    ],
    c: 1,
    e: "Lecture 12: Horizontal prototypes demonstrate width (context and range of menu structures) but omit internal computation or database writing (lack depth)."
  },
  {
    id: 94,
    lecture: "Lecture 12: Prototyping",
    lectureKey: "L12: Proto",
    q: "What does the 'Wizard of Oz' prototyping evaluation technique involve?",
    a: [
      "Simulating interface inputs using colorful visual animations and sound effects",
      "An evaluation style where a user interacts with a mockup while a hidden developer manually feeds back matching outputs behind the scenes",
      "An automated test script that replaces human testing",
      "A high-fidelity 3D rendering of the interface graphics"
    ],
    c: 1,
    e: "Lecture 12: In Wizard of Oz, users believe the computer is smart and autonomous. In reality, a human operator simulates intelligence from behind a screen partition."
  },
  {
    id: 95,
    lecture: "Lecture 12: Prototyping",
    lectureKey: "L12: Proto",
    q: "Which prototyping methodology aims to continuously evolve a basic mock design step-by-step into the final production deployment system?",
    a: [
      "Rapid Throw-away prototyping",
      "Evolutionary prototyping",
      "Storyboard sketches",
      "Paper mockups"
    ],
    c: 1,
    e: "Lecture 12: Evolutionary prototyping starts with a basic, workable core which is tested and fleshed out incrementally, graduating to the final released system."
  },
  {
    id: 96,
    lecture: "Lecture 12: Prototyping",
    lectureKey: "L12: Proto",
    q: "What characterizes a 'Vertical' prototype?",
    a: [
      "It displays layouts vertically for mobile smartphones",
      "It implements highly detailed, high-fidelity production-ready logic for a selective, narrow slice of application functions",
      "It works exclusively in terminal CLI consoles",
      "It has zero user-interactive visual elements"
    ],
    c: 1,
    e: "Lecture 12: Vertical prototypes go deep on a specific, narrow feature set (e.g., full database save loop for one section), ignoring other components completely."
  },
  {
    id: 97,
    lecture: "Lecture 12: Prototyping",
    lectureKey: "L12: Proto",
    q: "What is a major risk of introducing high-fidelity coded prototypes too early in the product design lifecycle?",
    a: [
      "They are paper-based and tear easily",
      "Users focus on visual styling (fonts/colors) rather than basic structural flow, and developers become emotionally resistant to making changes",
      "They require high electricity to run",
      "They cannot handle alphanumeric data inputs"
    ],
    c: 1,
    e: "Lecture 12: When code looks fully rendered, users focus on typographic cosmetics, and developers find it painful to scrap hundreds of lines of work, trapping bad layouts."
  },
  {
    id: 98,
    lecture: "Lecture 12: Prototyping",
    lectureKey: "L12: Proto",
    q: "In HCI requirements gathering and design phases, what is a 'Storyboard'?",
    a: [
      "A technical document detailing API databases",
      "A chronological sequence of graphical sketches depicting how a user navigates screens to finish a task",
      "A presentation speech given to stakeholders",
      "An animation frame library"
    ],
    c: 1,
    e: "Lecture 12: Storyboards adapt movie-making layouts to trace user flows, mapping interactions as narratives across contextual sequences."
  },
  {
    id: 99,
    lecture: "Lecture 12: Prototyping",
    lectureKey: "L12: Proto",
    q: "What defines a 'Throw-away' (or Rapid) prototype?",
    a: [
      "A prototype built purely to learn or validate specifications, which is discarded entirely once core knowledge is obtained",
      "A program that deletes user accounts automatically",
      "A poorly built software release that has massive errors",
      "A prototype consisting simply of trash bin icons"
    ],
    c: 0,
    e: "Lecture 12: Throw-away prototyping aims to clarify requirements. Once the design learnings are identified, the raw files are thrown away and re-coded cleanly."
  },
  {
    id: 100,
    lecture: "Lecture 12: Prototyping",
    lectureKey: "L12: Proto",
    q: "What does visual and behavioral 'Fidelity' represent in UI prototypes?",
    a: [
      "The degree of similarity and behavioral accuracy compared to the eventual deployed system",
      "The duration spent coding the layout",
      "The cost of licenses for design softwares",
      "The number of times a prototype crashed during testing"
    ],
    c: 0,
    e: "Lecture 12: Fidelity covers visual polish, responsive dynamics, and dataset accuracy, ranging from low (sketches on paper) to high (compiled code)."
  },

  // LECTURE 13-14: GUI MISTAKES
  {
    id: 101,
    lecture: "Lecture 13-14: GUI Mistakes",
    lectureKey: "L13-14: Slips",
    q: "Placing a single, isolated radio button on a form is considered a critical interface design mistake because:",
    a: [
      "It is too tiny to click on mobile",
      "Once selected, it can never be deselected back to its empty state by the user without refreshing the page",
      "Radio buttons cannot process text data",
      "It violates color legibility standards"
    ],
    c: 1,
    e: "Lecture 13-14: Radio buttons denote mutually exclusive sets. An isolated button behaves as a toxic toggle trap: once checked, users can never undo their input."
  },
  {
    id: 102,
    lecture: "Lecture 13-14: GUI Mistakes",
    lectureKey: "L13-14: Slips",
    q: "In tabbed dialogue layouts, what are 'Dancing Tabs'?",
    a: [
      "Tabs that play audio file prompts",
      "Multi-row tabs where selecting a rear tab shifts its row to the front, altering the spatial configuration of the interface and disorienting users",
      "Animated icons that flash continuously",
      "Tabs restricted exclusively to music player viewports"
    ],
    c: 1,
    e: "Lecture 13-14: Dancing Tabs shift rows when clicked, breaking muscle memory maps. Tabs must maintain fixed positions so users do not lose track after switching."
  },
  {
    id: 103,
    lecture: "Lecture 13-14: GUI Mistakes",
    lectureKey: "L13-14: Slips",
    q: "Using active-looking text box containers to show strictly read-only or calculated system labels is a mistake because:",
    a: [
      "It slows down webpage load times",
      "It misleads users into believing the values can be edited, leading them to click and attempt to type inside them in vain",
      "It increases system background processes",
      "It causes security breaches in input databases"
    ],
    c: 1,
    e: "Lecture 13-14: Interactive housings signify input actions. If data is read-only, present it as static labels, never as active-looking textbox containers."
  },
  {
    id: 104,
    lecture: "Lecture 13-14: GUI Mistakes",
    lectureKey: "L13-14: Slips",
    q: "Why is leaving forms with entirely blank blanks instead of sensible defaults considered a common GUI slip?",
    a: [
      "Because it reduces user spelling practices",
      "Because sensible defaults save crucial visual lookup, typing time, and guide the correct parameters",
      "Because blank textboxes occupy more pixel width",
      "Because defaults increase typing errors"
    ],
    c: 1,
    e: "Lecture 13-14: Pre-populating dropdowns and inputs with the most common defaults (e.g., country code or current date) speeds up workflows significantly."
  },
  {
    id: 105,
    lecture: "Lecture 13-14: GUI Mistakes",
    lectureKey: "L13-14: Slips",
    q: "Trying to solve poor usability by rushing to decorate a poorly structured program at the end of development is famously compared in Lecture 13 to:",
    a: [
      "Building a high palace on soft sand dunes",
      "Putting lipstick on a bulldog",
      "Sailing empty waters without compass bearings",
      "Painting a cracked building with bright colors"
    ],
    c: 1,
    e: "Lecture 13-14 quotes: 'End-of-development usability fixes are like putting lipstick on a bulldog.' Usability must be designed structurally, not cosmetically."
  },
  {
    id: 106,
    lecture: "Lecture 13-14: GUI Mistakes",
    lectureKey: "L13-14: Slips",
    q: "What is a 'Myopic Menu' in GUI layout systems?",
    a: [
      "Menus that trigger pop-up warnings continuously",
      "Menus that only display choices valid at this exact millisecond and conceal invalid options completely, making the layout look jumpy and unpredictable",
      "Menus designed for near-sighted individuals",
      "Sidebars containing too many search elements"
    ],
    c: 1,
    e: "Lecture 13-14: Showing and hiding menu options arbitrarily causes visual jitter. Strive instead to disable (gray out) invalid options to preserve the user's spatial expectation."
  },
  {
    id: 107,
    lecture: "Lecture 13-14: GUI Mistakes",
    lectureKey: "L13-14: Slips",
    q: "What is 'Visual Noise' in screen layouts?",
    a: [
      "The hum produced by mechanical components",
      "An excess of active borders, contrasting gridlines, mismatched colors, and flashing elements that drowns out actual content",
      "A database reading conflict",
      "Displaying letters with overly large fonts"
    ],
    c: 1,
    e: "Lecture 13-14: Excessive visual weight from thick grids, nested boxes, and aggressive outlines distract from content and exhaust the human perceptual registry."
  },
  {
    id: 108,
    lecture: "Lecture 13-14: GUI Mistakes",
    lectureKey: "L13-14: Slips",
    q: "Why are completely 'Mystery Meat' un-labeled buttons (buttons showing an abstract icon with no text labels or alt descriptions) considered a GUI slip?",
    a: [
      "Because they require more graphic rendering card bandwidth",
      "Because users cannot reliably guess unknown abstract icons, raising exploration fear and error risks",
      "Because they consume more touchscreen space",
      "Because they are dark-mode incompatible"
    ],
    c: 1,
    e: "Lecture 13-14: Abstract icons are ambiguous. Always pair icons with descriptive labels, tooltips, or text to reduce the user's trial-and-error burden."
  },
  {
    id: 109,
    lecture: "Lecture 13-14: GUI Mistakes",
    lectureKey: "L13-14: Slips",
    q: "What defines the 'Form-Fill Jam' mistake in screen layouts?",
    a: [
      "Cramming dozens of mismatched input fields and settings onto a single massive, cluttered dialog screen without tab structures or layout progression",
      "A bug causing web browser tabs to crash",
      "Forcing databases to reject alphanumeric characters",
      "Not styling submit margins"
    ],
    c: 0,
    e: "Lecture 13-14: Presenting an endless field grid without visual nesting or a multi-step workflow creates immediate cognitive fatigue and user drop-offs."
  },
  {
    id: 110,
    lecture: "Lecture 13-14: GUI Mistakes",
    lectureKey: "L13-14: Slips",
    q: "What is a hazard of 'Poor Contrast' typography (e.g., light grey body text on a white card background)?",
    a: [
      "It requires more electrical battery consumption",
      "It severely impairs readability, forcing eyes to strain and excluding users with low visual acuity",
      "It crashes standard browser engines",
      "It forces serif lines to look blocky"
    ],
    c: 1,
    e: "Lecture 13-14: Clean typography relies on strong contrast ratios (at least 4.5:1 for body copy). Low contrast limits legibility, violating core usability needs."
  }
];
