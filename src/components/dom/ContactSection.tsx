'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading title="Get In Touch" />
      <div className="grid md:grid-cols-2 gap-16 mt-16">
        <div>
          <p className="text-white/60 mb-8">
            Let's discuss how we can build something exceptional together.
          </p>
          <div className="space-y-4">
            <a href="mailto:hello@example.com" className="block text-white hover:text-white/70 transition-colors">hello@example.com</a>
          </div>
        </div>
        <form className="space-y-6">
          <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-white/30" />
          <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-white/30" />
          <textarea placeholder="Message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-white/30" />
          <button type="submit" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all">Send Message</button>
        </form>
      </div>
    </section>
  );
}