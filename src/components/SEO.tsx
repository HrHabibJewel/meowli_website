import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
}

const defaultSEO = {
  siteName: 'Meowli',
  title: 'Meowli - The App for Pets and Their Humans | Pet Social Network & Health Tracker',
  description: 'Join 50,000+ pet lovers on Meowli! Find perfect playmates for your furry friend, track health records, discover nearby vets, and share adorable moments. Download free today!',
  keywords: 'pet app, cat social network, dog matchmaking, pet health tracker, vet finder, pet community, pet social media, cat app, dog app, pet care app',
  siteUrl: 'https://meowli.app',
  ogImage: 'https://lovable.dev/opengraph-image-p98pqg.png',
};

export const SEO = ({
  title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  canonicalUrl,
  ogImage = defaultSEO.ogImage,
  ogType = 'website',
  noIndex = false,
}: SEOProps) => {
  const fullTitle = title 
    ? `${title} | ${defaultSEO.siteName}` 
    : defaultSEO.title;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={defaultSEO.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
