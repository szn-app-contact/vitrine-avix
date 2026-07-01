export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string; // lucide icon name
  features: string[];
}

export interface Offer {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  pricePromo: number;
  priceNormal: string; // can be range like "990 à 1 200"
  isPopular: boolean;
  features: string[];
  notIncluded?: string[];
  cta: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Problem {
  title: string;
  description: string;
  icon: string;
}

export interface MethodStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface ZoneCity {
  name: string;
  department?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  tagline: string;
  url: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  address?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  city: string;
  sector: string;
  service: string;
  description: string;
  image: string;
  link?: string;
}

export interface WhyItem {
  title: string;
  description: string;
  icon: string;
}
