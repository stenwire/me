import { usePortfolioData } from "@/hooks/usePortfolioData";
import Reveal from "./Reveal";
import { writingArt } from "./illustrations";
import { useFloatCard } from "./useFloatCard";

const sourceOf = (link: string): string => {
  if (link.includes("towards-artificial-intelligence")) return "Towards AI";
  if (link.includes("medium.com")) return "Medium";
  if (link.includes("dev.to")) return "dev.to";
  return "Read";
};

const Writing = () => {
  const { data } = usePortfolioData();
  const { setContent, card } = useFloatCard();

  if (!data) return null;

  return (
    <section className="st-sec" id="writing">
      <Reveal>
        <div className="st-lab mn">
          <span>Writing</span>
          <span>{String(data.writings.length).padStart(2, "0")}</span>
        </div>
      </Reveal>

      {data.writings.map((w) => {
        const art = writingArt(w.title);
        return (
          <Reveal key={w.link}>
            <a
              className="st-wr"
              href={w.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setContent(art)}
              onMouseLeave={() => setContent(null)}
            >
              <span className="wl">
                <span className="ico">{art}</span>
                <span className="wt">{w.title}</span>
              </span>
              <span className="wm">
                {w.published_date} · {sourceOf(w.link)} ↗︎
              </span>
            </a>
          </Reveal>
        );
      })}

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

      {card}
    </section>
  );
};

export default Writing;
