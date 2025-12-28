import React, { useEffect, useRef } from 'react';
import { Check, Phone } from 'lucide-react';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';

const Genie: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px'
        }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0f] to-black">
       {/* Video Background */}
       <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/pricing-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

       {/* Mesh Grid Background */}
       <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none opacity-30" />

       {/* Floating Elements */}
       <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none z-0" />
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Add inline styles for animations */}
      <style>{`
        .card-animate {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.4s ease-out, transform 0.5s ease-out;
        }
        
        .card-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .card-animate:nth-child(2) {
          transition-delay: 0.05s;
        }
        
        .card-animate:nth-child(3) {
          transition-delay: 0.1s;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">GENIE</span>
          </h1>
          <p className="text-xl text-cyan-400">
            AI Calling Agent: Your 24/7 Automated Voice Team
          </p>
        </div>

        <div className="flex flex-col gap-16">

            {/* GENIE SECTION - CARD STYLE */}
            <div ref={(el) => (cardRefs.current[0] = el)} className="relative card-animate">
                <div className="bg-gradient-to-br from-slate-900/80 via-blue-900/20 to-slate-900/80 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
                        <div className="w-full text-left">
                            <p className="text-slate-300 leading-relaxed text-lg mb-8">
                                GENIE, an AI Calling Agent, is an intelligent, human-like voice assistant, custom-built for your business. It moves you from the hardship of missed calls and lost leads to the ease of capturing and qualifying every opportunity, 24/7. Stop losing sales after hours; let your AI agent handle the calls.
                            </p>
                            
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left w-full mb-8">
                                {[
                                    'Automates all your voice interactions.',
                                    'Provides 24/7 customer support.',
                                    'Handles AI-powered appointment scheduling.',
                                    'Performs proactive AI lead qualification.',
                                    'Can nurture calls with custom scripts.',
                                    'Turns your phone line into a fully automated asset.'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-400">
                                        <div className="mt-1 p-0.5 rounded-full bg-cyan-600/20 text-cyan-400 flex-shrink-0">
                                            <Check className="w-4 h-4" strokeWidth={3} />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="pt-6 flex flex-col sm:flex-row items-center sm:items-center gap-6">
                                <div className="flex flex-col gap-2 items-center sm:items-start">
                                    <span className="text-lg text-slate-400">Contact for Pricing & Details</span>
                                    <a href="tel:+15204426528" className="flex items-center gap-2 text-2xl font-semibold text-white hover:text-blue-400 transition-colors">
                                        <Phone className="w-6 h-6" />
                                        +1 (520) 442-6528
                                    </a>
                                </div>
                                <NavLink to="/book-demo">
                                    <Button variant="primary" glowColor="blue" className="!px-8 !py-3">
                                        Book Live Demo
                                    </Button>
                                </NavLink>
                            </div>
                        </div>
                        
                        {/* GENIE Character Image */}
                        <div className="flex items-center justify-center lg:justify-end">
                            <img 
                                src="/genie1.png" 
                                alt="GENIE Character" 
                                className="w-64 h-64 lg:w-80 lg:h-80 object-contain rounded-2xl drop-shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-110 hover:-translate-y-4 hover:rotate-2 transition-all duration-300 ease-out animate-float"
                                style={{
                                    transform: 'perspective(1000px) rotateY(-5deg)',
                                    transformStyle: 'preserve-3d'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* VIDEO SECTION - genie-v1 */}
            <div ref={(el) => (cardRefs.current[1] = el)} className="relative card-animate">
                <div className="bg-gradient-to-br from-slate-900/80 via-blue-900/20 to-slate-900/80 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="w-full text-left">
                            <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                Stop wasting time on manual data entry and let automation drive your sales pipeline. Our intelligent system seamlessly moves every prospect through a professional workflow—from the initial Lead Source and Data Enrichment to Customer Conversations and Lead Qualification. By automating CRM updates and Follow-up scheduling, we ensure your sales team stays focused on what they do best: building relationships and closing deals. Experience a smoother, faster way to grow your business without the administrative headache.
                            </p>
                            <NavLink to="/book-demo">
                                <button className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 border border-cyan-500/30 rounded-xl text-cyan-400 font-semibold overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                                    <span className="relative z-10">Learn More</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </button>
                            </NavLink>
                        </div>
                        
                        {/* Video */}
                        <div className="flex items-center justify-center lg:justify-end">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full max-w-md rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                            >
                                <source src="/genie-v1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            {/* GENIE2 IMAGE SECTION */}
            <div ref={(el) => (cardRefs.current[2] = el)} className="relative card-animate">
                <div className="bg-gradient-to-br from-slate-900/80 via-blue-900/20 to-slate-900/80 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center">
                        {/* Genie2 Image */}
                        <div className="flex items-center justify-center lg:justify-start">
                            <img 
                                src="/genie2.png" 
                                alt="Genie Dashboard" 
                                className="w-80 h-80 lg:w-96 lg:h-96 object-contain rounded-2xl drop-shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-110 hover:-translate-y-4 hover:rotate-2 transition-all duration-300 ease-out"
                            />
                        </div>
                        
                        <div className="w-full text-left">
                            <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                Finding your next big opportunity shouldn't feel like a roll of the dice. Our intelligent assistant simplifies the prospecting process by identifying and organizing high-value potential clients for your business. With a clear, interactive interface, you can qualify leads, track outreach progress, and manage your sales pipeline with magical efficiency. Let our smart technology do the vetting so you can focus on closing deals and building meaningful professional relationships.
                            </p>
                            <div className="mt-6">
                                <NavLink to="/book-demo">
                                    <button className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 border border-cyan-500/30 rounded-xl text-cyan-400 font-semibold overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                                        <span className="relative z-10">Learn More</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Genie;