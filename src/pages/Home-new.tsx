import { ArrowRight, BarChart3, Globe, Anchor, Zap, Users, CheckCircle, Star, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-port.jpg';

const Home = () => {
  const navigate = useNavigate();

  const stats = [
    { number: "27+", label: "Years of Excellence", icon: <Star className="h-5 w-5" /> },
    { number: "1000+", label: "Stakeholders Served", icon: <Users className="h-5 w-5" /> },
    { number: "2", label: "Specialized Entities", icon: <Globe className="h-5 w-5" /> },
    { number: "100%", label: "Client Success Rate", icon: <CheckCircle className="h-5 w-5" /> }
  ];

  const services = [
    {
      icon: <Anchor className="h-8 w-8" />,
      title: "Port Operations Excellence",
      description: "Strategic consulting for maritime infrastructure development, operational optimization, and regulatory compliance.",
      features: ["Terminal Management", "Cargo Handling", "Infrastructure Planning"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Freight Forwarding Solutions",
      description: "Comprehensive logistics solutions spanning global trade routes with specialized expertise in complex cargo movements.",
      features: ["Multi-modal Transport", "Customs Clearance", "Supply Chain Optimization"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Critical Minerals Consulting",
      description: "Specialized focus on rare earth elements and critical mineral value chains for strategic industries.",
      features: ["Market Analysis", "Value Chain Optimization", "Strategic Partnerships"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="KARV Group Operations" 
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                <Star className="h-4 w-4 mr-2" />
                27+ Years of Industry Excellence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
              <span className="block text-balance">Carving Your</span>
              <span className="block text-primary text-balance">Growth Curve</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
              Premium consulting expertise in port operations, freight forwarding, and critical minerals—
              transforming complex logistics challenges into strategic advantages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 shadow-soft transition-elegant group"
                onClick={() => navigate('/services')}
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 bg-background/80 backdrop-blur-sm transition-elegant"
                onClick={() => navigate('/about')}
              >
                <Play className="mr-2 h-5 w-5" />
                Our Story
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Stats Cards */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="flex gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-background/90 backdrop-blur-sm border-0 shadow-soft">
                <CardContent className="p-4 text-center min-w-[120px]">
                  <div className="flex justify-center mb-2 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent">
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Industry-Leading <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Comprehensive solutions across maritime operations, global logistics, and strategic mineral consulting.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group h-full shadow-minimal hover:shadow-elegant transition-elegant bg-gradient-card border-0">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="p-4 bg-primary/10 rounded-2xl inline-flex text-primary group-hover:bg-primary/15 transition-elegant">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-elegant">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="mt-6 justify-start p-0 h-auto font-medium text-primary group-hover:translate-x-2 transition-elegant"
                    onClick={() => navigate('/services')}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Over two decades of proven excellence in complex logistics and strategic consulting.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-minimal bg-background border-0 group hover:shadow-soft transition-elegant">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-elegant">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  About KARV Group
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                27 Years of <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Founded with a vision to transform logistics and port operations, KARV Group has evolved into a trusted partner for businesses seeking excellence in maritime trade and strategic consulting.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Expert leadership with proven industry track record</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Specialized focus on critical minerals and rare earth elements</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Comprehensive port operations and freight forwarding expertise</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="transition-elegant"
                onClick={() => navigate('/about')}
              >
                Learn Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <Card className="p-8 shadow-elegant bg-background border-0">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <img 
                      src="/assets/amit-gautam-portrait.jpg" 
                      alt="Amit Gautam - Founder & CEO" 
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-soft"
                    />
                    <h3 className="text-xl font-semibold text-foreground">Amit Gautam</h3>
                    <p className="text-primary font-medium">Founder & CEO</p>
                  </div>
                  <blockquote className="text-center text-muted-foreground italic">
                    "Our mission is to carve growth curves for our clients through strategic expertise and operational excellence in the most complex logistics challenges."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl mb-10 opacity-90 text-balance">
            Partner with KARV Group for strategic consulting that delivers measurable results and sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90 transition-elegant"
              onClick={() => navigate('/contact')}
            >
              Start a Conversation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-elegant"
              onClick={() => navigate('/services')}
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
