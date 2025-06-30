import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Custom ML models for predictive analytics, classification, and intelligent automation solutions.",
      features: ["Predictive Analytics", "Data Classification", "Pattern Recognition", "Automated Decision Making"],
      icon: "🤖",
      color: "from-blue-500 to-blue-600",
      popular: true
    },
    {
      title: "Web & App Development",
      description: "Modern, responsive web applications and mobile apps built with cutting-edge technologies.",
      features: ["React/Next.js Development", "Mobile App Development", "E-commerce Solutions", "Progressive Web Apps"],
      icon: "💻",
      color: "from-purple-500 to-purple-600",
      popular: false
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and seamless deployment solutions for modern businesses.",
      features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code", "CI/CD Pipelines"],
      icon: "☁️",
      color: "from-teal-500 to-teal-600",
      popular: false
    },
    {
      title: "Business Automation",
      description: "Intelligent automation tools to streamline your business processes and boost productivity.",
      features: ["Workflow Automation", "Document Processing", "CRM Integration", "Process Optimization"],
      icon: "⚙️",
      color: "from-green-500 to-green-600",
      popular: true
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization platforms.",
      features: ["Business Intelligence", "Real-time Analytics", "Data Visualization", "Performance Dashboards"],
      icon: "📊",
      color: "from-orange-500 to-orange-600",
      popular: false
    },
    {
      title: "AI Consulting",
      description: "Strategic AI consulting to help you identify opportunities and implement the right solutions.",
      features: ["AI Strategy Development", "Technology Assessment", "Implementation Planning", "Team Training"],
      icon: "💡",
      color: "from-indigo-500 to-indigo-600",
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
      color: "bg-purple-500"
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Building and rigorously testing your AI models and applications with iterative feedback and optimization.",
      icon: "⚡",
      color: "bg-teal-500"
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "Seamless integration with ongoing monitoring, maintenance, and 24/7 support to ensure optimal performance.",
      icon: "🚀",
      color: "bg-green-500"
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
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our AI Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get Started
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              About Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">End-to-end solutions for your digital transformation journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300 relative ${service.popular ? 'border-2 border-yellow-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-2xl text-white">{service.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-800">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <Link 
                    to="/contact"
                    className={`bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-lg hover:shadow-lg transition duration-300 inline-block font-medium`}
                  >
                    Learn More
                  </Link>
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
            <p className="text-xl text-gray-600">How we deliver exceptional AI solutions</p>
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
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
            <p className="text-xl text-gray-600">Cutting-edge tools and frameworks for optimal results</p>
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
            <p className="text-xl text-gray-600">Choose the engagement model that works best for your project</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Project-Based</h3>
              <p className="text-gray-600 mb-6">Perfect for well-defined projects with clear deliverables</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Fixed scope & timeline
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Transparent pricing
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  3 months support
                </li>
              </ul>
              <Link to="/contact" className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 text-center font-medium">
                Get Quote
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Recommended
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Retainer Model</h3>
              <p className="text-gray-600 mb-6">Ongoing partnership for continuous development and support</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Dedicated team access
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Flexible scope
                </li>
              </ul>
              <Link to="/contact" className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 text-center font-medium">
                Get Started
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Consulting</h3>
              <p className="text-gray-600 mb-6">Strategic guidance and expert advice for your AI initiatives</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Hourly or daily rates
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Expert consultation
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Strategy development
                </li>
              </ul>
              <Link to="/contact" className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 text-center font-medium">
                Schedule Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss which AI solution is right for your business and how we can help you achieve your goals.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
