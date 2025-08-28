import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Eye, MessageCircle, TrendingDown, Video, Palette, Camera, BarChart3, CheckCircle } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { Button } from '../components/ui/button';

const ContentCreation = () => {
  const navigate = useNavigate();

  const handleBookAudit = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-brightmaind/30min?a1=Content%20Creation%20Audit',
        parentElement: document.body
      });
      
      setTimeout(() => {
        const popup = document.querySelector('.calendly-popup');
        if (popup && !popup.querySelector('.calendly-text-overlay')) {
          const textOverlay = document.createElement('div');
          textOverlay.className = 'calendly-text-overlay';
          textOverlay.innerHTML = '<span>Let\'s discuss how to create content that stops the scroll and drives sales</span>';
          popup.appendChild(textOverlay);
        }
      }, 100);
    } else {
      window.open('https://calendly.com/enquiries-brightmaind/30min?a1=Content%20Creation%20Audit', '_blank');
    }
  };

  const problems = [
    {
      icon: Eye,
      title: 'Scroll Fatigue',
      description: 'Content gets lost in the noise'
    },
    {
      icon: MessageCircle,
      title: 'No Engagement',
      description: 'Posts that nobody interacts with'
    },
    {
      icon: TrendingDown,
      title: 'Wasted Effort',
      description: 'Time spent with zero ROI'
    }
  ];

  const benefits = [
    {
      icon: Video,
      title: 'Video Ads That Convert',
      description: 'Short-form, mobile-first content designed for Meta, TikTok, and Instagram that stops the scroll and drives action.'
    },
    {
      icon: Palette,
      title: 'Brand Storytelling',
      description: 'Compelling narratives that showcase what makes your business unique and builds emotional connections with your audience.'
    },
    {
      icon: Camera,
      title: 'Social Media Packages',
      description: 'Consistent, on-brand posting schedules with content that maintains your professional image across all platforms.'
    },
    {
      icon: BarChart3,
      title: 'High-End Visuals',
      description: 'Premium graphics, photography, and motion assets that elevate your brand and command attention in crowded feeds.'
    }
  ];

  return (
    <div className="pt-20 bg-black text-white">
      <SEOHead 
        title="Content Creation Services | Stop the Scroll, Win Clients | Bright mAInd"
        description="High-impact videos, visuals, and campaigns designed to stop the scroll and win clients. Book a free content audit."
        canonical="/content-creation"
      />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ name: 'Content Creation', url: '/content-creation' }]} />
      
      {/* Hero Section - Attention */}
      <section className="pt-8 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani text-white leading-tight mb-8">
              Content That <span className="text-orange">Captures Attention</span>.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-12">
              High-impact videos, visuals, and campaigns designed to stop the scroll and win clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleBookAudit}
                size="lg" 
                variant="outline"
                className="text-xl px-12 py-6 border-2 border-orange text-orange hover:bg-orange hover:text-white transition-all duration-300"
                aria-label="Book a free content audit"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book a Free Content Audit
              </Button>
              
              <Button 
                onClick={() => navigate('/contact')}
                size="lg" 
                variant="outline"
                className="text-xl px-12 py-6 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Send us a message"
              >
                Send us a message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interest - Problem Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Most businesses post content that gets ignored. Low views. Low engagement. No ROI.
              </p>
            </div>

            {/* Problem Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {problems.map((problem, index) => {
                const IconComponent = problem.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 bg-orange/10 border-2 border-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange/20 transition-all duration-300">
                      <IconComponent className="w-10 h-10 text-orange group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{problem.title}</h3>
                    <p className="text-white/70">{problem.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Desire - Benefits Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-8">
                Our Content Creation <span className="text-orange">System</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group bg-black border-2 border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-orange/30 transition-all duration-300 hover:-translate-y-2 card-hover"
                  >
                    <div className="w-16 h-16 bg-orange/10 border border-orange rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange/20 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-orange" />
                    </div>
                    
                    <h3 className="text-2xl font-bold font-rajdhani text-white mb-4">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-lg text-white/90 leading-relaxed">
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
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal/50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-8">
              Ready to create content that actually <span className="text-orange">drives sales</span>?
            </h2>
            
            <Button 
              onClick={handleBookAudit}
              size="lg" 
              className="text-xl px-12 py-6 bg-orange hover:bg-white hover:text-black hover:border-orange hover:border-2 transition-all duration-300"
              aria-label="Book your free content audit"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Book a Free Audit
            </Button>
            
            <Button 
              onClick={() => navigate('/contact')}
              size="lg" 
              variant="outline"
              className="text-xl px-12 py-6 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 ml-4"
              aria-label="Send us a message"
            >
              Send us a message
            </Button>
          </div>
        </section>
      </ScrollAnimation>

      {/* Satisfaction - Proof Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">3x</div>
                  <div className="text-lg text-white/70">Engagement uplift</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">Lower</div>
                  <div className="text-lg text-white/70">Ad costs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">More</div>
                  <div className="text-lg text-white/70">Leads from every post</div>
                </div>
              </div>

              <div className="bg-black border-2 border-orange/20 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-orange mr-3" />
                  <span className="text-xl font-semibold text-white">Our Promise</span>
                </div>
                <p className="text-lg text-white/90 leading-relaxed">
                  Every piece of content is crafted with your specific audience and business goals in mind. 
                  No generic templates—just high-impact content that performs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Footer CTA Strip */}
      <ScrollAnimation>
        <section className="py-16 bg-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Don't just post. <span className="text-orange">Perform</span>.
            </h3>
            
            <Button 
              onClick={handleBookAudit}
              size="lg" 
              className="bg-orange hover:bg-white hover:text-black hover:border-orange hover:border-2 text-xl px-12 py-6 transition-all duration-300"
              aria-label="Let's talk about content creation for your business"
            >
              <Palette className="w-6 h-6 mr-3" />
              Let's Talk Content
            </Button>
            
            <Button 
              onClick={() => navigate('/contact')}
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-charcoal text-xl px-12 py-6 ml-4 transition-all duration-300"
              aria-label="Send us a message"
            >
              Send us a message
            </Button>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default ContentCreation;