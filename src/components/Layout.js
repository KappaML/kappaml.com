import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WavesBackground from "../components/WavesBackground";
import AnimatedGlassCard from "../components/AnimatedGlassCard";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children, noContainer, pageTitle, pageDescription, pageImage, pageType = "website" }) => {
  const { title, description } = useSiteMetadata();
  const siteUrl = "https://kappaml.com";
  
  // Use page-specific values or fall back to defaults
  const metaTitle = pageTitle || title;
  const metaDescription = pageDescription || description;
  const metaImage = pageImage || `${siteUrl}/img/meta/og-image.png`;
  
  return (
    <div className="flex flex-col min-h-screen text-gray-700 font-['Noto_Sans'] relative">
      <WavesBackground />
      <Helmet>
        <html lang="en" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        
        {/* Open Graph tags for LinkedIn, Facebook, etc. */}
        <meta property="og:type" content={pageType} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : siteUrl} />
        <meta property="og:site_name" content="KappaML" />
        <meta property="og:image" content={metaImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="KappaML | Online Automated Machine Learning for Streaming Data" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:image:alt" content="KappaML | Online Automated Machine Learning for Streaming Data" />
        <meta name="twitter:site" content="@kappaml" />
        <meta name="twitter:creator" content="@kappaml" />
        
        {/* LinkedIn specific tags */}
        <meta property="article:author" content="KappaML" />
        <meta property="article:publisher" content="https://www.linkedin.com/company/kappaml" />
        
        {/* Additional meta tags for better SEO and social sharing */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="KappaML" />
        <meta name="publisher" content="KappaML" />
        <meta name="copyright" content="KappaML" />
        <meta name="application-name" content="KappaML" />
        <meta name="msapplication-TileColor" content="#13A2AD" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/meta/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/meta/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/meta/favicon-16x16.png`}
          sizes="16x16"
        />

        <meta name="theme-color" content="#13A2AD" />
        
        {/* Structured data for better rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "KappaML",
            "url": siteUrl,
            "logo": `${siteUrl}/img/logo.svg`,
            "description": metaDescription,
            "foundingDate": "2023",
            "industry": "Machine Learning",
            "sameAs": [
              "https://www.linkedin.com/company/kappaml",
              "https://github.com/kappaml"
            ]
          })}
        </script>
      </Helmet>
      <Navbar />
      <main className="flex-grow px-2 py-2 mx-auto sm:p-4 lg:p-8 lg:max-w-7xl">
        {noContainer ? children : (
          <AnimatedGlassCard>
            {children}
          </AnimatedGlassCard>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
