import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link as fallback
      const subject = encodeURIComponent('New Contact Form Submission');
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company || 'Not provided'}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:enquiries@brightmaind.com?subject=${subject}&body=${body}`;
      
      // Try to send via a simple fetch to a webhook service
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // This needs to be replaced with actual key
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          subject: 'New Contact Form Submission from Bright mAInd Website'
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        // Fallback to mailto
        window.location.href = mailtoLink;
        setSubmitStatus('error');
      }
    } catch (error) {
      // Fallback to mailto on any error
      const subject = encodeURIComponent('New Contact Form Submission');
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company || 'Not provided'}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:enquiries@brightmaind.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Header Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-8">
            Get In <span className="text-orange">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with AI automation and strategic marketing? We're here to help you unlock your potential and achieve measurable results.
          </p>
        </div>
      </section>
      </ScrollAnimation>

      {/* Contact Section */}
      <ScrollAnimation>
        <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Whether you're looking to automate workflows, optimize marketing campaigns, or integrate systems, 
                we're here to help. Get in touch to discuss your project and discover how we can accelerate your growth.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">Email Us</h3>
                    <a href="mailto:enquiries@brightmaind.com" className="text-orange hover:text-charcoal transition-colors block mb-1">
                      enquiries@brightmaind.com
                    </a>
                  </div>
                </div>

              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-xl font-semibold text-charcoal mb-4">Response Time</h3>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 4 hours during business days. 
                  For urgent matters, please call us directly for immediate assistance.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 card-hover">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800 font-medium">Thank you for your message! We'll get back to you within 4 hours.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800 font-medium">Your email client should have opened with your message. If not, please email us directly at <a href="mailto:enquiries@brightmaind.com" className="underline">enquiries@brightmaind.com</a></p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors"
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your business goals and how we can help you achieve them..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg btn-hover flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <Send size={20} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>

    </div>
  );
};

export default Contact;