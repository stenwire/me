import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  size?: "small" | "medium" | "large" | "wide" | "tall";
  delay?: number;
  id?: string;
}

const sizeClasses = {
  small: "col-span-1 row-span-1",
  medium: "col-span-1 md:col-span-2 row-span-1",
  large: "col-span-1 md:col-span-2 row-span-2",
  wide: "col-span-1 md:col-span-3 row-span-1",
  tall: "col-span-1 row-span-2",
};

const BentoCard = ({ children, className, size = "small", delay = 0, id }: BentoCardProps) => {
  return (
    <div
      id={id}
      className={cn(
        "bg-surface-elevated rounded-2xl p-6 md:p-8 card-hover opacity-0 animate-fade-in",
        "border border-border/50",
        "shadow-sm hover:shadow-xl hover:shadow-foreground/5",
        sizeClasses[size],
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default BentoCard;
