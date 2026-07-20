import { usePortfolioData } from "@/hooks/usePortfolioData";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

const shortYear = (d: string) => {
  const m = d.match(/\d{4}/);
  return m ? m[0] : d;
};

const Experience = () => {
  const { data } = usePortfolioData();

  if (!data) return null;

  return (
    <section className="st-sec" id="experience">
      <SectionIntro
        label="Experience"
        count={data.experience.length}
        statement="I build with teams"
        sub="Four companies since 2021: backend systems, AI agents, and the infrastructure that keeps them honest."
      />

      <div className="tl">
        {data.experience.map((x) => (
          <Reveal key={`${x.organization}-${x.start_date}`}>
            <article className="tl-node">
              <div className="tl-year mn">
                {shortYear(x.start_date)} → {x.end_date === "Present" ? "NOW" : shortYear(x.end_date)}
              </div>
              <h3 className="tl-role">
                {x.organization}
                <span className="tl-title"> · {x.job_title}</span>
              </h3>
              <p className="tl-desc">{x.description}</p>
              {x.tags && x.tags.length > 0 && (
                <div className="chips">
                  {x.tags.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
