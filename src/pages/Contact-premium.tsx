import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Building, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      details: [
        "KARV Global Nexus LLP",
        "Office No. 404, 4th Floor",
        "Akshar Avenue, Nr. Samartheshwar Mahadev",
        "Sola Road, Ahmedabad - 380061",
        "Gujarat, India"
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: [
        "Mobile: +91 98253 64825",
        "Landline: +91 79 4890 7872"
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: [
        "General: info@karvglobalnexus.com",
        "Business: amit@karvglobalnexus.com"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Let's Start a <span className="text-primary">Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Ready to transform your logistics operations? Connect with our experts for strategic consulting and tailored solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent">
                Get in Touch
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Multiple Ways to Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reach out through your preferred channel. Our team is ready to discuss your business challenges and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="h-full shadow-minimal hover:shadow-elegant transition-elegant bg-gradient-card border-0 group">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="mb-6">
                    <div className="p-4 bg-primary/10 rounded-2xl inline-flex text-primary group-hover:bg-primary/15 transition-elegant">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-elegant">
                    {info.title}
                  </h3>
                  <div className="space-y-2 flex-grow">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  Send Message
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Share Your Business Challenge
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Tell us about your logistics requirements, port operations needs, or critical minerals projects. Our experts will respond with tailored solutions and strategic insights.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Expert Consultation</h4>
                    <p className="text-muted-foreground text-sm">Direct access to industry specialists</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Tailored Solutions</h4>
                    <p className="text-muted-foreground text-sm">Customized strategies for your business</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Rapid Response</h4>
                    <p className="text-muted-foreground text-sm">Quick turnaround on inquiries</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-elegant border-0 bg-background">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="transition-elegant" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="transition-elegant" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@company.com" className="transition-elegant" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company" className="transition-elegant" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 98765 43210" className="transition-elegant" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <select id="service" className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm transition-elegant focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Select a service</option>
                      <option value="port-operations">Port Operations & Freight Forwarding</option>
                      <option value="critical-minerals">Critical Minerals & REPM</option>
                      <option value="strategic-consulting">Strategic Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your business challenge or project requirements..."
                      className="min-h-[120px] transition-elegant"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full transition-elegant group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Office */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Visit Our Office
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Ahmedabad's business district, our office serves as the strategic hub for KARV Group operations.
            </p>
          </div>
          
          <Card className="overflow-hidden shadow-elegant border-0">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 bg-gradient-primary">
                  <h3 className="text-2xl font-bold text-foreground mb-6">KARV Global Nexus LLP</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <p>Office No. 404, 4th Floor</p>
                        <p>Akshar Avenue, Nr. Samartheshwar Mahadev</p>
                        <p>Sola Road, Ahmedabad - 380061</p>
                        <p>Gujarat, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <p>Mobile: +91 98253 64825</p>
                        <p>Landline: +91 79 4890 7872</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <p>info@karvglobalnexus.com</p>
                        <p>amit@karvglobalnexus.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/30 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <Building className="h-24 w-24 text-primary mx-auto mb-6" />
                    <h4 className="text-xl font-semibold text-foreground mb-4">Strategic Location</h4>
                    <p className="text-muted-foreground">
                      Positioned in Ahmedabad's prime business district with excellent connectivity to major transportation hubs and industrial corridors.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
