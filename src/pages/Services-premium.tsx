import { Anchor, Globe, Zap, ArrowRight, CheckCircle, Users, BarChart3, Target, Ship, Truck, Building, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const navigate = useNavigate();

  const mainServices = [
    {
      icon: <Anchor className="h-12 w-12" />,
      title: "Port Operations & Freight Forwarding",
      subtitle: "Maritime Excellence",
      description: "Comprehensive solutions in port operations, facilitating administration, outsourcing port operations, despatch operations and seamless logistics supply chain.",
      features: [
        "Port Operations Management",
        "Freight Forwarding Solutions", 
        "Despatch Operations",
        "Supply Chain Optimization",
        "Maritime Consulting",
        "Regulatory Compliance"
      ],
      benefits: [
        "Reduced operational costs by 25-40%",
        "Improved efficiency and turnaround times",
        "Enhanced regulatory compliance",
        "Streamlined logistics processes"
      ]
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Critical Minerals & REPM",
      subtitle: "Strategic Partnership",
      description: "Strategic partnerships and consultancy for Rare Earth Permanent Magnets value chain, focusing on EV sector, Defence and other specialized segments.",
      features: [
        "Strategic Site Selection",
        "Plant Setup Consultancy",
        "Market Entry Strategy",
        "Partnership Development",
        "Technology Assessment",
        "Value Chain Analysis"
      ],
      benefits: [
        "Access to critical mineral markets",
        "Strategic positioning in EV supply chain",
        "Expert guidance for plant setup",
        "Partnership facilitation"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Strategic Consulting",
      description: "Comprehensive business strategy and operational excellence consulting for complex logistics challenges."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Market Analysis", 
      description: "In-depth market research and analysis for strategic decision-making in logistics and minerals sectors."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Stakeholder Engagement",
      description: "Expert facilitation of stakeholder relationships and partnership development across industry verticals."
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Infrastructure Planning",
      description: "Strategic planning and development consulting for port infrastructure and logistics facilities."
    }
  ];

  const stats = [
    { number: "27+", label: "Years Experience" },
    { number: "1000+", label: "Stakeholders Served" },
    { number: "2", label: "Specialized Entities" },
    { number: "100%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                <Target className="h-4 w-4 mr-2" />
                Our Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Comprehensive <span className="text-primary">Logistics Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Expert consulting services across port operations, freight forwarding, and critical minerals—delivering strategic value through operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent">
                Core Specializations
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Two Strategic Business Verticals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              KARV Group operates through two specialized entities, each focused on delivering excellence in their respective domains.
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant border-0 bg-gradient-card">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-12">
                      <div className="mb-6">
                        <div className="p-4 bg-primary/10 rounded-2xl inline-flex text-primary mb-4">
                          {service.icon}
                        </div>
                        <span className="text-sm font-medium text-accent">{service.subtitle}</span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h3>
                      
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        <h4 className="font-semibold text-foreground">Key Services:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="transition-elegant group">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                    
                    <div className="bg-gradient-primary p-12 flex flex-col justify-center">
                      <h4 className="font-semibold text-foreground mb-6">Expected Outcomes:</h4>
                      <div className="space-y-4">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="p-1 bg-primary/20 rounded-full mr-3 mt-1">
                              <CheckCircle className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                Supporting Services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comprehensive Support Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Additional consulting services that complement our core offerings and provide holistic business solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="h-full shadow-minimal hover:shadow-elegant transition-elegant bg-background border-0 group">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg inline-flex text-primary group-hover:bg-primary/15 transition-elegant">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-elegant">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose KARV */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose KARV Group
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven excellence backed by decades of industry leadership and strategic expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-minimal bg-gradient-card border-0 group hover:shadow-soft transition-elegant">
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-elegant">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="shadow-soft border-0 bg-gradient-card">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Expert Leadership</h3>
                <p className="text-muted-foreground">
                  Led by Amit Gautam with 27+ years of proven experience across fertilizers, oil retail, SEZ, logistics, and ports.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 bg-gradient-card">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Specialized Focus</h3>
                <p className="text-muted-foreground">
                  Deep expertise in critical minerals and rare earth permanent magnets for EV, defense, and specialized sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 bg-gradient-card">
              <CardContent className="p-8">
                <div className="mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Proven Results</h3>
                <p className="text-muted-foreground">
                  Track record of delivering measurable outcomes and sustainable growth for over 1,000 stakeholders.
                </p>
              </CardContent>
            </Card>
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
            Discover how KARV Group's expertise can drive your business forward with strategic consulting and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90 transition-elegant"
              onClick={() => navigate('/contact')}
            >
              Get Started Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-elegant"
              onClick={() => navigate('/about')}
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
