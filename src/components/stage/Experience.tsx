import { usePortfolioData } from "@/hooks/usePortfolioData";
import Reveal from "./Reveal";

const shortYear = (d: string) => {
  const m = d.match(/\d{4}/);
  return m ? m[0] : d;
};

const Experience = () => {
  const { data } = usePortfolioData();
  if (!data) return null;

  const first = data.experience[data.experience.length - 1];
  const range = first ? `${shortYear(first.start_date)} → now` : "";

  return (
    <section className="st-sec" id="experience">
      <Reveal>
        <div className="st-lab mn">
          <span>Experience</span>
          <span>{range}</span>
        </div>
      </Reveal>

      {data.experience.map((x) => (
        <Reveal key={`${x.organization}-${x.start_date}`}>
          <div className="st-xp">
            <span className="xo">
              {x.organization} <small>{x.job_title}</small>
            </span>
            <span className="xd">
              {shortYear(x.start_date)} — {x.end_date === "Present" ? "NOW" : shortYear(x.end_date).slice(2)}
            </span>
          </div>
        </Reveal>
      ))}
    </section>
  );
};

export default Experience;
