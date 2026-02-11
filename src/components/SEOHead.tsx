import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  structuredData?: Record<string, unknown>[];
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, canonical, structuredData }) => {
  const siteUrl = 'https://www.brightmaind.com';
  const fullCanonical = `${siteUrl}${canonical}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      <meta property="og:site_name" content="BrightMaind" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta property="og:image:alt" content="BrightBox — on-premise AI appliance for industrial operations by BrightMaind" />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
      <meta name="twitter:image:alt" content="BrightBox — on-premise AI appliance for industrial operations by BrightMaind" />

      {structuredData && structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
