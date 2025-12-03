import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

// TikTok icon component (lucide-react doesn't have TikTok, so we create a custom SVG)
const TikTokIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Mock constants since we don't have access to the actual file
const SOCIAL_LINKS = [
  { name: 'Facebook', icon: Facebook, url: '#' },
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'Twitter', icon: Twitter, url: '#' },
  { name: 'TikTok', icon: TikTokIcon, url: '#' },
  { name: 'LinkedIn', icon: Linkedin, url: '#' }
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-8 pb-8 relative z-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/footer-video.mp4" type="video/mp4" />
          <source src="/footer-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/70 to-slate-950/60"></div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/nubenta-logo.png" alt="Nubenta Logo" className="w-22 h-12 object-contain" />
            </div>
            <p className="text-slate-400 max-w-md">
              Empowering businesses with autonomous AI agents. 
              Beeba and Genie are designed to scale your reach and revenue while you focus on vision.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><NavLink to="/about" className="text-slate-400 hover:text-neon-purple transition-colors">About Us</NavLink></li>
              <li><NavLink to="/pricing" className="text-slate-400 hover:text-neon-purple transition-colors">Products</NavLink></li>
              <li><NavLink to="/book-demo" className="text-slate-400 hover:text-neon-purple transition-colors">Book Demo</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+1234567890" className="text-slate-400 hover:text-neon-blue transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:info@nubenta.com" className="text-slate-400 hover:text-neon-blue transition-colors">
                  info@nubenta.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} NUBENTA. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;