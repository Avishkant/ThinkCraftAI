import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="group relative inline-block transform hover:scale-105 transition-all duration-300">
              <div className="flex items-baseline space-x-1 relative">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                
                <span className="relative text-3xl font-bold tracking-tight text-blue-600 transition-all duration-300 group-hover:text-blue-700" 
                      style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                  Think
                </span>
                <span className="relative text-3xl font-bold tracking-tight text-cyan-500 transition-all duration-300 group-hover:text-cyan-600" 
                      style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                  Craft.ai
                </span>
              </div>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'About'].map((item, index) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="relative px-4 py-2 font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 group overflow-hidden rounded-lg"
              >
                {/* Background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                {/* Text */}
                <span className="relative z-10 transform group-hover:-translate-y-0.5 transition-transform duration-300">
                  {item}
                </span>
                
                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300"></div>
                
                {/* Subtle side borders */}
                <div className="absolute left-0 top-0 w-0.5 h-0 bg-blue-600 group-hover:h-full transition-all duration-300"></div>
                <div className="absolute right-0 top-0 w-0.5 h-0 bg-cyan-600 group-hover:h-full transition-all duration-300"></div>
              </Link>
            ))}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Button to="/contact" variant="clean" size="sm" className="relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Contact</span>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group relative p-3 text-gray-700 hover:text-blue-600 rounded-lg focus:outline-none transition-all duration-300 overflow-hidden"
            >
              {/* Background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              
              {/* Icon */}
              <svg className="relative z-10 h-6 w-6 transform group-hover:scale-110 transition-transform duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
              
              {/* Border animation */}
              <div className="absolute inset-0 border border-transparent group-hover:border-blue-200 rounded-lg transition-colors duration-300"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile menu with smooth animations */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-4 bg-gradient-to-b from-transparent to-blue-50/30 rounded-b-xl backdrop-blur-sm">
            <div className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About', path: '/about' }
              ].map((item, index) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className="group block px-4 py-3 text-gray-700 hover:text-blue-600 rounded-lg mx-2 transition-all duration-300 relative overflow-hidden transform hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen ? 'slideInLeft 0.5s ease-out forwards' : 'none'
                  }}
                >
                  {/* Background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  
                  <span className="relative flex items-center justify-between z-10">
                    <span className="font-medium transform group-hover:scale-105 transition-transform duration-300">{item.name}</span>
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </span>
                  
                  {/* Bottom border */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
              <div className="mx-4 mt-6 transform hover:scale-105 transition-all duration-300" style={{
                animationDelay: '300ms',
                animation: isMenuOpen ? 'slideInLeft 0.5s ease-out forwards' : 'none'
              }}>
                <Button 
                  to="/contact" 
                  variant="gradient" 
                  size="md"
                  className="w-full text-center shadow-lg hover:shadow-xl relative group overflow-hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">Contact</span>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
