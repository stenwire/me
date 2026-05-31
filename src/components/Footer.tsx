import { usePortfolioData } from "@/hooks/usePortfolioData";

const Footer = () => {
  const { data, isLoading } = usePortfolioData();

  if (isLoading) return null;

  return (
    <footer style={{ borderTop: "2px solid #336699", backgroundColor: "#002255", marginTop: "0", paddingBottom: "0" }}>
      {/* Dark bottom banner */}
      <div
        className="container mx-auto px-4 sm:px-6"
        style={{ maxWidth: "900px", padding: "18px 20px" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "Verdana, Arial, sans-serif",
              fontSize: "11px",
              color: "#aaccee",
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} Stephen Nwankwo — All rights reserved.
            &nbsp;·&nbsp; Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
          </p>

          <nav style={{ display: "flex", gap: "14px" }}>
            {[
              { href: data?.footer.resume_link, label: "Résumé" },
              { href: data?.footer.linkedin_link, label: "LinkedIn" },
              { href: data?.footer.github_link, label: "GitHub" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                style={{
                  fontFamily: "Verdana, Arial, sans-serif",
                  fontSize: "11px",
                  color: "#aaccee",
                  textDecoration: "underline",
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <p
          style={{
            fontFamily: "Verdana, Arial, sans-serif",
            fontSize: "10px",
            color: "#446688",
            margin: "8px 0 0",
          }}
        >
          Best viewed at 1024×768. Tested in Firefox and Internet Explorer.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
