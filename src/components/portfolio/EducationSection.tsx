import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, School } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EducationSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const education = [
    {
      degree: "Professional Master's Degree",
      field: "Information Systems and Knowledge Engineering", 
      institution: "Faculty of Economics and Management of Nabeul",
      period: "2021 - 2023",
      type: "Master's",
      icon: "🎓"
    },
    {
      degree: "Bachelor's Degree",
      field: "Applied Computer Science",
      institution: "Faculty of Economics and Management of Nabeul", 
      period: "2018 - 2021",
      type: "Bachelor's",
      icon: "📚"
    }
  ];

  const certifications = [

  ];

  const languages = [
    { language: "Arabic", level: "Native", proficiency: 100 },
    { language: "French", level: "Fluent", proficiency: 90 },
    { language: "English", level: "Fluent", proficiency: 85 }
  ];

  return (
    <section ref={elementRef} id="education" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in technology and business
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Education */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Academic Background
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-hover border-0 bg-gradient-to-r from-card to-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{edu.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                          <div>
                            <h4 className="text-xl font-bold gradient-text">{edu.degree}</h4>
                            <p className="text-lg text-foreground font-medium">{edu.field}</p>
                          </div>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {edu.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <School size={16} className="text-primary" />
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-primary" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <h3 className="text-2xl font-bold mb-6 mt-12 flex items-center gap-2">
              <Badge className="bg-primary text-primary-foreground">🏅</Badge>
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-hover border-0 bg-gradient-to-r from-card to-secondary/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{cert.badge}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg gradient-text mb-1">{cert.title}</h4>
                        <p className="text-foreground font-medium">{cert.issuer}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={14} className="text-primary" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      {cert.link && (
                        <Badge 
                          variant="outline" 
                          className="border-primary/30 text-primary hover:bg-primary/10 cursor-pointer"
                          onClick={() => window.open(cert.link, '_blank')}
                        >
                          View Certificate
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages & Additional Info */}
          <div className="space-y-8">
            {/* Languages */}
            <Card className="card-hover border-0 bg-gradient-to-br from-card to-secondary/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  🌍 Languages
                </h3>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{lang.language}</span>
                        <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                          {lang.level}
                        </Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-500"
                          style={{ width: `${lang.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Volunteer Work */}
            <Card className="card-hover border-0 bg-gradient-to-br from-card to-secondary/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  🤝 Volunteer Work
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold gradient-text">Neapolis Marketing Consulting (NMC)</h4>
                    <p className="text-muted-foreground text-sm">Participation in YounPreneur 4.0 seminar</p>
                    <p className="text-xs text-muted-foreground">2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="card-hover border-0 bg-gradient-to-br from-card to-secondary/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  ⚡ Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    🏈 Football
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    💪 Gym
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    🎮 Video Games
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;