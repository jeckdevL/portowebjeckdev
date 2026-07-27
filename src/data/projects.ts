import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'Sebuah platform e-commerce modern dengan fitur real-time inventory, payment gateway, dan dashboard admin. Dibangun dengan performa tinggi dan SEO optimal.',
    tech_stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    image_url: '/images/ecommerce.jpg',
    live_link: 'https://example.com',
    repo_link: 'https://github.com/ismandzaky/ecommerce',
    created_at: '2025-01-15',
  },
  {
    id: '2',
    title: 'Landing Page 3D Interaktif',
    description:
      'Landing page futuristik dengan elemen 3D interaktif menggunakan Three.js. Objek 3D merespon gerakan mouse dan memiliki animasi yang halus.',
    tech_stack: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    image_url: '/images/landing3d.jpg',
    live_link: 'https://example.com',
    repo_link: 'https://github.com/ismandzaky/3d-landing',
    created_at: '2025-02-20',
  },
  {
    id: '3',
    title: 'Sistem Manajemen Inventaris',
    description:
      'Aplikasi fullstack untuk manajemen inventaris barang dengan fitur CRUD, export laporan, dan autentikasi multi-level.',
    tech_stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image_url: '/images/inventory.jpg',
    live_link: 'https://example.com',
    repo_link: 'https://github.com/ismandzaky/inventory',
    created_at: '2025-03-10',
  },
];