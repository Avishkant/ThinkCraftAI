import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/animations.css';

const About = () => {
  const team = [
    {
      name: "Rajesh Kumar",
      role: "CEO & AI Strategist", 
      bio: "NIT graduate with 10+ years in AI research and business strategy. Former tech lead at major IT companies.",
      image: "👨‍💼",
      education: "NIT Trichy",
      skills: ["AI Strategy", "Business Growth", "Innovation Leadership"]
    },
    {
      name: "Priya Sharma",
      role: "Chief Technology Officer",
      bio: "Machine Learning expert and NIT alumna with experience in scalable AI systems and cloud architecture.",
      image: "👩‍💻",
      education: "NIT Warangal",
      skills: ["Machine Learning", "Cloud Architecture", "System Design"]
    },
    {
      name: "Arjun Patel",
      role: "Lead Data Scientist", 
      bio: "NIT graduate specializing in NLP and deep learning with expertise in business intelligence.",
      image: "👨‍🔬",
      education: "NIT Surathkal",
      skills: ["Deep Learning", "NLP", "Data Analytics"]
    },
    {
      name: "Sneha Reddy",
      role: "Solutions Architect",
      bio: "Expert in AI implementation and system integration. NIT graduate with focus on automation solutions.",
      image: "👩‍🔧",
      education: "NIT Rourkela",
      skills: ["System Integration", "Automation", "Solution Design"]
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We push the boundaries of what's possible with AI technology, constantly exploring new frontiers.",
      icon: "🚀",
      color: "from-blue-500 to-blue-600",
      gradient: "bg-gradient-to-r from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Excellence", 
      description: "Delivering exceptional results that exceed client expectations through rigorous quality standards.",
      icon: "⭐",
      color: "from-indigo-500 to-indigo-600",
      gradient: "bg-gradient-to-r from-indigo-500/20 to-indigo-600/20"
    },
    {
      title: "Ethics",
      description: "Responsible AI development that prioritizes transparency, fairness, and societal benefit.",
      icon: "⚖️",
      color: "from-blue-600 to-indigo-600",
      gradient: "bg-gradient-to-r from-blue-600/20 to-indigo-600/20"
    },
    {
      title: "Partnership",
      description: "Building long-term relationships based on trust, collaboration, and mutual success.",
      icon: "🤝",
      color: "from-indigo-500 to-blue-500",
      gradient: "bg-gradient-to-r from-indigo-500/20 to-blue-500/20"
    }
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed", icon: "🎯", color: "from-blue-500 to-blue-600" },
    { number: "25+", label: "Happy Clients", icon: "😊", color: "from-indigo-500 to-indigo-600" },
    { number: "100%", label: "Success Rate", icon: "✅", color: "from-blue-600 to-indigo-600" },
    { number: "10+", label: "NIT Graduates", icon: "🎓", color: "from-indigo-500 to-blue-500" },
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
              About ThinkCraft.ai
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              We're a team of <span className="font-semibold text-blue-200">NIT graduates</span> passionate about transforming businesses through intelligent technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon="👥"
                className="group bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                Join Our Team
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button
                to="/services"
                variant="secondary"
                size="lg"
                icon="🚀"
                className="group border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              >
                Our Services
                <span className="ml-2 transform group-hover:rotate-12 transition-transform">✨</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Founded in 2025 by a group of <span className="font-semibold text-blue-600">NIT graduates</span>, ThinkCraft.ai emerged from a simple belief: 
                  artificial intelligence should be accessible, ethical, and transformative for businesses of all sizes. 
                  Our founders, armed with strong technical backgrounds from premier engineering institutes, 
                  recognized the gap between cutting-edge AI research and practical business applications.
                </p>
                <p>
                  Today, we've helped <span className="font-semibold text-indigo-600">50+ companies</span> harness the power of AI to automate processes, gain insights 
                  from their data, and create innovative customer experiences. From startups to established enterprises, 
                  our solutions have driven measurable results and competitive advantages across various industries.
                </p>
                <p>
                  We believe that the future belongs to organizations that can effectively combine human creativity 
                  with artificial intelligence. Our mission is to make that future accessible to everyone, especially 
                  in the Indian market where digital transformation is rapidly accelerating.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-2xl border border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-full transform -translate-x-12 translate-y-12"></div>
                <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center relative z-10">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-gray-100">
                      <div className="text-3xl mb-3 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                        {achievement.icon}
                      </div>
                      <div className={`text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                        {achievement.number}
                      </div>
                      <div className="text-gray-600 text-sm font-medium">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do, from how we build technology to how we work with our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`${value.gradient} p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl bg-white border border-gray-200 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="text-4xl mb-4 animate-float relative z-10" style={{ animationDelay: `${index * 0.2}s` }}>
                    {value.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${value.color} bg-clip-text text-transparent relative z-10`}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - COMMENTED OUT */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Meet Our NIT Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind ThinkCraft.ai - experienced engineers from India's premier technical institutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group animate-fade-in-up bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 border border-gray-200 relative overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="text-7xl mb-6 animate-float relative z-10" style={{ animationDelay: `${index * 0.2}s` }}>
                  {member.image}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 relative z-10">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2 relative z-10">{member.role}</p>
                <p className="text-sm text-indigo-500 mb-4 font-medium relative z-10">{member.education}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed relative z-10">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2 relative z-10">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why NIT Graduates Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-12 md:p-16 shadow-2xl border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-full transform -translate-x-12 translate-y-12"></div>
            
            <div className="text-center mb-12 relative z-10 animate-fade-in-up">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Why NIT Excellence Matters
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Premier engineering education meets real-world innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <span className="text-3xl text-white animate-float">🎓</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Academic Excellence</h3>
                <p className="text-gray-600 leading-relaxed">Rigorous engineering education from India's premier technical institutes ensures strong problem-solving foundations.</p>
              </div>
              
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <span className="text-3xl text-white animate-float" style={{ animationDelay: '0.5s' }}>🔬</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Research Mindset</h3>
                <p className="text-gray-600 leading-relaxed">Trained in analytical thinking and innovation, we approach every challenge with scientific rigor and creativity.</p>
              </div>
              
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <span className="text-3xl text-white animate-float" style={{ animationDelay: '1s' }}>🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Industry Impact</h3>
                <p className="text-gray-600 leading-relaxed">Combining academic knowledge with practical experience to deliver solutions that make a real difference.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-600/20"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-xl max-w-5xl mx-auto leading-relaxed mb-12 opacity-90">
              To democratize artificial intelligence by making advanced AI solutions accessible, ethical, and 
              transformative for businesses across India and beyond. We believe that every organization, regardless of size, 
              should have the opportunity to harness the power of AI to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon="🚀"
                className="group bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                Start Your Journey
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button
                to="/services"
                variant="secondary"
                size="lg"
                icon="�"
                className="group border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              >
                Explore Services
                <span className="ml-2 transform group-hover:rotate-12 transition-transform">✨</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
