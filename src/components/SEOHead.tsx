import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  services?: Array<{
    serviceType: string;
    areaServed: string;
    description: string;
  }>;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, canonical, services }) => {
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
          "@type": "ProfessionalService",
          "name": "Bright mAInd Marketing",
          "url": "https://www.brightmaind.com",
          "logo": "https://www.brightmaind.com/logo.svg",
          "areaServed": "Scotland",
          "description": "We deliver deposit-paid consultations at an agreed CAC using your existing booking system.",
          "address": { "@type": "PostalAddress", "addressCountry": "GB" }
        })}
      </script>
      
      {/* Service-specific JSON-LD */}
      {services && services.map((service, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": service.serviceType,
            "areaServed": service.areaServed,
            "description": service.description
          })}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;