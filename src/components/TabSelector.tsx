import { useState } from "react";
import { motion } from "framer-motion";

type Tab = "projects" | "writings" | "experience";

interface TabSelectorProps {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "writings", label: "Writings" },
  { id: "experience", label: "Experience" },
];

const TabSelector = ({ activeTab, onChange }: TabSelectorProps) => {
  return (
    <div className="flex gap-1 p-1 bg-muted/50 rounded-full w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
            activeTab === tab.id
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="activeTab"
              className="absolute inset-0 bg-primary rounded-full"
              style={{ zIndex: -1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabSelector;
export type { Tab };
