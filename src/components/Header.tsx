import { Pill } from "lucide-react";
import { Button } from "./ui/button";
import { useSiteConfig } from "@/hooks/useSiteConfig";

const Header = () => {
  const { config } = useSiteConfig();
  
  if (!config) return null;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Pill className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary">{config.site.name}</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#produtos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Produtos
          </a>
          <a href="#servicos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Serviços
          </a>
          <a href="#contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        <Button className="hidden md:flex">
          Fale Conosco
        </Button>
      </div>
    </header>
  );
};

export default Header;
