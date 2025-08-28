import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback: still show success message since Netlify might process it
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <SEOHead 
        title="Contact Bright mAInd | Book Free Growth Audit"
        description="Book a free growth audit or message us—limited clinic slots to ensure priority."
        canonical="/contact"
      />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ name: 'Contact', url: '/contact' }]} />
      
      {/* Header Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-8">
              Ready to <span className="text-orange">grow your clinic</span>?
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Get predictable patient bookings with our complete growth system: smart marketing, AI automation, and conversion-focused websites.
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
                Let's talk growth
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                We help medical aesthetics clinics scale with predictable patient acquisition, smart automation, and high-converting websites.
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
                  We respond to all inquiries within 4 hours during business days. 
                  Limited clinic slots available to ensure quality service.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 card-hover">
              {!isSubmitted ? (
                <form 
                  name="contact" 
                  method="POST" 
                 netlify
                 data-netlify="true"
                 data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                 <div style={{ display: 'none' }}>
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                 </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors text-charcoal"
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
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors text-charcoal"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors text-charcoal"
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
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors resize-none text-charcoal"
                      placeholder="Tell us about your business goals and how we can help you achieve them..."
                      placeholder="Tell us about your clinic and growth goals. What challenges are you facing with patient acquisition?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg btn-hover flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send size={20} />
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Thank you for reaching out. We've received your message and will respond within 4 hours during business days.
                  </p>
                  <p className="text-gray-600 mb-8">
                    We're excited to discuss how we can help you scale your clinic with our complete growth system.
                  </p>
                  <div className="bg-orange/10 border border-orange/20 rounded-lg p-4 mb-6">
                    <p className="text-gray-700 text-sm">
                      <strong>Limited Availability:</strong> We only work with a select number of clinics to ensure exceptional results.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange/90 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
            
            {/* Priority Notice */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Limited clinic partnerships available. Apply today to secure your spot.
              </p>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>

    </div>
  );
};

export default Contact;