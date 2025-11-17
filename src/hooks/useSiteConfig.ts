import { useState, useEffect } from 'react';

export interface SiteConfig {
  site: {
    name: string;
    tagline: string;
    description: string;
    logo?: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  images: {
    hero: string;
    store: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
  categories: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    color: string;
  }>;
  about: {
    title: string;
    paragraphs: string[];
  };
  contact: {
    phone: string;
    address: string;
    hours: string;
    email: string;
    photo?: string;
    linkedin?: string;
  };
  footer: {
    copyright: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  };
  social?: Array<{
    name: string;
    href: string;
  }>;
}

export const useSiteConfig = () => {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch('/site-config.json');
        const data = await response.json();
        setConfig(data);
      } catch (error) {
        console.error('Erro ao carregar configurações:', error);
      } finally {
        setLoading(false);
      }
    };

    loadConfig();
  }, []);

  return { config, loading };
};
