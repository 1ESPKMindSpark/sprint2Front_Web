// 1. Primeiro declaramos o botão que está no HTML
const botao = document.getElementById('cadastroForm');

// 2. Adicionamos um único evento de clique
botao.addEventListener('submit', function (event) {
    event.preventDefault();
    // ETAPA 1: Pegar os dados do formulário HTML
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validações básicas do formulário
    if (!nome || !sobrenome || !email) {
        alert("Preencha todos os campos do formulário!");
        return; // Para o código aqui se faltar algo
    }

    if (!email.includes("@")) {
        alert("E-mail inválido!");
        return; // Para o código aqui se o e-mail estiver errado
    }

    // Alerta de boas-vindas
    alert("Cadastro realizado com sucesso! Bem-vindo, " + nome + "!"); });