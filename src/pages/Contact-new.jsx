import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "info@thinkcraft.ai",
      icon: "📧",
      description: "Send us an email anytime"
    },
    {
      title: "Phone",
      value: "+1 (555) 123-4567",
      icon: "📞",
      description: "Call us during business hours"
    },
    {
      title: "Address",
      value: "123 AI Street, Tech City, TC 12345",
      icon: "📍",
      description: "Visit our headquarters"
    },
    {
      title: "Response Time",
      value: "Within 24 hours",
      icon: "⏰",
      description: "We'll get back to you quickly"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Ready to transform your business with AI? We'd love to hear from you. Let's discuss your project and explore the possibilities.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/services" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              View Services
            </Link>
            <a 
              href="tel:+15551234567" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{info.value}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form and Additional Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Office Hours</h3>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-medium text-gray-800">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 font-medium">
                    Schedule a Call
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 font-medium">
                    Download Brochure
                  </button>
                  <Link 
                    to="/services"
                    className="w-full block text-center bg-gradient-to-r from-purple-600 to-teal-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-teal-700 transition duration-300 font-medium"
                  >
                    View Services
                  </Link>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked</h3>
                <div className="space-y-4">
                  <div className="pb-3 border-b border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-1">How long does a project take?</h4>
                    <p className="text-sm text-gray-600">Most projects are completed within 4-8 weeks, depending on complexity.</p>
                  </div>
                  <div className="pb-3 border-b border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-1">Do you offer support?</h4>
                    <p className="text-sm text-gray-600">Yes, we provide 24/7 support and maintenance for all our AI solutions.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Can you work with existing systems?</h4>
                    <p className="text-sm text-gray-600">Absolutely! We specialize in seamless integration with your current infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">We're located in the heart of Tech City</p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-12 text-center">
            <div className="text-6xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">ThinkCraft.ai Headquarters</h3>
            <p className="text-lg text-gray-600 mb-4">123 AI Street, Tech City, TC 12345</p>
            <p className="text-gray-600 mb-6">Modern office space designed for innovation and collaboration</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Get Directions
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-lg mb-4">For urgent technical issues or critical system failures:</p>
          <div className="flex justify-center items-center space-x-4">
            <span className="text-2xl">🚨</span>
            <a href="tel:+15551234567" className="text-xl font-semibold hover:underline transition duration-300">
              Emergency Hotline: +1 (555) 123-4567
            </a>
            <span className="text-2xl">🚨</span>
          </div>
          <p className="text-sm mt-4 opacity-90">Available 24/7 for critical support</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
