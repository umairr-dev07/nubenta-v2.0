import React, { useEffect, useRef, useState } from 'react';
import ContactForm from '../components/ContactForm';
import { Calendar, Users, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

// Animation Hook
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.once) {
          observer.disconnect();
        }
      } else if (!options.once) {
        setIsInView(false);
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px'
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

const BookDemo: React.FC = () => {
  const [headerRef, headerInView] = useInView({ once: true, threshold: 0.2 });
  const [contentRef, contentInView] = useInView({ once: true, threshold: 0.1 });

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0f] to-black">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
      `}</style>

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/booking-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Mesh Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none opacity-30" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="text-center mb-12">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${headerInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            See NUBENTA in <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-purple-500">Action</span>
          </h1>
          <p className={`text-xl text-slate-400 max-w-2xl mx-auto ${headerInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            Experience how our autonomous agents can transform your business workflows. 
            Book a personalized walkthrough with our solution architects.
          </p>
        </div>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Benefits */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className={`bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex gap-4 items-start hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 ${contentInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="p-3 bg-cyan-900/30 rounded-lg text-cyan-400">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <a href="tel:+1234567890" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className={`bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex gap-4 items-start hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 ${contentInView ? 'animate-fade-in-left stagger-1' : 'opacity-0'}`}>
              <div className="p-3 bg-emerald-900/30 rounded-lg text-emerald-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <a href="mailto:info@nubenta.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  info@nubenta.com
                </a>
              </div>
            </div>
            
            <div className={`bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex gap-4 items-start hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 ${contentInView ? 'animate-fade-in-left stagger-2' : 'opacity-0'}`}>
              <div className="p-3 bg-purple-900/30 rounded-lg text-purple-400">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Flexible Scheduling</h3>
                <p className="text-slate-400">Choose a time that works for you. Our team is available across global time zones.</p>
              </div>
            </div>
            
            <div className={`bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex gap-4 items-start hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 ${contentInView ? 'animate-fade-in-left stagger-3' : 'opacity-0'}`}>
              <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Tailored Walkthrough</h3>
                <p className="text-slate-400">We don't do generic demos. We'll show you exactly how Beeba or Genie fits your specific business model.</p>
              </div>
            </div>

            <div className={`${contentInView ? 'animate-fade-in-left stagger-4' : 'opacity-0'}`}>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Stay connected with us</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                <a 
                  href="https://www.facebook.com/profile.php?id=61584223299600" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-blue-900/30 rounded-lg text-blue-400 hover:bg-blue-900/50 hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-8 h-8" />
                </a>
                <a 
                  href="https://www.instagram.com/nubenta.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-pink-900/30 rounded-lg text-pink-400 hover:bg-pink-900/50 hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-8 h-8" />
                </a>
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-blue-900/30 rounded-lg text-blue-400 hover:bg-blue-900/50 hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
                <a 
                  href="https://www.twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-sky-900/30 rounded-lg text-sky-400 hover:bg-sky-900/50 hover:scale-110 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-8 h-8" />
                </a>
                <a 
                  href="https://www.tiktok.com/@nubenta.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-slate-900/30 rounded-lg text-white hover:bg-slate-900/50 hover:scale-110 transition-all duration-300"
                  aria-label="TikTok"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className={`order-1 lg:order-2 ${contentInView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <ContactForm 
              formTitle="Book a Live Demo" 
              successMessage="We received your application. We will connect with you as soon as possible."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;