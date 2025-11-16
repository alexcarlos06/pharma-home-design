import { Shield, Clock, Users } from "lucide-react";
import { useSiteConfig } from "@/hooks/useSiteConfig";

const features = [
  {
    icon: Shield,
    title: "Confiança",
    description: "Produtos certificados e de qualidade"
  },
  {
    icon: Clock,
    title: "Atendimento",
    description: "Horário estendido para sua comodidade"
  },
  {
    icon: Users,
    title: "Experiência",
    description: "Mais de 20 anos cuidando de você"
  }
];

const About = () => {
  const { config } = useSiteConfig();
  
  if (!config) return null;

  return (
    <section id="servicos" className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              {config.about.title}
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              {config.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col justify-center gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
