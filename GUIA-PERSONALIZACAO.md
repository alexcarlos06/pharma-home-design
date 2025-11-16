# 📖 Guia de Personalização para Não-Programadores

Este guia foi feito para você que não tem conhecimento técnico mas quer personalizar o site da sua farmácia.

## 🎯 O que você pode alterar?

Você pode mudar **TUDO** no site apenas editando um arquivo chamado `site-config.json`. Não precisa mexer em código!

- ✅ Textos (nome da farmácia, descrições, títulos)
- ✅ Cores (azul, verde, ou qualquer cor)
- ✅ Fotos (logo, produtos, fundo)
- ✅ Informações de contato (telefone, endereço, horário)

## 📂 Onde está o arquivo de configuração?

O arquivo está em: **`public/site-config.json`**

Para editá-lo:
1. Abra o projeto no Lovable
2. Clique em "Dev Mode" (canto superior esquerdo)
3. Procure a pasta `public`
4. Abra o arquivo `site-config.json`

## ✏️ Como editar?

### 1. Mudando o Nome da Farmácia

Procure esta parte no arquivo:
```json
"site": {
  "name": "FarmaVida",
```

Mude "FarmaVida" para o nome da sua farmácia:
```json
"site": {
  "name": "Farmácia São José",
```

### 2. Mudando as Cores

As cores estão em formato HSL (não se preocupe, é fácil!).

Procure esta seção:
```json
"colors": {
  "primary": "210 90% 48%",
  "secondary": "142 76% 36%",
  "accent": "173 80% 40%"
}
```

**Como escolher uma cor nova:**

1. Acesse: https://hslpicker.com/
2. Escolha a cor que você gosta
3. Copie os 3 números (exemplo: `350 85% 50%`)
4. Cole no lugar dos números antigos

**Exemplos de cores:**
- Vermelho: `0 80% 50%`
- Verde: `142 76% 36%`
- Azul: `210 90% 48%`
- Laranja: `30 90% 55%`
- Roxo: `270 70% 50%`

### 3. Trocando Fotos

#### Passo 1: Adicione sua foto
1. Coloque sua imagem na pasta `src/assets/`
2. Dê um nome simples, como: `minha-farmacia.jpg`

#### Passo 2: Atualize o caminho no JSON
Procure a seção de imagens:
```json
"images": {
  "hero": "/src/assets/pharmacy-hero.jpg",
  "store": "/src/assets/pharmacy-store.jpg"
}
```

Mude para o nome da sua imagem:
```json
"images": {
  "hero": "/src/assets/minha-farmacia.jpg",
  "store": "/src/assets/minha-loja.jpg"
}
```

**Dica:** Use fotos de boa qualidade, de preferência em formato JPG.

### 4. Alterando Informações de Contato

Procure a seção de contato:
```json
"contact": {
  "phone": "(11) 3456-7890",
  "address": "Rua da Saúde, 123 - Centro, São Paulo - SP",
  "hours": "Seg-Sex: 8h às 22h | Sáb-Dom: 9h às 18h",
  "email": "contato@farmavida.com.br"
}
```

Altere com suas informações:
```json
"contact": {
  "phone": "(21) 9999-9999",
  "address": "Avenida Principal, 456 - Centro, Rio de Janeiro - RJ",
  "hours": "Segunda a Sábado: 7h às 20h",
  "email": "contato@minhafarma.com.br"
}
```

### 5. Mudando Categorias de Produtos

Você pode mudar os títulos e descrições das categorias:

```json
"categories": [
  {
    "id": "medicines",
    "title": "Medicamentos",
    "description": "Ampla variedade de medicamentos com e sem prescrição",
    "image": "/src/assets/medicines-category.jpg"
  }
]
```

Altere o "title" e "description" para o que quiser:
```json
"categories": [
  {
    "id": "medicines",
    "title": "Remédios",
    "description": "Todos os medicamentos que você precisa",
    "image": "/src/assets/remedios.jpg"
  }
]
```

### 6. Alterando Textos "Sobre Nós"

Procure a seção "about":
```json
"about": {
  "title": "Sobre a FarmaVida",
  "paragraphs": [
    "Há mais de 20 anos cuidando da saúde...",
    "Contamos com uma equipe..."
  ]
}
```

Mude os textos para contar a história da sua farmácia:
```json
"about": {
  "title": "Sobre Nós",
  "paragraphs": [
    "Nossa farmácia atende a comunidade há 30 anos...",
    "Temos os melhores preços da região..."
  ]
}
```

## ⚠️ Cuidados Importantes

1. **NÃO DELETE** as aspas `"` nem as vírgulas `,`
2. **NÃO MUDE** os nomes entre colchetes (como "site", "colors", "contact")
3. **SEMPRE SALVE** o arquivo depois de editar
4. Se algo der errado, use Ctrl+Z (ou Cmd+Z no Mac) para desfazer

## 🆘 Problemas Comuns

### O site não atualiza depois que mudei
- Verifique se você salvou o arquivo (Ctrl+S ou Cmd+S)
- Recarregue a página (F5)

### Apareceu um erro
- Provavelmente você removeu uma vírgula ou aspas
- Use Ctrl+Z para desfazer
- Peça ajuda de alguém que entende de código

### A cor não mudou
- Verifique se você colocou 3 números separados por espaço
- Exemplo correto: `"210 90% 48%"`
- Exemplo errado: `"hsl(210, 90%, 48%)"`

### A imagem não aparece
- Verifique se você colocou a imagem na pasta `src/assets/`
- Verifique se o nome no JSON é exatamente igual ao nome do arquivo
- Lembre-se de incluir `/src/assets/` antes do nome

## 💡 Dicas Finais

1. **Faça uma cópia de segurança** do arquivo `site-config.json` antes de editar
2. **Mude uma coisa de cada vez** - assim você sabe o que deu certo ou errado
3. **Use fotos de boa qualidade** - isso faz toda diferença
4. **Mantenha os textos curtos** - ninguém gosta de ler muito na internet
5. **Teste em diferentes dispositivos** - celular, tablet, computador

## 📞 Precisa de Ajuda?

Se você não conseguir fazer alguma alteração, peça ajuda a alguém que entende de tecnologia. Mostre este guia para a pessoa - ela vai entender rapidamente!

---

**Lembre-se:** Você não precisa saber programar para personalizar seu site. Basta seguir este guia passo a passo! 😊
