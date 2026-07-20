import { usePortfolioData } from "@/hooks/usePortfolioData";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

const Special = () => {
  const { data } = usePortfolioData();

  if (!data) return null;

  return (
    <section className="st-sec" id="special">
      <SectionIntro
        label="Special Projects / Dev Tooling"
        count={data.special.length}
        statement="I build my own tools"
        sub="Small command-line utilities I wrote to scratch a specific itch, then never stopped using."
      />

      <div className="term-grid">
        {data.special.map((s) => {
          const href = s.github_url || s.link;
          return (
            <Reveal key={s.title}>
              <a className="term-card" href={href} target="_blank" rel="noopener noreferrer">
                <div className="term-bar">
                  <span className="term-dot r" />
                  <span className="term-dot y" />
                  <span className="term-dot g" />
                  <span className="fname">{s.title} · zsh</span>
                </div>
                <div className="term-body">
                  <div className="term-cmd">
                    <span className="p">$</span>
                    {s.title}
                  </div>
                  <div className="term-title">{s.title}</div>
                  <p className="term-desc">{s.description}</p>
                  <div className="term-out"># {s.tools.join(" · ")} → source ↗︎</div>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Special;
