export const SITE = {
  name: 'Bright mAInd',
  legalName: 'BrightMaind Ltd',
  url: 'https://www.brightmaind.com',
  email: 'enquiries@brightmaind.com',
  registeredOffice: 'Office 1481, 3 Fitzroy Place, 1/1, Sauchiehall Street, Glasgow, G3 7RH',
  serviceArea: 'Ayrshire, Glasgow and Central Scotland',
  logo: '/ChatGPT_Image_Apr_22,_2026,_03_41_23_PM.png',
};

export const serviceLinks = [
  { name: 'Industrial Solutions', href: '/industrial-solutions' },
  { name: 'Edge AI', href: '/edge-ai' },
  { name: 'Field Services', href: '/field-services' },
];

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE.url}${item.path}`,
  })),
});

export const serviceSchema = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: `${SITE.url}${path}`,
  serviceType: name,
  provider: { '@type': 'ProfessionalService', name: SITE.name, url: SITE.url },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Ayrshire' },
    { '@type': 'City', name: 'Glasgow' },
    { '@type': 'AdministrativeArea', name: 'Central Scotland' },
    { '@type': 'AdministrativeArea', name: 'Scotland' },
  ],
});
