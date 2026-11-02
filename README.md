# JOVI – Plataforma de Estudos

## Sobre o projeto

O JOVI é uma plataforma desenvolvida para apoiar a organização e a jornada de estudos dos usuários. O projeto foi evoluído a partir da Sprint 03, mantendo a proposta original da Challenge e incorporando novas funcionalidades com React.

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- React Router DOM
- Tailwind CSS
- CSS
- HTML
- API pública DummyJSON
- Git e GitHub
- Vercel

## Funcionalidades

- Landing Page com apresentação da plataforma.
- Navegação entre as seções do site.
- Modal de apresentação dos desenvolvedores.
- Tela de login demonstrativa.
- Autenticação de demonstração utilizando Context API e LocalStorage.
- Rota privada para acesso ao painel.
- Painel do usuário.
- Consulta à API pública DummyJSON para exibir frases de inspiração para os estudos.

## Como instalar e executar o projeto

### 1. Pré-requisitos

É necessário ter instalado:

- Node.js
- npm
- Git

### 2. Clonar o repositório

```bash
git clone https://github.com/1ESPKMindSpark/sprint2Front_Web.git
```

### 3. Acessar a pasta

```bash
cd sprint2Front_Web
```

### 4. Instalar as dependências

```bash
npm install
```

### 5. Executar o projeto

```bash
npm run dev
```

Após executar o comando, acesse no navegador o endereço informado pelo Vite, normalmente:

```text
http://localhost:5173
```

### 6. Gerar a versão de produção

```bash
npm run build
```

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

## API utilizada

O projeto consome a API pública DummyJSON, por meio do endpoint:

https://dummyjson.com/quotes/random

A API é utilizada no painel do usuário para buscar frases de inspiração. A consulta é realizada utilizando `fetch`, com controle de carregamento e tratamento de erros por meio dos hooks do React.

Não é necessário configurar ou executar um servidor de Back-end separado.

## Autenticação para demonstração

O projeto possui autenticação demonstrativa para permitir o teste das rotas públicas e privadas.

**Credenciais de acesso:**

- E-mail: `teste@jovi.com`
- Senha: `123456`

A autenticação demonstrativa utiliza LocalStorage no navegador. Ela não representa um sistema de autenticação seguro para produção.

## Utilização de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto, auxiliando na compreensão de conceitos, identificação e correção de erros, organização de componentes React, implementação de funcionalidades e esclarecimento de dúvidas sobre as tecnologias utilizadas. As sugestões foram analisadas e adaptadas pela equipe de acordo com os requisitos e a proposta original do projeto.

## Repositório GitHub

https://github.com/1ESPKMindSpark/sprint2Front_Web

## Deploy

Link do Vercel:
## Equipe

Os nomes completos e os respectivos RMs dos integrantes estão disponíveis no arquivo `INTEGRANTES.TXT`, incluído na entrega.
