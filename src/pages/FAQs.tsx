import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { Helmet } from 'react-helmet-async';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const FAQs: React.FC = () => {
  const faqs = [
    {
      question: "How much does your Growth System cost?",
      answer: "Our packages typically start at £500–£1,500/month, depending on your clinic size, ad spend, and service level. This includes website optimization, targeted ads, content creation, and automation setup. Even 2–3 new bookings per month usually cover the investment. We'll give you exact pricing during your free audit based on your clinic's specific needs—no hidden fees, no surprise charges."
    },
    {
      question: "How quickly will I see more bookings?",
      answer: "Most clinics see initial results within 30-45 days. The booking system and deposit collection start working immediately, while ads and content typically show increased bookings within 4-6 weeks. Full system optimization usually delivers peak results by month 3."
    },
    {
      question: "What exactly is included in the Growth System?",
      answer: "Everything you need: conversion-optimized website with integrated booking and deposit collection, targeted Facebook/Instagram and Google ads, before/after video content, automated reminder sequences, and ongoing optimization. Plus monthly reporting and direct access to our team."
    },
    {
      question: "Do I need to sign a long-term contract?",
      answer: "No long-term contracts required. We work month-to-month because we're confident in our results. Most clinics stay with us long-term because the system keeps filling their calendars, but you're free to pause or stop anytime with 30 days' notice."
    },
    {
      question: "How do deposits and reminders actually reduce no-shows?",
      answer: "Deposits create financial commitment—clients who pay upfront are 70% more likely to attend. Our automated reminder sequence (48 hours, 24 hours, and 2 hours before) keeps appointments top-of-mind. Together, this typically cuts no-shows by 40-60%."
    },
    {
      question: "What if the system doesn't work for my clinic?",
      answer: "If you don't see measurable progress within 60 days, we'll keep working at no extra cost until you do. We're confident in our system because we only work with a limited number of clinics at a time—this means every client gets our full attention and priority support to ensure success."
    },
    {
      question: "How many clients do you take on at once?",
      answer: "We only work with a handful of clinics at a time—typically 3 to 5—so every client gets our full attention and priority. This ensures faster results and direct access to our team whenever needed."
    },
    {
      question: "Do you only work with certain types of treatments?",
      answer: "We work with all medical aesthetics treatments—Botox, fillers, laser treatments, skin rejuvenation, body contouring, and more. Our system adapts to your specific treatments and target demographics, whether you focus on anti-aging, acne treatment, or body aesthetics."
    },
    {
      question: "What if we already have a website?",
      answer: "That's fine. Many clinics do. We'll build dedicated landing pages designed specifically to drive bookings and cut no-shows. They plug into your existing site and booking system for instant results."
    },
    {
      question: "What happens during the free growth audit?",
      answer: "We'll analyze your current booking process, identify revenue leaks from no-shows, review your online presence, and show you exactly how many more bookings your clinic could be getting. Takes 30 minutes, no sales pressure, and you'll leave with actionable insights regardless of whether we work together."
    }
  ];

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      <SEOHead 
        title="Aesthetics Clinic Marketing FAQs | Bright mAInd"
        description="Pricing, timelines, landing pages vs websites, and how we cut no-shows with automation."
        canonical="/faqs"
      />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ name: 'FAQs', url: '/faqs' }]} />
      
      {/* FAQPage JSON-LD */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does your Growth System cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our packages typically start at £500–£1,500/month, depending on your clinic size, ad spend, and service level. This includes website optimization, targeted ads, content creation, and automation setup. Even 2–3 new bookings per month usually cover the investment. We'll give you exact pricing during your free audit based on your clinic's specific needs—no hidden fees, no surprise charges."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly will I see more bookings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most clinics see initial results within 30-45 days. The booking system and deposit collection start working immediately, while ads and content typically show increased bookings within 4-6 weeks. Full system optimization usually delivers peak results by month 3."
                }
              },
              {
                "@type": "Question",
                "name": "What if we already have a website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "That's fine. Many clinics do. We'll build dedicated landing pages designed specifically to drive bookings and cut no-shows. They plug into your existing site and booking system for instant results."
                }
              },
              {
                "@type": "Question",
                "name": "What if the system doesn't work for my clinic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you don't see measurable progress within 60 days, we'll keep working at no extra cost until you do. We're confident in our system because we only work with a limited number of clinics at a time—this means every client gets our full attention and priority support to ensure success."
                }
              },
              {
                "@type": "Question",
                "name": "How do deposits and reminders actually reduce no-shows?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Deposits create financial commitment—clients who pay upfront are 70% more likely to attend. Our automated reminder sequence (48 hours, 24 hours, and 2 hours before) keeps appointments top-of-mind. Together, this typically cuts no-shows by 40-60%."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      {/* Header Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white mb-8">
              Questions About Our <span className="text-orange">Growth System</span>
            </h1>
            <p className="text-xl text-off-white/80">
              Everything you need to know about filling your calendar and cutting no-shows.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQs Section */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-near-black rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold font-rajdhani">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-off-white/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-24 bg-orange">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-8">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book a free growth audit and get all your questions answered. No obligation, just clear insights about growing your clinic.
            </p>
            <button
              onClick={() => {
                if (window.Calendly) {
                  window.Calendly.initPopupWidget({
                    url: 'https://calendly.com/enquiries-brightmaind/30min?a1=FAQ%20Growth%20Audit',
                    parentElement: document.body
                  });
                  
                  setTimeout(() => {
                    const popup = document.querySelector('.calendly-popup');
                    if (popup && !popup.querySelector('.calendly-text-overlay')) {
                      const textOverlay = document.createElement('div');
                      textOverlay.className = 'calendly-text-overlay';
                      textOverlay.innerHTML = '<span>Let\'s discuss your clinic\'s growth potential and answer any questions you have</span>';
                      popup.appendChild(textOverlay);
                    }
                  }, 100);
                } else {
                  window.open('https://calendly.com/enquiries-brightmaind/30min?a1=FAQ%20Growth%20Audit', '_blank');
                }
              }}
              className="bg-white text-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors"
            >
              Book Free Growth Audit
            </button>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default FAQs;