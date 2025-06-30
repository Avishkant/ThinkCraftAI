import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const team = [
    {
      name: "Rajesh Kumar",
      role: "CEO & AI Strategist", 
      bio: "NIT graduate with 10+ years in AI research and business strategy. Former tech lead at major IT companies.",
      image: "👨‍💼",
      education: "NIT Trichy"
    },
    {
      name: "Priya Sharma",
      role: "Chief Technology Officer",
      bio: "Machine Learning expert and NIT alumna with experience in scalable AI systems and cloud architecture.",
      image: "👩‍💻",
      education: "NIT Warangal"
    },
    {
      name: "Arjun Patel",
      role: "Lead Data Scientist", 
      bio: "NIT graduate specializing in NLP and deep learning with expertise in business intelligence.",
      image: "👨‍🔬",
      education: "NIT Surathkal"
    },
    {
      name: "Sneha Reddy",
      role: "Solutions Architect",
      bio: "Expert in AI implementation and system integration. NIT graduate with focus on automation solutions.",
      image: "👩‍🔧",
      education: "NIT Rourkela"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We push the boundaries of what's possible with AI technology, constantly exploring new frontiers.",
      icon: "🚀",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Excellence", 
      description: "Delivering exceptional results that exceed client expectations through rigorous quality standards.",
      icon: "⭐",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Ethics",
      description: "Responsible AI development that prioritizes transparency, fairness, and societal benefit.",
      icon: "⚖️",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Partnership",
      description: "Building long-term relationships based on trust, collaboration, and mutual success.",
      icon: "🤝",
      color: "from-green-500 to-green-600"
    }
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed", icon: "🎯" },
    { number: "25+", label: "Happy Clients", icon: "😊" },
    { number: "100%", label: "Success Rate", icon: "✅" },
    { number: "4", label: "NIT Graduates", icon: "🎓" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About ThinkCraft.ai</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We're a team of NIT graduates passionate about transforming businesses through intelligent technology solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Join Our Team
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2022 by a group of NIT graduates, ThinkCraft.ai emerged from a simple belief: 
                  artificial intelligence should be accessible, ethical, and transformative for businesses of all sizes. 
                  Our founders, armed with strong technical backgrounds from premier engineering institutes, 
                  recognized the gap between cutting-edge AI research and practical business applications.
                </p>
                <p>
                  Today, we've helped 50+ companies harness the power of AI to automate processes, gain insights 
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
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <div className="text-3xl font-bold text-blue-600">{achievement.number}</div>
                    <div className="text-gray-600 text-sm">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl text-white">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our NIT Team</h2>
            <p className="text-xl text-gray-600">The brilliant minds behind ThinkCraft.ai</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-purple-600 mb-3 font-medium">{member.education}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NIT Graduates Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-teal-100 rounded-xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why NIT Excellence Matters</h2>
              <p className="text-xl text-gray-600">Premier engineering education meets real-world innovation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎓</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
                <p className="text-gray-600">Rigorous engineering education from India's premier technical institutes ensures strong problem-solving foundations.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🔬</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Research Mindset</h3>
                <p className="text-gray-600">Trained in analytical thinking and innovation, we approach every challenge with scientific rigor and creativity.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Industry Impact</h3>
                <p className="text-gray-600">Combining academic knowledge with practical experience to deliver solutions that make a real difference.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            To democratize artificial intelligence by making advanced AI solutions accessible, ethical, and 
            transformative for businesses across India and beyond. We believe that every organization, regardless of size, 
            should have the opportunity to harness the power of AI to drive innovation and growth.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
