'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import InteractiveCard from '@/components/ui/InteractiveCard';
import { services } from '@/data/services';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="My Services"
          subtitle="Layanan yang saya tawarkan untuk membantu project Anda"
        />

        <motion.div
          {...staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <InteractiveCard key={service.id} className="h-full">
            <motion.div
              {...fadeInUp}
              className="relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[var(--token-accent-yellow)]/30 transition-all duration-500 h-full"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--token-accent-yellow)]/20 to-[var(--token-accent-pink)]/20 flex items-center justify-center mb-6">
                {index === 0 ? (
                  <svg className="w-6 h-6 text-[var(--token-accent-yellow)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ) : index === 1 ? (
                  <svg className="w-6 h-6 text-[var(--token-accent-yellow)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2-1v2.5M6 18h12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-[var(--token-accent-yellow)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
              <p className="text-[var(--token-accent-yellow)] font-semibold mb-4">{service.price_range}</p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                    <svg className="w-4 h-4 mt-0.5 text-[var(--token-accent-yellow)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="https://wa.me/6281513186174?text=Halo%20Isman%2C%20saya%20tertarik%20dengan%20layanan%20Anda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-4 py-3 bg-gradient-to-r from-[var(--token-accent-yellow)] to-[var(--token-accent-pink)] text-black rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Pesan Sekarang
                </a>
              </div>
            </motion.div>
            </InteractiveCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}