
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu') 

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var contatoBtn = document.querySelector('.Contato');
    if (window.scrollY > 50) {
      header.classList.add('scroll');
      contatoBtn.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
      contatoBtn.classList.remove('scroll');
    }
  });
