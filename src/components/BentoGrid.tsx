import { useState } from "react";
import BentoCard from "./BentoCard";
import ProjectCard from "./ProjectCard";
import TabSelector, { Tab } from "./TabSelector";
import StatusPill from "./StatusPill";
import ExperienceCard from "./ExperienceCard";
import WritingsCard from "./WritingsCard";
import { usePortfolioData } from "@/hooks/usePortfolioData";

const BentoGrid = () => {
  const [activeTab, setActiveTab] = useState<Tab>("projects");
  const { data, isLoading } = usePortfolioData();

  if (isLoading) return null;

  return (
    <section id="work" style={{ paddingBottom: "48px" }}>
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: "900px" }}>

        {/* ── About & Stack ───────────────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-0 animate-fade-in"
          style={{ marginBottom: "28px", animationDelay: "0.2s", paddingTop: "28px" }}
        >
          <BentoCard title="About Me" delay={0.2}>
            <p
              style={{
                fontFamily: "Verdana, Arial, sans-serif",
                fontSize: "12px",
                color: "#444444",
                lineHeight: 1.7,
                marginBottom: "12px",
              }}
            >
              {data?.about.about_content}
            </p>
            <StatusPill />
            <p
              style={{
                fontFamily: "Verdana, Arial, sans-serif",
                fontSize: "11px",
                color: "#888888",
                marginTop: "8px",
              }}
            >
              📍 {data?.about.location}
            </p>
          </BentoCard>

          <BentoCard title="Tech Stack" delay={0.3}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
              {data?.stack.tools.map((skill) => (
                <span key={skill} className="tag-badge">
                  {skill}
                </span>
              ))}
            </div>
          </BentoCard>
        </div>

        {/* ── Selected Work ───────────────────────────────────── */}
        <div style={{ marginBottom: "12px" }}>
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s", marginBottom: "8px" }}
          >
            <h2 className="section-heading" style={{ fontSize: "1.3rem" }}>
              Selected Work
            </h2>
            <p style={{ fontFamily: "Verdana, Arial, sans-serif", fontSize: "12px", color: "#666666", marginBottom: "14px" }}>
              A selection of projects, articles, and positions that reflect my work.
            </p>
          </div>

          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.35s" }}
          >
            <TabSelector activeTab={activeTab} onChange={setActiveTab} />
          </div>
        </div>

        {/* ── Tab content ─────────────────────────────────────── */}
        <div
          className="page-box"
          style={{ borderTop: "2px solid #336699" }}
        >
          {activeTab === "projects" && (
            <div>
              <div style={{ padding: "16px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "14px" }}>
                {data?.projects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.tools}
                    link={project.link}
                    github_url={project.github_url}
                    delay={0.05 * index}
                  />
                ))}
              </div>
              <div style={{ padding: "12px 16px", borderTop: "1px solid #eeeeee", display: "flex", justifyContent: "flex-end" }}>
                <a
                  href={data?.contact.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn"
                >
                  View all projects on GitHub »
                </a>
              </div>
            </div>
          )}

          {activeTab === "writings" && (
            <div>
              <div style={{ padding: "8px 0" }}>
                <WritingsCard delay={0.1} />
              </div>
              <div style={{ padding: "12px 16px", borderTop: "1px solid #eeeeee", display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "flex-end" }}>
                {data?.footer.devto_link && (
                  <a
                    href={data.footer.devto_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-btn"
                  >
                    View articles on dev.to »
                  </a>
                )}
                {data?.footer.medium_link && (
                  <a
                    href={data.footer.medium_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-btn"
                  >
                    View articles on Medium »
                  </a>
                )}
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div>
              <div style={{ padding: "8px 0" }}>
                <ExperienceCard delay={0.1} />
              </div>
              <div style={{ padding: "12px 16px", borderTop: "1px solid #eeeeee", display: "flex", justifyContent: "flex-end" }}>
                <a
                  href={data?.footer.resume_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn"
                >
                  View Résumé »
                </a>
              </div>
            </div>
          )}
        </div>

        {/* ── Contact ─────────────────────────────────────────── */}
        <div
          id="contact"
          className="page-box opacity-0 animate-fade-in"
          style={{ marginTop: "28px", animationDelay: "0.5s" }}
        >
          <div className="page-box-header">Contact</div>
          <div style={{ padding: "16px 18px" }}>
            <h3 className="section-heading" style={{ fontSize: "1.1rem" }}>
              Get in Touch
            </h3>
            <p style={{ fontFamily: "Verdana, Arial, sans-serif", fontSize: "12px", color: "#444444", marginBottom: "14px" }}>
              Have a project in mind or want to work together? Send me an email or connect on social.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
              <a
                href={`mailto:${data?.contact.email}`}
                className="retro-btn"
              >
                ✉ {data?.contact.email}
              </a>
              <span style={{ fontFamily: "Verdana, Arial, sans-serif", fontSize: "12px", color: "#888888" }}>
                or:&nbsp;
                {data?.contact.github_link && (
                  <a href={data.contact.github_link} style={{ marginRight: "10px" }}>GitHub</a>
                )}
                {data?.contact.linkedin_link && (
                  <a href={data.contact.linkedin_link} style={{ marginRight: "10px" }}>LinkedIn</a>
                )}
                {data?.contact.x_link && (
                  <a href={data.contact.x_link}>Twitter / X</a>
                )}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;
