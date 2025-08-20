import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Video, Camera, TrendingUp, Play, ArrowRight, Calendar } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

// Calendly integration
declare global {
  interface Window {
    Calendly: any;
  }
}

const ContentCreation: React.FC = () => {
  const navigate = useNavigate();

  const contentServices = [
    {
      icon: <Video className="w-12 h-12" />,
      title: "Video Reels & Ads",
      description: "Showcase your treatments with engaging, on-brand video content that stops the scroll and drives bookings.",
      features: [
        "Treatment showcase videos that highlight results",
        "Behind-the-scenes content that builds trust",
        "Educational reels positioning you as the expert",
        "Paid ad creatives optimized for conversions"
      ]
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Social Media Content",
      description: "Posts and creatives designed specifically to convert browsers into bookers for your clinic.",
      features: [
        "Instagram and Facebook posts that drive engagement",
        "Story templates for consistent brand presence",
        "Carousel posts showcasing treatment benefits",
        "Call-to-action graphics that encourage bookings"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Before & After Storytelling",
      description: "Compliance-friendly content that's emotionally compelling and drives treatment bookings.",
      features: [
        "Patient transformation stories (with consent)",
        "Treatment journey documentation",
        "Results-focused content that builds desire",
        "Testimonial videos that convert prospects"
      ]
    }
  ];

  const contentBenefits = [
    {
      title: "Visual Impact",
      description: "In aesthetics, clients need to see results before they believe. Our content shows your best work in the most compelling way."
    },
    {
      title: "Compliance-First",
      description: "All content follows medical advertising guidelines while still being emotionally engaging and conversion-focused."
    },
    {
      title: "Platform-Optimized",
      description: "Content tailored for each platform—Instagram, Facebook, TikTok—to maximize reach and engagement with your ideal clients."
    }
  ];

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
          textOverlay.innerHTML = '<span>Let\'s discuss how content can fill your clinic\'s calendar</span>';
          popup.appendChild(textOverlay);
        }
      }, 100);
    } else {
      window.open('https://calendly.com/enquiries-brightmaind/30min?a1=Content%20Creation%20Audit', '_blank');
    }
  };

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      <SEOHead 
        title="Aesthetics Clinic Content: Video Reels & Ads | Bright mAInd"
        description="Scroll-stopping reels, ads, and social content that sell treatments and drive bookings."
        canonical="/content-creation"
      />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ name: 'Content Creation', url: '/content-creation' }]} />
      
      {/* Header Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white mb-8">
              Content That Sells Your <span className="text-orange">Treatments</span>
            </h1>
            <p className="text-xl md:text-2xl text-off-white/80 leading-relaxed mb-8">
              In aesthetics, visuals are everything. We create scroll-stopping videos and ads that make clients book before they walk in.
            </p>
            <Button onClick={handleBookAudit} size="lg">
              See How Content Can Fill Your Clinic
            </Button>
          </div>
        </section>
      </ScrollAnimation>

      {/* Content Services */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {contentServices.map((service, index) => (
                <ScrollAnimation key={index} delay={index * 150}>
                  <Card className="max-w-5xl mx-auto">
                    <CardHeader>
                      <div className="flex items-start space-x-6">
                        <div className="text-orange flex-shrink-0">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                          <CardDescription className="text-lg text-off-white/80 leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-off-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Why Content Matters */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Why Content <span className="text-orange">Matters</span> for Clinics
              </h2>
              <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
                Your treatments transform lives. Your content should transform browsers into bookers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contentBenefits.map((benefit, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="text-center h-full">
                    <CardHeader>
                      <CardTitle className="text-xl text-orange">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-off-white/80">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Results Section */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-orange/10 border border-orange/20 rounded-2xl p-8">
              <h3 className="text-3xl font-bold font-rajdhani text-orange mb-6">
                Content That Converts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-2xl font-bold text-off-white mb-2">3x</div>
                  <p className="text-off-white/80">Higher engagement rates</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-off-white mb-2">40%</div>
                  <p className="text-off-white/80">More consultation bookings</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-off-white mb-2">60%</div>
                  <p className="text-off-white/80">Increase in treatment inquiries</p>
                </div>
              </div>
              <p className="text-off-white/80">
                Results from clinics using our content creation system across Scotland.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Process Section */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Our Content <span className="text-orange">Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation delay={0}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-xl font-bold font-rajdhani mx-auto mb-4">
                      01
                    </div>
                    <CardTitle className="text-xl">Strategy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-off-white/80">We analyze your treatments, target audience, and competitors to create a content strategy that converts.</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-xl font-bold font-rajdhani mx-auto mb-4">
                      02
                    </div>
                    <CardTitle className="text-xl">Create</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-off-white/80">Our team produces high-quality videos, graphics, and copy that showcase your treatments and build trust.</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-xl font-bold font-rajdhani mx-auto mb-4">
                      03
                    </div>
                    <CardTitle className="text-xl">Optimize</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-off-white/80">We track performance and continuously refine content to maximize bookings and ROI for your clinic.</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-24 bg-orange">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-8">
              See How Content Can Fill Your Clinic
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book a free growth audit and discover how the right content can transform your clinic's booking rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBookAudit}
                size="lg" 
                variant="secondary"
                className="bg-white text-orange hover:bg-white/90"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Growth Audit
              </Button>
              <Button 
                onClick={() => {
                  navigate('/contact');
                  window.scrollTo(0, 0);
                }}
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange"
              >
                Ask About Content Creation
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default ContentCreation;