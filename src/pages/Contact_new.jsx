import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Button, { IconButton } from '../components/Button';
import '../styles/animations.css';

const Contact = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    // Check if we're coming back from a successful form submission
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowSuccessMessage(true);
      // Remove the success parameter from URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);
  
  const contactInfo = [
    {
      title: "Email",
      value: "thiinkcraft@gmail.com",
      icon: "📧",
      description: "Send us an email anytime",
      color: "from-blue-500 to-blue-600",
      gradient: "bg-gradient-to-r from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Phone",
      value: "+91 7724000534",
      icon: "📞",
      description: "Call us during business hours",
      color: "from-indigo-500 to-indigo-600",
      gradient: "bg-gradient-to-r from-indigo-500/20 to-indigo-600/20"
    },
    {
      title: "Address",
      value: "Indore, India",
      icon: "📍",
      description: "Visit our headquarters",
      color: "from-blue-600 to-indigo-600",
      gradient: "bg-gradient-to-r from-blue-600/20 to-indigo-600/20"
    },
    {
      title: "Response Time",
      value: "Within 24 hours",
      icon: "⏰",
      description: "We'll get back to you quickly",
      color: "from-indigo-500 to-blue-500",
      gradient: "bg-gradient-to-r from-indigo-500/20 to-blue-500/20"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const benefits = [
    {
      icon: "🚀",
      title: "Rapid Development",
      description: "Get your AI solutions deployed faster with our agile development approach and proven methodologies.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "🎯",
      title: "Custom Solutions",
      description: "Every business is unique. We tailor our AI solutions to fit your specific needs and objectives.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: "🛡️",
      title: "Enterprise Security",
      description: "Your data is safe with us. We implement enterprise-grade security measures and compliance standards.",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: "🔄",
      title: "Continuous Support",
      description: "24/7 monitoring, maintenance, and support to ensure your AI systems run smoothly at all times.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: "💡",
      title: "Innovation First",
      description: "We stay ahead of the curve with cutting-edge AI technologies and industry best practices.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: "📈",
      title: "Proven ROI",
      description: "Our clients see measurable results and improved efficiency within the first months of deployment.",
      color: "from-indigo-600 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-600/20"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-gradient-x">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              Ready to transform your business with AI? We'd love to hear from you. Let's discuss your project and explore the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <Button
                to="/services"
                variant="primary"
                size="lg"
                icon="🚀"
                className="group bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                View Services
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button
                href="tel:+917724000534"
                variant="secondary"
                size="lg"
                icon="📞"
                className="group border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              >
                Call Now
                <span className="ml-2 transform group-hover:rotate-12 transition-transform">✨</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-indigo-50/30 to-blue-50/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
              Contact Information
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="group animate-fade-in-up bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl text-center transform hover:scale-105 transition-all duration-300 border border-gray-200 relative overflow-hidden animate-zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-5xl mb-6 animate-float relative z-10" style={{ animationDelay: `${index * 0.2}s` }}>{info.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 relative z-10 group-hover:text-blue-700 transition-colors">{info.title}</h3>
                <p className={`font-semibold mb-3 text-lg bg-gradient-to-r ${info.color} bg-clip-text text-transparent relative z-10 animate-shimmer`}>{info.value}</p>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors">{info.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>

          {/* Contact Form and Additional Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {showSuccessMessage && (
                <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 shadow-lg animate-slide-in-down">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                        <span className="text-2xl text-white">✅</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                      <div className="text-green-700 mb-4">
                        <p>Thank you for contacting us. We've received your message and will get back to you within 24 hours.</p>
                      </div>
                      <div>
                        <button
                          onClick={() => setShowSuccessMessage(false)}
                          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <ContactForm />
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4 animate-pulse">
                      <span className="text-2xl text-white">🕐</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Office Hours</h3>
                  </div>
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-3 px-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
                        <span className="text-gray-600 font-medium">{schedule.day}</span>
                        <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4 animate-pulse">
                      <span className="text-2xl text-white">⚡</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Quick Actions</h3>
                  </div>
                  <div className="space-y-4">
                    <Button 
                      variant="gradient"
                      size="md"
                      className="w-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      onClick={() => alert('Schedule a call feature coming soon!')}
                    >
                      <span className="mr-2">📅</span>
                      Schedule a Call
                    </Button>
                    <Button 
                      variant="outline"
                      size="md"
                      className="w-full transform hover:scale-105 transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                      onClick={() => alert('Brochure download coming soon!')}
                    >
                      <span className="mr-2">📄</span>
                      Download Brochure
                    </Button>
                    <Button 
                      to="/services"
                      variant="gradient"
                      size="md"
                      className="w-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <span className="mr-2">🚀</span>
                      View Services
                    </Button>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-indigo-500 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4 animate-pulse">
                      <span className="text-2xl text-white">❓</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Frequently Asked</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-white rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                        <span className="text-blue-600 mr-2">⏱️</span>
                        How long does a project take?
                      </h4>
                      <p className="text-gray-700 leading-relaxed">Most projects are completed within 4-8 weeks, depending on complexity.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                        <span className="text-indigo-600 mr-2">🛠️</span>
                        Do you offer support?
                      </h4>
                      <p className="text-gray-700 leading-relaxed">Yes, we provide 24/7 support and maintenance for all our AI solutions.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                        <span className="text-blue-600 mr-2">🔗</span>
                        Can you work with existing systems?
                      </h4>
                      <p className="text-gray-700 leading-relaxed">Absolutely! We specialize in seamless integration with your current infrastructure.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
              Why Choose ThinkCraft.ai?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're not just another AI company - we're your partners in digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group animate-fade-in-up bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200 relative overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`bg-gradient-to-r ${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10`}>
                  <span className="text-3xl text-white animate-float">{benefit.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center relative z-10">{benefit.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed relative z-10">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-600/20 animate-gradient-x"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-gradient-x">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              Join hundreds of businesses that have already transformed their operations with our AI solutions. Let's discuss your project today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <Button
                to="/services"
                variant="primary"
                size="lg"
                icon="🎯"
                className="group bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                View Our Services
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button
                href="tel:+917724000534"
                variant="secondary"
                size="lg"
                icon="📞"
                className="group border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              >
                Call Us Now
                <span className="ml-2 transform group-hover:rotate-12 transition-transform">✨</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
