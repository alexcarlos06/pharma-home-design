import { Pill, Facebook, Instagram, Linkedin } from "lucide-react";
import { useSiteConfig } from "@/hooks/useSiteConfig";

const Footer = () => {
  const { config } = useSiteConfig();
  
  if (!config) return null;
  
  return (
    <footer className="border-t bg-muted">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Pill className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">{config.site.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {config.site.description}
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-muted-foreground hover:text-primary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Redes Sociais</h3>
            <div className="flex gap-3">
              {config.social && config.social.length > 0 ? (
                config.social.map((s, i) => {
                  const name = s.name?.toLowerCase?.() || "";
                  const renderIcon = () => {
                    switch (name) {
                      case "facebook":
                        return <Facebook className="h-5 w-5" />;
                      case "instagram":
                        return <Instagram className="h-5 w-5" />;
                      case "linkedin":
                        return <Linkedin className="h-5 w-5" />;
                      default:
                        return <span className="h-5 w-5" />;
                    }
                  };

                  return (
                    <a
                      key={i}
                      href={s.href || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={s.name}
                    >
                      {renderIcon()}
                    </a>
                  );
                })
              ) : (
                <>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>{config.footer.copyright}</p>
            <div className="mt-2 flex justify-center gap-4">
              {config.footer.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
