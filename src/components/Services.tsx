import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Smartphone, Code2, Database, Paintbrush, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Creating responsive, fast, and scalable web applications using modern frameworks and best practices.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Building mobile-responsive interfaces that work seamlessly across all devices and screen sizes.',
      technologies: ['Responsive Design', 'Mobile UX', 'CSS Grid']
    },
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Crafting interactive user interfaces with clean, maintainable code and optimal performance.',
      technologies: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS']
    },
    {
      icon: Database,
      title: 'Backend Integration',
      description: 'Connecting frontends with robust backend services, APIs, and database management systems.',
      technologies: ['REST APIs', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: Paintbrush,
      title: 'UI/UX Implementation',
      description: 'Translating designs into pixel-perfect, accessible, and user-friendly interfaces.',
      technologies: ['Figma', 'CSS', 'Animation', 'Accessibility']
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Improving application speed, SEO, and user experience through code optimization.',
      technologies: ['Webpack', 'Core Web Vitals', 'SEO', 'Caching']
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I offer a comprehensive range of development services to help bring your 
            ideas to life with modern, efficient solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card border-primary/10 glow-on-hover group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;