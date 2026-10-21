# Notícias

Mini app multiplataforma de notícias criado com Expo, React Native e TypeScript.
O projeto demonstra navegação combinada entre menu lateral, abas e pilhas de
telas para leitura de matérias.

## Funcionalidades

- Menu lateral com acesso a **Notícias** e **Sobre**.
- Abas de **Tecnologia** e **Esportes**.
- Carrossel de matérias em destaque e lista de notícias por categoria.
- Tela de leitura completa, com título dinâmico e navegação de volta.
- Layout adaptado para celular, web e áreas seguras do dispositivo.

As matérias são dados de exemplo mantidos localmente; o app não usa backend ou
API de notícias.

## Executar

Pré-requisitos: Node.js e npm.

```bash
git clone https://github.com/pedro-augbs/noticias-app.git
cd noticias-app
npm ci
npx expo start
```

Para abrir diretamente no navegador:

```bash
npx expo start --web
```

## Verificações

```bash
npm run lint
npx tsc --noEmit
```

## Estrutura

- `src/app/`: rotas e layouts do Expo Router.
- `src/components/`: cartões, listas e detalhes reutilizáveis.
- `src/data/noticias.ts`: matérias de exemplo.
- `src/theme.ts`: cores compartilhadas da interface.
- `assets/`: ícones e imagens do app.
