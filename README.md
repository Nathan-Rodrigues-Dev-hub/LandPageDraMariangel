# Landing Page - Dra. Mariangel

Landing page profissional para clínica de cirurgia de implante capilar, construída com **React + TypeScript + Vite + Tailwind CSS**.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Icons

## Como clonar

```bash
git clone https://github.com/Nathan-Rodrigues-Dev-hub/LandPageDraMariangel.git
cd LandPageDraMariangel
```

## Como instalar dependências

```bash
npm install
```

## Como rodar em desenvolvimento

```bash
npm run dev
```

Abra em `http://localhost:5173`.

## Scripts

```bash
npm run dev      # servidor local
npm run build    # build de produção
npm run preview  # preview da build
npm run lint     # lint do projeto
```

## Estrutura principal

```text
src/
  components/
    Header.tsx
    Hero.tsx
    Services.tsx
    About.tsx
    Gallery.tsx
    Contact.tsx
    WhatsAppButton.tsx
  App.tsx
  index.css
```

## Personalização rápida

- **Textos e conteúdo:** edite os componentes em `src/components`.
- **Telefone/WhatsApp:** ajuste o número em `src/components/Contact.tsx` e em `src/App.tsx`.
- **Cores:** personalize em `tailwind.config.js` (cores `primary`, `secondary` e `accent`).
- **Imagens reais:** substitua os placeholders nas seções `Hero`, `About` e `Gallery`.

## Deploy

Você pode publicar facilmente em:

- **Vercel:** importe o repositório e faça deploy com as configurações padrão de Vite.
- **Netlify:** build command `npm run build` e publish directory `dist`.

Também é possível gerar localmente com:

```bash
npm run build
```

A pasta final para deploy será `dist/`.
