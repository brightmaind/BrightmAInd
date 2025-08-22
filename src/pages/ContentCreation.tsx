import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
              Wrinkle treatment consultation funnel <span className="text-orange">(example)</span>
            </h1>
            <p className="text-xl md:text-2xl text-off-white/80 leading-relaxed mb-8">
              How we turn paid traffic into booked consultations using your existing booking system—at a predictable cost.
            </p>
            <p className="text-lg text-off-white/70 mb-8">
              Ad → This page → Pick time (your calendar) → Deposit → Reminders → Attend
            </p>
            <p className="text-sm text-off-white/60 mb-8">
              This demo shows the first steps; live builds connect to your current system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleBookAudit} size="lg">
                Book a 10-minute audit
              </Button>
              <Button 
                onClick={() => {
                  navigate('/services');
                  window.scrollTo(0, 0);
                }}
                size="lg" 
                variant="outline"
              >
                See pricing
              </Button>
            </div>
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
                Benefits of This <span className="text-orange">Approach</span>
              </h2>
              <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
                Treatment-specific funnels that qualify intent and secure commitment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation delay={0}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange">Clear eligibility</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-off-white/80">And realistic expectations</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
              
              <ScrollAnimation delay={100}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange">Direct path</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-off-white/80">To the right service and time</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
              
              <ScrollAnimation delay={200}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange">Deposit + reminders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-off-white/80">To protect attendance</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-off-white/80">
                Example: ~£600 ad spend → ~15 bookings ≈ ~£3,000 in month one (repeat visits lift this).
              </p>
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
              <div className="mt-6">
                <p className="text-off-white/80">
                  Want to see how content fits into our complete approach? <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-orange hover:text-orange/80 underline">Explore our full growth system</Link>.
                </p>
              </div>
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
                    <p className="text-off-white/80">We track performance and continuously refine content to maximise bookings and ROI for your clinic.</p>
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
              Ready to start?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book your 10-minute audit and get your treatment funnel plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBookAudit}
                size="lg" 
                variant="secondary"
                className="bg-white text-orange hover:bg-white/90"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a 10-minute audit
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
                See pricing
              </Button>
            </div>
            <p className="text-white/80 mt-6 text-sm max-w-2xl mx-auto">
              Public assets avoid prescription-only medicine terms. Example content shown for demonstration.
            </p>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default ContentCreation;