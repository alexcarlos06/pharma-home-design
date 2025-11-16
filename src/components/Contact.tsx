import { Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    content: "(11) 3456-7890",
    subContent: "Atendimento via WhatsApp"
  },
  {
    icon: MapPin,
    title: "Endereço",
    content: "Av. Saúde, 1234 - Centro",
    subContent: "São Paulo - SP"
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg a Sáb: 8h às 22h",
    subContent: "Domingo: 9h às 18h"
  }
];

const Contact = () => {
  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                    {info.title}
                  </h3>
                  
                  <p className="mb-1 text-lg font-semibold text-foreground">
                    {info.content}
                  </p>
                  
                  <p className="text-sm text-muted-foreground">
                    {info.subContent}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
