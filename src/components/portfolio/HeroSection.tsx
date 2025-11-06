import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  FileText,
  ChevronDown,
  Globe,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/20 to-background py-20"
    >
      <div className="container mx-auto px-6">
        <Card
          className={`max-w-4xl mx-auto p-8 md:p-12 card-hover bg-gradient-to-br from-card via-card to-secondary/30 border-0 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* Profile Image */}
<div
  className={`transition-all duration-1000 delay-200 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <div className="relative flex items-center justify-center">
    {/* Glow effect */}
    <div className="absolute -inset-3 rounded-full bg-blue-40*/20 blur-2xl"></div>
<div className="w-48 h-60 md:w-60 md:h-72 rounded-[50%] overflow-hidden border-4 border-blue-100 shadow-lg">
  <img
    src="pic3.png"
    alt="Ibrahim Khalil"
  />
</div>

  </div>
</div>

            {/* Hero Content */}
            <div className="flex-1 text-center md:text-left">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-1000 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <span className="gradient-text">Ibrahim</span>
                <br />
                <span className="text-foreground">Khalil</span>
              </h1>

              <h2
                className={`text-xl md:text-2xl text-muted-foreground mb-6 font-medium transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Full Stack Developer
              </h2>

              <p
                className={`text-muted-foreground mb-8 text-lg leading-relaxed transition-all duration-1000 delay-600 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Passionate about creating innovative web solutions.
                Specializing in modern JavaScript frameworks and React development.
              </p>

              {/* Contact Info */}
              <div
                className={`flex flex-wrap justify-center md:justify-start gap-4 mb-8 transition-all duration-1000 delay-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  <span>Tunis, Tunisia</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={16} className="text-primary" />
                  <span>+216 51 395 943</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={16} className="text-primary" />
                  <span>khalil.ibrahim.dev@gmail.com</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-wrap justify-center md:justify-start gap-4 max-[643px]:grid max-[643px]:grid-cols-1 min-[644px]:flex-nowrap transition-all duration-1000 delay-800 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <Button
                  variant="default"
                  size="lg"
                  className="glow-effect hover:scale-105 transition-transform bg-gradient-to-r from-primary to-primary-glow min-w-[200px] max-[643px]:order-1 max-[643px]:justify-self-center"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Mail className="mr-2" size={18} />
                  Get In Touch
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="card-hover border-primary/20 hover:border-primary min-w-[200px] max-[643px]:order-2 max-[643px]:justify-self-center"
                    >
                      <FileText className="mr-2" size={18} />
                      Resume
                      <ChevronDown className="ml-2" size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuItem
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/1VMd3pQmKVmHYHVUKkdK6qhgEO7of1MxC/view?usp=sharing",
                          "_blank"
                        )
                      }
                      className="cursor-pointer"
                    >
                      <Globe className="mr-2" size={16} />
                      Version Française
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/1BYw2WYBSTD1fzwEIgVyycMuIMMXvbyuH/view?usp=sharing",
                          "_blank"
                        )
                      }
                      className="cursor-pointer"
                    >
                      <Globe className="mr-2" size={16} />
                      English Version
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Social Icons */}
                <div className="flex items-center gap-3 max-[643px]:order-3 max-[643px]:mt-2 max-[643px]:justify-center">
                  <a
                    href="https://www.linkedin.com/in/ibrahim-khalil1117/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    title="LinkedIn"
                    className="h-11 w-11 flex items-center justify-center text-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={22} />
                  </a>
                  <a
                    href="https://github.com/ibrahimkhalil11x"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    title="GitHub"
                    className="h-11 w-11 flex items-center justify-center text-foreground hover:text-primary transition-colors"
                  >
                    <Github size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Scroll Indicator */}
      <button
        aria-label="Scroll to About section"
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="group absolute left-1/2 -translate-x-1/2 bottom-5 md:bottom-8 text-muted-foreground hover:text-primary transition-colors"
      >
        <div className="relative">
          <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-current/60 flex items-center justify-center bg-background/40 backdrop-blur shadow-sm transition-transform group-hover:scale-105">
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce-soft" />
          </div>
          <div className="absolute inset-0 rounded-full border border-current/20 -z-10 scale-110 opacity-70 group-hover:opacity-90" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
