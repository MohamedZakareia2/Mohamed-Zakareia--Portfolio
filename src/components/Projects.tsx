import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import dentiviaProject from '@/assets/dentivia-project.jpg';
import fooderaProject from '@/assets/foodera-project.jpg';
import prayerTimesProject from '@/assets/prayer-times-project.jpg';
import weatherProject from '@/assets/weather-project.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Dentivia - Dental Clinic',
      description: 'A modern, responsive single-page website for a dental clinic, built with React.js. It showcases the clinic\'s services, team, pricing, FAQs, and booking options in a clean, user-friendly layout.',
      image: dentiviaProject,
      tech: ['React.js', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/MohamedZakareia2/Dentivia---dentist-project',
      live: 'https://dentivia-dentist-project.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Foodera - Restaurant E-commerce',
      description: 'Foodera is a modern, fully responsive E-commerce restaurant website built with React.js. It provides a seamless food ordering experience with a clean UI, dynamic menu, and smooth user interactions.',
      image: fooderaProject,
      tech: ['React.js', 'E-commerce', 'Responsive Design', 'JavaScript'],
      github: 'https://github.com/MohamedZakareia2/Foodera-resturant',
      live: 'https://foodera-resturant.vercel.app',
      featured: true
    },
    {
      id: 3,
      title: 'Prayer Times App',
      description: 'A simple and responsive Prayer Time App built with React.js. It fetches real-time prayer timings using an API and displays them in an elegant UI.',
      image: prayerTimesProject,
      tech: ['React.js', 'REST API', 'JavaScript', 'CSS3'],
      github: 'https://github.com/MohamedZakareia2/Prayer-times',
      live: 'https://prayer-times-three.vercel.app',
      featured: false
    },
    {
      id: 4,
      title: 'WeatherNow - Weather App',
      description: 'A simple and responsive Weather App built with React.js that provides real-time weather updates based on user location or searched cities.',
      image: weatherProject,
      tech: ['React.js', 'Weather API', 'Geolocation', 'Responsive Design'],
      github: 'https://github.com/MohamedZakareia2/WeatherNow',
      live: 'https://weather-now-jade.vercel.app',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="portfolio-card group overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30" asChild>
                       <a href={project.github} target="_blank" rel="noopener noreferrer">
                         <Github size={16} />
                       </a>
                     </Button>
                     <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30" asChild>
                       <a href={project.live} target="_blank" rel="noopener noreferrer">
                         <ExternalLink size={16} />
                       </a>
                     </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                   <div className="flex gap-4">
                     <Button variant="outline" size="sm" className="flex-1" asChild>
                       <a href={project.github} target="_blank" rel="noopener noreferrer">
                         <Github className="mr-2" size={16} />
                         Code
                       </a>
                     </Button>
                     <Button size="sm" className="flex-1 btn-hero" asChild>
                       <a href={project.live} target="_blank" rel="noopener noreferrer">
                         <ExternalLink className="mr-2" size={16} />
                         Live Demo
                       </a>
                     </Button>
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="portfolio-card group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="p-0">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-muted text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                     <div className="flex gap-2">
                       <Button variant="ghost" size="sm" className="p-2" asChild>
                         <a href={project.github} target="_blank" rel="noopener noreferrer">
                           <Github size={16} />
                         </a>
                       </Button>
                       <Button variant="ghost" size="sm" className="p-2" asChild>
                         <a href={project.live} target="_blank" rel="noopener noreferrer">
                           <ExternalLink size={16} />
                         </a>
                       </Button>
                     </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="btn-secondary px-8 py-3">
              View All Projects
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
