import React from 'react';
import { Check, ArrowRight, MessageCircle, Mail } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const WebDesign: React.FC = () => {
  const pricingPlans = [
    {
      name: "Starter",
      subtitle: "Single page",
      price: "£129",
      period: "month",
      features: [
        "Single-page website",
        "1 custom logo at onboarding",
        "24/7 emergency support; routine updates in 1–2 business days",
        "Up to 10 site changes each month",
        "Hosting, security updates, and backups included"
      ],
      footnote: "Minimum term: 6 months. \"Changes\" are small updates (≈30 minutes each). Fair-use applies.",
      monthlyUrl: "/buy/web-starter-monthly",
      outrightPrice: "£700",
      outrightUrl: "/buy/web-starter-outright"
    },
    {
      name: "Growth",
      subtitle: "Multi-page (up to 5 pages)",
      price: "£299",
      period: "month",
      features: [
        "Multi-page website (up to 5 pages)",
        "1 marketing graphic each month",
        "24/7 emergency support; routine updates in 1–2 business days",
        "Up to 30 site changes each month",
        "Hosting, security updates, and backups included"
      ],
      footnote: "Minimum term: 6 months. \"Changes\" are small updates (≈30 minutes each). Fair-use applies.",
      monthlyUrl: "/buy/web-growth-monthly",
      outrightPrice: "£1,300",
      outrightUrl: "/buy/web-growth-outright",
      popular: true
    },
    {
      name: "Pro",
      subtitle: "Multi-page (up to 10 pages)",
      price: "£499",
      period: "month",
      features: [
        "Multi-page website (up to 10 pages)",
        "2 marketing graphics each month",
        "Priority response",
        "Up to 100 site changes each month",
        "Hosting, security updates, and backups included"
      ],
      footnote: "Minimum term: 6 months. \"Changes\" are small updates (≈30 minutes each). Fair-use applies.",
      monthlyUrl: "/buy/web-pro-monthly",
      outrightPrice: "£2,000",
      outrightUrl: "/buy/web-pro-outright"
    }
  ];

  const faqs = [
    {
      question: "What's a \"change\"?",
      answer: "A change is a small update like editing text, swapping images, or adding a new section. Bigger features or redesigns are quoted separately."
    },
    {
      question: "Do I own the website?",
      answer: "Yes. Monthly plans include hosting and management. Outright builds are handed over for you to manage—or you can add a care plan."
    },
    {
      question: "How fast are updates?",
      answer: "Most small changes are done within 1–2 business days. Emergencies are handled 24/7."
    },
    {
      question: "Can I switch plans?",
      answer: "Yes. You can upgrade or change plans. We'll help you choose what fits."
    }
  ];

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white mb-8">
              Web design on a simple monthly plan
            </h1>
            <p className="text-xl text-off-white/80 mb-8 leading-relaxed">
              Get a professional site, fast support, and updates included.
            </p>
            <Button onClick={scrollToPricing} size="lg">
              Subscribe now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </ScrollAnimation>

      {/* Why Monthly Section */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-8">
              Why monthly?
            </h2>
            <p className="text-xl text-off-white/80 leading-relaxed">
              You don't just get a website—you get ongoing management. We host it, keep it secure, back it up, and make your updates each month. If something breaks, we fix it.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Pricing Section */}
      <ScrollAnimation>
        <section id="pricing" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Pricing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className={`h-full relative ${plan.popular ? 'ring-2 ring-orange' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-orange text-white px-4 py-1 rounded-full text-sm font-medium">
                          Popular
                        </span>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription className="text-lg">
                        {plan.subtitle}
                      </CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-orange">{plan.price}</span>
                        <span className="text-off-white/60 ml-2">/ {plan.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-3 mb-6 flex-1">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                            <span className="text-off-white/80 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <p className="text-xs text-off-white/60 mb-6 leading-relaxed">
                        {plan.footnote}
                      </p>

                      <div className="space-y-3">
                        <Button 
                          className="w-full" 
                          onClick={() => window.location.href = plan.monthlyUrl}
                        >
                          Subscribe — {plan.price}/mo
                        </Button>
                        <button 
                          onClick={() => window.location.href = plan.outrightUrl}
                          className="w-full text-orange hover:text-orange/80 transition-colors text-sm underline"
                        >
                          Buy outright — {plan.outrightPrice}
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Add-ons Section */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-8">
              Add AI chatbots
            </h2>
            <p className="text-xl text-off-white/80 mb-8 leading-relaxed">
              We can add an AI chatbot to your site. It's billed by usage. Tell us what you need and we'll set it up.
            </p>
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/contact?subject=AI%20Chatbot'}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask about chatbots
            </Button>
          </div>
        </section>
      </ScrollAnimation>

      {/* Custom Plans Section */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-8">
              Need something tailored?
            </h2>
            <p className="text-xl text-off-white/80 mb-8 leading-relaxed">
              If your needs don't fit these plans, we'll design a package for you.
            </p>
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/contact?subject=Custom%20Web%20Plan'}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact us
            </Button>
          </div>
        </section>
      </ScrollAnimation>

      {/* Buying Outright Section */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-8">
              Buying outright
            </h2>
            <p className="text-xl text-off-white/80 leading-relaxed">
              One-off design and build with a 14-day snagging period. No ongoing management. You handle hosting, updates, and changes—or add an optional care plan later.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Frequently Asked Questions
              </h2>
            </div>

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

      {/* Final CTA */}
      <ScrollAnimation>
        <section className="py-24 bg-orange">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-8">
              Ready to start?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToPricing}
                size="lg" 
                variant="secondary"
                className="bg-white text-orange hover:bg-white/90"
              >
                Subscribe now
              </Button>
              <Button 
                onClick={() => window.location.href = '/contact'}
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange"
              >
                Ask a question
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Web Design Plans",
          "description": "Monthly web design plans with hosting, security, and updates included",
          "offers": pricingPlans.map(plan => ({
            "@type": "Offer",
            "name": `${plan.name} Plan`,
            "description": plan.subtitle,
            "price": plan.price.replace('£', ''),
            "priceCurrency": "GBP",
            "billingIncrement": "P1M",
            "url": `https://maind.agency${plan.monthlyUrl}`
          }))
        })}
      </script>
    </div>
  );
};

export default WebDesign;