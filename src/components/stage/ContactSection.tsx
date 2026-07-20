import { useEffect, useState } from "react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import Reveal from "./Reveal";

const fmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  hour: "2-digit",
  minute: "2-digit",
});

const ContactSection = () => {
  const { data } = usePortfolioData();
  const [time, setTime] = useState(() => fmt.format(new Date()));

  useEffect(() => {
    const t = setInterval(() => setTime(fmt.format(new Date())), 30000);
    return () => clearInterval(t);
  }, []);

  if (!data) return null;

  return (
    <>
      <section className="st-cta" id="contact">
        <Reveal>
          <a className="big" href={`mailto:${data.contact.email}`}>
            Let's talk ↗︎
          </a>
        </Reveal>
      </section>

      <footer className="st-foot">
        <div className="fl">
          <a href={data.contact.github_link} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={data.contact.linkedin_link} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={data.contact.x_link} target="_blank" rel="noopener noreferrer">
            X
          </a>
          <a href={data.footer.devto_link} target="_blank" rel="noopener noreferrer">
            dev.to
          </a>
          <a href={data.footer.medium_link} target="_blank" rel="noopener noreferrer">
            Medium
          </a>
          <a href={data.footer.resume_link} target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
        </div>
        <span>
          {data.about.location} · <span className="mn">{time}</span>
        </span>
      </footer>
    </>
  );
};

export default ContactSection;
