import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";

const DARK_QUIPS = [
  "Sorry Snow White, the mirror's off duty.",
  "Welcome to the dark side. We have clean code.",
  "Dark mode on. Your retinas say thank you.",
  "Shhh. The pixels are sleeping.",
];

const LIGHT_QUIPS = [
  "Sorry vampires, we're going bright.",
  "Let there be light. My electricity bill disagrees.",
  "Lights on. Squint responsibly.",
  "Good morning, even if it isn't.",
];

const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 14.5 A8.5 8.5 0 1 1 9.5 4 A7 7 0 0 0 20 14.5 Z" />
  </svg>
);

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [quip, setQuip] = useState<string | null>(null);
  const [wash, setWash] = useState<Theme | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout);
      document.documentElement.classList.remove("theme-xition");
    },
    []
  );

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const quips = next === "dark" ? DARK_QUIPS : LIGHT_QUIPS;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    timers.current.forEach(clearTimeout);
    timers.current = [];

    if (reduced) {
      setTheme(next);
    } else {
      // sunset/sunrise sequence: sky wash rises, colors crossfade beneath it, wash clears
      const root = document.documentElement;
      root.classList.add("theme-xition");
      setWash(next);
      timers.current.push(setTimeout(() => setTheme(next), 250));
      timers.current.push(
        setTimeout(() => {
          root.classList.remove("theme-xition");
          setWash(null);
        }, 1450)
      );
    }

    setQuip(quips[Math.floor(Math.random() * quips.length)]);
    timers.current.push(setTimeout(() => setQuip(null), 3200));
  };

  return (
    <>
      <button
        type="button"
        className="theme-btn"
        onClick={toggle}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
      {wash && <div className={`sky-wash ${wash === "dark" ? "dusk" : "dawn"}`} aria-hidden="true" />}
      {quip && (
        <div className="theme-toast mn" role="status">
          {quip}
        </div>
      )}
    </>
  );
};

export default ThemeToggle;
