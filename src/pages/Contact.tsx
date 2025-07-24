import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: "Email Us",
      details: ["amitgautam@karv-group.com", "bd_karv@outlook.com"],
      description: "Get in touch via email for detailed inquiries"
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Call Us", 
      details: ["Mobile: +91 90990 02565", "Landline: 079-4504 5866"],
      description: "Speak directly with our consultants"
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Visit Us",
      details: ["Office No. 312, Pehel Lake View", "Behind Shaligram Lake View, Near Vaishnodevi Temple", "Khoraj, Ahmedabad-382481"],
      description: "Meet our team at our headquarters"
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Business Hours",
      details: ["Mon-Sat: 09:30 - 18:30", "Sunday: Available on mobile & email"],
      description: "We're here when you need us"
    }
  ];
  const offices = [
    {
      city: "Ahmedabad",
      address: "Office No. 312, Pehel Lake View, Behind Shaligram Lake View, Near Vaishnodevi Temple, Khoraj, Ahmedabad-382481",
      phone: "+91 90990 02565",
      email: "amitgautam@karv-group.com"
    }
  ];
  return <div>
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact KARV Group
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Ready to transform your logistics operations? Let's discuss how our expertise can drive your business forward.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours to discuss 
                how we can help optimize your logistics operations.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="mt-2" placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="mt-2" placeholder="your.email@company.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleInputChange} className="mt-2" placeholder="Your company name" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className="mt-2" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="mt-2" placeholder="How can we help you?" />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required className="mt-2 min-h-[150px]" placeholder="Tell us about your logistics challenges and requirements..." />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isSubmitting}>
                  {isSubmitting ? <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground mr-2" />
                      Sending Message...
                    </> : <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8">
                Multiple ways to reach our team of logistics experts.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                          <div className="space-y-1 mb-2">
                            {info.details.map((detail, detailIndex) => <p key={detailIndex} className="text-muted-foreground">{detail}</p>)}
                          </div>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-primary mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-accent" />
                  </a>
                  <a href="#" className="p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
                    <Twitter className="h-5 w-5 text-accent" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      

      {/* Quick Response Promise */}
      <section className="py-20 bg-accent-gradient text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-background/20 rounded-2xl">
              <CheckCircle className="h-12 w-12" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Response Commitment
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We understand that logistics challenges require immediate attention. That's why we guarantee 
            a response to all inquiries within 24 hours, and urgent matters within 4 hours during business days.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-sm opacity-90">Standard Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4h</div>
              <div className="text-sm opacity-90">Urgent Inquiries</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2h</div>
              <div className="text-sm opacity-90">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;