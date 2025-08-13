import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const FAQs: React.FC = () => {
  const faqs = [
    {
      question: "What's the difference between the payment options?",
      answer: "Monthly-to-ownership: Higher monthly rate, you own your site after exactly 12 months. Continuous monthly: Lower monthly rate with optional buyout using earned credits. Buy outright: One-time payment for immediate ownership."
    },
    {
      question: "How do change credits work?",
      answer: "Credits are tracked in 15-minute blocks. Small updates like text changes or image swaps typically use 1 credit. Bigger changes use more credits. Unused credits don't roll over to the next month."
    },
    {
      question: "What happens if I need more changes than my credits allow?",
      answer: "No problem. Extra changes are billed in 15-minute increments at our standard rate. We'll always check with you before doing any work that goes over your monthly credits."
    },
    {
      question: "Do I own my website?",
      answer: "Yes, you always own your content and domain. With monthly plans, we handle hosting and management. With outright purchases, everything is handed over to you after the 14-day snagging period."
    },
    {
      question: "What's included in the monthly plans?",
      answer: "Everything: hosting, security updates, backups, SSL certificates, and your monthly change credits. Plus 24/7 emergency support if your site goes down or breaks."
    },
    {
      question: "How fast do you make changes?",
      answer: "Most routine updates are completed within 1-2 business days. Emergency issues (site down, checkout broken, security problems) are handled 24/7."
    },
    {
      question: "Can I switch between payment plans?",
      answer: "Yes, you can upgrade or change plans. If you're on continuous monthly and want to buy out, your earned credits reduce the buyout price. We'll help you choose what works best."
    },
    {
      question: "What if I want to cancel?",
      answer: "Monthly plans can be cancelled anytime with 30 days notice. If you've been on continuous monthly, you can buy out your site using any credits you've earned, or we can help transfer it to your own hosting."
    },
    {
      question: "Do you offer marketing services too?",
      answer: "Yes! Our AI automation and growth marketing services are available at discounted rates for website clients. We also work with businesses who have existing websites."
    }
  ];

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      {/* Header Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white mb-8">
              Web Design <span className="text-orange">FAQs</span>
            </h1>
            <p className="text-xl text-off-white/80">
              Everything you need to know about our web design plans and how they work.
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