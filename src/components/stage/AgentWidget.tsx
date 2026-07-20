import { ReactNode, useEffect, useRef, useState } from "react";
import { usePortfolioData, PortfolioData } from "@/hooks/usePortfolioData";

interface Message {
  role: "bot" | "usr";
  node: ReactNode;
  typing?: boolean;
}

const Card = ({ href, title, sub, links }: { href: string; title: string; sub: string; links: string[] }) => (
  <a className="ag-card" href={href} target="_blank" rel="noopener noreferrer">
    <span className="ct">{title}</span>
    <span className="cd">{sub}</span>
    {links.map((l) => (
      <span key={l} className="cl">
        {l}
      </span>
    ))}
  </a>
);

const Tx = ({ href, children }: { href: string; children: ReactNode }) => (
  <a className="tx" href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const buildAnswers = (data: PortfolioData): Record<string, { chip: string; node: ReactNode }> => ({
  about: {
    chip: "Who is Stephen?",
    node: (
      <>
        <p>
          {data.hero.name}, {data.hero.job_title} in {data.about.location}, currently{" "}
          {data.experience[0]?.job_title} at {data.experience[0]?.organization}.
        </p>
        <p>{data.about.about_content}</p>
      </>
    ),
  },
  projects: {
    chip: "What has he built?",
    node: (
      <>
        <p>{data.projects.length} things worth your time:</p>
        {data.projects.map((p) => (
          <Card
            key={p.title}
            href={p.link || p.github_url}
            title={p.title}
            sub={p.description}
            links={[p.link && p.link !== p.github_url ? "Live ↗︎" : "", p.github_url ? "GitHub ↗︎" : ""].filter(Boolean)}
          />
        ))}
        <p style={{ marginTop: 10 }}>
          More on <Tx href={data.footer.github_link}>GitHub ↗︎</Tx>.
        </p>
      </>
    ),
  },
  stack: {
    chip: "Tech stack?",
    node: (
      <>
        <p>His day-to-day toolbox:</p>
        <ul>
          {data.stack.groups.map((g) => (
            <li key={g.label}>
              <b>{g.label}:</b> {g.items.join(" · ")}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  roles: {
    chip: "What roles can he fill?",
    node: (
      <>
        <p>He's strongest where backend meets AI:</p>
        <ul>
          {data.roles.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <p>{data.availability}</p>
      </>
    ),
  },
  writing: {
    chip: "What does he write about?",
    node: (
      <>
        <p>{data.writings.length} pieces on agents, APIs, and databases:</p>
        {data.writings.map((w) => (
          <Card key={w.link} href={w.link} title={w.title} sub={`${w.published_date} · ${w.time_to_read}`} links={["Read ↗︎"]} />
        ))}
        <p style={{ marginTop: 10 }}>
          More on <Tx href={data.footer.devto_link}>dev.to ↗︎</Tx> and <Tx href={data.footer.medium_link}>Medium ↗︎</Tx>.
        </p>
      </>
    ),
  },
  experience: {
    chip: "Work history?",
    node: (
      <>
        <p>{data.experience.length} teams since 2021:</p>
        {data.experience.map((x) => (
          <p key={x.organization}>
            <b>
              {x.organization} · {x.job_title}
            </b>{" "}
            ({x.start_date} → {x.end_date})<br />
            {x.description}
          </p>
        ))}
      </>
    ),
  },
  robotics: {
    chip: "Any robotics/research work?",
    node: (
      <>
        <p>Academic and robotics side of things:</p>
        {data.robotics.map((p) =>
          p.link || p.github_url ? (
            <Card
              key={p.title}
              href={p.link || p.github_url}
              title={p.title}
              sub={p.description}
              links={[p.link && p.link !== p.github_url ? "Live ↗︎" : "", p.github_url ? "GitHub ↗︎" : ""].filter(Boolean)}
            />
          ) : (
            <div key={p.title} className="ag-card">
              <span className="ct">{p.title}</span>
              <span className="cd">{p.description}</span>
            </div>
          )
        )}
      </>
    ),
  },
  special: {
    chip: "Any other tools?",
    node: (
      <>
        <p>Small utilities worth a look:</p>
        {data.special.map((p) => (
          <Card key={p.title} href={p.github_url || p.link} title={p.title} sub={p.description} links={["GitHub ↗︎"]} />
        ))}
      </>
    ),
  },
  contact: {
    chip: "How do I reach him?",
    node: (
      <>
        <p>Pick a channel:</p>
        <Card href={`mailto:${data.contact.email}`} title="Email" sub={data.contact.email} links={["Write ↗︎"]} />
        <Card href={data.contact.github_link} title="GitHub" sub="stenwire" links={["Open ↗︎"]} />
        <Card href={data.contact.linkedin_link} title="LinkedIn" sub="stephen-nwankwo" links={["Open ↗︎"]} />
        <Card href={data.contact.x_link} title="X" sub="@Sage_Sten" links={["Open ↗︎"]} />
        <Card href={data.footer.resume_link} title="Résumé" sub="PDF" links={["Open ↗︎"]} />
      </>
    ),
  },
});

const matchKey = (text: string): string | null => {
  const s = text.toLowerCase();
  if (/(stack|tech|tool|language|python|typescript|django|fastapi|framework|skill|database|cloud|devops)/.test(s)) return "stack";
  if (/(role|hire|hiring|position|fit|job|team|remote|contract|available|opening)/.test(s)) return "roles";
  if (/(project|built|build|work on|portfolio|app|taimako|vendkit|blug)/.test(s)) return "projects";
  if (/(robot|robotics|slam|matlab|kinematics|ros2?|vision|queue|simulator|arduino)/.test(s)) return "robotics";
  if (/(ffmpeg|diarizer|diarization|speech|video writer)/.test(s)) return "special";
  if (/(write|writing|article|blog|post|read)/.test(s)) return "writing";
  if (/(experience|history|career|venco|cospire|upnyx|softdrop)/.test(s)) return "experience";
  if (/(contact|email|reach|talk|resume|résumé|cv|linkedin)/.test(s)) return "contact";
  if (/(who|about|stephen|yourself|intro)/.test(s)) return "about";
  return null;
};

const AgentWidget = () => {
  const { data } = usePortfolioData();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const msgsRef = useRef<HTMLDivElement>(null);
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    msgsRef.current?.scrollTo({ top: msgsRef.current.scrollHeight });
  }, [messages]);

  useEffect(() => {
    if (!open || messages.length > 0 || !data) return;
    pushBot(
      <>
        <p>
          Hi, I'm <b>STEN</b>, a scripted guide to {data.hero.name}. No AI calls here. The real agentic work lives in{" "}
          <Tx href="https://taimako-your-ai-whatsapp-partner.onrender.com/">Taimako.AI ↗︎</Tx>.
        </p>
        <p>Ask me anything about him, or tap a suggestion below.</p>
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, data]);

  if (!data) return null;
  const answers = buildAnswers(data);

  function pushBot(node: ReactNode) {
    setMessages((m) => [...m, { role: "bot", node, typing: !reduced }]);
    if (!reduced) {
      setTimeout(() => {
        setMessages((m) => m.map((msg, i) => (i === m.length - 1 ? { ...msg, typing: false } : msg)));
      }, 550);
    }
  }

  const ask = (key: string, label: string) => {
    setMessages((m) => [...m, { role: "usr", node: label }]);
    pushBot(answers[key].node);
  };

  const submit = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    const key = matchKey(text);
    setMessages((m) => [...m, { role: "usr", node: text }]);
    pushBot(
      key ? (
        answers[key].node
      ) : (
        <p>
          I keep it simple (I'm scripted, remember). Ask me about Stephen's <b>projects</b>, <b>tech stack</b>,{" "}
          <b>roles</b>, <b>writing</b>, <b>experience</b>, <b>robotics work</b>, <b>other tools</b>, or how to{" "}
          <b>contact</b> him.
        </p>
      )
    );
  };

  return (
    <>
      <button
        type="button"
        className="wg-btn"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Chat with STEN, a scripted guide to Stephen"
      >
        {open ? "×" : "✳︎"}
      </button>

      {open && (
        <div className="wg-panel" role="dialog" aria-label="STEN, scripted guide">
          <div className="ag-head">
            <span className="nm">STEN · Stephen's guide</span>
            <span className="st mn">Scripted demo · no AI</span>
          </div>
          <div className="ag-msgs" ref={msgsRef}>
            {messages.map((m, i) => (
              <div key={i} className={`ag-m ${m.role}`}>
                {m.typing ? (
                  <span className="ag-typing">
                    <i />
                    <i />
                    <i />
                  </span>
                ) : (
                  m.node
                )}
              </div>
            ))}
          </div>
          <div className="ag-chips">
            {Object.entries(answers).map(([key, a]) => (
              <button key={key} type="button" className="ag-chip" onClick={() => ask(key, a.chip)}>
                {a.chip}
              </button>
            ))}
          </div>
          <div className="ag-inrow">
            <input
              className="ag-in"
              type="text"
              value={input}
              placeholder="Ask about Stephen…"
              aria-label="Ask about Stephen"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
            />
            <button type="button" className="ag-send" onClick={submit} aria-label="Send">
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AgentWidget;
