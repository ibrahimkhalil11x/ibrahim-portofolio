import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SkillsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const skillCategories = [
    {
      title: "Programming Languages & Environments",
      skills: ["JavaScript", "TypeScript","Node.js" ,"C", "Java", "Python"],
      icon: "💻"
    },
    {
      title: "Frameworks & Libraries", 
      skills: ["React","Next.js", "Express.js", "Bootstrap", "Tailwind"],
      icon: "🚀"
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"],
      icon: "🗄️"
    },
    {
      title: "Development Tools",
      skills: ["Git", "GitHub", "Docker","Linux"],
      icon: "🛠️"
    }
  ];

  return (
    <section ref={elementRef} id="skills" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across modern development stack
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover border-0 bg-gradient-to-br from-card to-secondary/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
