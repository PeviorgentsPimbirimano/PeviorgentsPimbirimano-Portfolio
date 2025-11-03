import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { truncate } from 'node:fs';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'SpotOn (Parking App)',
      description: 'A full-stack parking finder app that enables users to search for, book, and manage parking spots. The project involved responsive design, map integration, and role-based dashboards for drivers and owners.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'CSS'],
      category: 'fullstack',
      liveUrl: 'parking-finder-app-navy.vercel.app',
      githubUrl: 'https://github.com/PeviorgentsPimbirimano/parking_finder_app',
      featured: true
    },
    {
      id: 2,
      title: 'Buildlink (Construction Company Website)',
      description: 'Contributed to the responsive redesign and frontend development of BuildLink’s corporate website. Ensured clear communication of services, mobile compatibility, and fast load times.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'JavaScript', 'CSS', 'Figma'],
      category: 'frontend',
      liveUrl: 'buildlink-xi.vercel.app',
      githubUrl: 'https://github.com/PeviorgentsPimbirimano/buildlink',
      featured: true
    },
    {
      id: 3,
      title: 'InternIn',
      description: 'I am also developing InternIn, a mobile application designed to connect students seeking internships or industrial attachments with employers. ',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Agrimo (Smart Farming Platform)',
      description: 'Worked on AGRIMO, an agriculture-focused website designed to empower farmers and agribusinesses with innovative digital solutions. The platform provides tools for crop management, farm analytics, and sustainable agricultural practices, all accessible through an intuitive and user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      technologies: ['Nextjs', 'TypeScript', 'CSS'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'A B L E',
      description: 'I worked on A B L E, a charity website for an organisation which empowers individuals with disabilities by providing accessible resources, community support, and personalized tools for skill development.',
      image: '/able.png',
      technologies: ['React.js', 'JavaScript', 'CSS'],
      category: 'frontend',
      liveUrl: 'able-charity-web.vercel.app',
      githubUrl: 'https://github.com/PeviorgentsPimbirimano/ABLE--CHARITY-WEB-',
      featured: true
    },
    {
      id: 6,
      title: 'DesynDev',
      description: 'I am also developing DesynDev, a mobile platform that connects UI/UX designers and frontend developers to collaborate, showcase their work, and grow their portfolios. Designers can post complete designs, while developers bring them to life through code.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Full Stack', value: 'fullstack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and experience 
            in web development.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.value)}
                className={activeFilter === filter.value 
                  ? "bg-primary text-primary-foreground" 
                  : "glass-card border-primary/30"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="glass-card border-primary/10 overflow-hidden group glow-on-hover"
            >
              {/* Project Image */}
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
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={`https://${project.liveUrl}`} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="bg-white/10 border-white/30 text-white">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="bg-white/10 border-white/30 text-white">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
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

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a href={`https://${project.liveUrl}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" className="w-full bg-primary text-primary-foreground">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="border-primary/30">
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="glass-card border-primary/30">
            View More Projects
            <ExternalLink className="ml-2 h-5 w-5" to="https://github.com/PeviorgentsPimbirimano" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
