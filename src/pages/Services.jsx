import React from 'react';
import { Link } from 'react-router-dom';
import Button, { IconButton } from '../components/Button';
import '../styles/animations.css';

const Services = () => {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Custom ML models for predictive analytics, classification, and intelligent automation solutions.",
      features: ["Predictive Analytics", "Data Classification", "Pattern Recognition", "Automated Decision Making"],
      icon: "🤖",
      color: "from-blue-500 to-blue-600",
      gradient: "bg-gradient-to-r from-blue-500/20 to-blue-600/20",
      popular: true
    },
    {
      title: "Web & App Development",
      description: "Modern, responsive web applications and mobile apps built with cutting-edge technologies.",
      features: ["React/Next.js Development", "Mobile App Development", "E-commerce Solutions", "Progressive Web Apps"],
      icon: "💻",
      color: "from-indigo-500 to-indigo-600",
      gradient: "bg-gradient-to-r from-indigo-500/20 to-indigo-600/20",
      popular: false
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and seamless deployment solutions for modern businesses.",
      features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code", "CI/CD Pipelines"],
      icon: "☁️",
      color: "from-blue-600 to-indigo-600",
      gradient: "bg-gradient-to-r from-blue-600/20 to-indigo-600/20",
      popular: false
    },
    {
      title: "Business Automation",
      description: "Intelligent automation tools to streamline your business processes and boost productivity.",
      features: ["Workflow Automation", "Document Processing", "CRM Integration", "Process Optimization"],
      icon: "⚙️",
      color: "from-indigo-500 to-blue-500",
      gradient: "bg-gradient-to-r from-indigo-500/20 to-blue-500/20",
      popular: true
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization platforms.",
      features: ["Business Intelligence", "Real-time Analytics", "Data Visualization", "Performance Dashboards"],
      icon: "📊",
      color: "from-blue-500 to-indigo-500",
      gradient: "bg-gradient-to-r from-blue-500/20 to-indigo-500/20",
      popular: false
    },
    {
      title: "AI Consulting",
      description: "Strategic AI consulting to help you identify opportunities and implement the right solutions.",
      features: ["AI Strategy Development", "Technology Assessment", "Implementation Planning", "Team Training"],
      icon: "💡",
      color: "from-indigo-600 to-blue-600",
      gradient: "bg-gradient-to-r from-indigo-600/20 to-blue-600/20",
      popular: false
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Analysis",
      description: "We analyze your business needs, current systems, and identify AI opportunities that can drive maximum value.",
      icon: "🔍",
      color: "bg-blue-500"
    },
    {
      step: "2", 
      title: "Solution Design",
      description: "Custom AI solution architecture tailored to your specific requirements, ensuring scalability and integration.",
      icon: "🎨",
      color: "bg-indigo-500"
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Building and rigorously testing your AI models and applications with iterative feedback and optimization.",
      icon: "⚡",
      color: "bg-blue-600"
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "Seamless integration with ongoing monitoring, maintenance, and 24/7 support to ensure optimal performance.",
      icon: "🚀",
      color: "bg-indigo-600"
    }
  ];

  const technologies = [
    { name: "Python", icon: "🐍" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-600/20"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-gradient-x">
              Our AI Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              Comprehensive AI solutions designed to transform your business operations and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon="🚀"
                className="group bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                Get Started
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button
                to="/about"
                variant="secondary"
                size="lg"
                icon="👥"
                className="group border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              >
                About Our Team
                <span className="ml-2 transform group-hover:rotate-12 transition-transform">✨</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions for your digital transformation journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`group animate-fade-in-up bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 relative overflow-hidden border border-gray-200 ${service.popular ? 'border-2 border-yellow-400' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {service.popular && (
                  <div className="absolute -top-3 left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    🔥 Most Popular
                  </div>
                )}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className={`bg-gradient-to-r ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10`}>
                  <span className="text-3xl text-white animate-float">{service.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center relative z-10">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed relative z-10">{service.description}</p>
                
                <div className="space-y-3 mb-8 relative z-10">
                  <h4 className="font-semibold text-gray-800">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-700 flex items-center">
                        <svg className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center relative z-10">
                  <Button 
                    to="/contact"
                    variant="solid"
                    size="md"
                    className={`w-full group bg-gradient-to-r ${service.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300 !text-white hover:!text-white font-bold`}
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-800">How we deliver exceptional AI solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl text-white">{step.icon}</span>
                </div>
                <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-800">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-800">Cutting-edge tools and frameworks for optimal results</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-2">{tech.icon}</div>
                <div className="font-medium text-gray-800">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Flexible Pricing</h2>
            <p className="text-xl text-gray-800">Choose the engagement model that works best for your project</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Project-Based</h3>
              <p className="text-gray-800 mb-6">Perfect for well-defined projects with clear deliverables</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-800">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Fixed scope & timeline
                </li>
                <li className="flex items-center text-gray-800">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Transparent pricing
                </li>
                <li className="flex items-center text-gray-800">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  3 months support
                </li>
              </ul>
              <Button to="/contact" variant="gradient" size="md" className="w-full">
                Get Quote
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Recommended
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Retainer Model</h3>
              <p className="text-gray-800 mb-6">Ongoing partnership for continuous development and support</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-800">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Dedicated team access
                </li>
                <li className="flex items-center text-gray-800">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center text-gray-800">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Flexible scope
                </li>
              </ul>
              <Button to="/contact" variant="gradient" size="md" className="w-full">
                Get Started
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Consulting</h3>
              <p className="text-gray-800 mb-6">Strategic guidance and expert advice for your AI initiatives</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-800">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Hourly or daily rates
                </li>
                <li className="flex items-center text-gray-800">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Expert consultation
                </li>
                <li className="flex items-center text-gray-800">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Strategy development
                </li>
              </ul>
              <Button to="/contact" variant="gradient" size="md" className="w-full">
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss which AI solution is right for your business and how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact"
              className="group bg-white/30 px-8 py-4 rounded-lg font-extrabold hover:bg-white/40 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-white/50"
              style={{color: '#ffffff'}}
            >
              <span className="flex items-center justify-center">
                <span className="mr-2">📅</span>
                Schedule Consultation
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Button
              to="/about"
              variant="secondary"
              size="lg"
              icon="👥"
            >
              Meet Our Team
              <span className="ml-2 transform group-hover:rotate-12 transition-transform">✨</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
