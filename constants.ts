import { Bot, PhoneCall, Zap, Calendar, TrendingUp, MessageSquare, Globe, Users, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Product, NavItem, Company } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/pricing' },
  { label: 'About Us', path: '/about' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'beeba',
    name: 'BEEBA',
    tagline: 'AI Social Media Automation — Your 24/7 Partner',
    description: 'Stop managing social media and start automating it with BEEBA. For most entrepreneurs, business owners and leaders, the “hardship” of the daily content grind is a barrier to growth. BEEBA, our AI Social Media Automation agent, is your “ease”—a single, “digital employee” that moves your brand from complexity to clarity, handling everything from strategy to lead follow-up.',
    price: 200,
    gradient: 'from-purple-600 to-indigo-600',
    icon: Bot,
    features: [
      'Automates competitor analysis',
      'Creates content automatically',
      'Schedules and posts content for you',
      'Handles lead follow-up with AI',
      'Makes digital marketing fully hands-free',
    ],
  },
  {
    id: 'genie',
    name: 'GENIE',
    tagline: 'AI Calling Agent: Your 24/7 Automated Voice Team',
    description: 'GENIE, an AI Calling Agent, is an intelligent, human-like voice assistant, custom-built for your business. It moves you from the hardship of missed calls and lost leads to the ease of capturing and qualifying every opportunity, 24/7. Stop losing sales after hours; let your digital employee handle the calls.',
    price: 200,
    gradient: 'from-blue-500 to-cyan-500',
    icon: PhoneCall,
    features: [
      'Automates all your voice interactions',
      'Provides 24/7 customer support',
      'Handles AI-powered appointment scheduling',
      'Performs proactive AI lead qualification',
      'Turns your phone line into a fully automated asset',
    ],
  },
];

export const TRUSTED_COMPANIES: Company[] = [
  { name: 'NSOL', style: 'text-blue-400', url: 'https://nsolbpo.com/' },
  { name: 'YCSolutions', style: 'text-purple-400', url: 'https://www.ycsols.com/' },
  { name: 'Galaxy Realtors', style: 'text-indigo-400', url: 'https://galaxyrealtors.pk/' },
  { name: 'Cloud Rexpo', style: 'text-cyan-400', url: 'https://cloudrexpo.com/' },
];

export const FEATURES_LIST = [
  {
    title: 'Autonomous Growth',
    description: 'Set your goals and let our bots handle the execution 24/7.',
    icon: TrendingUp,
  },
  {
    title: 'Natural Interaction',
    description: 'Advanced NLP ensures clients never know they are talking to AI.',
    icon: MessageSquare,
  },
  {
    title: 'Global Reach',
    description: 'Scale your operations across time zones and languages instantly.',
    icon: Globe,
  },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
];