import BentoCard from "./BentoCard";
import { ArrowUpRight } from "lucide-react";
import { usePortfolioData } from "@/hooks/usePortfolioData";

interface WritingsCardProps {
  delay?: number;
}

const WritingsCard = ({ delay = 0.3 }: WritingsCardProps) => {
  const { data, isLoading } = usePortfolioData();

  if (isLoading) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {data?.writings.map((writing, index) => (
        <BentoCard key={writing.title} delay={delay + index * 0.1}>
          <a
            href={writing.link}
            target="_blank"
            rel="noopener noreferrer"
            className="h-full flex flex-col group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                {writing.published_date}
              </p>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
              {writing.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
              {writing.description}
            </p>
            <p className="text-xs text-muted-foreground">{writing.time_to_read}</p>
          </a>
        </BentoCard>
      ))}
    </div>
  );
};

export default WritingsCard;
