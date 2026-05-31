import { usePortfolioData } from "@/hooks/usePortfolioData";

const Hero = () => {
  const { data, isLoading } = usePortfolioData();

  if (isLoading) {
    return <div className="grid-background" style={{ minHeight: "100vh" }} />;
  }

  return (
    <div>
      {/* ── Banner ─────────────────────────────────────────────── */}
      <header
        style={{
          background: "linear-gradient(135deg, #002255 0%, #003d80 55%, #005099 100%)",
          padding: "32px 0 24px",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: "900px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
            {data?.hero.logo_url && (
              <img
                src={data.hero.logo_url}
                alt="Logo"
                style={{ width: "64px", height: "64px", border: "2px solid rgba(255,255,255,0.3)", flexShrink: 0 }}
              />
            )}
            <div>
              <h1
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "#ffffff",
                  margin: "0 0 4px 0",
                  fontWeight: "bold",
                  letterSpacing: "0.02em",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
                }}
              >
                Stephen Nwankwo
              </h1>
              <p
                style={{
                  fontFamily: "Verdana, Arial, sans-serif",
                  fontSize: "13px",
                  color: "#aaccee",
                  margin: 0,
                }}
              >
                {data?.hero.job_title}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ── Nav bar ────────────────────────────────────────────── */}
      <nav className="site-nav">
        <div className="container mx-auto" style={{ maxWidth: "900px", padding: "0 16px" }}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <a href="#">Home</a>
            <a href="#work">Projects</a>
            <a href="#work">Writing</a>
            <a href="#contact">Contact</a>
            <a href="#work">Experience</a>
          </div>
        </div>
      </nav>

      {/* ── Main content ───────────────────────────────────────── */}
      <div
        className="container mx-auto px-4 sm:px-6 py-10"
        style={{ maxWidth: "900px" }}
      >
        <div className="page-box card-hover opacity-0 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <div className="page-box-header">Welcome</div>
          <div style={{ padding: "20px 24px" }}>
            <h2
              className="opacity-0 animate-fade-in-up"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                color: "#002255",
                lineHeight: 1.3,
                marginBottom: "16px",
                animationDelay: "0.25s",
              }}
              dangerouslySetInnerHTML={{ __html: data?.hero.heading || "" }}
            />

            <hr />

            <p
              className="opacity-0 animate-fade-in"
              style={{
                fontFamily: "Verdana, Arial, sans-serif",
                fontSize: "13px",
                color: "#444444",
                maxWidth: "600px",
                lineHeight: 1.7,
                marginBottom: "20px",
                animationDelay: "0.35s",
              }}
            >
              {data?.hero.sub_heading}
            </p>

            <div
              className="opacity-0 animate-fade-in"
              style={{ display: "flex", flexWrap: "wrap", gap: "8px", animationDelay: "0.45s" }}
            >
              <button
                className="retro-btn"
                onClick={() =>
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work »
              </button>
              <a href="#contact" className="retro-btn-ghost">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
