import { useEffect } from "react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import Hero from "@/components/stage/Hero";
import Projects from "@/components/stage/Projects";
import Writing from "@/components/stage/Writing";
import Experience from "@/components/stage/Experience";
import ContactSection from "@/components/stage/ContactSection";
import AgentWidget from "@/components/stage/AgentWidget";

const Index = () => {
  const { isLoading } = usePortfolioData();

  useEffect(() => {
    document.title = "Stephen Nwankwo — Software and AI Engineer";
  }, []);

  if (isLoading) {
    return <main style={{ minHeight: "100vh" }} />;
  }

  return (
    <main className="st-wrap">
      <Hero />
      <Projects />
      <Writing />
      <Experience />
      <ContactSection />
      <AgentWidget />
    </main>
  );
};

export default Index;
