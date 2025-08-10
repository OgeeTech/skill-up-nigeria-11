import { WhatsAppButton } from '@/components/WhatsAppButton';
import { StickyWhatsApp } from '@/components/StickyWhatsApp';
import { CountdownTimer } from '@/components/CountdownTimer';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';
import { CourseCard } from '@/components/CourseCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Code, BarChart3, Facebook, Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  // Course start date - set to 2 weeks from now
  const courseStartDate = new Date();
  courseStartDate.setDate(courseStartDate.getDate() + 14);

  return (
    <div className="min-h-screen bg-background">
      <StickyWhatsApp />
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <img 
                src="/dch-logo.png" 
                alt="DCH Academy Logo" 
                className="h-12 md:h-16 w-auto"
              />
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-dch-navy to-dch-cyan bg-clip-text text-transparent">
                  DCH ACADEMY
                </h1>
                <p className="text-sm text-muted-foreground">BWARI CENTER</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dch-navy via-dch-navy to-dch-cyan">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Turn ₦10,000 into a
                <span className="block bg-gradient-to-r from-dch-orange to-yellow-400 bg-clip-text text-transparent">
                  Global-Paying Tech Skill
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Learn Web Development or Data Analysis in weeks — practical, project-based, and designed for the Nigerian job market.
              </p>
              
              
              <WhatsAppButton variant="cta" className="text-lg px-8 py-6">
                Join Now for ₦10,000
              </WhatsAppButton>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="DCH Academy students learning tech skills" 
                className="rounded-2xl shadow-[var(--shadow-hero)] w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dch-navy/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dch-navy mb-4">
              Choose Your Tech Path
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Two high-demand skills, one affordable price. Start your tech career journey today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <CourseCard
              title="Web Development with Flutter"
              icon={<Code className="w-8 h-8 text-white" />}
              benefits={[
                "Build mobile apps for iOS and Android from a single codebase",
                "Learn Dart programming language and Flutter framework",
                "Create 3 real-world projects for your portfolio",
                "Get job placement assistance and freelancing guidance"
              ]}
            />
            
            <CourseCard
              title="Data Analysis with Excel & Power BI"
              icon={<BarChart3 className="w-8 h-8 text-white" />}
              benefits={[
                "Master advanced Excel functions and data visualization",
                "Create interactive dashboards with Power BI",
                "Analyze real business data and generate insights",
                "Learn SQL basics for database querying"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Choose DCH Academy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dch-navy mb-6">
                Why DCH Academy?
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-center mb-12">
              <p className="text-xl text-foreground leading-relaxed">
                In today's Nigeria, having the right tech skills can be the difference between struggling to make ends meet and earning global income from your laptop. Our courses are specifically designed for the realities of the Nigerian market — affordable, practical, and immediately applicable.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-dch-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">₦10K</span>
                </div>
                <h3 className="text-xl font-semibold text-dch-navy mb-2">Affordable</h3>
                <p className="text-muted-foreground">Quality tech education that won't break the bank</p>
              </div>
              
              <div className="p-6">
                <div className="w-16 h-16 bg-dch-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-dch-navy mb-2">Practical</h3>
                <p className="text-muted-foreground">Learn by building real projects, not just theory</p>
              </div>
              
              <div className="p-6">
                <div className="w-16 h-16 bg-dch-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-dch-navy mb-2">Fast Track</h3>
                <p className="text-muted-foreground">Get job-ready skills in weeks, not years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dch-navy mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real students, real results, real income improvements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard
              name="Amina Hassan"
              location="Abuja, FCT"
              course="Data Analysis"
              testimonial="I got my first data analyst job just 3 months after completing the course. The Excel and Power BI skills I learned at DCH Academy made all the difference."
            />
            
            <TestimonialCard
              name="Chidi Okafor"
              location="Lagos State"
              course="Web Development"
              testimonial="Building mobile apps with Flutter opened up so many opportunities. I'm now freelancing for international clients and earning in dollars!"
            />
            
            <TestimonialCard
              name="Fatima Adamu"
              location="Kaduna State"
              course="Data Analysis"
              testimonial="The hands-on approach at DCH Academy is amazing. I learned more in 6 weeks than I did in months of watching YouTube videos."
            />
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16" id="register">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dch-navy mb-4">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-muted-foreground">
              Take the first step towards financial freedom
            </p>
          </div>
          
          <LeadCaptureForm />
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-gradient-to-r from-dch-navy to-dch-cyan text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ⏰ Limited Slots Available
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Once full, registration closes until next intake. Don't miss out!
          </p>
          
          <div className="mb-8">
            <p className="text-lg mb-4">Next batch starts in:</p>
            <CountdownTimer targetDate={courseStartDate.toISOString()} />
          </div>
          
          <WhatsAppButton variant="cta" className="bg-dch-orange hover:bg-dch-orange/90">
            Secure Your Spot Now
          </WhatsAppButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dch-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-dch-orange to-dch-cyan bg-clip-text text-transparent">
                DCH ACADEMY
              </h3>
              <p className="text-white/80 mb-4">
                Empowering Nigerians with practical tech skills for global opportunities.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-dch-orange hover:bg-white/10"
                  onClick={() => window.open('https://www.facebook.com/share/1DxqztnLzx/?mibextid=wwXIfr', '_blank')}
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-dch-orange hover:bg-white/10"
                  onClick={() => window.open('https://www.instagram.com/dch_academy?igsh=MTA2cHQ1eGtpZzB5OA==', '_blank')}
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-dch-orange hover:bg-white/10"
                  onClick={() => window.open('https://www.tiktok.com/@dchacademy?_t=ZS-8ykytbazoJk&_r=1', '_blank')}
                >
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+234 701 802 3754</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 347 219 0385</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>dchacademybwari@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Bwari, Abuja, FCT</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <div>
                  <button 
                    onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-dch-orange transition-colors"
                  >
                    Register Now
                  </button>
                </div>
                <div>
                  <WhatsAppButton 
                    variant="ghost" 
                    className="text-white/80 hover:text-dch-orange p-0 h-auto font-normal justify-start"
                  >
                    Contact on WhatsApp
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 DCH Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
