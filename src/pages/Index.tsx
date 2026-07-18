import { useEffect } from "react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import Hero from "@/components/stage/Hero";
import ProjectsBento from "@/components/stage/ProjectsBento";
import Writing from "@/components/stage/Writing";
import Experience from "@/components/stage/Experience";
import Robotics from "@/components/stage/Robotics";
import Special from "@/components/stage/Special";
import ContactSection from "@/components/stage/ContactSection";
import AgentWidget from "@/components/stage/AgentWidget";
import ThemeToggle from "@/components/stage/ThemeToggle";

const Index = () => {
  const { isLoading } = usePortfolioData();

  useEffect(() => {
    document.title = "Stephen Nwankwo — Software Engineer";
  }, []);

  if (isLoading) {
    return <main style={{ minHeight: "100vh" }} />;
  }

  return (
    <main className="st-wrap">
      <ThemeToggle />
      <Hero />
      <ProjectsBento />
      <Experience />
      <Robotics />
      <Special />
      <Writing />
      <ContactSection />
      <AgentWidget />
    </main>
  );
};

export default Index;
