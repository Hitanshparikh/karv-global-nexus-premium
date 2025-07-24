import { Award, Users, Globe, Target, Heart, CheckCircle, TrendingUp, Building, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import founderImage from '@/assets/amit-gautam-real.jpg';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Client-Centricity",
      description: "Our clients' success is our primary focus. We tailor solutions to meet unique business needs and challenges."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Transparency",
      description: "Clear communication and honest partnerships form the foundation of our long-term client relationships."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Operational Excellence", 
      description: "We deliver superior results through proven methodologies and continuous improvement initiatives."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "Teamwork and knowledge sharing drive innovation and create value for all stakeholders."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Expertise",
      description: "International perspective combined with local market knowledge ensures optimal outcomes."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Strategic Focus",
      description: "Long-term thinking and strategic planning guide our approach to every engagement."
    }
  ];

  const milestones = [
    { year: "1997", title: "Founded", description: "KARV Group established with vision for logistics excellence" },
    { year: "2005", title: "Port Expansion", description: "Major port consulting contracts in critical infrastructure projects" },
    { year: "2012", title: "Global Reach", description: "International operations expanded across key maritime trade routes" },
    { year: "2018", title: "Critical Minerals", description: "Specialized focus on rare earth and critical mineral value chains" },
    { year: "2024", title: "Industry Leader", description: "1,000+ stakeholders served across complex logistics projects" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                <Building className="h-4 w-4 mr-2" />
                About KARV Group
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Transforming Logistics with <span className="text-primary">27+ Years</span> of Excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              With over 27 years of industry expertise, KARV Group stands as a leading authority in ports, logistics, warehousing, and freight forwarding consulting services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent">
                  Our Journey
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story of Innovation
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Founded in 1997, KARV Group began with a vision to transform the logistics and port operations landscape. Over the decades, we have evolved into a trusted partner for businesses seeking excellence in maritime trade, supply chain optimization, and strategic consulting.
                </p>
                <p>
                  Our specialized focus on critical minerals and rare earth value chains positions us uniquely in today's evolving global trade environment. We combine deep industry knowledge with innovative solutions to deliver measurable results for our clients.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Target className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Mission</p>
                      <p className="text-muted-foreground">Carving Your Growth Curve through expert consulting and operational excellence in port operations, freight forwarding, and strategic partnerships in critical minerals.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Vision</p>
                      <p className="text-muted-foreground">To be the most trusted partner for complex logistics challenges and strategic development in critical minerals and rare earth value chains.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="overflow-hidden shadow-elegant border-0 bg-gradient-card">
                <CardContent className="p-0">
                  <img 
                    src={founderImage} 
                    alt="KARV Group Operations" 
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Excellence in Operations</h3>
                    <p className="text-muted-foreground">Strategic consulting that transforms complex challenges into growth opportunities.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Excellence */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                Leadership
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Visionary Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Driving industry transformation through experienced leadership and strategic vision.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-elegant border-0 bg-background">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="relative inline-block mb-6">
                      <img 
                        src="/assets/amit-gautam-portrait.jpg" 
                        alt="Amit Gautam - Founder & CEO" 
                        className="w-48 h-48 rounded-full object-cover mx-auto shadow-strong"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Amit Gautam</h3>
                    <p className="text-lg text-primary font-semibold mb-6">Founder & CEO</p>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      With over 27 years of transformative experience in ports, logistics, and freight forwarding, Amit Gautam founded KARV Group with a vision to redefine industry standards. His expertise spans critical minerals consulting, strategic port development, and complex supply chain optimization.
                    </p>
                    
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      Under his leadership, KARV Group has evolved into a trusted partner for over 1,000 stakeholders, delivering innovative solutions that drive operational excellence and sustainable growth across diverse industry verticals.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <div className="text-2xl font-bold text-primary">27+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </div>
                      <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                        <div className="text-2xl font-bold text-accent">1000+</div>
                        <div className="text-sm text-muted-foreground">Stakeholders Served</div>
                      </div>
                      <div className="text-center p-4 bg-secondary rounded-lg border">
                        <div className="text-2xl font-bold text-foreground">2</div>
                        <div className="text-sm text-muted-foreground">Business Entities</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent">
                Our Values
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Core Principles That Guide Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These fundamental values shape every decision and define every relationship we build with our stakeholders.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group h-full shadow-minimal hover:shadow-elegant transition-elegant bg-gradient-card border-0">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg inline-flex group-hover:bg-primary/15 transition-elegant">
                      <div className="text-primary">
                        {value.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-elegant">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                Our Journey
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Milestones of Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key achievements that shaped KARV Group into the industry leader we are today.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 h-full w-0.5 bg-primary/30"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-soft">
                    <TrendingUp className="h-4 w-4 text-primary-foreground" />
                  </div>
                  
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:ml-auto'}`}>
                    <Card className="bg-background shadow-soft border-0">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
