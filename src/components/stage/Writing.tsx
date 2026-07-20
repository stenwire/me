import { usePortfolioData } from "@/hooks/usePortfolioData";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

const sourceOf = (link: string): string => {
  if (link.includes("towards-artificial-intelligence")) return "Towards AI";
  if (link.includes("medium.com")) return "Medium";
  if (link.includes("dev.to")) return "dev.to";
  return "Read";
};

const Writing = () => {
  const { data } = usePortfolioData();

  if (!data) return null;

  const row = (dir: "a" | "b") => (
    <div className={`mq-row ${dir}`}>
      {[...data.writings, ...data.writings].map((w, i) => (
        <a
          key={`${dir}-${i}`}
          className={`mq-item ${i >= data.writings.length ? "mq-dup" : ""}`}
          href={w.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-hidden={i >= data.writings.length}
          tabIndex={i >= data.writings.length ? -1 : 0}
        >
          <span className="mq-t">{w.title}</span>
          <span className="mq-m mn">
            {w.published_date} · {sourceOf(w.link)} ↗︎
          </span>
        </a>
      ))}
    </div>
  );

  return (
    <section className="st-sec wr-sec" id="writing">
      <SectionIntro
        label="Writing"
        count={data.writings.length}
        statement="I also write"
        sub="Field notes on the systems I build, break, and rebuild: agents, APIs, and the databases underneath."
      />

      <div className="mq" aria-label="Selected writing">
        {row("a")}
        {row("b")}
      </div>

      <Reveal>
        <div className="st-more">
          <a href={data.footer.devto_link} target="_blank" rel="noopener noreferrer">
            More articles on dev.to ↗︎
          </a>
          <a href={data.footer.medium_link} target="_blank" rel="noopener noreferrer">
            More on Medium ↗︎
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default Writing;
