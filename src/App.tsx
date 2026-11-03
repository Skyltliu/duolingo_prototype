import { useState, type ReactNode } from "react"

type Screen = "home" | "practice" | "review" | "explanation" | "retry" | "complete" | "leaderboard" | "profile"

type IconName = "home" | "dumbbell" | "trophy" | "profile" | "flame" | "heart" | "gem" | "book" | "message" | "headphones" | "clock" | "close" | "check" | "x" | "question" | "chevron" | "bulb" | "star" | "bolt" | "flag"

const COLORS = {
  green: "#58cc02",
  blue: "#1cb0f6",
  red: "#ff4b4b",
  yellow: "#ffc800",
}

function Icon({
  name,
  size = 24,
  className = "",
}: {
  name: IconName
  size?: number
  className?: string
}) {
  const paths: Record<IconName, ReactNode> = {
    home: (
      <>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10v10h13V10M9 20v-6h6v6" />
      </>
    ),
    dumbbell: (
      <>
        <path d="M7 8v8M4 10v4M17 8v8M20 10v4M7 12h10" />
      </>
    ),
    trophy: (
      <>
        <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
        <path d="M8 6H4v2a3 3 0 0 0 4 3M16 6h4v2a3 3 0 0 1-4 3M12 13v4M8 20h8M9 17h6" />
      </>
    ),
    profile: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    flame: (
      <path d="M13.5 2.5c.5 4-2.5 5-1.5 8 1-1 2-2.5 2-4 3 2 5 5 4 9a6.5 6.5 0 1 1-12.5-3.5c.6-2.2 2.4-4.1 4.5-5.5-.2 2.5.7 3.8 2 4.5-.5-3 1.5-4.5 1.5-8.5Z" />
    ),
    heart: (
      <path d="M20.8 5.8a5 5 0 0 0-7.1 0L12 7.5l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-8.1a5 5 0 0 0 0-7.1Z" />
    ),
    gem: <path d="m12 3 7 5-7 13L5 8l7-5Zm-7 5h14M9 8l3 13 3-13M9 8l3-5 3 5" />,
    book: (
      <>
        <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5Z" />
        <path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5Z" />
      </>
    ),
    message: (
      <>
        <path d="M4 5h16v12H9l-5 4V5Z" />
        <path d="M8 9h8M8 13h5" />
      </>
    ),
    headphones: (
      <>
        <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 13h4v7H6a2 2 0 0 1-2-2v-5ZM20 13h-4v7h2a2 2 0 0 0 2-2v-5Z" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    close: <path d="m6 6 12 12M18 6 6 18" />,
    check: <path d="m5 12 4.5 4.5L19 7" />,
    x: <path d="m7 7 10 10M17 7 7 17" />,
    question: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.7 9a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1.2.9-1.2 1.7M12 17h.01" />
      </>
    ),
    chevron: <path d="m9 5 7 7-7 7" />,
    bulb: (
      <>
        <path d="M8.5 15.5A6 6 0 1 1 15.5 15.5c-.9.6-1.5 1.4-1.5 2.5h-4c0-1.1-.6-1.9-1.5-2.5Z" />
        <path d="M10 21h4M12 2V.5M4.9 4.9 3.8 3.8M19.1 4.9l1.1-1.1" />
      </>
    ),
    star: (
      <path d="m12 2.5 2.8 5.8 6.4.9-4.6 4.5 1.1 6.3-5.7-3-5.7 3 1.1-6.3-4.6-4.5 6.4-.9L12 2.5Z" />
    ),
    bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
    flag: <path d="M5 22V3M5 4h12l-2 4 2 4H5" />,
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
    >
      {paths[name]}
    </svg>
  )
}

function Owl({ celebration = false }: { celebration?: boolean }) {
  return (
    <div
      className={`owl-wrap ${celebration ? "owl-celebrate" : ""}`}
      aria-label="Friendly green owl"
    >
      <svg viewBox="0 0 180 150" role="img">
        <path
          d="M35 55 22 22l35 18M145 55l13-33-35 18"
          fill="#58cc02"
          stroke="#46a302"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M31 73c0-32 26-55 59-55s59 23 59 55v35c0 23-24 35-59 35s-59-12-59-35V73Z"
          fill="#58cc02"
        />
        <path
          d="M46 79c0-25 19-39 44-39s44 14 44 39c0 25-19 39-44 39S46 104 46 79Z"
          fill="#89e219"
        />
        <ellipse cx="66" cy="71" rx="24" ry="27" fill="white" />
        <ellipse cx="114" cy="71" rx="24" ry="27" fill="white" />
        <circle cx="70" cy="73" r="10" fill="#3c3c3c" />
        <circle cx="110" cy="73" r="10" fill="#3c3c3c" />
        <circle cx="73" cy="69" r="3" fill="white" />
        <circle cx="113" cy="69" r="3" fill="white" />
        <path d="m90 78-11 9 11 9 11-9-11-9Z" fill="#ffc800" />
        <path
          d={celebration ? "M66 111q24 18 48 0" : "M76 108q14 9 28 0"}
          fill="none"
          stroke="#3c3c3c"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M32 98 9 84M148 98l23-14"
          stroke="#46a302"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
}: {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "blue" | "danger"
  disabled?: boolean
  className?: string
}) {
  return (
    <button
      className={`big-button ${variant} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

const navItems: { id: Screen; icon: IconName; label: string }[] = [
  { id: "home", icon: "home", label: "Home" },
  { id: "practice", icon: "dumbbell", label: "Practice" },
  { id: "leaderboard", icon: "trophy", label: "Leagues" },
  { id: "profile", icon: "profile", label: "Profile" },
]

function BottomNav({
  active,
  goTo,
}: {
  active: Screen
  goTo: (screen: Screen) => void
}) {
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      {navItems.map((item) => (
        <button
          aria-current={active === item.id ? "page" : undefined}
          className={active === item.id ? "nav-active" : ""}
          key={item.id}
          onClick={() => goTo(item.id)}
          type="button"
        >
          <Icon name={item.icon} size={25} />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

function StatusHeader() {
  return (
    <header className="status-header">
      <button className="course-pill" type="button" aria-label="Spanish course">
        <span className="flag-circle">ES</span>
        <span>Spanish</span>
        <Icon name="chevron" size={14} />
      </button>
      <div className="header-stats">
        <span>
          <Icon name="flame" size={21} />
          12
        </span>
        <span>
          <Icon name="gem" size={21} />
          740
        </span>
        <span>
          <Icon name="heart" size={21} />5
        </span>
      </div>
    </header>
  )
}

function HomeScreen({ goTo }: { goTo: (screen: Screen) => void }) {
  const lessons = [
    { icon: "star" as IconName, state: "done", side: "left", label: "Basics" },
    {
      icon: "book" as IconName,
      state: "done",
      side: "right",
      label: "Greetings",
    },
    {
      icon: "bolt" as IconName,
      state: "current",
      side: "left",
      label: "Unit 3 · Daily life",
    },
    {
      icon: "clock" as IconName,
      state: "locked",
      side: "right",
      label: "Past tense",
    },
    {
      icon: "message" as IconName,
      state: "locked",
      side: "left",
      label: "Conversations",
    },
  ]

  return (
    <div className="screen with-nav">
      <StatusHeader />
      <main className="scroll-content home-content">
        <section className="unit-banner">
          <div>
            <span>SECTION 2 · UNIT 3</span>
            <h1>Talk about your day</h1>
            <p>Describe everyday activities</p>
          </div>
          <Icon name="book" size={30} />
        </section>
        <div className="guidebook-row">
          <div className="guide-avatar">
            <Owl />
          </div>
          <div className="speech-bubble">
            <strong>Keep it up!</strong>
            <span>You're making great progress.</span>
          </div>
        </div>
        <section className="learning-path" aria-label="Learning path">
          <div className="path-line" />
          {lessons.map((lesson, i) => (
            <div className={`lesson-row ${lesson.side}`} key={lesson.label}>
              {lesson.state === "current" && (
                <div className="current-label">
                  <span>CURRENT LESSON</span>
                  <strong>{lesson.label}</strong>
                </div>
              )}
              <button
                aria-label={lesson.label}
                className={`lesson-node ${lesson.state}`}
                onClick={() => lesson.state === "current" && goTo("practice")}
                type="button"
              >
                <Icon name={lesson.icon} size={31} />
                {lesson.state === "done" && (
                  <span className="node-check">
                    <Icon name="check" size={12} />
                  </span>
                )}
              </button>
              {i === 0 && (
                <span className="lesson-caption">{lesson.label}</span>
              )}
            </div>
          ))}
        </section>
      </main>
      <BottomNav active="home" goTo={goTo} />
    </div>
  )
}

type Skill = {
  title: string
  mastery: number
  status: string
  color: string
  icon: IconName
}

function SkillCard({
  skill,
  onPractice,
}: {
  skill: Skill
  onPractice: () => void
}) {
  return (
    <article className="skill-card">
      <div
        className="skill-icon"
        style={{ color: skill.color, backgroundColor: `${skill.color}16` }}
      >
        <Icon name={skill.icon} size={24} />
      </div>
      <div className="skill-info">
        <div className="skill-title-row">
          <h3>{skill.title}</h3>
          <strong style={{ color: skill.color }}>{skill.mastery}%</strong>
        </div>
        <div className="progress-track small">
          <div
            style={{ width: `${skill.mastery}%`, backgroundColor: skill.color }}
          />
        </div>
        <div className="skill-bottom">
          <span>{skill.status}</span>
          <button onClick={onPractice} type="button">
            PRACTICE
          </button>
        </div>
      </div>
    </article>
  )
}

function PracticeScreen({
  goTo,
  mastery,
}: {
  goTo: (screen: Screen) => void
  mastery: number
}) {
  const skills: Skill[] = [
    {
      title: "Past Tense",
      mastery,
      status: mastery > 40 ? "Getting stronger!" : "Needs practice",
      color: mastery > 40 ? "#ff9600" : "#ff4b4b",
      icon: "clock",
    },
    {
      title: "Vocabulary",
      mastery: 75,
      status: "Improving",
      color: "#ffc800",
      icon: "book",
    },
    {
      title: "Listening",
      mastery: 90,
      status: "Strong",
      color: "#58cc02",
      icon: "headphones",
    },
  ]

  return (
    <div className="screen with-nav">
      <StatusHeader />
      <main className="scroll-content practice-content">
        <div className="page-heading">
          <div>
            <span>SMART REVIEW</span>
            <h1>Practice</h1>
          </div>
          <div className="heading-icon">
            <Icon name="dumbbell" size={29} />
          </div>
        </div>
        <section className="weak-section">
          <div className="section-title">
            <div>
              <h2>My Weak Skills</h2>
              <p>Focus on what you need to improve!</p>
            </div>
            <span className="new-badge">SMART</span>
          </div>
          <div className="skill-list">
            {skills.map((skill) => (
              <SkillCard
                key={skill.title}
                skill={skill}
                onPractice={() =>
                  skill.title === "Past Tense" ? goTo("review") : undefined
                }
              />
            ))}
          </div>
          <p className="mock-note">
            Mastery scores are illustrative for this prototype.
          </p>
        </section>
        <section className="more-practice">
          <h2>More practice</h2>
          <div className="practice-options">
            {[
              ["Mistakes", "Review recent errors", "heart"],
              ["Words", "Refresh your vocabulary", "message"],
              ["Listening", "Train your ear", "headphones"],
            ].map(([title, subtitle, icon]) => (
              <button
                key={title}
                onClick={() =>
                  title === "Mistakes" ? goTo("review") : undefined
                }
                type="button"
              >
                <span className="option-icon">
                  <Icon name={icon as IconName} size={23} />
                </span>
                <span>
                  <strong>{title}</strong>
                  <small>{subtitle}</small>
                </span>
                <Icon name="chevron" size={18} />
              </button>
            ))}
          </div>
        </section>
      </main>
      <BottomNav active="practice" goTo={goTo} />
    </div>
  )
}

function ExerciseHeader({
  progress,
  onBack,
  hearts = true,
}: {
  progress: number
  onBack: () => void
  hearts?: boolean
}) {
  return (
    <header className="exercise-header">
      <button
        className="icon-button"
        onClick={onBack}
        aria-label="Go back"
        type="button"
      >
        <Icon name="close" size={25} />
      </button>
      <div className="progress-track">
        <div style={{ width: `${progress}%` }} />
      </div>
      {hearts ? (
        <span className="exercise-heart">
          <Icon name="heart" size={23} />5
        </span>
      ) : (
        <span className="header-spacer" />
      )}
    </header>
  )
}

function ReviewScreen({ goTo }: { goTo: (screen: Screen) => void }) {
  return (
    <div className="screen exercise-screen">
      <ExerciseHeader progress={42} onBack={() => goTo("practice")} />
      <main className="exercise-content review-content">
        <span className="eyebrow">PAST TENSE · MISTAKE 1 OF 1</span>
        <h1>Translate this sentence into Spanish</h1>
        <div className="prompt-card">
          <div className="mini-owl">
            <Owl />
          </div>
          <p>Yesterday I ate an apple.</p>
        </div>
        <section className="feedback-card incorrect">
          <div className="feedback-icon">
            <Icon name="x" size={20} />
          </div>
          <div>
            <strong>Not quite!</strong>
            <span>Your answer</span>
            <p>
              Yo <mark>como</mark> una manzana ayer.
            </p>
          </div>
        </section>
        <section className="feedback-card correct">
          <div className="feedback-icon">
            <Icon name="check" size={20} />
          </div>
          <div>
            <strong>Correct answer</strong>
            <p>
              Ayer <mark>comí</mark> una manzana.
            </p>
          </div>
        </section>
        <button
          className="why-button"
          onClick={() => goTo("explanation")}
          type="button"
        >
          <span>
            <Icon name="question" size={25} />
          </span>
          <span>
            <strong>Why was I wrong?</strong>
            <small>See a quick grammar explanation</small>
          </span>
          <Icon name="chevron" size={20} />
        </button>
      </main>
    </div>
  )
}

function ExplanationScreen({ goTo }: { goTo: (screen: Screen) => void }) {
  return (
    <div className="screen explanation-screen">
      <header className="simple-header">
        <button
          className="icon-button"
          onClick={() => goTo("review")}
          aria-label="Back to mistake"
          type="button"
        >
          <Icon name="close" size={25} />
        </button>
        <span>SMART REVIEW</span>
        <span className="header-spacer" />
      </header>
      <main className="explanation-content">
        <div className="explanation-title">
          <div className="bulb-icon">
            <Icon name="bulb" size={35} />
          </div>
          <div>
            <span>QUICK EXPLANATION</span>
            <h1>Let’s understand your mistake!</h1>
          </div>
        </div>
        <div className="comparison-card">
          <div className="answer-comparison wrong">
            <span>Your answer</span>
            <p>
              Yo <mark>como</mark> una manzana ayer.
            </p>
          </div>
          <div className="comparison-arrow">↓</div>
          <div className="answer-comparison right">
            <span>Correct answer</span>
            <p>
              Ayer <mark>comí</mark> una manzana.
            </p>
          </div>
        </div>
        <section className="grammar-tip">
          <div className="tip-heading">
            <Icon name="bulb" size={22} />
            <h2>Grammar Tip</h2>
          </div>
          <p>
            <strong>“Como”</strong> is the present-tense form of <em>comer</em>{" "}
            (to eat).
            <strong> “Comí”</strong> is the past-tense form, meaning “I ate.”
          </p>
          <p>
            Because the sentence refers to <strong>yesterday</strong>, the past
            tense is required.
          </p>
          <div className="memory-hook">
            <Icon name="clock" size={18} />
            <span>
              <strong>Ayer</strong> (yesterday) signals the past.
            </span>
          </div>
        </section>
      </main>
      <footer className="action-footer stacked">
        <Button onClick={() => goTo("retry")}>TRY AGAIN</Button>
        <Button variant="secondary" onClick={() => goTo("practice")}>
          BACK TO MY SKILLS
        </Button>
      </footer>
    </div>
  )
}

const words = ["Ayer", "comí", "una", "manzana", "como", "mañana", "yo"]

function RetryScreen({
  goTo,
  onComplete,
}: {
  goTo: (screen: Screen) => void
  onComplete: () => void
}) {
  const [selected, setSelected] = useState<string[]>([])
  const [result, setResult] = useState<"idle" | "correct" | "incorrect">("idle")

  const selectWord = (word: string) => {
    if (result === "correct") return
    setSelected((current) => [...current, word])
    setResult("idle")
  }
  const removeWord = (index: number) => {
    setSelected((current) => current.filter((_, i) => i !== index))
    setResult("idle")
  }
  const check = () => {
    if (selected.join(" ") === "Ayer comí una manzana") {
      setResult("correct")
    } else {
      setResult("incorrect")
    }
  }

  return (
    <div className="screen exercise-screen retry-screen">
      <ExerciseHeader progress={76} onBack={() => goTo("explanation")} />
      <main className="exercise-content retry-content">
        <span className="eyebrow">RETRY YOUR MISTAKE</span>
        <h1>Translate this sentence into Spanish</h1>
        <div className="retry-prompt">
          <div className="mini-owl">
            <Owl />
          </div>
          <p>Yesterday I ate an apple.</p>
        </div>
        <div className="answer-label">
          <span>Your answer</span>
          {selected.length > 0 && result !== "correct" && (
            <small>Tap a word to remove it</small>
          )}
        </div>
        <div className={`answer-bank ${result}`} aria-live="polite">
          {selected.length === 0 && (
            <span className="answer-placeholder">Build your answer here</span>
          )}
          {selected.map((word, index) => (
            <button
              key={`${word}-${index}`}
              onClick={() => removeWord(index)}
              type="button"
            >
              {word}
            </button>
          ))}
        </div>
        <div className="word-bank" aria-label="Word bank">
          {words.map((word) => {
            const used = selected.includes(word)
            return (
              <button
                disabled={used || result === "correct"}
                key={word}
                onClick={() => selectWord(word)}
                type="button"
              >
                {word}
              </button>
            )
          })}
        </div>
      </main>
      <footer className={`check-footer ${result}`}>
        {result !== "idle" && (
          <div className="result-message">
            <span>
              <Icon name={result === "correct" ? "check" : "x"} size={24} />
            </span>
            <div>
              <strong>
                {result === "correct" ? "Excellent!" : "Not quite yet"}
              </strong>
              <p>
                {result === "correct"
                  ? "You used the past tense correctly."
                  : "Review the highlighted grammar tip and try again."}
              </p>
            </div>
          </div>
        )}
        {result === "correct" ? (
          <Button onClick={onComplete}>CONTINUE</Button>
        ) : (
          <Button disabled={selected.length === 0} onClick={check}>
            {result === "incorrect" ? "CHECK AGAIN" : "CHECK"}
          </Button>
        )}
      </footer>
    </div>
  )
}

function CompleteScreen({ goTo }: { goTo: (screen: Screen) => void }) {
  return (
    <div className="screen completion-screen">
      <div className="confetti" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <i key={i} />
        ))}
      </div>
      <main className="completion-content">
        <div className="success-orbit">
          <span className="success-badge">
            <Icon name="check" size={25} />
          </span>
          <Owl celebration />
        </div>
        <span className="completion-kicker">PRACTICE COMPLETE</span>
        <h1>Great job!</h1>
        <p>
          You successfully practiced <strong>Past Tense.</strong>
        </p>
        <section className="mastery-result">
          <div className="mastery-heading">
            <span>
              <Icon name="clock" size={22} />
              Past Tense Mastery
            </span>
            <strong>+10%</strong>
          </div>
          <div className="before-after">
            <span>
              Before <strong>40%</strong>
            </span>
            <Icon name="chevron" size={17} />
            <span>
              After <strong>50%</strong>
            </span>
          </div>
          <div className="progress-track result-progress">
            <div style={{ width: "50%" }} />
            <span style={{ left: "40%" }} />
          </div>
          <p>Your focused practice made this skill stronger.</p>
        </section>
      </main>
      <footer className="action-footer">
        <Button onClick={() => goTo("practice")}>BACK TO MY SKILLS</Button>
      </footer>
    </div>
  )
}

function PlaceholderScreen({
  type,
  goTo,
}: {
  type: "leaderboard" | "profile"
  goTo: (screen: Screen) => void
}) {
  const isLeague = type === "leaderboard"
  return (
    <div className="screen with-nav">
      <StatusHeader />
      <main className="placeholder-content">
        <div className={`placeholder-icon ${isLeague ? "gold" : "blue"}`}>
          <Icon name={isLeague ? "trophy" : "profile"} size={54} />
        </div>
        <h1>{isLeague ? "Silver League" : "Your Profile"}</h1>
        <p>
          {isLeague
            ? "Complete lessons to climb the weekly leaderboard."
            : "Track your learning streak and achievements here."}
        </p>
        <Button onClick={() => goTo("practice")}>GO TO PRACTICE</Button>
      </main>
      <BottomNav active={type} goTo={goTo} />
    </div>
  )
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home")
  const [mastery, setMastery] = useState(40)
  const [transitioning, setTransitioning] = useState(false)

  const goTo = (next: Screen) => {
    if (next === screen) return
    setTransitioning(true)
    window.setTimeout(() => {
      setScreen(next)
      setTransitioning(false)
    }, 120)
  }

  const completePractice = () => {
    setMastery(50)
    goTo("complete")
  }

  return (
    <div className="app-stage">
      <div
        className={`phone-shell ${
          transitioning ? "screen-exit" : "screen-enter"
        }`}
      >
        {screen === "home" && <HomeScreen goTo={goTo} />}
        {screen === "practice" && (
          <PracticeScreen goTo={goTo} mastery={mastery} />
        )}
        {screen === "review" && <ReviewScreen goTo={goTo} />}
        {screen === "explanation" && <ExplanationScreen goTo={goTo} />}
        {screen === "retry" && (
          <RetryScreen goTo={goTo} onComplete={completePractice} />
        )}
        {screen === "complete" && <CompleteScreen goTo={goTo} />}
        {screen === "leaderboard" && (
          <PlaceholderScreen type="leaderboard" goTo={goTo} />
        )}
        {screen === "profile" && (
          <PlaceholderScreen type="profile" goTo={goTo} />
        )}
      </div>
    </div>
  )
}
