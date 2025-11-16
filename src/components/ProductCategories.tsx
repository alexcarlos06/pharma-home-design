import { Card, CardContent } from "./ui/card";
import { useSiteConfig } from "@/hooks/useSiteConfig";
import medicinesImg from "@/assets/medicines-category.jpg";
import personalCareImg from "@/assets/personal-care-category.jpg";
import vitaminsImg from "@/assets/vitamins-category.jpg";

const imageMap: Record<string, string> = {
  "/src/assets/medicines-category.jpg": medicinesImg,
  "/src/assets/personal-care-category.jpg": personalCareImg,
  "/src/assets/vitamins-category.jpg": vitaminsImg,
};

const ProductCategories = () => {
  const { config } = useSiteConfig();
  
  if (!config) return null;

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
          {config.categories.map((category) => (
            <Card 
              key={category.id}
              className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={imageMap[category.image] || category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
