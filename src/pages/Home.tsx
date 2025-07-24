import { ArrowRight, Anchor, Truck, Ship, Award, Users, Globe, TrendingUp, Waves, Network, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-port.jpg';
import logisticsImage from '@/assets/logistics-network.jpg';

const Home = () => {
  const navigate = useNavigate();

  const primaryServices = [
    {
      icon: <Anchor className="h-12 w-12 text-white" />,
      title: "Port Operations & Freight Forwarding",
      subtitle: "Operational Excellence",
      description: "Comprehensive solutions in port operations, facilitating administration, outsourcing port operations, despatch operations and seamless logistics supply chain.",
      features: ["Port Operations Management", "Freight Forwarding Solutions", "Despatch Operations", "Supply Chain Optimization"],
      gradient: "from-red-600 via-red-700 to-rose-800",
      borderGlow: "border-red-400/30 shadow-red-500/20"
    },
    {
      icon: <Sparkles className="h-12 w-12 text-white" />,
      title: "Critical Minerals & REPM",
      subtitle: "Strategic Partnership",
      description: "Strategic partnerships and consultancy for Rare Earth Permanent Magnets value chain, focusing on EV sector, Defence and other specialized segments.",
      features: ["Strategic Site Selection", "Plant Setup Consultancy", "Market Entry Strategy", "Partnership Development"],
      gradient: "from-orange-600 via-orange-700 to-amber-800",
      borderGlow: "border-orange-400/30 shadow-orange-500/20"
    }
  ];

  const differentiators = [
    {
      icon: Award,
      text: "27+ Years Industry Experience",
      description: "Founder Amit Gautam's proven experience in Fertilizer, Oil Retail Marketing, SEZ, Logistics and Ports"
    },
    {
      icon: Users,
      text: "1,000+ Stakeholders Engaged",
      description: "Extensive stakeholder engagement through Amit Gautam's professional journey"
    },
    {
      icon: Sparkles,
      text: "Critical Minerals Focus",
      description: "Specialized expertise in Rare Earth Permanent Magnets and critical minerals value chain"
    },
    {
      icon: TrendingUp,
      text: "Proven Success Record",
      description: "Consistent delivery of successful projects across diverse industry verticals"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url(${heroImage})`
        }}>
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Carving Your Growth Curve
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 animate-fade-in">
            Navigating Growth through Expertise in Port Operations, Freight Forwarding and Development of new business in Critical Minerals through Strategic Partnership
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            KARV Group provides expert consulting and operational services in logistics, warehousing, and freight forwarding, ensuring a seamless supply chain for clients and significantly reduce operational and administrative costs, delivering substantial value to clients.
            <br /><br />
            Additionally, KARV Group diversifies into strategic solutions to drive business growth, secure high-value contracts, and foster partnerships for clients in the critical minerals and rare earth value chain, including Rare Earth Permanent Magnets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" onClick={() => navigate('/contact')} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg">
              Partner with Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/services')} className="border-2 border-primary-foreground hover:bg-primary-foreground font-semibold px-8 py-4 text-lg text-slate-950">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Primary Services Showcase */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Our Core Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Leading Solutions for Global Trade
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              With over two and half decades of experience of our Founder & Owner Amit Gautam in port business development, operations, logistics and trade, KARV Group delivers exceptional consulting and operational services in port operations, freight forwarding, and strategic partnerships in critical minerals and Rare Earth Permanent Magnets.
            </p>
          </div>
          
          {/* Primary Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {primaryServices.map((service, index) => (
              <Card key={index} className={`group relative overflow-hidden border-2 ${service.borderGlow} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${service.gradient}`}>
                <CardContent className="p-8 text-white relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-4">
                        <p className="text-white/80 text-sm font-medium mb-1">{service.subtitle}</p>
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-white/90 leading-relaxed">{service.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
                            <span className="text-white/90 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button onClick={() => navigate('/services')} variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 backdrop-blur-sm font-semibold">
                        Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>

          {/* Company Structure */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-primary mb-8">KARV Group Entities</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-accent/20">
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-semibold text-accent mb-4">KARV Consultancy Services (KCS)</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Expert guidance in logistics services, project cargo logistics, cost reduction, and consultancy for rare earth permanent magnets. Founded and owned by Amit Gautam.
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-accent/20">
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-semibold text-accent mb-4">KARV Enterprises (KE)</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Operational execution including logistics services, project cargo logistics, and business development in minerals. Led by Ruchita Gautam with management representation by Amit Gautam.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Choose KARV Group
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our deep expertise in critical minerals, rare earth value chains, and global logistics 
              makes us the trusted partner for complex supply chain challenges.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="p-4 bg-accent/10 rounded-2xl mb-4 inline-flex">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.text}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button onClick={() => navigate('/about')} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3">
              Discover Our Expertise
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic mb-8">
            "KARV Group's expertise in port operations and critical minerals logistics transformed our supply chain efficiency. 
            Their strategic insights and operational excellence delivered results beyond our expectations."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground font-semibold">AG</span>
            </div>
            <div className="text-left">
              <p className="font-semibold">Industry Partner</p>
              <p className="text-primary-foreground/70">Strategic Logistics Division</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join over 1,000 stakeholders who trust KARV Group for their logistics and port consulting needs. 
            Let's carve your growth curve together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/contact')} className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-4 text-lg">
              Partner with Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/services')} className="border-2 border-primary/30 hover:bg-primary/10 font-semibold px-8 py-4 text-lg">
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;