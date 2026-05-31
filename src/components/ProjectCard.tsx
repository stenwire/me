import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  className?: string;
  delay?: number;
  link?: string;
  github_url?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  className,
  delay = 0,
  link,
  github_url,
}: ProjectCardProps) => {
  return (
    <div
      className={cn("page-box card-hover opacity-0 animate-fade-in", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="page-box-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>{title}</span>
        <span style={{ display: "flex", gap: "10px", fontWeight: "normal", fontSize: "11px" }}>
          {github_url && (
            <a
              href={github_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0033cc", fontFamily: "Verdana, Arial, sans-serif" }}
            >
              [Source]
            </a>
          )}
          {link && link !== github_url && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0033cc", fontFamily: "Verdana, Arial, sans-serif" }}
            >
              [Live Demo]
            </a>
          )}
        </span>
      </div>

      <div style={{ padding: "12px 16px" }}>
        <p
          style={{
            fontFamily: "Verdana, Arial, sans-serif",
            fontSize: "12px",
            color: "#444444",
            lineHeight: 1.65,
            marginBottom: "10px",
          }}
        >
          {description}
        </p>

        <div style={{ borderTop: "1px solid #eeeeee", paddingTop: "8px" }}>
          {tags.map((tag) => (
            <span key={tag} className="tag-badge">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
