import React from 'react';
import { TRUSTED_COMPANIES } from '../constants';
import { BrainCircuit, Rocket, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0f] to-black">
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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Mesh Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none opacity-30" />

      {/* Floating Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Autonomous Workforce</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            At NUBENTA, we believe the future of business isn't about working harder; it's about intelligent delegation. We build advanced neural agents that perform complex tasks with human-like capability and machine-like efficiency.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-2xl hover:border-purple-500/30 transition-colors">
            <BrainCircuit className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Cognitive Intelligence</h3>
            <p className="text-slate-400">Our bots don't just follow scripts. They understand context, sentiment, and strategy.</p>
          </div>
          <div className="p-8 bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-2xl hover:border-blue-500/30 transition-colors">
            <Rocket className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Speed to Market</h3>
            <p className="text-slate-400">Deploy a full marketing or sales team in minutes, not months.</p>
          </div>
          <div className="p-8 bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-colors">
            <ShieldCheck className="w-10 h-10 text-cyan-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
            <p className="text-slate-400">Bank-grade encryption and privacy controls keep your data safe.</p>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="border-t border-white/10 pt-20 pb-20">
            <h2 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-[0.2em] mb-12 font-heading">
                Trusted By Industry Leaders
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
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
        <div className="border-t border-white/10 pt-16">
            <div className="text-center">
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