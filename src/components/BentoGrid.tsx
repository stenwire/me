import { useState } from "react";
import BentoCard from "./BentoCard";
import ProjectCard from "./ProjectCard";
import TabSelector, { Tab } from "./TabSelector";
import StatusPill from "./StatusPill";
import ExperienceCard from "./ExperienceCard";
import WritingsCard from "./WritingsCard";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePortfolioData } from "@/hooks/usePortfolioData";





const BentoGrid = () => {
  const [activeTab, setActiveTab] = useState<Tab>("projects");
  const { data, isLoading } = usePortfolioData();

  if (isLoading) return null;

  return (
    <section id="work" className="py-20 md:py-32">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* About & Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
          {/* About Card */}
          <BentoCard size="medium" delay={0.3}>
            <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">About</p>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                  Build To Solve
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {data?.about.about_content}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>{data?.about.location}</span>
              </div>
            </div>
          </BentoCard>

          {/* Skills Card */}
          <BentoCard size="medium" delay={0.4}>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">Stack</p>
            <div className="flex flex-wrap gap-2">
              {data?.stack.tools.map((skill) => (
                <span
                  key={skill}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </BentoCard>
        </div>

        {/* Selected Work Header with Status Pill and Tab Selector */}
        <div className="mb-8">
          <div
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Selected Work
            </h2>
            <StatusPill />
          </div>
          <p
            className="text-muted-foreground mb-6 max-w-xl opacity-0 animate-fade-in text-sm sm:text-base"
            style={{ animationDelay: "0.2s" }}
          >
            A collection of projects that showcase my approach to design and development.
          </p>

          <div
            className="opacity-0 animate-fade-in overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ animationDelay: "0.3s" }}
          >
            <TabSelector activeTab={activeTab} onChange={setActiveTab} />
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {data?.projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tools}
                link={project.link}
                github_url={project.github_url}
                className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
                delay={0.4 + index * 0.1}
              />
            ))}
          </div>
        )}

        {activeTab === "writings" && <WritingsCard delay={0.4} />}

        {activeTab === "experience" && <ExperienceCard delay={0.4} />}

        {/* Contact Card */}
        <div className="mt-16">
          <BentoCard size="medium" delay={0.9} id="contact">
            <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">Contact</p>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Let's work together</h3>
                <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                  Have a project in mind? I'd love to hear about it.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button asChild className="w-full sm:w-auto">
                  <a href={`mailto:${data?.contact.email}`} className="gap-2">
                    <Mail className="h-4 w-4" />
                    {data?.contact.email}
                  </a>
                </Button>

                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={data?.contact.github_link} aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={data?.contact.linkedin_link} aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={data?.contact.x_link} aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
