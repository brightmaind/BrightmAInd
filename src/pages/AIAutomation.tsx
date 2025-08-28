import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, TrendingDown, Users, Zap, Bot, BarChart3, Mail, CheckCircle } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { Button } from '../components/ui/button';

const AIAutomation = () => {
  const navigate = useNavigate();

  const handleBookAudit = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-brightmaind/30min?a1=AI%20Automation%20Audit',
        parentElement: document.body
      });
      
      setTimeout(() => {
        const popup = document.querySelector('.calendly-popup');
        if (popup && !popup.querySelector('.calendly-text-overlay')) {
          const textOverlay = document.createElement('div');
          textOverlay.className = 'calendly-text-overlay';
          textOverlay.innerHTML = '<span>Let\'s discuss how AI automation can transform your business operations</span>';
          popup.appendChild(textOverlay);
        }
      }, 100);
    } else {
      window.open('https://calendly.com/enquiries-brightmaind/30min?a1=AI%20Automation%20Audit', '_blank');
    }
  };

  const benefits = [
    {
      icon: Users,
      title: 'Client Journey',
      description: 'Automated lead capture, nurture sequences, and smart reminders that never miss a follow-up.'
    },
    {
      icon: BarChart3,
      title: 'Operations',
      description: 'Smart scheduling, automated reporting, and inventory tracking that runs itself.'
    },
    {
      icon: Mail,
      title: 'Sales & Marketing',
      description: 'Instant follow-ups, personalised campaigns, and lead scoring that converts more prospects.'
    },
    {
      icon: Zap,
      title: 'Team Efficiency',
      description: 'Reduce admin workload by 40%, eliminate errors, and scale without hiring more staff.'
    }
  ];

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      <SEOHead 
        title="AI Automation Services | Work Smarter, Scale Faster | Bright mAInd"
        description="AI-powered workflows save you hours every week, cut costs, and let you focus on growth instead of admin. Book a free automation audit."
        canonical="/ai-automation"
      />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ name: 'AI Automation', url: '/ai-automation' }]} />
      
      {/* Hero Section - Attention */}
      <section className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 hero-gradient relative overflow-hidden">
        {/* Subtle tech pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-off-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-orange rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-off-white rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-orange rounded-lg rotate-12"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani text-charcoal leading-tight mb-8">
              Work Smarter. Scale Faster. <span className="text-orange">Automate Everything.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-off-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
              AI-powered workflows save you hours every week, cut costs, and let you focus on growth instead of admin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleBookAudit}
                size="lg" 
                className="text-xl px-12 py-6"
                aria-label="Book a free AI automation audit"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book a Free Audit
              </Button>
              
              <Button 
                onClick={() => navigate('/contact')}
                size="lg" 
                variant="outline"
                className="text-xl px-12 py-6 ml-4"
                aria-label="Send us a message"
              >
                Send us a message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem + Interest Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-8">
                Stop losing time and money to <span className="text-orange">manual chaos</span>
              </h2>
              <p className="text-xl text-off-white/90 max-w-4xl mx-auto leading-relaxed">
                Every day you're manually handling leads, chasing follow-ups, and drowning in admin tasks that could run themselves.
              </p>
            </div>

            {/* Pain Points Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-orange" />
                </div>
                <h3 className="text-xl font-semibold text-off-white mb-2">Time Drain</h3>
                <p className="text-off-white/70">Hours wasted on repetitive tasks that add no value</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-10 h-10 text-orange" />
                </div>
                <h3 className="text-xl font-semibold text-off-white mb-2">Lost Sales</h3>
                <p className="text-off-white/70">Missed leads and forgotten follow-ups cost you revenue</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-orange" />
                </div>
                <h3 className="text-xl font-semibold text-off-white mb-2">Frustrated Clients</h3>
                <p className="text-off-white/70">Slow responses and manual errors damage relationships</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Desire - Benefits Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-near-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-8">
                What AI Automation Can Do <span className="text-orange">For You</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate/20 backdrop-blur-sm border border-slate/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 card-hover"
                  >
                    <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-orange" />
                    </div>
                    
                    <h3 className="text-2xl font-bold font-rajdhani text-off-white mb-4">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-lg text-off-white/90 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Action - CTA Block */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal text-off-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani mb-8">
              Start automating <span className="text-orange">today</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-off-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
              We design automation systems for clinics, agencies, salons, coaches, retailers—any service business that wants to scale without adding headcount.
            </p>

            <Button 
              onClick={handleBookAudit}
              size="lg" 
              className="text-xl px-12 py-6 bg-orange hover:bg-orange/90"
              aria-label="Book your free automation audit"
            >
              <Calendar className="w-6 h-6 mr-3" />
              <span className="hidden sm:inline">Book Your Free Automation Audit</span>
              <span className="sm:hidden">Book Free Audit</span>
            </Button>
            
            <Button 
              onClick={() => navigate('/contact')}
              size="lg" 
              variant="outline"
              className="text-xl px-12 py-6 ml-4"
              aria-label="Send us a message"
            >
              Send us a message
            </Button>
          </div>
        </section>
      </ScrollAnimation>

      {/* Satisfaction - Proof Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">40%</div>
                  <div className="text-lg text-off-white/70">Less admin work</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">2-5</div>
                  <div className="text-lg text-off-white/70">Extra hours freed per week</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">Higher</div>
                  <div className="text-lg text-off-white/70">Client retention rates</div>
                </div>
              </div>

              <div className="bg-slate/20 border border-slate/30 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  <span className="text-xl font-semibold text-off-white">Our Promise</span>
                </div>
                <p className="text-lg text-off-white/90 leading-relaxed">
                  We customise automation for your exact workflow. No templates, no wasted tools. 
                  Every system is built specifically for how your business operates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Footer CTA Strip */}
      <ScrollAnimation>
        <section className="py-16 bg-orange">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to cut costs and reclaim your time?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleBookAudit}
              size="lg" 
              variant="secondary"
              className="bg-white text-orange hover:bg-white/90 text-xl px-12 py-6"
              aria-label="Let's talk about AI automation for your business"
            >
              <Bot className="w-6 h-6 mr-3" />
              Let's Talk AI
            </Button>
            
            <Button 
              onClick={() => navigate('/contact')}
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange text-xl px-12 py-6"
              aria-label="Send us a message"
            >
              Send us a message
            </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default AIAutomation;