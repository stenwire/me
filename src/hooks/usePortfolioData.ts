import { useQuery } from "@tanstack/react-query";

interface HeroData {
  job_title: string;
  heading: string;
  sub_heading: string;
  logo_url: string;
}

interface AboutData {
  about_content: string;
  location: string;
}

interface StackData {
  tools: string[];
}

interface ProjectData {
  title: string;
  description: string;
  tools: string[];
  link: string;
}

interface WritingData {
  title: string;
  description: string;
  published_date: string;
  time_to_read: string;
  link: string;
}

interface ExperienceData {
  job_title: string;
  organization: string;
  description: string;
  start_date: string;
  end_date: string;
}

interface ContactData {
  email: string;
  github_link: string;
  linkedin_link: string;
  x_link: string;
}

interface FooterData {
  resume_link: string;
  github_link: string;
  linkedin_link: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  stack: StackData;
  projects: ProjectData[];
  writings: WritingData[];
  experience: ExperienceData[];
  contact: ContactData;
  footer: FooterData;
}

const fetchPortfolioData = async (): Promise<PortfolioData> => {
  const response = await fetch("/data.json");
  if (!response.ok) {
    throw new Error("Failed to fetch portfolio data");
  }
  return response.json();
};

export const usePortfolioData = () => {
  return useQuery({
    queryKey: ["portfolioData"],
    queryFn: fetchPortfolioData,
  });
};
