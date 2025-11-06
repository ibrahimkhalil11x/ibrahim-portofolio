import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";
import emailjs from "emailjs-com";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Valid email is required."),
  subject: z.string().min(1, "Subject is required."),
  message: z.string().min(1, "Message is required.")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  
  const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "khalil.ibrahim.dev@gmail.com",
    href: "mailto:khalil.ibrahim.dev@gmail.com",
    color: "text-blue-500"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+216 51 395 943", 
    href: "tel:+21651395943",
    color: "text-green-500"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Ibrahim Khalil",
    href: "https://www.linkedin.com/in/ibrahim-khalil",
    color: "text-blue-600"
  }
];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const SERVICE_ID = "service_0g31a1b";
      const TEMPLATE_ID = "template_21cbgrp";
      const USER_ID = "3QpZ2QDHMiYv_p9fP";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          html_message: data.message,
        },
        USER_ID
      );

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      reset();
    } catch (e: any) {
      toast({
        title: "Could not send message",
        description: e?.message || "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleContactAction = async (method: typeof contactMethods[number]) => {
    try {
      if (method.label === "Email") {
        await navigator.clipboard.writeText(String(method.value));
        toast({
          title: "Email copied",
          description: String(method.value),
        });
        return;
      }
      if (method.href) {
        const target = method.href.startsWith("mailto:") || method.href.startsWith("tel:") ? "_self" : "_blank";
        window.open(method.href, target);
      }
    } catch {
      if (method.href) {
        const target = method.href.startsWith("mailto:") || method.href.startsWith("tel:") ? "_self" : "_blank";
        window.open(method.href, target);
      }
    }
  };

  return (
    <section ref={elementRef} id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contact Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project or collaboration opportunity? 
            I'm always open to new challenges and innovative ideas.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className={`card-hover border-0 bg-gradient-to-br from-card via-card to-primary/5 glow-effect transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  {/* <div>
                    <h3 className="text-2xl font-bold mb-6">Address:</h3>
                    <p className="text-muted-foreground mb-2">Tunis, Tunisia</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6">Phone:</h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">+216 53 970 966</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6">Email:</h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">khalil.ibrahim.dev@gmail.com</p>
                    </div>
                  </div> */}

                  <div className="space-y-6 pt-6 max-[458px]:flex max-[458px]:gap-4 max-[458px]:space-y-0 max-[458px]:justify-center max-[458px]:items-center max-[458px]:flex-wrap">
                    {contactMethods.map((method, index) => {
                      const IconComponent = method.icon;
                      return (
                        <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors max-[458px]:p-0 max-[458px]:bg-transparent max-[458px]:hover:bg-transparent max-[458px]:rounded-none">
                          <button
                            type="button"
                            aria-label={method.label}
                            onClick={() => handleContactAction(method)}
                            className={`p-3 rounded-full bg-primary/10 ${method.color} inline-flex items-center justify-center hover:opacity-90 transition-opacity`}
                          >
                            <IconComponent size={20} />
                          </button>
                          <div className="flex-1 min-w-0 block max-[458px]:hidden">
                            <p className="font-medium text-sm text-muted-foreground">{method.label}</p>
                            <p className="text-foreground font-semibold break-words">{method.value}</p>
                          </div>
                          {method.href && method.href !== "#" && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="opacity-70 hover:opacity-100 inline-flex max-[458px]:hidden"
                              onClick={() => handleContactAction(method)}
                            >
                              <ExternalLink size={16} />
                            </Button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name*</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          {...register("name")}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email*</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          {...register("email")}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Subject"
                        {...register("subject")}
                        className={errors.subject ? "border-destructive" : ""}
                      />
                      {errors.subject && (
                        <p className="text-sm text-destructive">{errors.subject.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Write Your Message*</Label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={6}
                        {...register("message")}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;