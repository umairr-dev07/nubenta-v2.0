import React, { useEffect, useRef, useState } from 'react';
import { TRUSTED_COMPANIES } from '../constants';
import { BrainCircuit, Rocket, ShieldCheck, Target, Users, Zap, TrendingUp, Globe, Award, CheckCircle2 } from 'lucide-react';

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

const About: React.FC = () => {
  const [headerRef, headerInView] = useInView({ once: true, threshold: 0.2 });
  const [valuesRef, valuesInView] = useInView({ once: true, threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ once: true, threshold: 0.2 });
  const [storyRef, storyInView] = useInView({ once: true, threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ once: true, threshold: 0.2 });
  const [whyRef, whyInView] = useInView({ once: true, threshold: 0.1 });
  const [trustedRef, trustedInView] = useInView({ once: true, threshold: 0.2 });
  const [projectRef, projectInView] = useInView({ once: true, threshold: 0.2 });

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
          <source src="/about-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Mesh Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none opacity-30" />

      {/* Floating Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-8 ${headerInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Autonomous Workforce</span>
          </h1>
          <p className={`text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed ${headerInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            At NUBENTA, we believe the future of business isn't about working harder; it's about intelligent delegation. We build advanced neural agents that perform complex tasks with human-like capability and machine-like efficiency.
          </p>
        </div>

        {/* Values */}
        <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: BrainCircuit, color: 'purple', title: 'Cognitive Intelligence', desc: 'Our bots don\'t just follow scripts. They understand context, sentiment, and strategy.' },
            { icon: Rocket, color: 'blue', title: 'Speed to Market', desc: 'Deploy a full marketing or sales team in minutes, not months.' },
            { icon: ShieldCheck, color: 'cyan', title: 'Enterprise Security', desc: 'Bank-grade encryption and privacy controls keep your data safe.' }
          ].map((value, idx) => (
            <div key={idx} className={`p-8 bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-2xl hover:border-${value.color}-500/30 transition-all duration-300 hover:-translate-y-2 ${valuesInView ? `animate-scale-in stagger-${idx + 1}` : 'opacity-0'}`}>
              <value.icon className={`w-10 h-10 text-${value.color}-500 mb-4`} />
              <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
              <p className="text-slate-400">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Our Mission */}
        <div ref={missionRef} className="mb-32">
          <div className={`max-w-4xl mx-auto text-center ${missionInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
              <Target className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-400 tracking-wider">OUR MISSION</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Empowering Businesses Through AI
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              We're on a mission to democratize access to AI-powered automation. Every business, regardless of size, should be able to leverage the same cutting-edge technology that Fortune 500 companies use. NUBENTA makes this possible by providing autonomous agents that work tirelessly to grow your business while you focus on what matters most.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div ref={storyRef} className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${storyInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400 tracking-wider">OUR STORY</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                From Vision to Reality
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                NUBENTA was born from a simple observation: businesses were drowning in repetitive tasks while missing crucial growth opportunities. We saw talented entrepreneurs spending 80% of their time on operations and only 20% on strategy.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                We asked ourselves: what if we could flip that ratio? What if AI could handle the mundane, allowing humans to focus on creativity, relationships, and innovation?
              </p>
              <p className="text-slate-300 leading-relaxed">
                Today, NUBENTA's autonomous agents are transforming businesses across industries, handling everything from social media management to customer acquisition, operating 24/7 without fatigue, errors, or sick days.
              </p>
            </div>
            <div className={`relative ${storyInView ? 'animate-scale-in stagger-2' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">24/7</div>
                    <div className="text-sm text-slate-400">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">90%</div>
                    <div className="text-sm text-slate-400">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-2">10x</div>
                    <div className="text-sm text-slate-400">Faster Scaling</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-2">100+</div>
                    <div className="text-sm text-slate-400">Languages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="mb-32">
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${statsInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {[
              { icon: TrendingUp, value: '340%', label: 'Average ROI Increase' },
              { icon: Zap, value: '<1s', label: 'Response Time' },
              { icon: Globe, value: '100+', label: 'Countries Served' },
              { icon: Award, value: '99.9%', label: 'Accuracy Rate' }
            ].map((stat, idx) => (
              <div key={idx} className={`text-center p-6 bg-slate-900/30 backdrop-blur-sm border border-white/5 rounded-xl hover:border-purple-500/30 transition-all duration-300 ${statsInView ? `animate-scale-in stagger-${idx + 1}` : 'opacity-0'}`}>
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose NUBENTA */}
        <div ref={whyRef} className="mb-32">
          <div className={`text-center mb-12 ${whyInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">NUBENTA?</span>
            </h2>
            <p className="text-slate-400 text-lg">We're not just another AI company. We're your growth partner.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'No Learning Curve', desc: 'Our agents are ready to work from day one. No training, no onboarding, no ramp-up time.' },
              { title: 'Scalable on Demand', desc: 'Need to 10x your outreach? Deploy 10 more agents in minutes, not months.' },
              { title: 'Always Improving', desc: 'Our AI learns from every interaction, constantly optimizing performance.' },
              { title: 'Human-Like Quality', desc: 'Customers can\'t tell they\'re talking to AI. Our agents are that good.' },
              { title: 'Complete Transparency', desc: 'Track every action, every conversation, every result in real-time.' },
              { title: 'Risk-Free Trial', desc: 'See the results before committing. We\'re confident you\'ll love it.' }
            ].map((item, idx) => (
              <div key={idx} className={`flex gap-4 p-6 bg-slate-900/30 backdrop-blur-sm border border-white/5 rounded-xl hover:border-purple-500/30 transition-all duration-300 ${whyInView ? `animate-scale-in stagger-${(idx % 3) + 1}` : 'opacity-0'}`}>
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted By Section */}
        <div ref={trustedRef} className="border-t border-white/10 pt-20 pb-20">
          <h2 className={`text-center text-sm font-semibold text-slate-500 uppercase tracking-[0.2em] mb-12 font-heading ${trustedInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Trusted By Industry Leaders
          </h2>
          <div className={`flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 ${trustedInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            {TRUSTED_COMPANIES.map((company) => (
              <div key={company.name} className="group">
                {company.url ? (
                  <a 
                    href={company.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-2xl md:text-3xl font-black ${company.style} opacity-70 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg font-heading cursor-pointer hover:underline decoration-white/20 underline-offset-8`}
                  >
                    {company.name}
                  </a>
                ) : (
                  <span className={`text-2xl md:text-3xl font-black ${company.style} opacity-70 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg font-heading cursor-default`}>
                    {company.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* A Project By Section */}
        <div ref={projectRef} className="border-t border-white/10 pt-16">
          <div className={`text-center ${projectInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-[0.2em] mb-8 font-heading">
              A Project By
            </h2>
            <div className="flex justify-center items-center">
              <a 
                href="https://duhanashrah.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src="/dn.png" 
                  alt="Project Logo" 
                  className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;