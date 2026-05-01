import {
  ArrowRight,
  BadgeCheck,
  Braces,
  CheckCircle2,
  CircleDot,
  ClipboardCheck,
  Command,
  FileJson,
  GitBranch,
  Github,
  KeyRound,
  Link2,
  LockKeyhole,
  Mail,
  MessageSquareQuote,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";

const handoffBlocks = [
  { label: "Current state", value: "branch, proof, dirty files", icon: GitBranch },
  { label: "Pathos", value: "tone, trust, decision rhythm", icon: MessageSquareQuote },
  { label: "Access map", value: "paths, MCPs, env var names", icon: KeyRound },
  { label: "Next prompt", value: "first reads, commands, limits", icon: Terminal },
];

const cockpitSignals = [
  {
    label: "session state",
    value: "branch, dirty files, latest commit",
    proof: "pathos status",
    icon: GitBranch,
  },
  {
    label: "handoff receipt",
    value: "sections present, first commands included",
    proof: "PATHOS.md",
    icon: FileJson,
  },
  {
    label: "secret boundary",
    value: "names allowed, values blocked",
    proof: "no-secret rule",
    icon: LockKeyhole,
  },
  {
    label: "proof standard",
    value: "tests, screenshots, known non-claims",
    proof: "reviewable",
    icon: ClipboardCheck,
  },
];

const receiptRows = [
  ["Secrets", "values blocked"],
  ["State", "branch + latest commit"],
  ["Recovery", "first commands included"],
];

const compareColumns = [
  {
    mode: "Before",
    title: "A normal summary",
    text: "The next agent inherits a compressed story and spends the first stretch rebuilding trust.",
    points: [
      "Transcript archaeology",
      "Vague next steps",
      "Proof standard implicit",
    ],
  },
  {
    mode: "After",
    title: "A PATHOS handoff",
    text: "The next agent starts from an explicit operating picture: state, proof, risk, and first moves.",
    points: [
      "North star and current state",
      "Access map and commands",
      "No secret values",
    ],
  },
];

const cliCommands = [
  "npm run pathos -- status",
  "npm run pathos -- handoff --write docs/PATHOS.md",
  "npm run pathos -- custodian scan --dry-run",
  "npm run pathos -- custodian backup",
];

const custodianRows = [
  { icon: "🧠", label: "current thread", value: "handoff ready" },
  { icon: "🗂️", label: "old sessions", value: "3 candidates found" },
  { icon: "🧼", label: "cleanup mode", value: "dry-run only" },
  { icon: "🛡️", label: "secrets scan", value: "values blocked" },
];

function App() {
  return (
    <main>
      <nav className="nav" aria-label="Primary">
        <a className="brand" href="#top" aria-label="PATHOS home">
          <span className="brand-mark">P</span>
          <span>PATHOS</span>
        </a>
        <div className="nav-links">
          <a href="#proof-cockpit">Proof</a>
          <a href="#cli">CLI</a>
          <a href="#custodian">Pain</a>
          <a href="#install">Install</a>
          <a href="https://github.com/maxkle1nz/pathos">GitHub</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={16} />
            Human/agent continuity for serious AI work
          </div>
          <h1>Stop losing the thread between agents.</h1>
          <p className="lede">
            PATHOS turns a heavy Codex session into a secret-safe handoff:
            current state, access map, proof standard, and the next-agent prompt.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#install">
              Install PATHOS <ArrowRight size={18} />
            </a>
            <a className="button ghost" href="https://github.com/maxkle1nz/pathos">
              <Github size={18} /> View repo
            </a>
          </div>
          <div className="trust-row" aria-label="PATHOS guarantees">
            <span>
              <ShieldCheck size={16} /> No secrets
            </span>
            <span>
              <ClipboardCheck size={16} /> Proof-first
            </span>
            <span>
              <Workflow size={16} /> Agent-ready
            </span>
          </div>
        </div>

        <div className="hero-panel" aria-label="PATHOS handoff preview">
          <div className="panel-top">
            <span className="dot cyan" />
            <span className="dot lime" />
            <span className="dot gold" />
            <span className="panel-title">pathos-handoff.md</span>
          </div>
          <div className="handoff-grid">
            {handoffBlocks.map((item) => {
              const Icon = item.icon;
              return (
                <article className="handoff-card" key={item.label}>
                  <Icon size={19} />
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </article>
              );
            })}
          </div>
          <div className="handoff-proof">
            <BadgeCheck size={18} />
            <span>
              Valid handoff: no secrets, first commands, proof standard, and
              next-agent prompt included.
            </span>
          </div>
        </div>
      </section>

      <section className="section proof-cockpit" id="proof-cockpit" aria-label="PATHOS proof cockpit">
        <div className="proof-cockpit-copy">
          <div className="section-kicker">Proof cockpit</div>
          <h2>Continuity should be visible.</h2>
          <p>
            The handoff is not a vibe summary. It is a reviewable receipt of
            what was captured, what was blocked, and how to resume.
          </p>
        </div>
        <div className="cockpit-shell" aria-label="Operational continuity dashboard">
          <div className="cockpit-topbar">
            <span className="ansi-logo">
              <BadgeCheck size={16} /> continuity receipt
            </span>
            <span>local / reviewable / no secrets</span>
          </div>
          <div className="cockpit-grid">
            {cockpitSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <article className="cockpit-card" key={signal.label}>
                  <div>
                    <Icon size={18} />
                    <span>{signal.proof}</span>
                  </div>
                  <strong>{signal.label}</strong>
                  <p>{signal.value}</p>
                </article>
              );
            })}
          </div>
          <div className="handoff-receipt" aria-label="Generated handoff receipt">
            <div>
              <span className="receipt-kicker">Generated handoff</span>
              <strong>ready for the next agent</strong>
            </div>
            <div className="receipt-grid">
              {receiptRows.map(([label, value]) => (
                <span key={label}>
                  <small>{label}</small>
                  <b>{value}</b>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section before-after" aria-label="PATHOS before and after handoff comparison">
        <div className="compare-heading">
          <div className="section-kicker">Before / after</div>
          <h2>A summary compresses. PATHOS transfers the operating picture.</h2>
        </div>
        <div className="compare-grid">
          {compareColumns.map((column) => (
            <article className={`compare-card ${column.mode.toLowerCase()}`} key={column.mode}>
              <span className="compare-mode">{column.mode}</span>
              <h3>{column.title}</h3>
              <p>{column.text}</p>
              <ul>
                {column.points.map((point) => (
                  <li key={point}>
                    {column.mode === "After" ? <CheckCircle2 size={16} /> : <CircleDot size={16} />}
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section cli-contract" id="cli" aria-label="PATHOS executable CLI contract">
        <div className="cli-copy">
          <div className="section-kicker">Executable contract</div>
          <h2>Ask the repo what the next agent needs.</h2>
          <p>
            The CLI reports state, writes the handoff, and previews cleanup
            candidates before anything destructive happens.
          </p>
        </div>

        <div className="cli-terminal" aria-label="PATHOS CLI proof terminal">
          <div className="ansi-header">
            <span className="ansi-logo">
              <Command size={16} /> PATHOS CLI
            </span>
            <span className="ansi-mode">STATUS / HANDOFF / CUSTODIAN</span>
          </div>
          <div className="command-stack">
            {cliCommands.map((command) => (
              <code key={command}>{command}</code>
            ))}
          </div>
          <div className="status-card">
            <div>
              <span>PROJECT</span>
              <strong>pathos</strong>
            </div>
            <div>
              <span>GIT STATE</span>
              <strong>clean or dirty, never guessed</strong>
            </div>
            <div>
              <span>CUSTODIAN</span>
              <strong>dry-run first</strong>
            </div>
            <div>
              <span>CI</span>
              <strong>Node 24-ready</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section custodian" id="custodian" aria-label="PATHOS Custodian">
        <div className="custodian-copy">
          <div className="section-kicker">Real pain</div>
          <h2>Long Codex windows get heavy before the work is done.</h2>
          <p>
            Use PATHOS at the moment the window starts dragging: capture the
            continuation point, sanitize it, and resume in a fresh session.
          </p>
          <div className="pain-grid" aria-label="Long session pain and PATHOS response">
            <span>🐢 slow window</span>
            <span>🧠 context overload</span>
            <span>🧭 lost thread</span>
            <span>🧼 clean resume point</span>
            <span>🛡️ secret-safe backup</span>
            <span>⚡ lighter next session</span>
          </div>
        </div>

        <div className="ansi-panel" aria-label="PATHOS terminal custodian preview">
          <div className="ansi-header">
            <span className="ansi-logo">✦ PATHOS</span>
            <span className="ansi-mode">CUSTODIAN / SAFE PREVIEW</span>
          </div>
          <div className="custodian-status-frame" aria-label="Session hygiene status">
            <div className="custodian-frame-title">session hygiene</div>
            <div className="custodian-status-list">
              {custodianRows.map((row) => (
                <div className="custodian-status-row" key={row.label}>
                  <span className="status-emoji" aria-hidden="true">{row.icon}</span>
                  <span>{row.label}</span>
                  <strong>{row.value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="custodian-actions" aria-label="PATHOS custodian actions">
            <span>[1] write handoff</span>
            <span>[2] backup sanitized</span>
            <span>[3] dry-run clean</span>
            <span>[4] resume in fresh window</span>
          </div>
          <p>
            Custodian mode is backup-first. Destructive cleanup stays explicit,
            reviewed, and reversible.
          </p>
        </div>
      </section>

      <section className="section proof-band">
        <div>
          <div className="section-kicker">Install</div>
          <h2>One skill. One handoff. Less drift.</h2>
        </div>
        <div className="terminal" id="install">
          <div className="terminal-line muted"># Install and verify</div>
          <div className="terminal-line">git clone https://github.com/maxkle1nz/pathos.git</div>
          <div className="terminal-line">cd pathos && npm install</div>
          <div className="terminal-line">npm run pathos -- status</div>
          <div className="terminal-line">npm run pathos -- handoff --write docs/PATHOS.md</div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>PATHOS</strong>
          <span>Continuity for human/agent work.</span>
          <span className="creator-line">
            Created by{" "}
            <a href="https://github.com/maxkle1nz">Max Kleinschmidt</a>
          </span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/maxkle1nz">
            <Github size={16} /> maxkle1nz
          </a>
          <a href="mailto:kleinz@cosmophonix.com">
            <Mail size={16} /> Email
          </a>
          <a href="https://github.com/maxkle1nz/pathos">
            <Github size={16} /> GitHub
          </a>
          <a href="https://github.com/maxkle1nz/pathos/tree/main/skill">
            <Braces size={16} /> Skill
          </a>
          <a href="#top">
            <Link2 size={16} /> Top
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
