import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  // Create breadcrumb list with Home as first item
  const breadcrumbItems = [
    { name: 'Home', url: 'https://brightmaind.com/' },
    ...items.map(item => ({
      name: item.name,
      url: `https://brightmaind.com${item.url}`
    }))
  ];

  // Generate JSON-LD BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <>
      {/* JSON-LD BreadcrumbList */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      </Helmet>

      {/* Breadcrumb UI */}
      <nav className="fixed top-24 left-0 right-0 z-40 bg-near-black/50 border-b border-slate/10" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link 
                to="/" 
                className="flex items-center text-off-white/70 hover:text-orange transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-off-white/40 mx-2" />
                {index === items.length - 1 ? (
                  <span className="text-orange font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link 
                    to={item.url} 
                    className="text-off-white/70 hover:text-orange transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumb;