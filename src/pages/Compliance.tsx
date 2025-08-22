import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, CheckCircle } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Compliance: React.FC = () => {
  const navigate = useNavigate();

  const guidelines = [
    {
      title: "ASA/CAP Guidelines",
      description: "All advertising follows Advertising Standards Authority and Committee of Advertising Practice guidelines for medical aesthetics marketing."
    },
    {
      title: "MHRA Compliance", 
      description: "We avoid prescription-only medicine terms in public assets, using compliant alternatives like 'wrinkle treatment consultation'."
    },
    {
      title: "Evidence-Based Claims",
      description: "All performance claims and statistics are based on real client data and presented responsibly."
    },
    {
      title: "Responsible Before/After",
      description: "Patient transformation content follows best practices for consent, realistic expectations, and ethical presentation."
    }
  ];

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      <SEOHead 
        title="Compliance — ASA/CAP Aligned Marketing | Bright mAInd"
        description="How we ensure all medical aesthetics marketing follows ASA/CAP/MHRA guidelines with evidence-based, responsible claims."
        canonical="/compliance"
      />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ name: 'Compliance', url: '/compliance' }]} />
      
      {/* Header Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Shield className="w-12 h-12 text-orange" />
              <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white">
                <span className="text-orange">Compliance</span> First
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-off-white/80 leading-relaxed">
              All our medical aesthetics marketing follows ASA/CAP/MHRA guidelines with evidence-based, responsible claims.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Guidelines */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guidelines.map((guideline, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <CheckCircle className="w-8 h-8 text-orange" />
                        <CardTitle className="text-xl">{guideline.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-off-white/80">{guideline.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our Approach */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-rajdhani text-off-white mb-8">
                Our <span className="text-orange">Approach</span>
              </h2>
            </div>

            <div className="space-y-8 text-lg text-off-white/90 leading-relaxed">
              <p>
                We understand that medical aesthetics marketing requires careful attention to regulatory compliance. 
                That's why every funnel, ad, and piece of content we create follows established guidelines.
              </p>
              
              <p>
                Our public-facing assets avoid prescription-only medicine terminology, instead using compliant 
                alternatives that still effectively communicate treatment benefits. For example, we use 
                "wrinkle treatment consultation" rather than specific product names.
              </p>
              
              <p>
                All performance claims are backed by real data from our client campaigns, and we present 
                before/after content responsibly with proper consent and realistic expectation setting.
              </p>
              
              <p>
                This approach protects your clinic while still delivering the high-converting funnels 
                that drive qualified consultations at predictable costs.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation>
        <section className="py-24 bg-orange">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold font-rajdhani text-white mb-8">
              Ready for Compliant Growth?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get your compliant growth strategy in a 10-minute audit.
            </p>
            <Button 
              onClick={() => navigate('/audit')}
              size="lg" 
              variant="secondary"
              className="bg-white text-orange hover:bg-white/90"
              id="audit-cta"
            >
              Book a 10-minute audit
            </Button>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Compliance;