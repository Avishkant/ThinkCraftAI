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
          {/* Clean Logo */}
          <div className="flex items-center">
            <Link to="/" className="group relative inline-block">
              <div className="flex items-baseline space-x-1">
                <span className="text-3xl font-bold tracking-tight text-blue-600" 
                      style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                  Think
                </span>
                <span className="text-3xl font-bold tracking-tight text-cyan-500" 
                      style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                  Craft.ai
                </span>
              </div>
            </Link>
          </div>
          
          {/* Enhanced Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'About'].map((item, index) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="group relative px-3 py-2 font-medium text-gray-800 hover:text-blue-600 transition-all duration-300"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:transform group-hover:-translate-y-0.5">
                  {item}
                </span>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                {/* Sliding underline */}
                <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-4/5 transform -translate-x-1/2 transition-all duration-300 ease-out"></div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
              </Link>
            ))}
            <div className="transform hover:scale-105 transition-all duration-300">
              <Button to="/contact" variant="clean" size="sm" className="relative group">
                <span className="relative z-10">Contact</span>
                {/* Subtle background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group relative p-2 text-gray-800 hover:text-blue-600 focus:outline-none transform hover:scale-110 transition-all duration-300"
            >
              {/* Background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              {/* Icon with smooth transitions */}
              <svg className="relative z-10 h-6 w-6 transform transition-all duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
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
                  className="group block px-4 py-3 text-gray-800 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-lg mx-2 transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen ? 'slideInLeft 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <span className="relative flex items-center">
                    <span className="transform transition-transform group-hover:scale-110">{item.name}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    {/* Arrow indicator */}
                    <svg className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </span>
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
