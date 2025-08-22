import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const includes = [
    "Funnel build",
    "3 creatives/month",
    "Tracking setup",
    "Weekly optimisation/reporting"
  ];

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      <SEOHead 
        title="Pricing — Performance Growth for Clinics | Bright mAInd"
        description="Performance growth from £1,500/month. Includes funnel build, creatives, tracking, and weekly optimisation."
        canonical="/pricing"
      />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ name: 'Pricing', url: '/pricing' }]} />
      
      {/* Header Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white mb-8">
              Performance growth — <span className="text-orange">£1,500/month</span>
            </h1>
          </div>
        </section>
      </ScrollAnimation>

      {/* Pricing Details */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl text-center">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  {includes.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-orange flex-shrink-0" />
                      <span className="text-off-white/80">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-orange/10 border border-orange/20 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-orange mb-4">Budget Guidance</h3>
                  <p className="text-off-white/80">
                    Start £500–£800/month per flagship treatment
                  </p>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-green-400 mb-4">Guarantee</h3>
                  <p className="text-off-white/80">
                    15+ qualified consultations in 60 days at the agreed cost—or we work for free until we hit it.
                  </p>
                </div>

                <div className="text-center">
                  <Button onClick={() => navigate('/audit')} size="lg" id="audit-cta">
                    Book a 10-minute audit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Pricing;