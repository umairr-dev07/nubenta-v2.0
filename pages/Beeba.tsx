import React, { useEffect, useRef } from 'react';
import { Check, Phone } from 'lucide-react';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';

const Beeba: React.FC = () => {
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
       <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none z-0" />
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none z-0" />

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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            BEEBA
          </h1>
          <p className="text-xl text-yellow-400">
            AI Social Media Automation — Your 24/7 Partner
          </p>
        </div>

        <div className="flex flex-col gap-16">
            
            {/* BEEBA SECTION - CARD STYLE */}
            <div ref={(el) => (cardRefs.current[0] = el)} className="relative card-animate">
                <div className="bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-slate-900/80 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
                        <div className="w-full text-left">
                            <p className="text-slate-300 leading-relaxed text-lg mb-8">
                                Stop managing social media and start automating it with BEEBA. For most entrepreneurs, business owners and leaders, the "hardship" of the daily content grind is a barrier to growth. BEEBA, our AI Social Media Automation agent, is your "ease"—a single, "digital employee" that moves your brand from complexity to clarity, handling everything from strategy to lead follow-up.
                            </p>
                            
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left w-full mb-8">
                                {[
                                    'Automates competitor analysis.',
                                    'Creates content automatically.',
                                    'Schedules and posts content for you.',
                                    'Generates SEO hashtags and captions.',
                                    'Automatically tracks social media stats.',
                                    'Makes digital marketing fully hands-free.'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-400">
                                        <div className="mt-1 p-0.5 rounded-full bg-yellow-600/20 text-yellow-400 flex-shrink-0">
                                            <Check className="w-4 h-4" strokeWidth={3} />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="pt-6 flex flex-col sm:flex-row items-center sm:items-center gap-6">
                                <div className="flex flex-col gap-2 items-center sm:items-start">
                                    <span className="text-lg text-slate-400">Contact for Pricing & Details</span>
                                    <a href="tel:+15204426528" className="flex items-center gap-2 text-2xl font-semibold text-white hover:text-purple-400 transition-colors">
                                        <Phone className="w-6 h-6" />
                                        +1 (520) 442-6528
                                    </a>
                                </div>
                                <NavLink to="/book-demo">
                                    <Button variant="primary" glowColor="purple" className="!px-8 !py-3">
                                        Book Live Demo
                                    </Button>
                                </NavLink>
                            </div>
                        </div>
                        
                        {/* BEEBA Character Image */}
                        <div className="flex items-center justify-center lg:justify-end">
                            <img 
                                src="/beeba1.png" 
                                alt="BEEBA Character" 
                                className="w-64 h-64 lg:w-80 lg:h-80 object-contain rounded-2xl drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-110 hover:-translate-y-4 hover:rotate-2 transition-all duration-300 ease-out animate-float"
                                style={{
                                    transform: 'perspective(1000px) rotateY(-5deg)',
                                    transformStyle: 'preserve-3d'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* VIDEO SECTION - beeba-v1 */}
            <div ref={(el) => (cardRefs.current[1] = el)} className="relative card-animate">
                <div className="bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-slate-900/80 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="w-full text-left">
                            <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                Elevate your brand's visual identity with a workspace built for creators. Our platform empowers you to design stunning content while seamlessly managing your presence across all major social networks, from Instagram and TikTok to LinkedIn and Facebook. By centralizing your creative tools and publishing schedules, we help you maintain a buzzing, consistent brand voice that captures attention and drives engagement across the entire digital landscape.
                            </p>
                            <NavLink to="/book-demo">
                                <button className="group relative px-8 py-3 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-xl text-yellow-400 font-semibold overflow-hidden transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                                    <span className="relative z-10">Learn More</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
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
                                <source src="/beeba-v1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            {/* BEEBA2 IMAGE SECTION */}
            <div ref={(el) => (cardRefs.current[2] = el)} className="relative card-animate">
                <div className="bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-slate-900/80 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center">
                        {/* Beeba2 Image */}
                        <div className="flex items-center justify-center lg:justify-start">
                            <img 
                                src="/beeba2.png" 
                                alt="Beeba Dashboard" 
                                className="w-80 h-80 lg:w-96 lg:h-96 object-contain rounded-2xl drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-110 hover:-translate-y-4 hover:rotate-2 transition-all duration-300 ease-out"
                            />
                        </div>
                        
                        <div className="w-full text-left">
                            <p className="text-slate-300 leading-relaxed text-lg mb-6">
                            Success is better when it’s measurable. Watch your social proof skyrocket as our tools help you boost likes, comments, and shares across the board. Our vibrant interface tracks your most important metrics in real-time, providing a joyful look at how your brand is resonating with the world. Scale your impact and reach new milestones with a strategy built for maximum visibility and community excitement.
                            </p>
                            <div className="mt-6">
                                <NavLink to="/book-demo">
                                    <button className="group relative px-8 py-3 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-xl text-yellow-400 font-semibold overflow-hidden transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                                        <span className="relative z-10">Learn More</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
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

export default Beeba;