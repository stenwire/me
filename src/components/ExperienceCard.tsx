import { usePortfolioData } from "@/hooks/usePortfolioData";

interface ExperienceCardProps {
  delay?: number;
}

const ExperienceCard = ({ delay = 0.3 }: ExperienceCardProps) => {
  const { data, isLoading } = usePortfolioData();

  if (isLoading) return null;

  return (
    <div
      className="page-box opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="page-box-header">Work Experience</div>

      <div style={{ padding: "0" }}>
        {data?.experience.map((exp, index) => (
          <div
            key={exp.organization}
            style={{
              padding: "14px 16px",
              borderBottom: index < (data.experience.length - 1) ? "1px solid #eeeeee" : "none",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "4px", marginBottom: "4px" }}>
              <div>
                <strong
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "14px",
                    color: "#003366",
                  }}
                >
                  {exp.job_title}
                </strong>
                <span style={{ fontFamily: "Verdana, Arial, sans-serif", fontSize: "12px", color: "#444444" }}>
                  {" "}— {exp.organization}
                </span>
              </div>
              <span
                style={{
                  fontFamily: "Verdana, Arial, sans-serif",
                  fontSize: "11px",
                  color: "#888888",
                  whiteSpace: "nowrap",
                }}
              >
                {exp.start_date} – {exp.end_date}
              </span>
            </div>
            <p
              style={{
                fontFamily: "Verdana, Arial, sans-serif",
                fontSize: "12px",
                color: "#555555",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
