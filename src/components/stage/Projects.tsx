import { MouseEvent, useState } from "react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import Reveal from "./Reveal";
import { projectArt } from "./illustrations";
import { useFloatCard } from "./useFloatCard";

const Projects = () => {
  const { data } = usePortfolioData();
  const [open, setOpen] = useState<number | null>(null);
  const { setContent, card } = useFloatCard();

  if (!data) return null;

  const toggle = (i: number) => (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) return;
    setContent(null);
    setOpen((cur) => (cur === i ? null : i));
  };

  return (
    <section className="st-sec" id="projects">
      <Reveal>
        <div className="st-lab mn">
          <span>Projects</span>
          <span>Click a name</span>
        </div>
      </Reveal>

      {data.projects.map((p, i) => {
        const art = projectArt(p.title);
        const showLive = p.link && p.link !== p.github_url;
        return (
          <Reveal key={p.title}>
            <div
              className={`st-proj ${open === i ? "on" : ""}`}
              onClick={toggle(i)}
              onMouseEnter={() => open !== i && setContent(art)}
              onMouseLeave={() => setContent(null)}
              role="button"
              tabIndex={0}
              aria-expanded={open === i}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpen((cur) => (cur === i ? null : i));
                }
              }}
            >
              <span className="nm">
                <span className="title">{p.title}</span>
                <span className="mt">{p.tools.slice(0, 2).join(" · ")}</span>
              </span>
              <div className="st-det">
                <div>
                  <div className="dbody">
                    <span className="art">{art}</span>
                    <span>
                      <p>{p.description}</p>
                      <span className="lks">
                        {showLive && (
                          <a href={p.link} target="_blank" rel="noopener noreferrer">
                            Live site ↗︎
                          </a>
                        )}
                        {p.github_url && (
                          <a href={p.github_url} target="_blank" rel="noopener noreferrer">
                            GitHub ↗︎
                          </a>
                        )}
                        {!showLive && !p.github_url && p.link && (
                          <a href={p.link} target="_blank" rel="noopener noreferrer">
                            View ↗︎
                          </a>
                        )}
                        <span className="tl">{p.tools.join(" · ")}</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}

      <Reveal>
        <div className="st-more">
          <a href={data.footer.github_link} target="_blank" rel="noopener noreferrer">
            More projects on GitHub ↗︎
          </a>
        </div>
      </Reveal>

      {card}
    </section>
  );
};

export default Projects;
