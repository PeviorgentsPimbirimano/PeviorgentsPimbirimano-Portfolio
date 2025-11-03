import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10" />

      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Hero Content */}
        <div className={`space-y-8 ${mounted ? 'fade-in-up' : 'opacity-0'}`}>
          {/* Status Badge */}
          <Badge
            variant="outline"
            className={`glass-card border-primary/30 text-primary ${mounted ? 'fade-in-up fade-in-up-delay-1' : 'opacity-0'}`}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            Available for hire
          </Badge>

          {/* Main heading */}
          <h1 className={`text-5xl md:text-7xl font-bold ${mounted ? 'fade-in-up fade-in-up-delay-1' : 'opacity-0'}`}>
            Hi, I'm{' '}
            <span className="gradient-text">Peviorgents Pimbirimano</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto ${mounted ? 'fade-in-up fade-in-up-delay-2' : 'opacity-0'}`}>
            A passionate <strong className="text-primary">Software Developer</strong> who loves creating beautiful,
            functional, and user-friendly digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${mounted ? 'fade-in-up fade-in-up-delay-3' : 'opacity-0'}`}>
            <Button
              size="lg"
              className="glow-on-hover bg-primary text-primary-foreground px-8 py-6 text-lg"
              onClick={() => scrollToSection('portfolio')}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>

            <a
              href="./Peviorgents_Pimbirimano_CV.pdf" // ✅ path to your file in /public
              download="Peviorgents_Pimbirimano_CV.pdf" // ✅ file name for download
              className="inline-block"
            >
              <Button
                size="lg"
                variant="outline"
                className="glass-card border-primary/30 px-8 py-6 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>

          </div>

          {/* Social Links */}
          <div className={`flex justify-center space-x-6 pt-8 ${mounted ? 'fade-in-up fade-in-up-delay-3' : 'opacity-0'}`}>
            <a
              href="https://github.com/PeviorgentsPimbirimano"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/peviorgents-pimbirimano-a5895037b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:peviorgentspimbirimano@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;