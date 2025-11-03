import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Python',
    'PostgreSQL', 'Git', 'JavaScript', 'React Native', 'Figma'
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code'
    },
    {
      icon: Palette,
      title: 'UI/UX Focus',
      description: 'Creating beautiful interfaces with excellent user experience'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in team environments and Agile workflows'
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a detail-oriented developer with a passion for creating exceptional 
            digital experiences and solving complex problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I discovered my passion for programming during college when I built my first 
                website. Since then, I've been constantly learning and improving my skills, 
                focusing on modern web technologies and best practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, efficient code and creating user interfaces that 
                are not only functional but also delightful to use. I'm always eager to take 
                on new challenges and contribute to innovative projects.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="glass-card border-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">What I Bring</h3>
            <div className="grid gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="glass-card border-primary/10 glow-on-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{highlight.title}</h4>
                        <p className="text-muted-foreground text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;