// Pega os elementos da página usando os IDs novos
// Aqui a gente "mapeia" os itens do HTML para o JS conseguir controlar eles
var botaoAbrir = document.getElementById('abrirdevs');
var botaoFechar = document.getElementById('fecharDevs'); // ID corrigido
var janela = document.getElementById('modalDevs');      // ID corrigido

// Abre o modal quando clicar no botão contato
// O addEventListener fica "ouvindo" o clique; quando acontece, ele executa a função
botaoAbrir.addEventListener('click', function() {
    // Adiciona a classe 'visivel' que a gente configurou no CSS para dar o display: flex
    janela.classList.add('visivel'); // Classe corrigida
});

// Fecha o modal quando clicar no X
botaoFechar.addEventListener('click', function() {
    // Remove a classe 'visivel', fazendo o modal voltar a ter display: none
    janela.classList.remove('visivel');
});

// Fecha o modal se clicar fora da janelinha (no fundo escuro)
// O 'event.target' serve para saber exatamente onde o usuário clicou
window.addEventListener('click', function(event) {
    // Se o clique foi no fundo (janela) e não no conteúdo interno, ele fecha
    if (event.target === janela) {
        janela.classList.remove('visivel');
    }
});