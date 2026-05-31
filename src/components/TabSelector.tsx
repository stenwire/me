type Tab = "projects" | "writings" | "experience";

interface TabSelectorProps {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string }[] = [
  { id: "projects",   label: "Projects"   },
  { id: "writings",   label: "Writing"    },
  { id: "experience", label: "Experience" },
];

const TabSelector = ({ activeTab, onChange }: TabSelectorProps) => {
  return (
    <div style={{ marginBottom: "-2px" }}>
      <div className="tab-strip">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`retro-tab ${activeTab === tab.id ? "retro-tab-active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabSelector;
export type { Tab };
