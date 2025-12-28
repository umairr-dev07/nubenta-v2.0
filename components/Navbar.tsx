import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';
import Logo from '../nubenta-logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Check if current path is an AI Employee page
  const isAIEmployeePage = location.pathname === '/beeba' || location.pathname === '/genie';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className={`fixed left-0 right-0 z-40 transition-all duration-700 ease-out ${
      isScrolled ? 'top-4' : 'top-0'
    }`}>
      <div className={`backdrop-blur-md bg-slate-950/70 border-b border-white/10 ${
        isOpen ? '' : 'transition-all duration-700 ease-out'
      } ${
        isScrolled && !isOpen ? 'rounded-full mx-auto max-w-6xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border' : 'rounded-none'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <NavLink to="/" className="flex items-center gap-3">
                <img
                  src="/nubenta-logo.png"
                  alt="Nubenta Logo"
                  className="h-10 w-auto object-contain"
                />
              </NavLink>
            </div>
            
            <div className="hidden md:flex flex-1 justify-end items-center gap-8">
              <div className="flex items-baseline space-x-8">
                {NAV_ITEMS.map((item) => {
                  if (item.label === 'AI Employees') {
                    return (
                      <div key={item.label} className="relative" ref={dropdownRef}>
                        <button
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className={`px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                            isAIEmployeePage
                              ? 'text-neon-blue drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] scale-105'
                              : 'text-slate-400 hover:text-white hover:text-shadow-sm'
                          }`}
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
                            <NavLink
                              to="/beeba"
                              onClick={() => setIsDropdownOpen(false)}
                              className={`block px-4 py-3 hover:bg-slate-800 transition-colors ${
                                location.pathname === '/beeba' ? 'bg-slate-800/50' : ''
                              }`}
                            >
                              <div className={`text-sm font-medium ${
                                location.pathname === '/beeba' ? 'text-neon-blue' : 'text-slate-300 hover:text-white'
                              }`}>Beeba</div>
                              <div className="text-xs text-slate-500 mt-0.5">AI Social Media Automation</div>
                            </NavLink>
                            <NavLink
                              to="/genie"
                              onClick={() => setIsDropdownOpen(false)}
                              className={`block px-4 py-3 hover:bg-slate-800 transition-colors border-t border-white/10 ${
                                location.pathname === '/genie' ? 'bg-slate-800/50' : ''
                              }`}
                            >
                              <div className={`text-sm font-medium ${
                                location.pathname === '/genie' ? 'text-neon-blue' : 'text-slate-300 hover:text-white'
                              }`}>Genie</div>
                              <div className="text-xs text-slate-500 mt-0.5">AI Calling Agent</div>
                            </NavLink>
                          </div>
                        )}
                      </div>
                    );
                  }
                  return (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      className={({ isActive }) =>
                        `px-3 py-2 text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? 'text-neon-blue drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] scale-105'
                            : 'text-slate-400 hover:text-white hover:text-shadow-sm'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  );
                })}
              </div>
              
              <NavLink to="/book-demo">
                <Button variant="primary" glowColor="blue" className="!px-6 !py-2 !text-sm">
                  Book Demo
                </Button>
              </NavLink>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-slate-900 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors duration-200"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => {
                if (item.label === 'AI Employees') {
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                          isAIEmployeePage
                            ? 'bg-slate-900 text-neon-blue'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isDropdownOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          <NavLink
                            to="/beeba"
                            onClick={() => {
                              setIsOpen(false);
                              setIsDropdownOpen(false);
                            }}
                            className={`block px-3 py-2 rounded-md hover:bg-slate-800 transition-colors ${
                              location.pathname === '/beeba' ? 'bg-slate-800' : ''
                            }`}
                          >
                            <div className={`text-sm font-medium ${
                              location.pathname === '/beeba' ? 'text-neon-blue' : 'text-slate-300 hover:text-white'
                            }`}>Beeba</div>
                            <div className="text-xs text-slate-500 mt-0.5">AI Social Media Automation</div>
                          </NavLink>
                          <NavLink
                            to="/genie"
                            onClick={() => {
                              setIsOpen(false);
                              setIsDropdownOpen(false);
                            }}
                            className={`block px-3 py-2 rounded-md hover:bg-slate-800 transition-colors ${
                              location.pathname === '/genie' ? 'bg-slate-800' : ''
                            }`}
                          >
                            <div className={`text-sm font-medium ${
                              location.pathname === '/genie' ? 'text-neon-blue' : 'text-slate-300 hover:text-white'
                            }`}>Genie</div>
                            <div className="text-xs text-slate-500 mt-0.5">AI Calling Agent</div>
                          </NavLink>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? 'bg-slate-900 text-neon-blue'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}
              <div className="pt-4 pb-2">
                <NavLink to="/book-demo" onClick={() => setIsOpen(false)}>
                  <Button fullWidth glowColor="blue">Book Demo</Button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;