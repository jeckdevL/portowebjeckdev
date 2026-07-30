import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce platform with real-time inventory, payment gateway, and admin dashboard. Built with high performance and optimal SEO.',
    tech_stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    image_url: '/images/ecommerce.jpg',
    live_link: 'https://example.com',
    repo_link: 'https://github.com/ismandzaky/ecommerce',
    created_at: '2025-01-15',
  },
  {
    id: '2',
    title: 'Interactive 3D Landing Page',
    description:
      'A futuristic landing page with interactive 3D elements using Three.js. 3D objects respond to mouse movement with smooth animations.',
    tech_stack: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    image_url: '/images/landing3d.jpg',
    live_link: 'https://example.com',
    repo_link: 'https://github.com/ismandzaky/3d-landing',
    created_at: '2025-02-20',
  },
  {
    id: '3',
    title: 'Inventory Management System',
    description:
      'A fullstack application for goods inventory management with CRUD features, report export, and multi-level authentication.',
    tech_stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image_url: '/images/inventory.jpg',
    live_link: 'https://example.com',
    repo_link: 'https://github.com/ismandzaky/inventory',
    created_at: '2025-03-10',
  },
];