import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/60 to-secondary/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <p className="text-primary font-medium text-lg mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="hero-text-glow">Mohamed Zakareia</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              I build modern, responsive, and user-friendly web applications that deliver exceptional digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                className="btn-hero px-8 py-6 text-lg font-semibold"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                variant="outline"
                className="btn-secondary px-8 py-6 text-lg font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>

            <div className="flex items-center gap-6">
              <p className="text-muted-foreground font-medium">Follow me:</p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/MohamedZakareia2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mohamed-zakareia-a9442b356/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mohamedzakareia2@gmail.com"
                  className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;