import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/mohzak',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/mohzak',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:mohzak@example.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Mohamed Zakareia
                </span>
              </h3>
              <p className="text-secondary-foreground/80 mb-6 max-w-md">
                Frontend Developer passionate about creating beautiful, functional, and user-friendly web applications. 
                Let's build something amazing together.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 bg-secondary-foreground/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-2 text-secondary-foreground/80">
                <p>Cairo, Egypt</p>
                <p>mohamedzakareia2@gmail.com</p>
                <p>+20112 6047849</p>
              </div>
              
              <div className="mt-6">
                <p className="text-sm text-secondary-foreground/80 mb-2">
                  Available for freelance work
                </p>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-secondary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-secondary-foreground/80 mb-4 md:mb-0">
                <p>© {currentYear} Mohamed Zakareia. Made with</p>
                <Heart className="mx-2 text-red-500" size={16} fill="currentColor" />
                <p>using React & Tailwind CSS</p>
              </div>

              {/* Scroll to Top Button */}
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="bg-transparent border-secondary-foreground/20 hover:bg-primary hover:border-primary hover:text-primary-foreground"
              >
                <ArrowUp size={16} className="mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;