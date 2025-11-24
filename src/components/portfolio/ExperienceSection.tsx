import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ExperienceSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const internships = [
    {
      company: "Dr Oetker GIAS",
      position: "Full Stack Developer",
      period: "06/2025 - 07/2025",
      location: "Grombalia, Nabeul, Tunisia",
      type: "Optional Internship",
      achievements: [
        "Development of an internal website for employee evaluation and performance tracking."
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Postman",
        "PostgreSQL",
        "GitHub",
        
      ],
    },
  ];

  return (
    <section ref={elementRef} id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Practical <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gaining hands-on experience through internships and practical projects
          </p>
        </div>

        {/* Internship */}
        <div>
          <h3
            className={`text-2xl font-bold mb-8 text-center transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Internship
          </h3>
          <div
            className={`grid grid-cols-1 lg:grid-cols-1 gap-8 transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {internships.map((internship, index) => (
              <Card
                key={index}
                className="card-hover border-0 bg-gradient-to-br from-card to-secondary/30"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold gradient-text mb-2">
                      {internship.position}
                    </h4>
                    <div className="flex items-center gap-2 text-lg font-semibold text-foreground mb-2">
                      <Building size={18} className="text-primary" />
                      {internship.company}
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary text-sm"
                    >
                      {internship.type}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-2 mb-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-primary" />
                      <span className="text-sm">{internship.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-primary" />
                      <span className="text-sm">{internship.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {internship.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1">
                    {internship.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
