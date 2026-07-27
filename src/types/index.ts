
// Types sesuai Schema.md

export interface Project {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  image_url: string;
  model_3d_url?: string;
  live_link: string;
  repo_link: string;
  created_at: string;
}

export interface Service {
  id: string;
  name: string;
  price_range: string;
  features: string[];
}

export interface ClientMessage {
  id: string;
  sender_name: string;
  sender_email: string;
  message: string;
  status: 'UNREAD' | 'READ' | 'REPLIED';
  created_at: string;
}

export interface NavLink {
  label: string;
  href: string;
}