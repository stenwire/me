import { useState } from "react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import Reveal from "./Reveal";

const shortYear = (d: string) => {
  const m = d.match(/\d{4}/);
  return m ? m[0] : d;
};

const Experience = () => {
  const { data } = usePortfolioData();
  const [open, setOpen] = useState<number | null>(null);

  if (!data) return null;

  return (
    <section className="st-sec" id="experience">
      <Reveal>
        <div className="st-lab mn">
          <span>Experience</span>
          <span>Click a role</span>
        </div>
      </Reveal>

      {data.experience.map((x, i) => (
        <Reveal key={`${x.organization}-${x.start_date}`}>
          <div
            className={`st-xp ${open === i ? "on" : ""}`}
            onClick={() => setOpen((cur) => (cur === i ? null : i))}
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
            <div className="xhead">
              <span className="xo">
                {x.organization} <small>{x.job_title}</small>
              </span>
              <span className="xd">
                {shortYear(x.start_date)} — {x.end_date === "Present" ? "NOW" : shortYear(x.end_date).slice(2)}
                <span className="xplus" aria-hidden="true">
                  +
                </span>
              </span>
            </div>
            <div className="xp-det">
              <div>
                <ul>
                  {x.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
};

export default Experience;
