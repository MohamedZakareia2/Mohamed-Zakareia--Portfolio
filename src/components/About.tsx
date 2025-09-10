import { Download, User, Code, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Code, label: 'Years Experience', value: '1+' },
    { icon: User, label: 'Projects Completed', value: '4+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '∞' }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate frontend developer with a love for creating beautiful and functional web experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold mb-6">My Story</h3>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  I'm a passionate Frontend Developer with 1 year of experience in building modern, 
                  responsive web applications. My journey in web development started with a curiosity about 
                  how websites work, and it has evolved into a career dedicated to creating exceptional user experiences.
                </p>
                <p>
                  I specialize in React.js and modern JavaScript frameworks, with a strong focus on clean code, 
                  performance optimization, and responsive design. I believe that great web applications should 
                  not only look beautiful but also provide seamless functionality across all devices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge with the developer community.
                </p>
              </div>

              <div className="mt-8">
                <a 
                  href="/Mohamed-Zakareia-CV.pdf" 
                  download="Mohamed-Zakareia-CV.pdf"
                  className="btn-hero px-6 py-3 inline-flex items-center"
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </a>
              </div>

            </div>

            <div className="grid grid-cols-1 gap-6 animate-scale-in">
              {stats.map((stat, index) => (
                <Card key={index} className="portfolio-card p-6">
                  <CardContent className="flex items-center space-x-4 p-0">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <stat.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-muted-foreground">{stat.label}</p>
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