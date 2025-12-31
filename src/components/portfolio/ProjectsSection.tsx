import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, Link, Image as ImageIcon, Globe } from "lucide-react";
import leadsScreenshot1 from "@/lib/img/image_original.png";
import leadsScreenshot2 from "@/lib/img/image_original2.png";
import blacksmithCover from "@/lib/img/Capture d'écran 2025-09-11 143840.png";
import blacksmithShot1 from "@/lib/img/Capture d'écran 2025-09-11 143436.png";
import blacksmithShot2 from "@/lib/img/Capture d'écran 2025-09-11 143555.png";
import referral3 from "@/lib/img/image_original3.png";
import referral4 from "@/lib/img/image_original4.png";
import referral5 from "@/lib/img/image_original5.png";

// 🔹 Add placeholder images (you'll replace these later)
import employee1 from "@/lib/img/employee1.png";
import employee2 from "@/lib/img/employee2.png";
import employee3 from "@/lib/img/employee3.png";

// Spring Boot Project Images
const spring1 = "/spring1.png";
const spring2 = "/spring2.png";
const spring3 = "/spring3.png";

type Project = {
  title: string;
  description: string;
  type: "Web Application";
  skills: string[];
  links?: {
    github?: string;
    live?: string;
  };
  images?: string[];
};

const ProjectsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const resolveAssetUrl = (path: string) => {
    if (!path) return path;
    if (path.startsWith("http")) return path;
    if (path.startsWith("/"))
      return `${import.meta.env.BASE_URL}${path.slice(1)}`;
    return `${import.meta.env.BASE_URL}${path}`;
  };

  const allProjects: Project[] = [
    // 🔹 Employee Evaluation Website
    {
      title: "Employee Evaluation Website",
      description:
        "Development of an internal website for employee evaluation and performance tracking.",
      type: "Web Application",
      skills: [
        "React",
        "Express.js",
        "TypeScript",
        "Postman",
        "Web API",
        "PostgreSQL",
      ],
      links: {
        github: "https://github.com/ibrahimkhalil11x/Stage",
      },
      images: [employee1, employee2, employee3], 
    },
    // 🔹 Spring Boot Project
    {
      title: "School Management System",
      description:
        "A comprehensive school administration platform where teachers can add and manage courses, and students can download course materials. Built with Spring Boot backend, featuring full CRUD operations, user authentication, and MySQL database.",
      type: "Web Application",
      skills: [
        "Spring Boot",
        "React",
        "Express.js",
        "TypeScript",
        "Postman",
        "Web API",
        "MySQL",
      ],
      links: {
        github: "https://github.com/ibrahimkhalil11x/ecole-springboot",
      },
      images: [spring1, spring2, spring3], 
    },
    {
      title: "Leads Management System",
      description:
        "Responsive app with Airtable-like features: dashboard, leads list, datasets, filters, import CSV files and full CRUD.",
      type: "Web Application",
      skills: [
        "JavaScript",
        "Node.js",
        "Prisma",
        "Airtable",
        "Dashboard",
        "n8n",
        "Vercel",
      ],
      images: [leadsScreenshot1, leadsScreenshot2],
    },
  
    {
      title: "Blacksmith Service Website",
      description:
        "A full-stack web application to present a blacksmith's services, showcase project galleries, share professional experience, and provide contact options.",
      type: "Web Application",
      skills: [
        "React",
        "Express.js",
        "TypeScript",
        "Tailwind CSS",
        "GitHub",
        "Vercel",
      ],
      images: [blacksmithCover, blacksmithShot1, blacksmithShot2],
    },
    {
      title: "Referral Client System",
      description:
        "Customer Referral System for an online sales platform with end-to-end flows.",
      type: "Web Application",
      skills: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Bootstrap",
        "Prisma",
        "PostgreSQL",
      ],
      images: [referral3, referral4, referral5],
    },
  ];

  const getTypeMeta = () => ({
    Icon: Globe,
    label: "Web Application",
  });

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (activeProject?.images) {
      setCurrentImageIndex((prev) =>
        prev === activeProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (activeProject?.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? activeProject.images.length - 1 : prev - 1
      );
    }
  };

  const ProjectCard = ({ project }: { project: Project }) => {
    const { Icon, label } = getTypeMeta();
    return (
      <Card className="card-hover border-0 bg-gradient-to-br from-card to-secondary/30 h-full overflow-hidden">
        <CardContent className="p-0 h-full flex flex-col">
          {project.images && project.images.length > 0 && (
            <div
              className="relative w-full h-48 cursor-pointer group"
              onClick={() => handleProjectClick(project)}
            >
              <img
                src={resolveAssetUrl(project.images[0])}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-2">
                  <ImageIcon size={24} className="text-gray-800" />
                </div>
              </div>
            </div>
          )}

          <div className="p-6 flex flex-col flex-1">
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 inline-flex items-center justify-center text-primary">
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-foreground">
                    {project.title}
                  </h4>
                </div>
              </div>

              <div className="w-full h-6 rounded-md bg-primary/10 flex items-center px-2 text-primary text-xs">
                <Icon size={12} className="mr-1" />
                <span>{label}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.skills.slice(0, 4).map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-primary/30 text-primary text-xs px-2 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
                {project.skills.length > 4 && (
                  <Badge
                    variant="outline"
                    className="border-primary/30 text-primary text-xs px-2 py-1"
                  >
                    +{project.skills.length - 4} more
                  </Badge>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.links?.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      window.open(project.links!.github!, "_blank")
                    }
                    className="text-xs"
                  >
                    <Github className="mr-1" size={14} />
                    GitHub
                  </Button>
                )}
                {project.links?.live && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      window.open(project.links!.live!, "_blank")
                    }
                    className="text-xs"
                  >
                    <Link className="mr-1" size={14} />
                    Live
                  </Button>
                )}
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => handleProjectClick(project)}
                  className="text-xs"
                >
                  <ImageIcon className="mr-1" size={14} />
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section
      ref={elementRef}
      id="projects"
      className="py-20 bg-gradient-to-br from-secondary/20 to-background"
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Real-world work focused on full-stack web development
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {allProjects.map((p) => (
            <div key={p.title} className="h-full">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!activeProject} onOpenChange={() => setActiveProject(null)}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] overflow-y-auto">
          {activeProject && (
            <div className="space-y-6">
              {activeProject.images && (
                <div className="relative">
                  <img
                    src={resolveAssetUrl(
                      activeProject.images[currentImageIndex]
                    )}
                    alt={`${activeProject.title} ${currentImageIndex + 1}`}
                    className="w-full h-64 md:h-80 object-contain rounded-lg bg-muted p-2 border border-border/50"
                  />
                  {activeProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                      >
                        ‹
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>
              )}

              <h2 className="text-2xl font-bold text-center">
                {activeProject.title}
              </h2>

              <div className="flex flex-wrap gap-2 justify-center">
                {activeProject.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-primary/30 text-primary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <p className="text-muted-foreground text-center leading-relaxed">
                {activeProject.description}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
