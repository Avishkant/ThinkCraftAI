// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Crafting Smart Solutions.<br />
            <span className="text-yellow-300">Building Digital Futures.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Welcome to ThinkCraft.ai, your partner in innovative IT services and consulting.
          </p>
          <div className="space-x-4">
            <Link 
              to="/services" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
            >
              Explore Services
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 inline-block"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">What is ThinkCraft.ai?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              ThinkCraft.ai is a technology startup founded by NIT graduates, specializing in AI, automation, 
              web and app development, cloud consulting, and business automation tools. We help businesses 
              innovate and grow with smart, scalable solutions.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Tech Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
              <p className="text-gray-600 text-sm">Intelligent automation and machine learning solutions</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
              <div className="text-6xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">Automation</h3>
              <p className="text-gray-600 text-sm">Streamline processes and boost efficiency</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
              <div className="text-6xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600 text-sm">Modern, responsive web applications</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
              <div className="text-6xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-2">Cloud Consulting</h3>
              <p className="text-gray-600 text-sm">Scalable cloud infrastructure solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose ThinkCraft.ai?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">NIT-Founded Team</h3>
                <p className="text-gray-600">Founded by graduates from prestigious National Institute of Technology, bringing academic excellence to real-world solutions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart & Scalable</h3>
                <p className="text-gray-600">Our solutions are designed to grow with your business, ensuring reliability and future-proof technology.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation-First</h3>
                <p className="text-gray-600">Result-driven approach with cutting-edge technology and innovative thinking at the core of everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
              <p className="mb-4">Custom AI solutions to automate and optimize your business processes.</p>
              <Link to="/services" className="text-blue-200 hover:text-white transition">Learn More →</Link>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Web & App Development</h3>
              <p className="mb-4">Modern, responsive applications built with cutting-edge technologies.</p>
              <Link to="/services" className="text-purple-200 hover:text-white transition">Learn More →</Link>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Cloud & DevOps</h3>
              <p className="mb-4">Scalable cloud infrastructure and seamless deployment solutions.</p>
              <Link to="/services" className="text-teal-200 hover:text-white transition">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you leverage technology to achieve your goals and drive innovation.
          </p>
          <div className="space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
            >
              Get Started Today
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 inline-block"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
