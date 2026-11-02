--------------------------JOVI -----------------------------

----------------------- Sobre o projeto-----------------------

O JOVI é uma plataforma desenvolvida para apoiar a organização e a jornada de estudos dos usuários. O projeto foi evoluído a partir da Sprint 03, mantendo a proposta original da Challenge e incorporando novas funcionalidades com React.

------------------- Tecnologias utilizadas ------------------------
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

------------------Funcionalidades--------------------------------------

- Landing Page com apresentação da plataforma.
- Navegação entre as seções do site.
- Modal de apresentação dos desenvolvedores.
- Tela de login demonstrativa.
- Autenticação de demonstração utilizando Context API e LocalStorage.
- Rota privada para acesso ao painel.
- Painel do usuário.
- Consulta à API pública DummyJSON para exibir frases de inspiração para os estudos.

-------------------Como instalar e executar o projeto------------------

É necessário ter instalado:
- Node.js
- npm
- Git
Clonar o repositório:
git clone https://github.com/1ESPKMindSpark/sprint2Front_Web.git
Acessar a pasta:
cd sprint2Front_Web
Instalar as dependências:
npm install
Executar o projeto:
npm run dev
Após executar o comando, acesse no navegador o endereço informado pelo Vite, normalmente:
http://localhost:5173
Gerar a versão de produção:
npm run build
Para visualizar a versão de produção localmente:
npm run preview


-----------------------API utilizada-----------------------------------------

O projeto consome a API pública DummyJSON, por meio do endpoint:

https://dummyjson.com/quotes/random

A API é utilizada no painel do usuário para buscar frases de inspiração. A consulta é realizada utilizando `fetch`, com controle de carregamento e tratamento de erros por meio dos hooks do React.

----------------------Autenticação para demonstração---------------------------

O projeto possui autenticação demonstrativa para permitir o teste das rotas públicas e privadas.

Credenciais de acesso:
- E-mail: `teste@jovi.com`
- Senha: `123456`


----------------------Utilização de Inteligência Artificial------------------------

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto, auxiliando na compreensão de conceitos, identificação e correção de erros e esclarecimento de dúvidas sobre as tecnologias utilizadas. 

--------------------------- Repositório GitHub--------------------------------------

https://github.com/GiuliaStella/sprint4Front_Web

---------------------------------------Deploy--------------------------------

Link do Vercel: https://sprint4-front-web-eight.vercel.app/
----------------------------- Equipe---------------------------------------

Anna Giazzi — RM: 569846 
Erick Diego — RM: 574064 
Giulia Stella — RM: 568888
Rafael Willian — RM: 570738 
Lucas Octaviano —  RM: 573368

