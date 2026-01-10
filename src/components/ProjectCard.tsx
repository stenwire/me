import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  className?: string;
  delay?: number;
}

const ProjectCard = ({ title, description, tags, className, delay = 0 }: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group bg-surface-elevated rounded-2xl p-6 md:p-8 card-hover opacity-0 animate-fade-in cursor-pointer",
        "border border-border/50",
        "shadow-sm hover:shadow-xl hover:shadow-foreground/5",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="p-2 rounded-full bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-muted/50 rounded-full text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
