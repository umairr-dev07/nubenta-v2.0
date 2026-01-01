import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PRODUCTS, FEATURES_LIST } from '../constants';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { ArrowRight, Star, Database, BrainCircuit, Share2, Phone, TrendingUp, Cpu, Network, ArrowDown, ChevronRight, Clock, ShieldCheck, DollarSign, Zap, Globe, BarChart3, Quote } from 'lucide-react';

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

const Home = () => {
  const [heroRef, heroInView] = useInView({ once: true, threshold: 0.2 });
  const [whatIsRef, whatIsInView] = useInView({ once: true, threshold: 0.2 });
  const [benefitsRef, benefitsInView] = useInView({ once: true, threshold: 0.1 });
  const [workflowRef, workflowInView] = useInView({ once: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ once: true, threshold: 0.1 });
  const [comparisonRef, comparisonInView] = useInView({ once: true, threshold: 0.1 });
  const [dashboardRef, dashboardInView] = useInView({ once: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ once: true, threshold: 0.1 });
  const [productsRef, productsInView] = useInView({ once: true, threshold: 0.1 });

  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0f] to-black">
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
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

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
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

        @keyframes flow-line-full {
          0% { left: -50%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/ai-character.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none mix-blend-screen" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm ${heroInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <Star className="w-4 h-4 text-neon-blue fill-neon-blue" />
            <span className="text-sm font-medium text-slate-300 tracking-wider">WELCOME TO NUBENTA</span>
          </div>
          
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-tight ${heroInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 animate-gradient-x">
              AI Solutions
            </span>{" "}
            Built for <br />
            Real Results
          </h1>
          
          <p className={`max-w-3xl mx-auto text-lg md:text-2xl text-slate-300 mb-12 leading-relaxed font-light ${heroInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            NUBENTA builds advanced AI agents that revolutionize how you connect, sell, and support. Meet your new workforce.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 ${heroInView ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
            <NavLink to="/book-demo">
              <Button variant="primary" glowColor="white" className="min-w-[240px] !text-base !py-3 group">
                Start Transformation
                <ArrowRight className="w-4 h-4 ml-2 animate-pop-in-out inline-block" />
              </Button>
            </NavLink>
            <NavLink to="/beeba">
              <Button variant="outline" glowColor="white" className="min-w-[160px] !text-sm !py-3">
                View Solutions
              </Button>
            </NavLink>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />
      </section>

      {/* What is NUBENTA Section */}
      <section ref={whatIsRef} className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 ${whatIsInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">NUBENTA?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className={`text-xl text-slate-300 mb-8 leading-relaxed font-light ${whatIsInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
              NUBENTA is not just a tool; it is a <strong>Digital Ecosystem of Autonomous Agents</strong>. We don't sell software that you have to manage. We provide virtual employees that manage themselves.
            </p>
            <p className={`text-xl text-slate-300 leading-relaxed font-light ${whatIsInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
              Powered by proprietary neural networks, our agents <span className="text-white font-semibold">Learn</span>, <span className="text-white font-semibold">Adapt</span>, and <span className="text-white font-semibold">Execute</span> complex business tasks without human intervention.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Cards Section */}
      <section ref={benefitsRef} className="py-24 relative overflow-hidden bg-slate-950/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 ${benefitsInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">NUBENTA</span> Advantage
            </h2>
            <p className="text-slate-400 text-lg">Why leading companies choose autonomous agents over traditional workforce</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "24/7 Operation", description: "Never miss an opportunity. Our agents work around the clock without breaks or downtime." },
              { icon: ShieldCheck, title: "No Human Error", description: "Eliminate mistakes with AI precision. Consistent quality in every interaction." },
              { icon: DollarSign, title: "Cost Effective", description: "Reduce overhead by up to 80%. Pay for performance, not hours." },
              { icon: Zap, title: "Scalable Instantly", description: "Scale your operations from 10 to 10,000 interactions in seconds." },
              { icon: Globe, title: "Multilingual Support", description: "Communicate with customers in 100+ languages without hiring translators." },
              { icon: BarChart3, title: "Data-Driven Decisions", description: "Every action backed by real-time analytics and machine learning insights." }
            ].map((benefit, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-neon-blue/50 transition-all duration-300 group hover:-translate-y-1 backdrop-blur-sm ${benefitsInView ? `animate-scale-in stagger-${idx + 1}` : 'opacity-0'}`}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-neon-blue group-hover:text-neon-purple transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomous Workflow Section */}
      <section ref={workflowRef} className="py-24 relative bg-slate-950/50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-20 ${workflowInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Autonomous Workflow</h2>
            <p className="text-slate-400">How NUBENTA transforms raw data into revenue.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-[48px] left-[12.5%] right-[12.5%] h-[2px] bg-slate-800 z-0 overflow-hidden">
              <div 
                className="absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-neon-blue to-transparent" 
                style={{ animation: 'flow-line-full 3s linear infinite' }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
              {[
                { icon: Database, color: 'slate', title: 'Input', desc: 'Raw Market Data & Lead Lists' },
                { icon: BrainCircuit, color: 'purple', title: 'Analysis', desc: 'Deep Learning & Strategy Formulation' },
                { icon: Share2, color: 'blue', title: 'Execution', desc: 'Autonomous Posting & Cold Calling', dual: true },
                { icon: TrendingUp, color: 'green', title: 'Result', desc: 'Revenue Growth & Brand Authority' }
              ].map((step, idx) => (
                <div key={idx} className={`flex flex-col items-center group relative ${workflowInView ? `animate-fade-in-up stagger-${idx + 1}` : 'opacity-0'}`}>
                  <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                    {step.dual ? (
                      <>
                        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse z-0" />
                        <div className="absolute left-0 top-2 w-14 h-14 rounded-xl bg-slate-900 border border-blue-500/50 flex items-center justify-center z-10 animate-[float_4s_ease-in-out_infinite]">
                          <Share2 className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="absolute right-0 bottom-2 w-14 h-14 rounded-xl bg-slate-900 border border-cyan-500/50 flex items-center justify-center z-20 animate-[float_4s_ease-in-out_infinite_1s]">
                          <Phone className="w-6 h-6 text-cyan-400" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={`absolute inset-0 bg-${step.color === 'purple' ? 'neon-purple' : step.color}-${step.color === 'slate' ? '400' : '500'}/30 rounded-${step.color === 'purple' ? 'full' : '2xl'} blur-xl animate-pulse z-0`} />
                        <div className={`w-full h-full rounded-${step.color === 'purple' ? 'full' : '2xl'} bg-slate-900 border${step.color === 'purple' ? '-2' : ''} border-${step.color === 'purple' ? 'neon-purple/50' : step.color === 'green' ? 'green-500/50' : 'white/20'} flex items-center justify-center shadow-[0_0_30px_rgba(${step.color === 'green' ? '34,197,94' : step.color === 'purple' ? '176,38,255' : '255,255,255'},${step.color === 'green' || step.color === 'purple' ? '0.4' : '0.05'})] relative z-10 ${step.color === 'green' ? 'bg-gradient-to-br from-green-900/40 to-slate-900 group-hover:scale-110 transition-transform duration-500' : ''}`}>
                          <step.icon className={`w-10 h-10 text-${step.color === 'purple' ? 'neon-purple' : step.color === 'green' ? 'green-400' : 'slate-400'} ${step.color === 'slate' ? 'group-hover:text-white transition-colors animate-[pulse_3s_ease-in-out_infinite]' : step.color === 'purple' ? 'animate-[spin_10s_linear_infinite]' : step.color === 'green' ? 'animate-pulse' : ''}`} />
                        </div>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 mt-2">{step.title}</h3>
                  <p className="text-center text-sm text-slate-400 px-4 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 ${featuresInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Scale with <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">NUBENTA?</span>
            </h2>
            <p className="text-slate-400 text-lg">Replace entire departments with intelligent software.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES_LIST.map((feature, idx) => (
              <div key={idx} className={`p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-2 backdrop-blur-md ${featuresInView ? `animate-scale-in stagger-${(idx % 3) + 1}` : 'opacity-0'}`}>
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <feature.icon className="w-6 h-6 text-neon-blue group-hover:text-neon-purple transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI vs Human Staff Comparison Section */}
      <section ref={comparisonRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 ${comparisonInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              AI Agents vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Human Staff</span>
            </h2>
            <p className="text-slate-400 text-lg">See the difference for yourself</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Human Staff Card */}
            <div className={`p-8 rounded-2xl bg-gradient-to-br from-red-950/20 to-slate-950/40 border border-red-900/30 backdrop-blur-sm ${comparisonInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Traditional Staff</h3>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Working Hours", value: "8 hours/day" },
                  { label: "Response Time", value: "Minutes to hours" },
                  { label: "Error Rate", value: "5-10% human error" },
                  { label: "Cost per Employee", value: "$50K-$80K/year" },
                  { label: "Training Time", value: "Weeks to months" },
                  { label: "Scaling Speed", value: "Slow (hiring process)" },
                  { label: "Languages", value: "1-2 per person" },
                  { label: "Sick Days/Vacation", value: "20-30 days/year" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-red-900/20">
                    <span className="text-slate-400 text-sm">{item.label}</span>
                    <span className="text-red-400 font-semibold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg bg-red-950/30 border border-red-900/30">
                <p className="text-red-300 text-sm text-center">
                  <strong>Annual Cost for 5 employees:</strong> $250K-$400K+
                </p>
              </div>
            </div>

            {/* AI Agents Card */}
            <div className={`p-8 rounded-2xl bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border-2 border-neon-blue/50 backdrop-blur-sm relative overflow-hidden ${comparisonInView ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-purple/30 rounded-full blur-3xl" />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                  <BrainCircuit className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">NUBENTA AI Agents</h3>
              </div>

              <div className="space-y-4 relative z-10">
                {[
                  { label: "Working Hours", value: "24/7/365" },
                  { label: "Response Time", value: "Instant (<1 second)" },
                  { label: "Error Rate", value: "Near zero (0.1%)" },
                  { label: "Cost per Agent", value: "$3K-$8K/year" },
                  { label: "Training Time", value: "Instant deployment" },
                  { label: "Scaling Speed", value: "Instant (minutes)" },
                  { label: "Languages", value: "100+ languages" },
                  { label: "Sick Days/Vacation", value: "Zero downtime" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-slate-300 text-sm">{item.label}</span>
                    <span className="text-neon-blue font-semibold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/50 relative z-10">
                <p className="text-neon-blue text-sm text-center">
                  <strong>Annual Cost for 5 agents:</strong> $15K-$40K
                </p>
                <p className="text-green-400 text-xs text-center mt-2 font-bold">
                  💰 Save up to 90% on operational costs
                </p>
              </div>
            </div>
          </div>

          <div className={`text-center mt-12 ${comparisonInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            <p className="text-slate-400 mb-6">Ready to make the switch?</p>
            <NavLink to="/book-demo">
              <Button variant="primary" glowColor="white" className="min-w-[200px]">
                See It In Action
                <ArrowRight className="w-4 h-4 ml-2 inline-block" />
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase Section */}
      <section ref={dashboardRef} className="py-24 relative overflow-hidden bg-slate-950/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
          {/* First Image Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`order-2 lg:order-1 ${dashboardInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="relative group perspective-1000">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 group-hover:-translate-y-2">
                  <img 
                    src="/main1.png" 
                    alt="Growth Dashboard" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className={`order-1 lg:order-2 space-y-6 ${dashboardInView ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/30 backdrop-blur-sm">
                <BarChart3 className="w-4 h-4 text-neon-purple" />
                <span className="text-sm font-medium text-neon-purple tracking-wider">GROWTH INTELLIGENCE</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Strategy Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">Execution</span>
              </h3>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                Strategy meets execution in our comprehensive growth dashboard. We believe that seeing your progress is the first step toward surpassing it. By integrating real-time analytics with user-friendly interfaces, we help you keep your eye on the prize: sustainable, long-term profit. From pie charts to performance graphs, our mascots guide you through the complexities of business management, making the path to 'Growth' feel effortless and organized.
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-slate-400">Real-time Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-sm text-slate-400">Growth Tracking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Image Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${dashboardInView ? 'animate-fade-in-left stagger-1' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 backdrop-blur-sm">
                <Network className="w-4 h-4 text-neon-blue" />
                <span className="text-sm font-medium text-neon-blue tracking-wider">MOBILE COMMAND CENTER</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Your Workspace, <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cyan-400">Anywhere</span>
              </h3>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                Take your workspace wherever you go without losing your spark. This setup is designed for the modern creator who needs to stay mobile but remains deeply connected to their network. Our interface streamlines your social profiles and communication channels into a seamless, floating gallery of opportunities. It's not just about managing data—it's about fostering a vibrant, buzzing community through the power of 'magical' AI-driven communication.
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-sm text-slate-400">Unified Communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-sm text-slate-400">AI-Powered</span>
                </div>
              </div>
            </div>
            
            <div className={`${dashboardInView ? 'animate-fade-in-right stagger-1' : 'opacity-0'}`}>
              <div className="relative group perspective-1000">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-cyan-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2 group-hover:-translate-y-2">
                  <img 
                    src="/main2.png" 
                    alt="Mobile Workspace" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-24 relative overflow-hidden bg-slate-950/50">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 ${testimonialsInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-slate-400 text-lg">See what our clients say about their transformation</p>
          </div>
          
          <div className={`relative group ${testimonialsInView ? 'animate-fade-in stagger-1' : 'opacity-0'}`}>
            {/* Navigation Arrows - Full Height */}
            <button 
              onClick={() => {
                const container = document.getElementById('testimonial-container');
                const cardWidth = container.querySelector('.testimonial-card').offsetWidth;
                const gap = 24;
                const scrollAmount = cardWidth + gap;
                
                if (container.scrollLeft <= 0) {
                  container.scrollTo({ left: container.scrollWidth / 2, behavior: 'instant' });
                  setTimeout(() => {
                    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                  }, 10);
                } else {
                  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                }
              }}
              className="absolute -left-4 md:-left-6 top-0 bottom-8 z-20 w-12 md:w-16 rounded-lg bg-gradient-to-r from-slate-900/90 to-slate-900/50 border-l border-y border-white/10 text-white hover:from-neon-purple/30 hover:to-neon-purple/10 hover:border-neon-purple/50 transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center backdrop-blur-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>

            <button 
              onClick={() => {
                const container = document.getElementById('testimonial-container');
                const cardWidth = container.querySelector('.testimonial-card').offsetWidth;
                const gap = 24;
                const scrollAmount = cardWidth + gap;
                
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                  container.scrollTo({ left: container.scrollWidth / 2, behavior: 'instant' });
                  setTimeout(() => {
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                  }, 10);
                } else {
                  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
              }}
              className="absolute -right-4 md:-right-6 top-0 bottom-8 z-20 w-12 md:w-16 rounded-lg bg-gradient-to-l from-slate-900/90 to-slate-900/50 border-r border-y border-white/10 text-white hover:from-neon-purple/30 hover:to-neon-purple/10 hover:border-neon-purple/50 transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center backdrop-blur-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>

            {/* Scrollable Container */}
            <div 
              id="testimonial-container"
              className="flex overflow-x-scroll gap-6 pb-8 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'smooth'
              }}
              onMouseDown={(e) => {
                const container = e.currentTarget;
                container.style.scrollSnapType = 'none';
                container.style.scrollBehavior = 'auto';
                const startX = e.pageX - container.offsetLeft;
                const scrollLeft = container.scrollLeft;
                
                const handleMouseMove = (e) => {
                  const x = e.pageX - container.offsetLeft;
                  const walk = (x - startX) * 1.5;
                  container.scrollLeft = scrollLeft - walk;
                };
                
                const handleMouseUp = () => {
                  container.style.scrollSnapType = 'x mandatory';
                  container.style.scrollBehavior = 'smooth';
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };
                
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
              onTouchStart={(e) => {
                const container = e.currentTarget;
                container.style.scrollSnapType = 'none';
              }}
              onTouchEnd={(e) => {
                const container = e.currentTarget;
                setTimeout(() => {
                  container.style.scrollSnapType = 'x mandatory';
                }, 100);
              }}
            >
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {[
                    { name: "Sarah Chen", role: "CEO, TechVentures Inc", content: "NUBENTA transformed our sales process. 340% increase in qualified leads within 3 months.", rating: 5 },
                    { name: "Marcus Rodriguez", role: "VP of Marketing, Global Solutions", content: "The ROI is incredible. We replaced 8 employees with NUBENTA agents. Response times dropped from hours to seconds.", rating: 5 },
                    { name: "Adam Ryan", role: "Founder, StartupHub", content: "As a startup, we couldn't afford a large team. NUBENTA gave us enterprise-level capabilities at a fraction of the cost.", rating: 5 },
                    { name: "David Kim", role: "CTO, InnovateLabs", content: "Best investment we've made. Our customer satisfaction scores increased by 85% after deploying NUBENTA agents.", rating: 5 },
                    { name: "Lisa Anderson", role: "Operations Director, ScaleUp Co", content: "24/7 availability without the overhead. Our international clients love the instant responses and multilingual support.", rating: 5 },
                    { name: "James Parker", role: "Founder, GrowthTech", content: "The automation capabilities are outstanding. We've scaled from 50 to 5000 interactions per day seamlessly.", rating: 5 }
                  ].map((testimonial, idx) => (
                    <div 
                      key={`${i}-${idx}`}
                      className="testimonial-card flex-shrink-0 w-[85vw] md:w-[380px] p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-neon-purple/50 transition-all duration-300 backdrop-blur-sm snap-center select-none"
                    >
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        ))}
                      </div>
                      <p className="text-slate-300 mb-6 leading-relaxed italic text-base">"{testimonial.content}"</p>
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-white font-bold text-sm">{testimonial.name}</p>
                        <p className="text-slate-400 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section ref={productsRef} className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className={`text-center mb-16 ${productsInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Meet Your New Employees</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-stretch">
            {PRODUCTS.map((product, idx) => (
              <div key={product.id} className={`w-full md:w-1/2 ${productsInView ? `animate-scale-in stagger-${idx + 1}` : 'opacity-0'}`}>
                <ProductCard product={product} showPrice={false} pricingMode={false} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;