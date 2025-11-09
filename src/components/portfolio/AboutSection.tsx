import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const stats = [
    {
      label: "Projects Completed",
      value: "5+",
      icon: <Code2 className="w-5 h-5" />,
    },
  ];

  const education = [
    {
      title: "Bachelor's Degree in Computer Science",
      school: "Higher Institute of Computer Science of Mahdia",
      period: "2024 - 2026",
      location: "Mahdia, Tunisie",
    },
    {
      title: "Bachelor's Degree in Computer Science",
      school: "Bou-Argoub Secondary School",
      period: "2023",
      location: "Bou-Argoub, Nabeul, Tunisie",
    },
  ];

  return (
    <section
      ref={elementRef}
      id="about"
      className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
            <span className="gradient-text">About</span> Me
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
           I'm Ibrahim Khalil, a computer science student passionate about software development and emerging technologies
            . I'm eager to apply my technical and problem-solving skills to real-world, innovative projects. I specialize in React and mobile development, and I enjoy building modern, 
            user-friendly web and mobile applications that deliver seamless user experiences.
          </p>
        </div>

        {/* Stats */}
        <div
          className={`mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 place-items-center justify-center gap-6 md:gap-8 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((s) => (
            <Card key={s.label} className="bg-card/70 border-border/60 w-full max-w-[520px] h-full">
              <CardContent className="p-6 flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  {s.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <Card
            className={`bg-card/70 border-border/60 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-primary" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((e) => (
                  <div
                    key={e.title}
                    className="p-4 rounded-lg border border-border/60 bg-background/40 hover:bg-background/60 transition-colors"
                  >
                    <div className="border-l-4 border-primary pl-3">
                      <div className="font-medium leading-snug break-words">{e.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {e.school} | {e.period} | {e.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

