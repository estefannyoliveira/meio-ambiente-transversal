//header

const navControl = document.getElementById('nav-control');
const navList = document.querySelector('.nav-list')


function ativarMenu(event){
    console.log(navList)
    navList.classList.toggle('ativo')
}

navControl.addEventListener('click', ativarMenu)