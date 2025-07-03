// ContactForm using FormSubmit (no setup required)
import React, { useState } from 'react';
import Button from './Button';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    
    try {
      // Use FormSubmit's AJAX endpoint for better compatibility
      const response = await fetch('https://formsubmit.co/ajax/thiinkcraft@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          _subject: 'New Contact Form Submission from ThinkCraft.ai',
          _captcha: 'false',
          _template: 'table'
        })
      });
      
      if (response.ok) {
        alert('Message sent successfully! We\'ll get back to you soon.');
        e.target.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Failed to send message. Please try again or email us directly at thiinkcraft@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4 animate-pulse">
            <span className="text-2xl text-white">💬</span>
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Send us a Message</h3>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                <span className="flex items-center">
                  <span className="mr-2">👤</span>
                  Full Name *
                </span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/80 backdrop-blur-sm"
                placeholder="Your full name"
              />
            </div>

            <div className="group">
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                <span className="flex items-center">
                  <span className="mr-2">📧</span>
                  Email Address *
                </span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/80 backdrop-blur-sm"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="group">
            <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
              <span className="flex items-center">
                <span className="mr-2">📝</span>
                Subject *
              </span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/80 backdrop-blur-sm"
              placeholder="What's this about?"
            />
          </div>

          <div className="group">
            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
              <span className="flex items-center">
                <span className="mr-2">💭</span>
                Message *
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/80 backdrop-blur-sm resize-none"
              placeholder="Tell us more about your project or inquiry..."
            ></textarea>
          </div>

          <div>
            <Button
              type="submit"
              variant="gradient"
              size="lg"
              className="w-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              disabled={isSubmitting}
            >
              <span className="flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="mr-2">🚀</span>
                    Send Message
                  </>
                )}
              </span>
            </Button>
          </div>
        </form>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
          <p className="text-sm text-gray-700 mb-4">
            <span className="font-bold text-blue-800">* Required fields</span>
          </p>
          <p className="text-sm text-gray-700 mb-4">
            We typically respond within 24 hours. For urgent matters, please call us directly.
          </p>
          
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center">
              <span className="mr-2">📞</span>
              Alternative Contact Methods:
            </h4>
            <div className="space-y-2">
              <p className="text-sm flex items-center">
                <span className="w-6 text-blue-600">📧</span>
                <strong className="mr-2">Email:</strong> 
                <a href="mailto:thiinkcraft@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                  thiinkcraft@gmail.com
                </a>
              </p>
              <p className="text-sm flex items-center">
                <span className="w-6 text-indigo-600">📞</span>
                <strong className="mr-2">Phone:</strong> 
                <a href="tel:+917724000534" className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors">
                  +91 7724000534
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
