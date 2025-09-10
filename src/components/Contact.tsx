import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mohamedzakareia2@gmail.com',
      href: 'mohamedzakareia2@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+20112 6047849',
      href: 'tel:+20112 6047849'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Cairo, Egypt',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/MohamedZakareia2',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mohamed-zakareia-a9442b356/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com/mohzak',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card className="portfolio-card p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full"
                        placeholder="Tell me about your project or just say hello..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full btn-hero py-6 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="mr-2" size={20} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-scale-in">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Let's connect</h3>
                  <p className="text-muted-foreground mb-8">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you're a company looking to hire, or you're a fellow developer 
                    who wants to collaborate, I'd love to hear from you.
                  </p>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="portfolio-card">
                      <CardContent className="flex items-center p-6">
                        <div className="p-3 bg-primary/10 rounded-lg mr-4">
                          <info.icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold">{info.title}</h4>
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Follow me on social media</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${social.color}`}
                      >
                        <social.icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <Card className="portfolio-card bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-bold mb-2">Ready to start a project?</h4>
                    <p className="text-muted-foreground mb-4">
                      Let's discuss your ideas and bring them to life
                    </p>
                    <Button className="btn-hero">
                      <Mail className="mr-2" size={16} />
                      Start a Conversation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;