import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const FAQs: React.FC = () => {
  const faqs = [
    {
      question: "What size projects do you take?",
      answer: "We work on everything from quick wins (2–4 weeks) to ongoing partnerships. We prefer to start small, prove the value, then scale up from there."
    },
    {
      question: "Do you replace my team?",
      answer: "Not at all. We build systems that make your team more effective, not replace them."
    },
    {
      question: "What tools do you use?",
      answer: "Whatever works best for your situation. Usually that's tools like Make or Zapier, sometimes custom code, AI tools like OpenAI, and platforms like HubSpot, Google Ads, or Facebook Ads."
    },
    {
      question: "How do we start?",
      answer: "Just book a 20-minute call with us. If we think we can really help you, we'll propose a small pilot project to prove it."
    }
  ];

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      {/* Header Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white mb-8">
              Frequently Asked <span className="text-orange">Questions</span>
            </h1>
            <p className="text-xl text-off-white/80">
              Quick answers to help you understand our approach and services.
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
    </div>
  );
};

export default FAQs;