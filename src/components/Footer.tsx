import { usePortfolioData } from "@/hooks/usePortfolioData";

const Footer = () => {
  const { data, isLoading } = usePortfolioData();

  if (isLoading) return null;

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} — Designed & built with intention
          </p>
          <nav className="flex items-center gap-6">
            <a
              href={data?.footer.resume_link}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              Resume
            </a>
            <a
              href={data?.footer.linkedin_link}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              LinkedIn
            </a>
            <a
              href={data?.footer.github_link}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
