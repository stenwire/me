import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  size?: "small" | "medium" | "large" | "wide" | "tall";
  delay?: number;
  id?: string;
  title?: string;
}

const sizeClasses = {
  small: "col-span-1 row-span-1",
  medium: "col-span-1 md:col-span-2 row-span-1",
  large: "col-span-1 md:col-span-2 row-span-2",
  wide: "col-span-1 md:col-span-3 row-span-1",
  tall: "col-span-1 row-span-2",
};

const BentoCard = ({ children, className, size = "small", delay = 0, id, title }: BentoCardProps) => {
  return (
    <div
      id={id}
      className={cn(
        "page-box card-hover opacity-0 animate-fade-in",
        sizeClasses[size],
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {title && <div className="page-box-header">{title}</div>}
      <div style={{ padding: "14px 16px" }}>
        {children}
      </div>
    </div>
  );
};

export default BentoCard;
