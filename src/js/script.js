//Declaração do formulário de cadastro
const botao = document.getElementById('cadastroForm');


botao.addEventListener('submit', function (event) {
    event.preventDefault();
    //Pegar os dados do formulário HTML
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Validações básicas do formulário
    if (!nome || !sobrenome || !email) {
        alert("Preencha todos os campos do formulário!");
        return; // Para o código aqui se faltar algo
    }

    if (!email.includes("@")) {
        alert("E-mail inválido!");
        return; // Parar o código aqui se o e-mail estiver errado
    }
    if (senha.length < 6) {
    alert("Senha muito curta!");
    return;
}

    alert("Cadastro realizado com sucesso! Bem-vindo, " + nome + "!");

     //Exibindo tudo no console de forma organizada
    console.log("==============================");
    console.log("      DADOS DO USUÁRIO        ");
    console.log("==============================");
    console.log(`👤 Nome Completo: ${nome} ${sobrenome}`);
    console.log(`📧 E-mail:        ${email}`);
});


// fazendo o slide how dos passos de como funciona

const slidesPassos = document.querySelectorAll(".slide-passo");
const btnNextPasso = document.querySelector(".next-passo");
const btnPrevPasso = document.querySelector(".prev-passo");

let passoAtual = 0;

function mostrarPasso(index) {
    slidesPassos.forEach(slide => {
        slide.classList.remove("ativo-passo");
    });
    slidesPassos[index].classList.add("ativo-passo");
}

/* próximo botao */

btnNextPasso.addEventListener("click", () => {
    passoAtual++;
    if (passoAtual >= slidesPassos.length) {
        passoAtual = 0;
    }
    mostrarPasso(passoAtual);
});

/* botão anterior */

btnPrevPasso.addEventListener("click", () => {
    passoAtual--;
    if (passoAtual < 0) {
        passoAtual = slidesPassos.length - 1;
    }
    mostrarPasso(passoAtual);
});

/* troca automática */

setInterval(() => {
    passoAtual++;
    if (passoAtual >= slidesPassos.length) {
        passoAtual = 0;
    }
    mostrarPasso(passoAtual);
}, 4000);






// animacao de bolinhas do hero, funcionalidades e como funciona sem biblioteca

const particlesContainers = document.querySelectorAll(".particles"); // SelectorAll seleciona todas as divs de paticles

particlesContainers.forEach(container => {

    for (let i = 0; i < 30; i++) {
        const span = document.createElement("span");

        span.style.left = Math.random() * 100 + "%";
        span.style.animationDuration = (5 + Math.random() * 5) + "s";
        span.style.opacity = Math.random();

        container.appendChild(span);
    }

});






