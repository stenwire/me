import Reveal from "./Reveal";

interface SectionIntroProps {
  label: string;
  count: number;
  statement: string;
  sub: string;
}

const SectionIntro = ({ label, count, statement, sub }: SectionIntroProps) => (
  <>
    <Reveal>
      <div className="st-lab mn">
        <span>{label}</span>
        <span>{String(count).padStart(2, "0")}</span>
      </div>
    </Reveal>
    <Reveal>
      <div className="sec-intro">
        <h2 className="sec-statement">
          {statement}
          <span className="dot">.</span>
        </h2>
        <p className="sec-sub">{sub}</p>
      </div>
    </Reveal>
  </>
);

export default SectionIntro;
