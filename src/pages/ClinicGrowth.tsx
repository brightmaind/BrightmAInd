import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Target, BarChart3, Users, CheckCircle, Phone, UserX, TrendingDown } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { Button } from '../components/ui/button';

const ClinicGrowth = () => {
  const navigate = useNavigate();

  const handleBookAudit = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-brightmaind/30min?a1=Pet%20Growth%20Pro%20Audit',
        parentElement: document.body
      });
      
      setTimeout(() => {
        const popup = document.querySelector('.calendly-popup');
        if (popup && !popup.querySelector('.calendly-text-overlay')) {
          const textOverlay = document.createElement('div');
          textOverlay.className = 'calendly-text-overlay';
          textOverlay.innerHTML = '<span>Let\'s discuss how Pet Growth Pro can fill your calendar and cut no-shows</span>';
          popup.appendChild(textOverlay);
        }
      }, 100);
    } else {
      window.open('https://calendly.com/enquiries-brightmaind/30min?a1=Pet%20Growth%20Pro%20Audit', '_blank');
    }
  };

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      <SEOHead 
        title="Pet Growth Pro — Fill Your Calendar With Ease | Bright mAInd"
        description="From groomers to trainers, vets to daycares—we help pet businesses attract more clients, reduce no-shows, and grow consistently."
        canonical="/pet-growth-pro"
      />
      
      {/* Hero Section - Attention / Problem */}
      <Breadcrumb items={[{ name: 'Pet Growth Pro', url: '/pet-growth-pro' }]} />
      
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani text-off-white leading-tight mb-8">
              Fill Your Pet Business <span className="text-orange">Calendar With Ease</span>.
            </h1>
            
            <p className="text-xl md:text-2xl text-off-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
              From groomers to trainers, vets to daycares—we help pet businesses attract more clients, reduce no-shows, and grow consistently.
            </p>
          </div>
        </div>
      </section>

      {/* Agitation Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-8">
                Most pet businesses rely on <span className="text-orange">outdated systems</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-xl text-off-white/90 leading-relaxed text-center mb-12">
                Most pet businesses rely on word of mouth and outdated booking systems. Missed calls, no-shows, and empty slots cost you growth every week.
              </p>

              {/* Problem Icons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-10 h-10 text-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-off-white mb-2">Missed Calls</h3>
                  <p className="text-off-white/70">Potential clients hang up when you can't answer</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserX className="w-10 h-10 text-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-off-white mb-2">No-Shows</h3>
                  <p className="text-off-white/70">Empty appointments mean lost revenue</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingDown className="w-10 h-10 text-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-off-white mb-2">Lost Revenue</h3>
                  <p className="text-off-white/70">Inconsistent bookings hurt your bottom line</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Solution Section */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-8">
                What Pet Growth Pro <span className="text-orange">Looks Like</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-slate/20 backdrop-blur-sm border border-slate/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 card-hover">
                <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors duration-300">
                  <Calendar className="w-8 h-8 text-orange" />
                </div>
                <h3 className="text-2xl font-bold font-rajdhani text-off-white mb-4">Smart Bookings</h3>
                <p className="text-lg text-off-white/90 leading-relaxed">
                  Deposit checkout, automated reminders, and confirmations that reduce no-shows and secure your schedule.
                </p>
              </div>

              <div className="group bg-slate/20 backdrop-blur-sm border border-slate/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 card-hover">
                <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors duration-300">
                  <Target className="w-8 h-8 text-orange" />
                </div>
                <h3 className="text-2xl font-bold font-rajdhani text-off-white mb-4">Content That Converts</h3>
                <p className="text-lg text-off-white/90 leading-relaxed">
                  Videos of grooming transformations, training sessions, and happy pets that go viral and bring in new clients.
                </p>
              </div>

              <div className="group bg-slate/20 backdrop-blur-sm border border-slate/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 card-hover">
                <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors duration-300">
                  <BarChart3 className="w-8 h-8 text-orange" />
                </div>
                <h3 className="text-2xl font-bold font-rajdhani text-off-white mb-4">Targeted Ads</h3>
                <p className="text-lg text-off-white/90 leading-relaxed">
                  Reach local pet owners on Meta, Google, and TikTok with ads that showcase your services and drive bookings.
                </p>
              </div>

              <div className="group bg-slate/20 backdrop-blur-sm border border-slate/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 card-hover">
                <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors duration-300">
                  <Users className="w-8 h-8 text-orange" />
                </div>
                <h3 className="text-2xl font-bold font-rajdhani text-off-white mb-4">Automation</h3>
                <p className="text-lg text-off-white/90 leading-relaxed">
                  Loyalty reminders, subscription refills, and rebooking flows that keep clients coming back automatically.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Action - CTA Block */}
      <ScrollAnimation>
        <section className="py-24 bg-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-8">
                Ready to <span className="text-orange">grow your pet business</span>?
              </h2>
              
              <p className="text-xl md:text-2xl text-off-white/90 leading-relaxed mb-12">
                We build growth systems tailored for pet groomers, trainers, daycares, vets, and pet brands.
              </p>
              
              <Button 
                onClick={handleBookAudit}
                size="lg" 
                className="text-xl px-12 py-6"
                aria-label="Book a free growth audit for your pet business"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book a Free Audit
              </Button>
              
              <div className="flex flex-col gap-4 justify-center items-center mt-6">
                <Button 
                  onClick={() => navigate('/contact')}
                  size="lg" 
                  variant="outline"
                  className="text-xl px-12 py-6"
                  aria-label="Send us a message"
                >
                  Send us a message
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Satisfaction - Proof Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="bg-slate/20 border border-slate/30 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto mb-12">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  <span className="text-xl font-semibold text-off-white">Real Results</span>
                </div>
                <p className="text-lg text-off-white/90 leading-relaxed mb-6">
                  Pet salons cut no-shows by 40%. Trainers filled classes weeks in advance. Vets booked more consults without extra admin.
                </p>
                <p className="text-lg text-off-white/90 leading-relaxed">
                  With automation, content, and ads working together, pet owners never slip through the cracks.
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
              Don't chase clients—<span className="text-white">let them come to you</span>.
            </h3>
            
            <Button 
              onClick={handleBookAudit}
              size="lg" 
              variant="secondary"
              className="bg-white text-orange hover:bg-white/90 text-xl px-12 py-6"
              aria-label="Book a free audit for your pet business"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Book a Free Audit
            </Button>
          </div>
        </section>
      </ScrollAnimation>

      {/* Additional Section */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-off-white/90 leading-relaxed">
                    Run high-converting ads to qualified local pet owners
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-off-white/90 leading-relaxed">
                    Drive them through a simple pet service booking + deposit checkout
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-off-white/90 leading-relaxed">
                    Automate appointment confirmations, pet care reminders, and rebookings with AI
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-off-white/90 leading-relaxed">
                    Track customer acquisition cost and bookings so you know your numbers
                  </p>
                </div>
              </div>

              <p className="text-xl text-off-white/90 leading-relaxed text-center">
                <span className="text-green-400 font-semibold">Result:</span> Predictable new pet service bookings and consistent revenue growth.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Guarantee Strip */}
      <ScrollAnimation>
        <section className="py-8 bg-near-black border-y border-orange/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-lg md:text-xl text-off-white font-medium leading-relaxed">
                <strong className="text-orange">Our guarantee:</strong> 15+ qualified pet service bookings in 60 days at the agreed cost—or we work for free until we hit it.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Call to Action Section */}
      <ScrollAnimation>
        <section className="py-24 bg-orange">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl text-white leading-relaxed mb-12">
                Want to see how many more clients you could be booking each month?
              </p>
              
              <Button 
                onClick={handleBookAudit}
                size="lg" 
                variant="secondary"
                className="bg-white text-orange hover:bg-white/90 text-xl px-12 py-6"
                aria-label="Book a free growth audit to reduce no-shows and fill your calendar"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book a 10-minute audit
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
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
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default ClinicGrowth;