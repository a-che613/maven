import { Metadata } from 'next';
import Script from 'next/script';

interface StructuredDataProps {
  data: any;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Maven Genetics',
  url: 'https://maven-genetics.vercel.app',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://maven-genetics.vercel.app/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Maven Genetics',
  url: 'https://maven-genetics.vercel.app',
  logo: 'https://maven-genetics.vercel.app/logo.png',
  sameAs: [
    'https://twitter.com/mavengenetics',
    'https://www.instagram.com/mavengenetics',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'support@mavengenetics.com',
  },
};

// Add this to your page's metadata
export const structuredDataMetadata: Metadata = {
  other: {
    'google-site-verification': 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
};
