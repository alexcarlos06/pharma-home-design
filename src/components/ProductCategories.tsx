import { Pill, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const categories = [
  {
    icon: Pill,
    title: "Medicamentos",
    description: "Ampla variedade de medicamentos com e sem prescrição médica",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Heart,
    title: "Cuidados Pessoais",
    description: "Produtos de higiene, beleza e bem-estar para toda família",
    color: "bg-accent/10 text-accent"
  },
  {
    icon: Sparkles,
    title: "Vitaminas",
    description: "Suplementos e vitaminas para fortalecer sua saúde",
    color: "bg-secondary/10 text-secondary"
  }
];

const ProductCategories = () => {
  return (
    <section id="produtos" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Nossas Categorias
          </h2>
          <p className="text-lg text-muted-foreground">
            Encontre tudo o que você precisa para cuidar da sua saúde
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${category.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {category.description}
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

export default ProductCategories;
