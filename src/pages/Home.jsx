// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button, { IconButton } from '../components/Button';

const Home = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          // Animate counters
          const counters = entry.target.querySelectorAll('.counter');
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 50;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.textContent = target === 100 ? '100%' : `${target}+`;
                clearInterval(timer);
              } else {
                counter.textContent = Math.ceil(current) === 100 ? '100%' : `${Math.ceil(current)}+`;
              }
            }, 30);
          });
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) {
        section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700 text-white py-20 overflow-hidden min-h-[90vh] flex items-center">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300 rounded-lg animate-pulse rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-blue-300 rounded-full animate-bounce delay-150"></div>
          <div className="absolute top-1/2 left-20 w-6 h-6 bg-purple-300 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-60 right-1/4 w-14 h-14 bg-cyan-300 rounded-lg animate-bounce delay-500 rotate-12"></div>
        </div>
        
        {/* Gradient Orbs for depth */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full opacity-10 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight transform hover:scale-105 transition-transform duration-300">
              <span className="block">Crafting Smart</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                AI Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
              Welcome to ThinkCraft.ai, where NIT graduates transform businesses through intelligent technology solutions.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <IconButton 
                to="/services" 
                variant="primary"
                size="lg"
                icon="🚀"
              >
                Explore Services
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </IconButton>
              <IconButton 
                to="/contact" 
                variant="secondary"
                size="lg"
                icon="💬"
              >
                Let's Talk
                <span className="ml-2 transform group-hover:rotate-12 transition-transform">✨</span>
              </IconButton>
            </div>
          </div>
        </div>
        
        {/* Enhanced Floating Hero Animation */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="relative animate-float">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl animate-bounce filter drop-shadow-lg">🤖</div>
            </div>
            {/* Orbiting elements */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-10 right-10 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center opacity-70">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={addToRefs} className="py-16 bg-gray-50 transform transition-all duration-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 transform hover:scale-105 transition-transform duration-300">What is ThinkCraft.ai?</h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-8 hover:text-gray-900 transition-colors duration-300">
              ThinkCraft.ai is a technology startup founded by NIT graduates, specializing in AI, automation, 
              web and app development, cloud consulting, and business automation tools. We help businesses 
              innovate and grow with smart, scalable solutions.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-blue-600 group-hover:text-blue-700 transform group-hover:scale-110 transition-all duration-300 counter" data-target="50">0</div>
                  <div className="text-gray-800">Projects Delivered</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-blue-600 group-hover:text-blue-700 transform group-hover:scale-110 transition-all duration-300 counter" data-target="100">0</div>
                  <div className="text-gray-800">Client Satisfaction</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-blue-600 group-hover:text-blue-700 transform group-hover:scale-110 transition-all duration-300">24/7</div>
                  <div className="text-gray-800">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Highlights Section */}
      <section ref={addToRefs} className="py-16 transform transition-all duration-700">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 transform hover:scale-105 transition-transform duration-300">Our Tech Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl md:text-6xl mb-4 group-hover:animate-bounce">🤖</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">AI Integration</h3>
              <p className="text-gray-800 text-xs md:text-sm">Intelligent automation and machine learning solutions</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl md:text-6xl mb-4 group-hover:animate-spin">⚙️</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Automation</h3>
              <p className="text-gray-800 text-xs md:text-sm">Streamline processes and boost efficiency</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl md:text-6xl mb-4 group-hover:animate-pulse">💻</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Web Development</h3>
              <p className="text-gray-800 text-xs md:text-sm">Modern, responsive web applications</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl md:text-6xl mb-4 group-hover:animate-bounce">☁️</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Cloud Consulting</h3>
              <p className="text-gray-800 text-xs md:text-sm">Scalable cloud infrastructure solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={addToRefs} className="py-16 bg-gray-50 transform transition-all duration-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 transform hover:scale-105 transition-transform duration-300">Why Choose ThinkCraft.ai?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 group animate-slide-in-left" style={{animationDelay: '0.1s'}}>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <span className="text-2xl group-hover:animate-bounce">🎓</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">NIT-Founded Team</h3>
                <p className="text-gray-800">Founded by graduates from prestigious National Institute of Technology, bringing academic excellence to real-world solutions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 group animate-slide-in-up" style={{animationDelay: '0.2s'}}>
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                  <span className="text-2xl group-hover:animate-pulse">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Smart & Scalable</h3>
                <p className="text-gray-800">Our solutions are designed to grow with your business, ensuring reliability and future-proof technology.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 group animate-slide-in-right" style={{animationDelay: '0.3s'}}>
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                  <span className="text-2xl group-hover:animate-spin">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Innovation-First</h3>
                <p className="text-gray-800">Result-driven approach with cutting-edge technology and innovative thinking at the core of everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={addToRefs} className="py-16 transform transition-all duration-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 transform hover:scale-105 transition-transform duration-300">Our Services</h2>
            <p className="text-xl text-gray-800">Comprehensive solutions for your digital transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 group animate-zoom-in" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-semibold mb-3 group-hover:animate-pulse">AI & Machine Learning</h3>
              <p className="mb-4">Custom AI solutions to automate and optimize your business processes.</p>
              <Link to="/services" className="bg-white/30 px-4 py-2 rounded font-extrabold hover:bg-white/40 transition group-hover:animate-bounce inline-block border border-white/50" style={{color: '#ffffff'}}>Learn More →</Link>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-6 rounded-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 group animate-zoom-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-semibold mb-3 group-hover:animate-pulse">Web & App Development</h3>
              <p className="mb-4">Modern, responsive applications built with cutting-edge technologies.</p>
              <Link to="/services" className="bg-white/30 px-4 py-2 rounded font-extrabold hover:bg-white/40 transition group-hover:animate-bounce inline-block border border-white/50" style={{color: '#ffffff'}}>Learn More →</Link>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-6 rounded-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 group animate-zoom-in" style={{animationDelay: '0.3s'}}>
              <h3 className="text-xl font-semibold mb-3 group-hover:animate-pulse">Cloud & DevOps</h3>
              <p className="mb-4">Scalable cloud infrastructure and seamless deployment solutions.</p>
              <Link to="/services" className="bg-white/30 px-4 py-2 rounded font-extrabold hover:bg-white/40 transition group-hover:animate-bounce inline-block border border-white/50" style={{color: '#ffffff'}}>Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700 text-white relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-300 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-300 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-1/4 w-8 h-8 bg-purple-300 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-cyan-300 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300">Ready to Transform Your Business?</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
              Let's discuss how we can help you leverage technology to achieve your goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
              <IconButton 
                to="/contact" 
                variant="primary"
                size="lg"
                icon="🚀"
              >
                Get Started Today
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </IconButton>
              <IconButton 
                to="/about" 
                variant="secondary"
                size="lg"
                icon="📖"
              >
                Learn About Us
                <span className="ml-2 transform group-hover:rotate-12 transition-transform">✨</span>
              </IconButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
