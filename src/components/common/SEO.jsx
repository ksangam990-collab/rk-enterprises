import { useEffect } from 'react';
import { BUSINESS_CONFIG } from '../../data/config';

export default function SEO({ title, description }) {
  useEffect(() => {
    // Dynamic page title
    const fullTitle = title 
      ? `${title} | ${BUSINESS_CONFIG.businessName}`
      : `${BUSINESS_CONFIG.businessName} | Complete CCTV & Security Solutions`;
    
    document.title = fullTitle;

    // Dynamic description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute('content', description);
    }

    // Dynamic OpenGraph Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }

    // Dynamic OpenGraph Description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) {
      ogDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
