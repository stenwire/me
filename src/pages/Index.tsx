import { useEffect } from "react";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Stephen Nwankwo — Software and AI Engineer";
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <BentoGrid />
      <Footer />
    </main>
  );
};

export default Index;
