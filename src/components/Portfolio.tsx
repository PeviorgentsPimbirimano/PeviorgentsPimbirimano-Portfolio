import { useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye, Download } from 'lucide-react';

/**
 * Types
 */
type ProjectCategory = 'frontend' | 'fullstack';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  liveUrl?: string; // full URL (https://...)
  githubUrl?: string;
  featured?: boolean;
  kind?: 'web' | 'apk';
};

/**
 * Helpers
 */
const isApk = (url?: string) => !!url && url.toLowerCase().endsWith('.apk');

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'SpotOn (Parking App)',
      description:
        'A full-stack parking finder app that enables users to search for, book, and manage parking spots. Responsive UI, maps, and role-based dashboards.',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'CSS'],
      category: 'fullstack',
      liveUrl: 'https://parking-finder-app-navy.vercel.app',
      githubUrl: 'https://github.com/PeviorgentsPimbirimano/parking_finder_app',
      featured: true,
      kind: 'web',
    },
    {
      id: 2,
      title: 'Buildlink (Construction Company Website)',
      description:
        'Responsive redesign and frontend development for BuildLink’s corporate website with a focus on performance and mobile UX.',
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'JavaScript', 'CSS', 'Figma'],
      category: 'frontend',
      liveUrl: 'https://buildlink-xi.vercel.app',
      githubUrl: 'https://github.com/PeviorgentsPimbirimano/buildlink',
      featured: true,
      kind: 'web',
    },
    {
      id: 3,
      title: 'InternIn',
      description:
        'A mobile app connecting students seeking internships or industrial attachments with employers.',
      image:
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      category: 'fullstack',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Agrimo (Smart Farming Platform)',
      description:
        'Agriculture-focused platform providing tools for crop management, analytics, and sustainable practices.',
      image: '/agrimo.png',
      technologies: ['Next.js', 'TypeScript', 'CSS'],
      category: 'frontend',
      liveUrl: 'https://agrimo-rho.vercel.app',
      githubUrl: 'https://github.com/PeviorgentsPimbirimano/Agrimo',
      featured: true,
      kind: 'web',
    },
    {
      id: 5,
      title: 'A B L E',
      description:
        'Charity website empowering individuals with disabilities through accessible resources and community support.',
      image: '/able.png',
      technologies: ['React', 'JavaScript', 'CSS'],
      category: 'frontend',
      liveUrl: 'https://able-charity-web.vercel.app',
      githubUrl: 'https://github.com/PeviorgentsPimbirimano/ABLE--CHARITY-WEB-',
      featured: true,
      kind: 'web',
    },
    {
      id: 6,
      title: 'DesynDev',
      description:
        'Mobile platform connecting UI/UX designers and frontend developers to collaborate and showcase work.',
      image: '/desyndev.png',
      technologies: ['React Native', 'TypeScript', 'Expo'],
      category: 'frontend',
      liveUrl: 'https://expo.dev/artifacts/eas/2HmhmnvVz47o9UsvLQXFFn.apk',
      githubUrl: 'https://github.com/PeviorgentsPimbirimano/DesynDev',
      kind: 'apk',
    },
  ];

  const filters = useMemo(
    () => [
      { label: 'All', value: 'all' as const },
      { label: 'Frontend', value: 'frontend' as const },
      { label: 'Full Stack', value: 'fullstack' as const },
    ],
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <section id="portfolio" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A selection of projects showcasing my skills in web and mobile development.
          </p>

          <div className="flex justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter.value)}
                className={
                  activeFilter === filter.value
                    ? 'bg-primary text-primary-foreground'
                    : 'glass-card border-primary/30'
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const apk = project.kind === 'apk' || isApk(project.liveUrl);
            const primaryLabel = apk ? 'Download APK' : 'Live Demo';
            const PrimaryIcon = apk ? Download : Eye;

            return (
              <Card
                key={project.id}
                className="glass-card border-primary/10 overflow-hidden group glow-on-hover"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="bg-white/10 border-white/30 text-white">
                          <PrimaryIcon className="h-4 w-4 mr-2" />
                          {primaryLabel}
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="bg-white/10 border-white/30 text-white">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" className="w-full bg-primary text-primary-foreground">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {primaryLabel}
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="border-primary/30">
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/PeviorgentsPimbirimano" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="glass-card border-primary/30">
              View More Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
