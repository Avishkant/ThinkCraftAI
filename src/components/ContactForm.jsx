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
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* These hidden fields are no longer needed with the AJAX approach */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-800 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
            placeholder="Tell us more about your project or inquiry..."
          ></textarea>
        </div>

        <div>
          <Button
            type="submit"
            variant="gradient"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>

      <div className="mt-6 text-sm text-gray-800">
        <p>* Required fields</p>
        <p className="mt-2">
          We typically respond within 24 hours. For urgent matters, please call us directly.
        </p>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h4 className="font-semibold text-gray-800 mb-2">Alternative Contact Methods:</h4>
          <p className="text-sm">
            <strong>Email:</strong> <a href="mailto:thiinkcraft@gmail.com" className="text-blue-600 hover:underline">thiinkcraft@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
