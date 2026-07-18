const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
const strokeThick = { ...stroke, strokeWidth: 4 };
const acc = "var(--s-acc)";

export const ART: Record<string, JSX.Element> = {
  taimako: (
    <svg viewBox="0 0 160 110" {...stroke}>
      <rect x="14" y="16" width="100" height="62" rx="14" />
      <path d="M40 78 L36 94 L58 78" />
      <circle cx="46" cy="47" r="3.5" fill="currentColor" />
      <circle cx="64" cy="47" r="3.5" fill="currentColor" />
      <circle cx="82" cy="47" r="3.5" fill="currentColor" />
      <path d="M132 22 L136 32 L146 36 L136 40 L132 50 L128 40 L118 36 L128 32 Z" fill={acc} stroke="none" />
    </svg>
  ),
  vendkit: (
    <svg viewBox="0 0 160 110" {...stroke}>
      <path d="M62 12 L46 52 L60 52 L50 88 L82 42 L66 42 L78 12 Z" fill={acc} stroke="none" />
      <path d="M112 34 C122 48 126 56 126 64 a14 14 0 0 1 -28 0 c0 -8 4 -16 14 -30 Z" />
      <path d="M20 78 h120" strokeDasharray="2 10" />
    </svg>
  ),
  autogo: (
    <svg viewBox="0 0 160 110" {...stroke}>
      <path d="M24 66 L34 42 C36 37 40 34 46 34 h44 c6 0 11 3 15 8 l12 16" />
      <path d="M14 66 h132 v14 h-14" />
      <path d="M46 80 h54" />
      <circle cx="36" cy="82" r="10" />
      <circle cx="112" cy="82" r="10" />
      <circle cx="140" cy="58" r="5" fill={acc} stroke="none" />
    </svg>
  ),
  farmhand: (
    <svg viewBox="0 0 160 110" {...stroke}>
      <path d="M80 90 V46" />
      <path d="M80 62 C80 46 66 38 48 40 C50 56 62 64 80 62 Z" />
      <path d="M80 50 C80 34 94 26 112 28 C110 44 98 52 80 50 Z" fill={acc} stroke={acc} />
      <path d="M30 90 h100" strokeDasharray="2 10" />
    </svg>
  ),
  genz: (
    <svg viewBox="0 0 88 64" {...strokeThick}>
      <rect x="6" y="8" width="34" height="24" rx="8" />
      <rect x="48" y="30" width="34" height="24" rx="8" stroke={acc} />
      <path d="M40 44 h4 M46 20 h-4" />
    </svg>
  ),
  agents: (
    <svg viewBox="0 0 88 64" {...strokeThick}>
      <circle cx="20" cy="44" r="9" />
      <circle cx="68" cy="44" r="9" />
      <circle cx="44" cy="16" r="9" stroke={acc} />
      <path d="M27 37 L38 23 M50 23 L61 37 M29 44 h30" />
    </svg>
  ),
  adk: (
    <svg viewBox="0 0 88 64" {...strokeThick}>
      <circle cx="44" cy="32" r="22" />
      <path d="M44 44 V30" />
      <path d="M44 36 C44 26 36 22 26 24 C28 33 35 37 44 36 Z" fill={acc} stroke={acc} />
    </svg>
  ),
  perf: (
    <svg viewBox="0 0 88 64" {...strokeThick}>
      <path d="M14 52 a30 30 0 0 1 60 0" />
      <path d="M44 52 L62 30" stroke={acc} />
      <circle cx="44" cy="52" r="4" fill={acc} stroke="none" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 88 64" {...strokeThick}>
      <path d="M10 14 h40 M10 30 h28 M10 46 h40" />
      <rect x="56" y="28" width="24" height="20" rx="4" stroke={acc} />
      <path d="M61 28 v-6 a7 7 0 0 1 14 0 v6" stroke={acc} />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 88 64" {...strokeThick}>
      <rect x="24" y="6" width="40" height="52" rx="4" />
      <path d="M34 22 h20 M34 32 h20 M34 42 h12" stroke={acc} />
    </svg>
  ),
  robot: (
    <svg viewBox="0 0 160 110" {...stroke}>
      <path d="M30 96 L34 58 C36 44 48 34 62 34 h10" />
      <path d="M72 34 C86 34 98 44 100 58 L104 96" />
      <circle cx="72" cy="20" r="12" fill={acc} stroke="none" />
      <path d="M72 32 v10" />
      <circle cx="42" cy="96" r="8" />
      <circle cx="92" cy="96" r="8" />
    </svg>
  ),
};

export const projectArt = (title: string): JSX.Element => {
  const t = title.toLowerCase();
  if (t.includes("taimako")) return ART.taimako;
  if (t.includes("vend")) return ART.vendkit;
  if (t.includes("car") || t.includes("booking")) return ART.autogo;
  if (t.includes("farm")) return ART.farmhand;
  if (t.includes("blug")) return ART.doc;
  return ART.agents;
};

export const roboticsArt = (): JSX.Element => ART.robot;

export const writingArt = (title: string): JSX.Element => {
  const t = title.toLowerCase();
  if (t.includes("slang") || t.includes("gen-z")) return ART.genz;
  if (t.includes("multi-agent")) return ART.agents;
  if (t.includes("adk")) return ART.adk;
  if (t.includes("performance")) return ART.perf;
  if (t.includes("locking")) return ART.lock;
  return ART.doc;
};
