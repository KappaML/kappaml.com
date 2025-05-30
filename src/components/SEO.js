import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ 
  title, 
  description, 
  image, 
  article = false, 
  pathname 
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const { title: defaultTitle, description: defaultDescription, siteUrl } = data.site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || "/img/meta/og-image.png"}`,
    url: `${siteUrl}${pathname || ""}`,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      
      {/* Open Graph tags */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="KappaML" />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.title} />
      <meta name="twitter:site" content="@kappaml" />
      <meta name="twitter:creator" content="@kappaml" />
      
      {/* LinkedIn specific tags */}
      <meta property="article:author" content="KappaML" />
      <meta property="article:publisher" content="https://www.linkedin.com/company/kappaml" />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="KappaML" />
      <link rel="canonical" href={seo.url} />
      
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": article ? "Article" : "Organization",
          "name": seo.title,
          "description": seo.description,
          "url": seo.url,
          "image": seo.image,
          ...(article ? {
            "author": {
              "@type": "Organization",
              "name": "KappaML"
            },
            "publisher": {
              "@type": "Organization",
              "name": "KappaML",
              "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/img/logo.svg`
              }
            }
          } : {
            "logo": `${siteUrl}/img/logo.svg`,
            "sameAs": [
              "https://www.linkedin.com/company/kappaml",
              "https://github.com/kappaml"
            ]
          })
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 