import { ArrowRight, Gem, Factory, Cog, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Solutions = () => {
  const industrySolutions = [
    {
      icon: <Gem className="h-12 w-12 text-accent" />,
      title: "Critical & Rare Earth Minerals",
      description: "Specialized supply chain solutions for strategic mineral resources",
      challenges: [
        "Complex regulatory compliance across jurisdictions",
        "Supply chain security and risk mitigation",
        "Technical handling and storage requirements",
        "Market volatility and price fluctuations"
      ],
      solutions: [
        "End-to-end supply chain design and optimization",
        "Regulatory compliance and documentation management",
        "Specialized logistics and handling protocols",
        "Risk assessment and mitigation strategies"
      ],
      results: "40% reduction in transit time, 99.8% compliance rate"
    },
    {
      icon: <Factory className="h-12 w-12 text-accent" />,
      title: "Manufacturing & Industrial",
      description: "Streamlined logistics for manufacturing and heavy industry",
      challenges: [
        "Just-in-time delivery requirements",
        "Heavy and oversized cargo handling",
        "Multi-modal transportation coordination",
        "Cost optimization across global networks"
      ],
      solutions: [
        "Lean supply chain implementation",
        "Project cargo and heavy lift specialists",
        "Integrated logistics planning systems",
        "Network optimization and cost reduction"
      ],
      results: "25% cost reduction, 98% on-time delivery rate"
    },
    {
      icon: <Cog className="h-12 w-12 text-accent" />,
      title: "Infrastructure & Energy",
      description: "Large-scale project logistics for infrastructure development",
      challenges: [
        "Massive equipment and component transport",
        "Remote location accessibility",
        "Tight project timelines and coordination",
        "Environmental and safety compliance"
      ],
      solutions: [
        "Specialized project cargo management",
        "Route surveys and infrastructure assessment",
        "Multi-stakeholder coordination platforms",
        "Comprehensive safety and compliance protocols"
      ],
      results: "100% project delivery success, zero safety incidents"
    }
  ];

  const deliverySteps = [
    {
      step: 1,
      title: "Discovery & Assessment",
      description: "Deep dive analysis of your current logistics operations, identifying pain points and opportunities for improvement."
    },
    {
      step: 2,
      title: "Solution Design",
      description: "Custom strategy development based on your specific needs, industry requirements, and business objectives."
    },
    {
      step: 3,
      title: "Implementation Planning",
      description: "Detailed project roadmap with clear milestones, resource allocation, and timeline management."
    },
    {
      step: 4,
      title: "Execution & Monitoring",
      description: "Hands-on implementation with real-time monitoring, adjustments, and performance tracking."
    },
    {
      step: 5,
      title: "Optimization & Growth",
      description: "Continuous improvement through data analysis, feedback loops, and strategic enhancements."
    }
  ];

  const testimonials = [
    {
      quote: "KARV's expertise in critical minerals logistics completely transformed our supply chain. Their deep understanding of regulatory requirements and technical challenges was invaluable.",
      author: "Sarah Chen",
      position: "Supply Chain Director",
      company: "Global Rare Earth Solutions"
    },
    {
      quote: "The project cargo solutions provided by KARV exceeded our expectations. Their attention to detail and proactive communication ensured flawless execution.",
      author: "Michael Rodriguez",
      position: "Project Manager", 
      company: "Infrastructure Dynamics"
    },
    {
      quote: "Working with KARV has been a game-changer for our manufacturing operations. Their network optimization reduced our logistics costs by 25% while improving delivery performance.",
      author: "Emma Thompson",
      position: "Operations VP",
      company: "Industrial Manufacturing Corp"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Industry-Tailored Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Specialized logistics solutions designed for the unique challenges of critical industries, 
            delivering measurable results and sustainable competitive advantages.
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Specialized Industry Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Deep domain knowledge and proven track record across critical industries
            </p>
          </div>

          <div className="space-y-20">
            {industrySolutions.map((solution, index) => (
              <Card key={index} className="overflow-hidden shadow-medium">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2">
                    {/* Content */}
                    <div className="p-12">
                      <div className="mb-6">
                        <div className="p-4 bg-accent/10 rounded-2xl inline-flex mb-6">
                          {solution.icon}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                          {solution.title}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8">
                          {solution.description}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-primary mb-4">Key Challenges</h4>
                          <ul className="space-y-2">
                            {solution.challenges.map((challenge, challengeIndex) => (
                              <li key={challengeIndex} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-4">Our Solutions</h4>
                          <ul className="space-y-2">
                            {solution.solutions.map((solutionItem, solutionIndex) => (
                              <li key={solutionIndex} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{solutionItem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 p-4 bg-accent/5 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <TrendingUp className="h-5 w-5 text-accent" />
                          <span className="font-semibold text-primary">Results Achieved</span>
                        </div>
                        <p className="text-muted-foreground">{solution.results}</p>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className="bg-subtle-gradient p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className="p-8 bg-background rounded-2xl shadow-soft mb-6">
                          {solution.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-primary mb-2">{solution.title}</h4>
                        <p className="text-muted-foreground">End-to-end solutions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              How We Deliver Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures every engagement delivers measurable results and lasting value
            </p>
          </div>

          <div className="relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-accent/20"></div>
            
            <div className="grid lg:grid-cols-5 gap-8">
              {deliverySteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step number */}
                  <div className="relative z-10 w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 lg:mb-8">
                    {step.step}
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-primary mb-4">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Client Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real results from real partnerships across diverse industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <div className="font-semibold text-primary">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-accent">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-gradient text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Industry Challenges?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with KARV Group to unlock specialized solutions that drive efficiency, 
            reduce costs, and accelerate growth in your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Schedule Industry Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;