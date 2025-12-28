import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import Button from './Button';
import { NavLink } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  showPrice?: boolean;
  pricingMode?: boolean; // If true, show only "Book Live Demo"
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  showPrice = true, 
  pricingMode = false 
}) => {
  const isPurple = product.id === 'beeba';
  
  return (
    <div className="group relative h-full">
      {/* 3D Glass Effect Card */}
      <div className="relative h-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col 
                    transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]
                    hover:border-white/20">
        
        {/* Glow behind card */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl -z-10`} />

        {/* Header */}
        <div className="mb-6">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} p-3 mb-4 shadow-lg flex items-center justify-center`}>
            <product.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">{product.name}</h3>
          <p className={`text-sm font-semibold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r ${product.gradient}`}>
            {product.tagline}
          </p>
        </div>

        <p className="text-slate-400 mb-8 flex-grow">
          {product.description}
        </p>

        {/* Price - Only shown if showPrice is true */}
        {showPrice && (
          <div className="mb-8">
            <div className="flex items-baseline">
              <span className="text-5xl font-bold text-white">${product.price}</span>
              <span className="text-slate-500 ml-2">/ month</span>
            </div>
          </div>
        )}

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className={`mt-1 p-0.5 rounded-full bg-gradient-to-br ${product.gradient}`}>
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-slate-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Actions - Sticked to bottom of flex col */}
        <div className="space-y-3 mt-auto">
            {pricingMode ? (
               <NavLink to="/book-demo" className="block">
                <Button fullWidth variant="primary" glowColor={isPurple ? 'purple' : 'blue'}>
                  Book Live Demo
                </Button>
              </NavLink>
            ) : (
              // Default buttons for non-pricing specific views (e.g. if we had a full store)
              <>
                 <NavLink to={product.id === 'beeba' ? '/beeba' : '/genie'} className="block">
                  <Button fullWidth variant="outline" glowColor={isPurple ? 'purple' : 'blue'} className="group/btn">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 inline-block transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </NavLink>
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;