# FarmaVida - Site de Farmácia

Site moderno e profissional para farmácias, desenvolvido com React, TypeScript e Tailwind CSS.

## 🎨 Sistema de Configuração

Este site possui um sistema de configuração centralizado que permite personalizar todo o conteúdo, cores e imagens **sem precisar editar código**.

### Como Personalizar o Site

Todas as configurações do site estão no arquivo `public/site-config.json`. Você pode editar este arquivo para alterar:

#### 📝 Informações do Site
```json
"site": {
  "name": "FarmaVida",
  "tagline": "Sua Saúde, Nossa Prioridade",
  "description": "Descrição da sua farmácia"
}
```

#### 🎨 Cores (formato HSL)
```json
"colors": {
  "primary": "210 90% 48%",   // Cor principal (azul)
  "secondary": "142 76% 36%",  // Cor secundária (verde)
  "accent": "173 80% 40%"      // Cor de destaque (turquesa)
}
```

**Como escolher cores HSL:**
- Use um conversor online (ex: [HSL Color Picker](https://hslpicker.com/))
- Formato: `matiz saturação% luminosidade%`
- Exemplo: `210 90% 48%` = azul vibrante

#### 🖼️ Imagens
```json
"images": {
  "hero": "/src/assets/pharmacy-hero.jpg",
  "store": "/src/assets/pharmacy-store.jpg"
}
```

Para trocar imagens:
1. Coloque suas imagens na pasta `src/assets/`
2. Atualize os caminhos no JSON
3. Formatos aceitos: JPG, PNG, WebP

#### 📦 Categorias de Produtos
```json
"categories": [
  {
    "id": "medicines",
    "title": "Medicamentos",
    "description": "Sua descrição aqui",
    "image": "/src/assets/medicines-category.jpg",
    "color": "bg-blue-50"
  }
]
```

#### 📞 Informações de Contato
```json
"contact": {
  "phone": "(11) 3456-7890",
  "address": "Seu endereço completo",
  "hours": "Seg-Sex: 8h às 22h",
  "email": "contato@suafarmacia.com.br"
}
```

### 📁 Estrutura de Arquivos

```
├── public/
│   └── site-config.json          ← ARQUIVO DE CONFIGURAÇÃO PRINCIPAL
├── src/
│   ├── assets/                   ← Suas imagens aqui
│   │   ├── pharmacy-hero.jpg
│   │   ├── pharmacy-store.jpg
│   │   ├── medicines-category.jpg
│   │   ├── personal-care-category.jpg
│   │   └── vitamins-category.jpg
│   ├── components/               ← Componentes do site
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProductCategories.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── hooks/
│       └── useSiteConfig.ts      ← Hook que lê o JSON
```

## 🚀 Como Usar

1. **Edite o arquivo de configuração:**
   - Abra `public/site-config.json`
   - Altere os textos, cores e caminhos de imagens
   - Salve o arquivo

2. **Adicione suas imagens:**
   - Coloque suas fotos em `src/assets/`
   - Atualize os caminhos no JSON

3. **Veja as mudanças:**
   - As alterações aparecem automaticamente
   - Não precisa recarregar a página

## 💡 Dicas de Personalização

### Alterando Cores
- Use o [HSL Color Picker](https://hslpicker.com/) para escolher cores
- Mantenha a saturação entre 70-90% para cores vibrantes
- Luminosidade de 40-50% para cores principais

### Otimizando Imagens
- Tamanho recomendado para hero: 1920x1080px
- Tamanho para categorias: 800x800px
- Comprima imagens antes de usar (use [TinyPNG](https://tinypng.com/))

### Boas Práticas
- Mantenha textos concisos e objetivos
- Use imagens de alta qualidade
- Teste em diferentes dispositivos
- Mantenha backup do arquivo de configuração

## 🛠️ Tecnologias

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

---

## Project info

**URL**: https://lovable.dev/projects/5d5fa797-4f14-4b14-9439-f865c51890d2
