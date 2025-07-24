import { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Filter, Search, BookOpen, TrendingUp, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Insights = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  
  const tags = ['All', 'Ports', 'Freight', 'Supply Chain', 'Critical Minerals', 'Innovation'];
  
  const articles = [
    {
      id: 1,
      title: "The Future of Critical Minerals Logistics: Navigating Supply Chain Challenges",
      excerpt: "As global demand for rare earth elements continues to surge, understanding the complexities of critical minerals logistics becomes paramount for supply chain resilience.",
      author: "Amit Gautam",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Critical Minerals", "Supply Chain"],
      featured: true,
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "Port Automation Trends: Balancing Efficiency with Human Capital",
      excerpt: "Exploring how modern ports are implementing automation technologies while maintaining workforce development and operational flexibility.",
      author: "Sarah Chen",
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["Ports", "Innovation"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Sustainable Freight Forwarding: Green Logistics for the Future",
      excerpt: "Comprehensive analysis of sustainable practices in freight forwarding and their impact on cost, efficiency, and environmental responsibility.",
      author: "Michael Rodriguez",
      date: "2024-01-05",
      readTime: "5 min read",
      tags: ["Freight", "Innovation"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "Supply Chain Resilience in Uncertain Times: Lessons from Recent Disruptions",
      excerpt: "Key strategies for building robust supply chains that can withstand global disruptions while maintaining efficiency and cost-effectiveness.",
      author: "Emma Thompson",
      date: "2023-12-28",
      readTime: "7 min read",
      tags: ["Supply Chain"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 5,
      title: "Digital Transformation in Logistics: IoT, AI, and Blockchain Applications",
      excerpt: "How emerging technologies are revolutionizing logistics operations and creating new opportunities for efficiency and transparency.",
      author: "David Kumar",
      date: "2023-12-20",
      readTime: "9 min read",
      tags: ["Innovation", "Supply Chain"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 6,
      title: "Port Congestion Solutions: Strategies for Smooth Operations",
      excerpt: "Practical approaches to managing port congestion through improved planning, technology integration, and stakeholder coordination.",
      author: "Lisa Park",
      date: "2023-12-15",
      readTime: "6 min read",
      tags: ["Ports"],
      featured: false,
      image: "/api/placeholder/600/300"
    }
  ];

  const filteredArticles = selectedTag === 'All' 
    ? articles 
    : articles.filter(article => article.tags.includes(selectedTag));

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Industry Insights & Thought Leadership
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Expert perspectives on logistics trends, innovative solutions, and strategic insights 
            from our seasoned professionals and industry partners.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10"
              />
            </div>

            {/* Filter Tags */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                    className={selectedTag === tag ? "bg-accent hover:bg-accent/90" : ""}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedTag === 'All' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">Featured Article</h2>
              <p className="text-muted-foreground">In-depth analysis and expert insights</p>
            </div>
            
            <Card className="overflow-hidden shadow-strong">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-6">
                    {featuredArticle.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-accent hover:bg-accent/90 w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                <div className="bg-subtle-gradient p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="p-8 bg-accent/10 rounded-2xl mb-6">
                      <BookOpen className="h-16 w-16 text-accent mx-auto" />
                    </div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Featured Insight</h4>
                    <p className="text-muted-foreground">Expert analysis and strategic perspectives</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">
              {selectedTag === 'All' ? 'Latest Articles' : `Articles: ${selectedTag}`}
            </h2>
            <p className="text-muted-foreground">
              Stay informed with our latest insights and industry analysis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video bg-subtle-gradient flex items-center justify-center">
                  <div className="text-center">
                    <div className="p-6 bg-accent/10 rounded-2xl mb-4 inline-flex">
                      {article.tags.includes('Ports') && <Globe className="h-8 w-8 text-accent" />}
                      {article.tags.includes('Freight') && <TrendingUp className="h-8 w-8 text-accent" />}
                      {!article.tags.includes('Ports') && !article.tags.includes('Freight') && <BookOpen className="h-8 w-8 text-accent" />}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-primary mb-3 leading-tight group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{article.author}</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 p-0">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {regularArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Ahead of Industry Trends
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest insights, expert analysis, and strategic perspectives 
            delivered directly to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              placeholder="Enter your email" 
              className="bg-background text-foreground border-primary-foreground/20"
            />
            <Button variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm opacity-70 mt-4">
            Join 5,000+ logistics professionals who trust our insights.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Insights;