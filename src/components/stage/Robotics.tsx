import { usePortfolioData } from "@/hooks/usePortfolioData";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

const Robotics = () => {
  const { data } = usePortfolioData();

  if (!data) return null;

  return (
    <section className="st-sec" id="robotics">
      <SectionIntro
        label="Robotics & Academic"
        count={data.robotics.length}
        statement="I also build robots"
        sub="Where software meets the physical: machine vision, kinematics, SLAM, and simulation from my academic work."
      />

      <div className="lab-grid">
        {data.robotics.map((p, i) => {
          const href = p.github_url || p.link;
          return (
            <Reveal key={p.title}>
              <div className={`lab-card ${href ? "linked" : ""}`}>
                <span className="lab-ix mn">[{String(i + 1).padStart(2, "0")}]</span>
                <div className="lab-title">{p.title}</div>
                <p className="lab-desc">{p.description}</p>
                <div className="lab-foot">
                  <span className="lab-tools">{p.tools.join(" · ")}</span>
                  {href ? (
                    <a className="lab-link" href={href} target="_blank" rel="noopener noreferrer">
                      Source ↗︎
                    </a>
                  ) : (
                    <span className="lab-nolink">No public repo</span>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="st-more">
          <a href={data.footer.github_link} target="_blank" rel="noopener noreferrer">
            More on GitHub ↗︎
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default Robotics;
