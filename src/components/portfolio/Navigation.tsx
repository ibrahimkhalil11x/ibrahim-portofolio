import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Briefcase, Code, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = navItems[0].id;
      
      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop) {
          const sectionId = section.id;
          currentSection = sectionId;
        }
      }
      
      setActiveSection(currentSection);
      
      // Update scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-card/80 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-elegant">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 transition-all duration-500 ease-in-out transform ${
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-md scale-110" 
                      : "hover:bg-primary/10 hover:text-primary hover:scale-105"
                  }`}
                >
                  <IconComponent size={16} className="mr-2" />
                  {item.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-glow rounded-full animate-pulse" />
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 md:hidden w-[calc(100%-2rem)] max-w-[420px] flex justify-end">
        <Button
          variant="default"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary text-primary-foreground shadow-elegant transition-transform duration-300 hover:scale-110"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>

        {isOpen && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-elegant p-2 w-full max-w-[420px] animate-fade-in">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full justify-start mb-1 transition-all duration-300 ${
                    isActive 
                      ? "bg-primary text-primary-foreground scale-105" 
                      : "hover:bg-primary/10 hover:text-primary hover:scale-105"
                  }`}
                >
                  <IconComponent size={16} className="mr-2" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        )}
      </nav>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-secondary">
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-150"
          style={{
            width: `${scrollProgress}%`
          }}
        />
      </div>
    </>
  );
};
export default Navigation;