import React from 'react';
import { NavLink } from 'react-router-dom';
import { PRODUCTS, FEATURES_LIST } from '../constants';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { ArrowRight, Star, Database, BrainCircuit, Share2, Phone, TrendingUp, Cpu, Network, ArrowDown, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0f] to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Consistent Tech Background Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none" />

        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none mix-blend-screen" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm animate-float">
            <Star className="w-4 h-4 text-neon-blue fill-neon-blue" />
            <span className="text-sm font-medium text-slate-300 tracking-wider font-heading">WELCOME TO NUBENTA</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-tight">
            The Future is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 animate-gradient-x">
              INTELLIGENT
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-300 mb-12 leading-relaxed font-light font-body">
            NUBENTA builds advanced AI agents that revolutionize how you connect, sell, and support. Meet your new workforce. 
            {/* <strong>Beeba</strong> creates your content strategy. <strong>Genie</strong> closes your sales.
            <br />
            <span className="text-white font-semibold block mt-4">Scale Without Limits.</span> */}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <NavLink to="/book-demo">
              <Button variant="primary" glowColor="white" className="min-w-[240px] !text-base !py-3 group">
                Start Transformation
                <ArrowRight className="w-4 h-4 ml-2 animate-pop-in-out inline-block" />
              </Button>
            </NavLink>
            <NavLink to="/pricing">
              <Button variant="outline" glowColor="white" className="min-w-[160px] !text-sm !py-3">
                View Solutions
              </Button>
            </NavLink>
          </div>
        </div>

        {/* 3D Grid Floor Effect */}
        <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />
      </section>

      {/* NEW SECTION: What is NUBENTA? */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Centered Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">NUBENTA?</span>
            </h2>
             <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
          </div>

          {/* Centered Text Content (Visuals Removed) */}
          <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">
                NUBENTA is not just a tool; it is a <strong>Digital Ecosystem of Autonomous Agents</strong>. We don't sell software that you have to manage. We provide virtual employees that manage themselves.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                Powered by proprietary neural networks, our agents <span className="text-white font-semibold">Learn</span>, <span className="text-white font-semibold">Adapt</span>, and <span className="text-white font-semibold">Execute</span> complex business tasks without human intervention.
              </p>
          </div>

        </div>
      </section>

      {/* NEW SECTION: Animated AI Capability Flowchart */}
      <section className="py-24 relative bg-slate-950/50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        
        {/* Inject custom keyframe for flow line */}
        <style>{`
          @keyframes flow-line-full {
            0% { left: -50%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { left: 100%; opacity: 0; }
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Autonomous Workflow</h2>
            <p className="text-slate-400">How NUBENTA transforms raw data into revenue.</p>
          </div>

          <div className="relative">
            {/* Desktop Connecting Line - Spans from center of first icon to center of last icon */}
            {/* Grid is 4 cols. Center of first is 12.5%. Center of last is 87.5%. */}
            {/* Top 48px is center of the 96px (h-24) icon container */}
            <div className="hidden md:block absolute top-[48px] left-[12.5%] right-[12.5%] h-[2px] bg-slate-800 z-0 overflow-hidden">
                {/* Moving Pulse */}
                <div 
                  className="absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-neon-blue to-transparent" 
                  style={{ animation: 'flow-line-full 3s linear infinite' }}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              
              {/* Step 1: Input */}
              <div className="flex flex-col items-center group">
                <div className="relative w-24 h-24 mb-6">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-slate-400/20 rounded-2xl blur-xl animate-pulse z-0" />

                    {/* Vertical Line for Mobile */}
                    <div className="md:hidden absolute bottom-[-50px] left-1/2 w-[2px] h-[50px] bg-slate-800 -translate-x-1/2">
                         <div className="absolute top-0 left-0 w-full h-1/2 bg-neon-blue animate-pulse" />
                    </div>

                    <div className="w-full h-full rounded-2xl bg-slate-900 border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] relative z-10 group-hover:border-white transition-colors">
                        <Database className="w-10 h-10 text-slate-400 group-hover:text-white transition-colors animate-[pulse_3s_ease-in-out_infinite]" />
                    </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Input</h3>
                <p className="text-center text-sm text-slate-400 px-4">Raw Market Data & <br/>Lead Lists</p>
              </div>

              {/* Step 2: Processing (The Brain) */}
              <div className="flex flex-col items-center group">
                 <div className="relative w-24 h-24 mb-6">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-neon-purple/30 rounded-full blur-xl animate-pulse z-0" />

                    {/* Vertical Line for Mobile */}
                    <div className="md:hidden absolute bottom-[-50px] left-1/2 w-[2px] h-[50px] bg-slate-800 -translate-x-1/2">
                         <div className="absolute top-0 left-0 w-full h-1/2 bg-neon-purple animate-pulse" />
                    </div>

                    <div className="w-full h-full rounded-full bg-slate-900 border-2 border-neon-purple/50 flex items-center justify-center shadow-[0_0_50px_rgba(176,38,255,0.4)] relative z-10">
                        <BrainCircuit className="w-10 h-10 text-neon-purple animate-[spin_10s_linear_infinite]" />
                    </div>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">Analysis</h3>
                 <p className="text-center text-sm text-slate-400 px-4">Deep Learning & <br/>Strategy Formulation</p>
              </div>

              {/* Step 3: Execution */}
              <div className="flex flex-col items-center group">
                <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse z-0" />

                    {/* Vertical Line for Mobile */}
                    <div className="md:hidden absolute bottom-[-50px] left-1/2 w-[2px] h-[50px] bg-slate-800 -translate-x-1/2">
                         <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-500 animate-pulse" />
                    </div>

                    {/* Dual Action Icons */}
                    <div className="absolute left-0 top-2 w-14 h-14 rounded-xl bg-slate-900 border border-blue-500/50 flex items-center justify-center z-10 animate-[float_4s_ease-in-out_infinite]">
                        <Share2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="absolute right-0 bottom-2 w-14 h-14 rounded-xl bg-slate-900 border border-cyan-500/50 flex items-center justify-center z-20 animate-[float_4s_ease-in-out_infinite_1s]">
                        <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Execution</h3>
                <p className="text-center text-sm text-slate-400 px-4">Autonomous Posting & <br/>Cold Calling</p>
              </div>

              {/* Step 4: Output */}
              <div className="flex flex-col items-center group">
                <div className="relative w-24 h-24 mb-6">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-green-500/30 rounded-2xl blur-xl animate-pulse z-0" />

                    {/* Added bg-slate-900 to ensure flow line is hidden behind the icon */}
                    <div className="w-full h-full rounded-2xl bg-slate-900 bg-gradient-to-br from-green-900/40 to-slate-900 border border-green-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.2)] relative z-10 group-hover:scale-110 transition-transform duration-500">
                        <TrendingUp className="w-10 h-10 text-green-400 animate-pulse" />
                    </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Result</h3>
                <p className="text-center text-sm text-slate-400 px-4">Revenue Growth & <br/>Brand Authority</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Scale with <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">NUBENTA?</span>
            </h2>
            <p className="text-slate-400 text-lg">Replace entire departments with intelligent software.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES_LIST.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-2 backdrop-blur-md">
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

      {/* Product Preview Section - NO PRICES */}
      <section className="py-24 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Meet Your New Employees</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-stretch">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="w-full md:w-1/2">
                {/* Product Card with hidden price and default buttons */}
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