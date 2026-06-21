export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string; // Lucide icon name
  category: "engineering" | "marketing" | "operations";
  features: string[];
  pricingRange: string;
  avgTimeline: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  location: string;
  category: string;
  heroImage: string;
  techStack: string[];
  problem: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string; // Image path or initials styling
  specialty: string;
  experience: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarInitials: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  serviceNeeded: string[];
  projectBudget: string;
  addNotes?: string;
  submittedAt: string;
}

export interface BookingSlot {
  date: string;
  time: string;
  service: string;
}
