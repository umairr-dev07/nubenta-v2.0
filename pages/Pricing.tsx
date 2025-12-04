import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Building2, Check } from 'lucide-react';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0f] to-black">
       {/* Mesh Grid Background */}
       <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />

       {/* Floating Elements */}
       <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none z-0" />
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Products
            </span>
          </h1>
          <p className="text-xl text-slate-400">
            Invest in technology, not overhead. Deploy NUBENTA agents today.
          </p>
        </div>

        <div className="flex flex-col gap-12">
            
            {/* BEEBA SECTION */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 hover:border-purple-500/30 transition-all duration-500 shadow-2xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
                    <div className="w-full text-left">
                        <h2 className="text-4xl font-bold text-white tracking-wide mb-2">BEEBA</h2>
                        <h3 className="text-xl text-yellow-400 font-medium mb-8">AI Social Media Automation — Your 24/7 Partner</h3>
                        
                        <p className="text-slate-300 leading-relaxed text-lg mb-8">
                            Stop managing social media and start automating it with BEEBA. For most entrepreneurs, business owners and leaders, the "hardship" of the daily content grind is a barrier to growth. BEEBA, our AI Social Media Automation agent, is your "ease"—a single, "digital employee" that moves your brand from complexity to clarity, handling everything from strategy to lead follow-up.
                        </p>
                        
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left w-full mb-8">
                            {[
                                'Automates competitor analysis.',
                                'Creates content automatically.',
                                'Schedules and posts content for you.',
                                'Handles lead follow-up with AI.',
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
                        
                        <div className="pt-6 flex flex-col sm:flex-row items-center justify-start gap-6">
                            <span className="text-4xl font-bold text-white">$2000<span className="text-lg text-slate-500 font-normal">/mo</span></span>
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
                            className="w-64 h-64 lg:w-80 lg:h-80 object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-110 hover:-translate-y-4 hover:rotate-2 transition-all duration-300 ease-out animate-float"
                            style={{
                                transform: 'perspective(1000px) rotateY(-5deg)',
                                transformStyle: 'preserve-3d'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* GENIE SECTION */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 hover:border-blue-500/30 transition-all duration-500 shadow-2xl group relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
                    <div className="w-full text-left">
                        <h2 className="text-4xl font-bold text-white tracking-wide mb-2">GENIE</h2>
                        <h3 className="text-xl text-blue-400 font-medium mb-8">AI Calling Agent: Your 24/7 Automated Voice Team</h3>

                        <p className="text-slate-300 leading-relaxed text-lg mb-8">
                            GENIE, an AI Calling Agent, is an intelligent, human-like voice assistant, custom-built for your business. It moves you from the hardship of missed calls and lost leads to the ease of capturing and qualifying every opportunity, 24/7. Stop losing sales after hours; let your digital employee handle the calls.
                        </p>
                        
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left w-full mb-8">
                             {[
                                'Automates all your voice interactions.',
                                'Provides 24/7 customer support.',
                                'Handles AI-powered appointment scheduling.',
                                'Performs proactive AI lead qualification.',
                                'Turns your phone line into a fully automated asset.'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-400">
                                    <div className="mt-1 p-0.5 rounded-full bg-blue-600/20 text-blue-400 flex-shrink-0">
                                        <Check className="w-4 h-4" strokeWidth={3} />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        
                         <div className="pt-6 flex flex-col sm:flex-row items-center justify-start gap-6">
                            <span className="text-4xl font-bold text-white">$2000<span className="text-lg text-slate-500 font-normal">/mo</span></span>
                             <NavLink to="/book-demo">
                                <Button variant="primary" glowColor="blue" className="!px-8 !py-3">
                                    Book Live Demo
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                    
                    {/* GENIE Character Image - Add your genie1.png here */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <img 
                            src="/genie1.png" 
                            alt="GENIE Character" 
                            className="w-64 h-64 lg:w-80 lg:h-80 object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-110 hover:-translate-y-4 hover:-rotate-2 transition-all duration-300 ease-out animate-float"
                            style={{
                                transform: 'perspective(1000px) rotateY(5deg)',
                                transformStyle: 'preserve-3d',
                                animationDelay: '1s'
                            }}
                        />
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;