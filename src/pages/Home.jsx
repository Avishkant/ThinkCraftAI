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
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-30 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg opacity-30 animate-pulse rotate-45" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-25 animate-ping" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-25 animate-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-60 right-1/4 w-28 h-28 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg opacity-15 animate-bounce rotate-12" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
        
        {/* Dynamic Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 rounded-full opacity-20 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400 via-cyan-400 to-green-400 rounded-full opacity-20 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-bl from-yellow-400 via-orange-400 to-red-400 rounded-full opacity-15 animate-pulse" style={{animationDuration: '8s'}}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up max-w-6xl mx-auto">
            {/* Enhanced Main Heading */}
            <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent animate-pulse">
                Powering
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2 transform hover:scale-105 transition-transform duration-500">
                Digital Revolution
              </span>
              <span className="block text-2xl md:text-3xl font-light mt-4 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                with Smart AI Solutions
              </span>
            </h1>
            
            {/* Enhanced Subtitle */}
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed font-light">
              Welcome to <span className="font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">ThinkCraft.ai</span>, where NIT graduates transform businesses through 
              <span className="font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"> intelligent technology solutions </span> 
               and cutting-edge innovation.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <div className="group">
                <IconButton 
                  to="/services" 
                  variant="primary"
                  size="lg"
                  icon="🚀"
                  className="transform group-hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="text-blue-800 font-bold">
                    Explore Our Services
                  </span>
                  <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </IconButton>
              </div>
              
              <div className="group">
                <IconButton 
                  to="/contact" 
                  variant="secondary"
                  size="lg"
                  icon="💬"
                  className="transform group-hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 border-2 border-purple-400/30 hover:border-purple-400/60"
                >
                  <span className="text-white font-bold">
                    Start Your Project
                  </span>
                  <span className="ml-3 text-2xl transform group-hover:rotate-12 transition-transform duration-300">✨</span>
                </IconButton>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 opacity-80">
              <div className="flex items-center gap-2">
                <span className="text-3xl">🎓</span>
                <span className="text-sm font-medium">NIT Graduates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">⭐</span>
                <span className="text-sm font-medium">100% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🏆</span>
                <span className="text-sm font-medium">50+ Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Floating Animation */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="relative animate-float">
            <div className="w-96 h-96 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl animate-bounce filter drop-shadow-2xl">🤖</div>
            </div>
            {/* Enhanced Orbiting Elements */}
            <div className="absolute top-12 left-12 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
            <div className="absolute bottom-12 right-12 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce"></div>
            <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-r from-indigo-400 to-cyan-500 rounded-full opacity-60 animate-spin" style={{animationDuration: '3s'}}></div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/70 rounded-full flex justify-center opacity-70 backdrop-blur-sm">
            <div className="w-2 h-4 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-xs mt-2 opacity-60">Scroll to explore</p>
        </div>
      </section>

      {/* Portfolio Showcase Section - COMMENTED OUT */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'4\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest projects showcasing innovation and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20 hover:border-cyan-400/50">
              <div className="aspect-video bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-4xl">🤖</div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold">
                  AI Solution
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                AI-Powered Analytics Platform
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Advanced machine learning solution for real-time data analytics and predictive insights.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">React</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">Python</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">AWS</span>
              </div>
              <div className="flex items-center text-cyan-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Project
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20 hover:border-purple-400/50">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-4xl">📱</div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold">
                  Mobile App
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                E-Commerce Mobile Platform
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Cross-platform mobile application with seamless shopping experience and payment integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">React Native</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full border border-pink-500/30">Node.js</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">MongoDB</span>
              </div>
              <div className="flex items-center text-purple-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Project
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20 hover:border-green-400/50">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-4xl">☁️</div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold">
                  Cloud Solution
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300">
                Enterprise Cloud Migration
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Complete cloud infrastructure migration with microservices architecture and DevOps automation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">Docker</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Kubernetes</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">AWS</span>
              </div>
              <div className="flex items-center text-green-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Project
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              View All Projects
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section> */}
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
      <section ref={addToRefs} className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 transform transition-all duration-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text mb-6 transform hover:scale-105 transition-transform duration-300">
              Our Tech Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging cutting-edge technologies to build the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Integration Card */}
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 border border-gray-100 hover:border-cyan-200 relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:animate-bounce">🤖</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                  AI Integration
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Intelligent automation and machine learning solutions that transform your business operations
                </p>
                <div className="mt-6 flex items-center text-cyan-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Automation Card */}
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 border border-gray-100 hover:border-purple-200 relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-red-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:animate-spin transition-transform duration-1000">⚙️</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                  Automation
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Streamline processes and boost efficiency with intelligent workflow automation
                </p>
                <div className="mt-6 flex items-center text-purple-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore Solutions
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Web Development Card */}
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 border border-gray-100 hover:border-green-200 relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-blue-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:animate-pulse">💻</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all duration-300">
                  Web Development
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Modern, responsive web applications built with cutting-edge technologies
                </p>
                <div className="mt-6 flex items-center text-green-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Projects
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Cloud Consulting Card */}
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 border border-gray-100 hover:border-blue-200 relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-indigo-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:animate-bounce">☁️</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                  Cloud Consulting
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Scalable cloud infrastructure solutions for enterprise-grade performance
                </p>
                <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Get Started
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
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
