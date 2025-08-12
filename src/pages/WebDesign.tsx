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
      monthlyToOwnership: "£109",
      continuousMonthly: "£69", 
      outright: "£700",
      features: [
        "Single-page website",
        "1 custom logo at onboarding",
        "24/7 emergency support; routine updates in 1–2 business days",
        "Up to 3 hours of changes each month",
        "Hosting, security updates, and backups included"
      ],
      buyoutDiscounts: [
        { months: 6, price: "£560", discount: "20%" },
        { months: 12, price: "£420", discount: "40%" },
        { months: 15, price: "£350", discount: "50%" }
      ]
    },
    {
      name: "Growth",
      subtitle: "Multi-page (up to 5 pages)",
      monthlyToOwnership: "£229",
      continuousMonthly: "£149",
      outright: "£1,300",
      features: [
        "Multi-page website (up to 5 pages)",
        "1 marketing graphic each month",
        "24/7 emergency support; routine updates in 1–2 business days",
        "Up to 8 hours of changes each month",
        "Hosting, security updates, and backups included"
      ],
      popular: true,
      buyoutDiscounts: [
        { months: 6, price: "£1,040", discount: "20%" },
        { months: 12, price: "£780", discount: "40%" },
        { months: 15, price: "£650", discount: "50%" }
      ]
    },
    {
      name: "Pro",
      subtitle: "Multi-page (up to 10 pages)",
      monthlyToOwnership: "£399",
      continuousMonthly: "£259",
      outright: "£2,000",
      features: [
        "Multi-page website (up to 10 pages)",
        "2 marketing graphics each month",
        "Priority response",
        "Up to 20 hours of changes each month",
        "Hosting, security updates, and backups included"
      ],
      buyoutDiscounts: [
        { months: 6, price: "£1,600", discount: "20%" },
        { months: 12, price: "£1,200", discount: "40%" },
        { months: 15, price: "£1,000", discount: "50%" }
      ]
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
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      {/* Pricing Options */}
                      <div className="mb-6 space-y-4">
                        <div className="bg-slate/20 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-off-white/80">Monthly to Ownership</span>
                            <span className="text-xs bg-orange/20 text-orange px-2 py-1 rounded">12 months</span>
                          </div>
                          <div className="text-2xl font-bold text-orange">{plan.monthlyToOwnership}<span className="text-sm text-off-white/60">/mo</span></div>
                          <p className="text-xs text-off-white/60 mt-1">Own your site after 12 months</p>
                        </div>
                        
                        <div className="bg-slate/20 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-off-white/80">Continuous Monthly</span>
                            <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Ongoing</span>
                          </div>
                          <div className="text-2xl font-bold text-blue-400">{plan.continuousMonthly}<span className="text-sm text-off-white/60">/mo</span></div>
                          <p className="text-xs text-off-white/60 mt-1">Optional buyout with discounts</p>
                        </div>
                        
                        <div className="bg-slate/20 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-off-white/80">Buy Outright</span>
                            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">One-time</span>
                          </div>
                          <div className="text-2xl font-bold text-green-400">{plan.outright}</div>
                          <p className="text-xs text-off-white/60 mt-1">Full ownership immediately</p>
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-6 flex-1">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                            <span className="text-off-white/80 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Buyout Discount Schedule */}
                      <div className="mb-6 p-3 bg-near-black rounded-lg">
                        <h4 className="text-sm font-medium text-off-white mb-2">Continuous Monthly Buyout Discounts:</h4>
                        <div className="space-y-1">
                          {plan.buyoutDiscounts.map((discount, discountIndex) => (
                            <div key={discountIndex} className="flex justify-between text-xs">
                              <span className="text-off-white/70">{discount.months}+ months:</span>
                              <span className="text-orange">{discount.price} (−{discount.discount})</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Button className="w-full" onClick={() => window.location.href = '/contact?subject=Web%20Design%20Quote'}>
                          Get Started
                        </Button>
                        <p className="text-xs text-off-white/60 text-center">
                          Choose your preferred payment option during consultation
                        </p>
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