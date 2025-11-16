import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/pharmacy-hero.jpg";
import { useSiteConfig } from "@/hooks/useSiteConfig";

const Hero = () => {
  const { config } = useSiteConfig();
  
  if (!config) return null;
  
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary py-20 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Farmácia" 
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">{config.hero.badge}</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            {config.hero.title}
          </h1>
          
          <p className="mb-8 text-lg text-white/90 md:text-xl">
            {config.hero.description}
          </p>
          
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              {config.hero.primaryButton}
            </Button>
            <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary sm:w-auto">
              {config.hero.secondaryButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
