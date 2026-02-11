import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, canonical }) => {
  const siteUrl = 'https://www.brightmaind.com';
  const fullCanonical = `${siteUrl}${canonical}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "BrightMaind",
          "url": "https://www.brightmaind.com",
          "logo": "https://www.brightmaind.com/logo.svg",
          "description": "Custom-built, air-gapped AI appliances for manufacturing. Your data never leaves your building.",
          "address": { "@type": "PostalAddress", "addressCountry": "GB" }
        })}
      </script>
      
    </Helmet>
  );
};

export default SEOHead;