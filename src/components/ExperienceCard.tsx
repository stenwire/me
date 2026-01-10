import BentoCard from "./BentoCard";
import { usePortfolioData } from "@/hooks/usePortfolioData";

interface ExperienceCardProps {
  delay?: number;
}

const ExperienceCard = ({ delay = 0.3 }: ExperienceCardProps) => {
  const { data, isLoading } = usePortfolioData();

  if (isLoading) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {data?.experience.map((exp, index) => (
        <BentoCard key={exp.organization} delay={delay + index * 0.1}>
          <div className="h-full flex flex-col">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
              {exp.start_date} – {exp.end_date}
            </p>
            <h3 className="text-lg font-semibold mb-1">{exp.job_title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{exp.organization}</p>
            <p className="text-sm text-muted-foreground mt-auto leading-relaxed">
              {exp.description}
            </p>
          </div>
        </BentoCard>
      ))}
    </div>
  );
};

export default ExperienceCard;
