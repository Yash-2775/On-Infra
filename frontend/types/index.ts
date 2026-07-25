import { Timestamp } from "firebase/firestore";

export interface NavItem {
  label: string;
  href: string;
}

export interface SubCategoryItem {
  id: string;
  name: string;
  image: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  features: string[];
  benefits: string[];
  subCategories?: SubCategoryItem[];
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  description: string;
  image: string;
  socials?: {
    linkedin?: string;
    email?: string;
    phone?: string;
  };
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  bgImage: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// ==========================================
// FIRESTORE COLLECTION DOCUMENT INTERFACES
// ==========================================

export interface CompanyInfoDoc {
  id?: string;
  name: string;
  tagline: string;
  foundedYear: number;
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  updatedAt?: Timestamp | string;
}

export interface ServiceDoc extends Omit<ServiceItem, "id"> {
  id?: string;
  order?: number;
  updatedAt?: Timestamp | string;
}

export interface TeamMemberDoc extends Omit<TeamMember, "id"> {
  id?: string;
  order?: number;
  updatedAt?: Timestamp | string;
}

export interface ClientLogoDoc extends Omit<ClientLogo, "id"> {
  id?: string;
  order?: number;
  updatedAt?: Timestamp | string;
}

export interface TestimonialDoc extends Omit<TestimonialItem, "id"> {
  id?: string;
  updatedAt?: Timestamp | string;
}

export interface HeroSlideDoc extends Omit<HeroSlide, "id"> {
  id?: string;
  order?: number;
  updatedAt?: Timestamp | string;
}

export interface ContactMessageDoc {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: Timestamp | string;
  read?: boolean;
}

export interface SiteSettingsDoc {
  id?: string;
  siteName: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  maintenanceMode: boolean;
  metaTitle: string;
  metaDescription: string;
  updatedAt?: Timestamp | string;
}

export interface ServiceResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
