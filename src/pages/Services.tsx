import { ArrowRight, Anchor, Truck, Ship, BarChart3, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const portServices = [
    {
      icon: <Anchor className="h-8 w-8 text-white" />,
      title: "Port Operations Management",
      description: "Strategic port development, operational optimization, and efficiency enhancement solutions for maritime facilities."
    },
    {
      icon: <Ship className="h-8 w-8 text-white" />,
      title: "Freight Forwarding",
      description: "Comprehensive freight management, international trade facilitation, and supply chain coordination services."
    },
    {
      icon: <Truck className="h-8 w-8 text-white" />,
      title: "Logistics Management",
      description: "End-to-end supply chain solutions, warehouse optimization, and distribution network management."
    }
  ];

  const repServices = [
    {
      icon: <Sparkles className="h-8 w-8 text-white" />,
      title: "Rare Earth Permanent Magnets",
      description: "Specialized consulting for REPM supply chains, strategic sourcing, and market intelligence in the critical minerals sector."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: "Critical Minerals Advisory",
      description: "Strategic advisory services for critical minerals procurement, risk assessment, and supply chain security."
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Technology Integration",
      description: "Integration of advanced technologies in mining, processing, and supply chain management for critical minerals."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Comprehensive solutions spanning port operations and critical minerals consulting, delivered by industry experts with over 27 years of experience.
          </p>
        </div>
      </section>

      {/* Port Operations & Freight Forwarding */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Port Operations & Freight Forwarding
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-red-600 to-red-700 border-0">
                <CardContent className="p-8 text-white">
                  <div className="mb-6 p-4 bg-white/20 rounded-2xl inline-flex group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Minerals & REPM */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Critical Minerals & REPM
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {repServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-orange-600 to-amber-700 border-0">
                <CardContent className="p-8 text-white">
                  <div className="mb-6 p-4 bg-white/20 rounded-2xl inline-flex group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose KARV */}
      <section className="py-20 bg-gradient-to-br from-primary to-red-700 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose KARV Group?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">27+</div>
              <p className="opacity-90">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2</div>
              <p className="opacity-90">Business Entities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="opacity-90">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today to discuss how our expertise can transform your operations.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/contact')} 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
