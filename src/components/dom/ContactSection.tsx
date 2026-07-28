'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { PERSONAL_INFO } from '@/lib/constants';
import { fadeInLeft, fadeInRight } from '@/lib/animations';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Ada project yang ingin didiskusikan? Yuk ngobrol!"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div {...fadeInLeft} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's work together
              </h3>
              <p className="text-gray-400">
                Saya selalu terbuka untuk diskusi tentang project baru, ide kreatif, atau
                kesempatan untuk membantu Anda membangun sesuatu yang luar biasa.
              </p>
            </div>

             <motion.div className="space-y-4">
               <motion.div 
                 whileHover={{ x: 8 }}
                 className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[var(--token-accent-yellow)]/30 transition-all duration-300"
               >
                 <motion.div 
                   animate={{ boxShadow: ['0 0 0 0 rgba(0,240,255,0.4)', '0 0 0 8px rgba(0,240,255,0)'] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--token-accent-yellow)]/20 to-[var(--token-accent-pink)]/10 flex items-center justify-center flex-shrink-0"
                 >
                   <svg className="w-6 h-6 text-[var(--token-accent-yellow)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                 </motion.div>
                 <div>
                   <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Email</p>
                   <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-[var(--token-accent-yellow)] transition-colors font-medium">
                     {PERSONAL_INFO.email}
                   </a>
                 </div>
               </motion.div>

               <motion.div 
                 whileHover={{ x: 8 }}
                 className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-green-500/30 transition-all duration-300"
               >
                 <motion.div 
                   animate={{ boxShadow: ['0 0 0 0 rgba(34,197,94,0.4)', '0 0 0 8px rgba(34,197,94,0)'] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center flex-shrink-0"
                 >
                   <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                 </motion.div>
                 <div>
                   <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">WhatsApp</p>
                   <a href={PERSONAL_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors font-medium">
                     {PERSONAL_INFO.phone}
                   </a>
                 </div>
               </motion.div>
             </motion.div>

             <motion.a
               href={PERSONAL_INFO.whatsapp}
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.98 }}
               className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
             >
               <motion.svg 
                 width="20" 
                 height="20" 
                 viewBox="0 0 24 24" 
                 fill="currentColor"
                 animate={{ rotate: [0, -10, 10, -10, 0] }}
                 transition={{ duration: 2, repeat: Infinity }}
               >
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
               </motion.svg>
               Chat via WhatsApp
             </motion.a>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div {...fadeInRight}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--token-accent-yellow)] focus:ring-1 focus:ring-[var(--token-accent-yellow)] transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--token-accent-yellow)] focus:ring-1 focus:ring-[var(--token-accent-yellow)] transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--token-accent-yellow)] focus:ring-1 focus:ring-[var(--token-accent-yellow)] transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                {status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : status === 'success' ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </span>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}