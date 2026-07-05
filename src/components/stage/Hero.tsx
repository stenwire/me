import { useEffect, useState } from "react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { useFloatCard } from "./useFloatCard";

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21 C4 16.5 7.5 14 12 14 C16.5 14 20 16.5 20 21" />
  </svg>
);

const Hero = () => {
  const { data } = usePortfolioData();
  const [pinned, setPinned] = useState(false);
  const { setContent, card } = useFloatCard();

  useEffect(() => {
    if (!pinned) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPinned(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pinned]);

  if (!data) return null;

  const portrait = (
    <span className="portrait">
      <img src={data.hero.profile_image} alt={data.hero.name} />
    </span>
  );

  return (
    <section className="st-hero">
      <h1 dangerouslySetInnerHTML={{ __html: data.hero.heading }} />
      <div className="under">
        <p>
          <button
            type="button"
            className="hero-name"
            onMouseEnter={() => !pinned && setContent(portrait)}
            onMouseLeave={() => setContent(null)}
            onClick={() => {
              setContent(null);
              setPinned((p) => !p);
            }}
            aria-label={`Show photo of ${data.hero.name}`}
          >
            {data.hero.name}
          </button>
          <button
            type="button"
            className="person-btn"
            onClick={() => {
              setContent(null);
              setPinned((p) => !p);
            }}
            aria-label={`Show photo of ${data.hero.name}`}
            aria-expanded={pinned}
          >
            <PersonIcon />
          </button>{" "}
          — {data.hero.sub_heading}
        </p>
        <span className="scroll-hint mn">Scroll ↓</span>
      </div>

      {card}

      {pinned && (
        <div className="portrait-pin" role="dialog" aria-label={`Photo of ${data.hero.name}`}>
          {portrait}
          <div className="cap mn">
            <span>
              {data.hero.name} — {data.about.location}
            </span>
            <button type="button" onClick={() => setPinned(false)} aria-label="Close photo">
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
