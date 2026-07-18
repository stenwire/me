import { usePortfolioData } from "@/hooks/usePortfolioData";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

const PALETTE = ["bc-blue", "bc-ink", "bc-gold", "bc-quiet", "bc-rust"];

const ProjectsBento = () => {
  const { data } = usePortfolioData();

  if (!data) return null;

  return (
    <section className="st-sec" id="projects">
      <SectionIntro
        label="Projects"
        count={data.projects.length}
        statement="I ship systems"
        sub="From a blank repo to real users — AI support, prepaid-utility billing, booking engines, and the backends underneath."
      />

      <div className="bento-grid">
        {data.projects.map((p, i) => {
          const variant = PALETTE[i % PALETTE.length];
          const showLive = p.link && p.link !== p.github_url;
          return (
            <Reveal key={p.title} className={i === 0 ? "bento-wide-wrap" : ""}>
              <div className={`bento-card ${variant} ${i === 0 ? "wide" : ""}`}>
                <div className="bc-eyebrow mn">
                  <span>
                    {String(i + 1).padStart(2, "0")} / {p.category || p.tools[0]}
                  </span>
                  <span className="bc-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <div className="bc-title">{p.title}</div>
                <p className="bc-desc">{p.description}</p>

                <div className="bc-rule" />
                {p.tagline && <div className="bc-tagline mn">{p.tagline}</div>}

                <div className="bc-links">
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
                </div>

                <div className="bc-tags mn">
                  {p.tools.map((t) => (
                    <span className="bc-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="st-more">
          <a href={data.footer.github_link} target="_blank" rel="noopener noreferrer">
            More projects on GitHub ↗︎
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default ProjectsBento;
