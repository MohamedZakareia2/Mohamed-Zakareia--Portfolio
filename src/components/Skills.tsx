import { 
  Code2, 
  Palette, 
  Smartphone, 
  Database, 
  Globe, 
  Zap,
  Layers,
  Wrench
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: Code2,
      skills: [
        { name: 'React.js', level: 95, description: 'Building dynamic user interfaces' },
        { name: 'JavaScript (ES6+)', level: 90, description: 'Modern JavaScript development' },
        { name: 'HTML5 & CSS3', level: 95, description: 'Semantic markup and styling' },
        { name: 'REST API', level: 85, description: 'API integration and consumption' }
      ]
    },
    {
      title: 'Styling & Design',
      icon: Palette,
      skills: [
        { name: 'Tailwind CSS', level: 90, description: 'Utility-first CSS framework' },
        { name: 'Material UI', level: 85, description: 'React component library' },
        { name: 'Bootstrap', level: 80, description: 'Responsive design framework' },
        { name: 'Responsive Design', level: 95, description: 'Mobile-first approach' }
      ]
    },
    {
      title: 'Tools & Integration',
      icon: Wrench,
      skills: [
        { name: 'REST API', level: 85, description: 'API integration and consumption' },
        { name: 'Git & GitHub', level: 90, description: 'Version control and collaboration' },
        { name: 'Vite & Webpack', level: 80, description: 'Build tools and bundlers' },
        { name: 'Performance Optimization', level: 85, description: 'Fast, efficient applications' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="portfolio-card p-8 rounded-xl animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <category.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-badge p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">{skill.name}</h4>
                        <span className="text-sm text-primary font-medium">{skill.level}%</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Pills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Redux', 'Next.js', 'Sass/SCSS', 'Figma', 'Adobe XD', 
                'jQuery', 'Chart.js', 'Framer Motion', 'Jest', 'ESLint'
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="skill-badge px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;