const navControl = document.getElementById('nav-control');
const navList = document.querySelector('.nav-list')

//menu responsivo
function ativarMenu(event) {
    navList.classList.toggle('ativo');
}
navControl.addEventListener('click', ativarMenu);

//fechar menu
const navListItens = document.querySelectorAll('.nav-item a');
function fecharMenu() {
    navList.classList.remove('ativo')
}

function cliqueItens(itens) {
    itens.addEventListener('click', fecharMenu)
}

navListItens.forEach(cliqueItens)