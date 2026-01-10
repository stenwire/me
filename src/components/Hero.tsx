import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePortfolioData } from "@/hooks/usePortfolioData";

const Hero = () => {
  const { data, isLoading } = usePortfolioData();

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) return <div className="min-h-screen grid-background" />;

  return (
    <section className="min-h-screen relative flex items-center grid-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-20">
        {data?.hero.logo_url && (
          <img src={data.hero.logo_url} alt="Logo" className="h-20 w-20 mb-8" />
        )}
        <div className="max-w-3xl">
          <p
            className="text-muted-foreground text-sm tracking-wide uppercase mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {data?.hero.job_title}
          </p>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
            dangerouslySetInnerHTML={{ __html: data?.hero.heading || "" }}
          />

          <p
            className="text-base sm:text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {data?.hero.sub_heading}
          </p>

          <div
            className="flex items-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button onClick={scrollToWork} size="lg">
              View Work
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#contact" className="link-underline">
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "0.8s" }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToWork}
          className="animate-bounce"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
