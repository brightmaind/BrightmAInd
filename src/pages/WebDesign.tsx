import React from 'react';
import { Check, ArrowRight, MessageCircle, Mail } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

// Calendly integration
declare global {
  interface Window {
    Calendly: any;
  }
}

const WebDesign: React.FC = () => {
  const pricingPlans = [
    {
      name: "Starter",
      subtitle: "Up to 3 pages",
      monthlyToOwnership: "£131",
      continuousMonthly: "£83", 
      outright: "£840",
      monthlyCredit: "18",
      maxCredit: "350",
      setupFee: "£59",
      features: [
        "Website with up to 3 pages",
        "1 custom logo at onboarding",
        "24/7 emergency support*",
        "Routine updates in 1–2 business days",
        "3 change credits per month (45 min total)**",
        "Overage: £75/hour (billed per 15 min)",
        "Hosting, security updates, and backups included"
      ],
      buyoutExamples: [
        { months: 6, credit: "£108", buyout: "£592", total: "£1,006", note: "Fewer managed months" },
        { months: 12, credit: "£216", buyout: "£484", total: "£1,312", note: "vs £1,308 ownership" },
        { months: 18, credit: "£324", buyout: "£376", total: "£1,618" },
        { months: 24, credit: "£350", buyout: "£350", total: "£2,006", note: "Max credit (50%)" }
      ]
    },
    {
      name: "Growth",
      subtitle: "Multi-page (up to 10 pages)",
      monthlyToOwnership: "£275",
      continuousMonthly: "£203",
      outright: "£1,560",
      monthlyCredit: "28",
      maxCredit: "650",
      setupFee: "£119",
      features: [
        "Multi-page website (up to 10 pages)",
        "1 marketing graphic each month",
        "24/7 emergency support*",
        "Routine updates in 1–2 business days",
        "8 change credits per month (2 hours total)**",
        "Overage: £80/hour (billed per 15 min)",
        "Hosting, security updates, and backups included"
      ],
      popular: true,
      buyoutExamples: [
        { months: 6, credit: "£168", buyout: "£1,132", total: "£2,146", note: "Fewer managed months" },
        { months: 12, credit: "£336", buyout: "£964", total: "£2,992", note: "vs £2,748 ownership" },
        { months: 18, credit: "£504", buyout: "£796", total: "£3,838" },
        { months: 24, credit: "£650", buyout: "£650", total: "£4,706", note: "Max credit (50%)" }
      ]
    },
    {
      name: "Pro",
      subtitle: "Multi-page (up to 20 pages)",
      monthlyToOwnership: "£479",
      continuousMonthly: "£359",
      outright: "£2,400",
      monthlyCredit: "35",
      maxCredit: "1000",
      setupFee: "£179",
      features: [
        "Multi-page website (up to 20 pages)",
        "2 marketing graphics each month",
        "24/7 emergency support*",
        "Priority response for routine updates",
        "15 change credits per month (3.75 hours total)**",
        "Overage: £90/hour (billed per 15 min)",
        "Hosting, security updates, and backups included"
      ],
      buyoutExamples: [
        { months: 6, credit: "£210", buyout: "£1,790", total: "£3,584", note: "Fewer managed months" },
        { months: 12, credit: "£420", buyout: "£1,580", total: "£5,168", note: "vs £4,788 ownership" },
        { months: 18, credit: "£630", buyout: "£1,370", total: "£6,752" },
        { months: 24, credit: "£840", buyout: "£1,000", total: "£8,176", note: "Max credit (50%)" }
      ]
    }
  ];

  const faqs = [
    {
      question: "Do I own my website?",
      answer: "You own your website if you buy outright or after completing 12 months of monthly-to-ownership payments. With continuous monthly plans, we retain ownership but you can buy it anytime using your earned credits. You always own your content and domain regardless of the plan."
    },
    {
      question: "Can I change plans?",
      answer: "Yes, you can upgrade or change plans. When switching, we carry forward the pound value of your accrued credits and apply the new monthly credit rate thereafter. If you're on continuous monthly and want to buy out, your earned credits reduce the buyout price."
    },
    {
      question: "How do change credits work?",
      answer: "Credits are cash-valued (£18/£28/£35 per month) and apply only to consecutive paid months. They're for small edits like copy swaps, image swaps, and minor layout tweaks. Credits are non-transferable, expire if you cancel, and cap at 50% of the outright price. One active request queue, batching allowed."
    },
    {
      question: "What counts as overage work?",
      answer: "Overage work is billed at £75-£90/hour in 15-minute increments. This includes new pages beyond your plan, new templates, ecommerce, custom integrations, brand/UX redesigns, SEO projects, and copywriting beyond minor edits. We'll always check with you first."
    },
    {
      question: "What does 24/7 emergency support mean?",
      answer: "Emergency support covers site down, checkout/contact form broken, or security incidents. Everything else is handled in 1-2 business days. This prevents midnight requests for routine content updates while ensuring critical issues get immediate attention."
    },
    {
      question: "What's included in the monthly fee?",
      answer: "Everything: hosting, security updates, backups, SSL certificates, and your monthly change credits. Plus 24/7 emergency support for critical issues. All prices shown are ex VAT with inc VAT amounts in brackets."
    },
    {
      question: "How fast are updates?",
      answer: "Routine updates are completed within 1-2 business days. Emergency issues (site down, broken forms, security) get immediate attention 24/7. We maintain one active request queue per client to ensure quality and prevent confusion."
    },
    {
      question: "Can I cancel my monthly plan?",
      answer: "Monthly plans can be cancelled anytime with 30 days notice. If you've been on continuous monthly, you can buy out your site using any credits you've earned, or we can help transfer it to your own hosting. Credits expire upon cancellation."
    }
  ];

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWebDesignBooking = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-brightmaind/30min?a1=Web%20Design%20General%20Enquiry',
        parentElement: document.body
      });
      
      // Add custom text overlay for web design bookings
      setTimeout(() => {
        const popup = document.querySelector('.calendly-popup');
        if (popup && !popup.querySelector('.calendly-text-overlay')) {
          const textOverlay = document.createElement('div');
          textOverlay.className = 'calendly-text-overlay';
          textOverlay.innerHTML = '<span>We\'re excited to work with you! Schedule your call and we\'ll get you set up. No payment required until your website is complete.</span>';
          popup.appendChild(textOverlay);
        }
      }, 100);
    } else {
      // Fallback to direct link if Calendly widget isn't loaded
      window.open('https://calendly.com/enquiries-brightmaind/30min?a1=Web%20Design%20General%20Enquiry', '_blank');
    }
  };

  const handlePackageBooking = (packageName: string) => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: `https://calendly.com/enquiries-brightmaind/30min?a1=Web%20Design%20${packageName}%20Plan`,
        parentElement: document.body
      });
      
      // Add custom text overlay for package bookings
      setTimeout(() => {
        const popup = document.querySelector('.calendly-popup');
        if (popup && !popup.querySelector('.calendly-text-overlay')) {
          const textOverlay = document.createElement('div');
          textOverlay.className = 'calendly-text-overlay';
          textOverlay.innerHTML = `<span>Great choice! Let's discuss your ${packageName} plan requirements and get you set up.</span>`;
          popup.appendChild(textOverlay);
        }
      }, 100);
    } else {
      // Fallback to direct link if Calendly widget isn't loaded
      window.open(`https://calendly.com/enquiries-brightmaind/30min?a1=Web%20Design%20${packageName}%20Plan`, '_blank');
    }
  };
  return (
    <div className="pt-20 bg-charcoal text-off-white">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white mb-8">
              The only web design service that gives you <span className="text-orange">real choice</span>
            </h1>
            <div className="text-xl text-off-white/80 mb-8 leading-relaxed space-y-4">
              <p>
                Everyone else locks you into one payment model. We don't.
              </p>
              <p>
                Want to own your site after 12 months? Choose monthly-to-ownership. 
                Prefer lower monthly costs with buyout discounts? Go continuous. 
                Need it built and handed over? Buy outright.
              </p>
              <p className="text-orange font-semibold">
                No other web design service offers this flexibility.
              </p>
            </div>
            <Button onClick={scrollToPricing} size="lg">
              See all pricing options
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
              It's like having your own personal web developer on retainer. We host your site, keep it secure, back it up, and make your updates each month. If something breaks, we fix it. You get professional web management without the full-time cost.
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
              <p className="text-lg text-off-white/80 mb-4">
                All prices are VAT inclusive. No hidden fees.
              </p>
              <p className="text-off-white/70">
                Need more pages, custom features, or enterprise solutions? 
                <Button 
                  onClick={handleWebDesignBooking} 
                  variant="ghost" 
                  size="sm" 
                  className="ml-2 text-orange hover:text-orange hover:bg-orange/10 p-2 h-auto"
                >
                  Custom plans are easily available
                </Button>
              </p>
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
                            <span className="text-xs bg-orange/20 text-orange px-2 py-1 rounded">12 months + management</span>
                          </div>
                          <div className="text-2xl font-bold text-orange">{plan.monthlyToOwnership}<span className="text-sm text-off-white/60">/mo</span></div>
                          <p className="text-xs text-off-white/60 mt-1">Includes 12 months management</p>
                        </div>
                        
                        <div className="bg-slate/20 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-off-white/80">Continuous Monthly</span>
                          </div>
                          <div className="text-xl font-bold text-blue-400">{plan.continuousMonthly}<span className="text-sm text-off-white/60">/mo</span></div>
                          <p className="text-xs text-off-white/60 mt-1">+£{plan.monthlyCredit}/mo credit toward buyout</p>
                        </div>
                        
                        <div className="bg-slate/20 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-off-white/80">Buy Outright</span>
                            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">One-time</span>
                          </div>
                          <div className="text-xl font-bold text-green-400">{plan.outright}</div>
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
                      
                      <div className="space-y-3">
                        <Button className="w-full" onClick={() => handlePackageBooking(plan.name)}>
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

            {/* Pricing Explanation */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-near-black rounded-2xl p-8">
                <h3 className="text-2xl font-bold font-rajdhani text-off-white mb-8 text-center">
                  Payment Options Explained
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
                  <div>
                    <div className="text-orange text-lg font-semibold mb-2">Monthly-to-Ownership</div>
                    <p className="text-off-white/80 text-sm">Pay higher monthly rate, own your site after exactly 12 months. Includes full 12 months of management.</p>
                  </div>
                  <div>
                    <div className="text-blue-400 text-lg font-semibold mb-2">Continuous Monthly</div>
                    <p className="text-off-white/80 text-sm">Lower monthly rate with buyout option. Early buyout = fewer managed months = lower total cost. Credits cap at 50% of outright price.</p>
                  </div>
                  <div>
                    <div className="text-green-400 text-lg font-semibold mb-2">Buy Outright</div>
                    <p className="text-off-white/80 text-sm">One-time payment for immediate ownership. Optional care plan available post-purchase at continuous rates.</p>
                  </div>
                </div>
                
                {/* Credit System Details */}
                <div className="border-t border-slate/20 pt-6">
                  <h4 className="text-lg font-semibold text-orange mb-4">Credit System Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-off-white/80">
                    <div>
                      <h5 className="font-medium text-off-white mb-2">How Credits Work:</h5>
                      <ul className="space-y-1">
                        <li>• Credits apply only to consecutive paid months</li>
                        <li>• Cash-valued: £18/£28/£35 per paid month</li>
                        <li>• Non-transferable, expire if plan cancelled</li>
                        <li>• Cap at 50% of outright price</li>
                        <li>• On plan changes: carry forward £ value</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-off-white mb-2">What's Included in "Changes":</h5>
                      <ul className="space-y-1">
                        <li>• Copy swaps, image swaps</li>
                        <li>• Minor layout tweaks</li>
                        <li>• One active request queue</li>
                        <li>• Batching allowed, no parallel streams</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-slate/20 rounded-lg">
                    <h5 className="font-medium text-off-white mb-2">Not Included (Overage Rates Apply):</h5>
                    <p className="text-sm text-off-white/80">
                      New pages beyond plan, new templates, ecommerce, custom integrations, brand/UX redesigns, 
                      SEO projects, copywriting beyond minor edits.
                    </p>
                  </div>
                </div>
              </div>
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
              Need something different?
            </h2>
            <p className="text-xl text-off-white/80 mb-8 leading-relaxed">
              More pages? E-commerce? Custom integrations? Enterprise features? We create custom plans for any requirement. 
              Just tell us what you need and we'll design a solution that fits perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleWebDesignBooking}>
                Discuss Custom Requirements
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/contact?subject=Custom%20Web%20Plan'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </div>
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
            <div className="mt-8 p-6 bg-charcoal/60 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-orange mb-3">Optional Post-Ownership Care Plans</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-medium text-off-white">Starter Care</div>
                  <div className="text-orange">£69/mo</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-off-white">Growth Care</div>
                  <div className="text-orange">£169/mo</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-off-white">Pro Care</div>
                  <div className="text-orange">£299/mo</div>
                </div>
              </div>
              <p className="text-xs text-off-white/60 mt-3">Same features as continuous monthly plans. All prices include VAT.</p>
            </div>
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
                Get Started
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
            "price": plan.monthlyToOwnership.replace('£', '').replace('/mo', ''),
            "priceCurrency": "GBP",
            "billingIncrement": "P1M",
            "url": "https://maind.agency/web-design"
          }))
        })}
      </script>
    </div>
  );
};

export default WebDesign;