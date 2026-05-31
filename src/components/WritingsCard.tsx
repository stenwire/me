import { usePortfolioData } from "@/hooks/usePortfolioData";

interface WritingsCardProps {
  delay?: number;
}

const WritingsCard = ({ delay = 0.3 }: WritingsCardProps) => {
  const { data, isLoading } = usePortfolioData();

  if (isLoading) return null;

  return (
    <div
      className="page-box opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="page-box-header">Articles &amp; Writing</div>

      <div>
        {data?.writings.map((writing, index) => (
          <div
            key={writing.title}
            style={{
              padding: "14px 16px",
              borderBottom: index < (data.writings.length - 1) ? "1px solid #eeeeee" : "none",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "4px", marginBottom: "4px" }}>
              <a
                href={writing.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#0033cc",
                }}
              >
                {writing.title}
              </a>
              <span style={{ fontFamily: "Verdana, Arial, sans-serif", fontSize: "11px", color: "#888888", whiteSpace: "nowrap" }}>
                {writing.published_date} · {writing.time_to_read}
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
              {writing.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WritingsCard;
