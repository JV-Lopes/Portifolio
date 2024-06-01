
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
    var darkModeToggle = document.querySelector('dark-mode-toggle')
    if (window.scrollY > 50) {
      header.classList.add('scroll');
      contatoBtn.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
      contatoBtn.classList.remove('scroll');
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});

window.addEventListener('scroll', function() {
  var darkModeToggle = document.getElementById('dark-mode-toggle');
  var contatoButton = document.querySelector('.Contato');
  
  if (window.scrollY > 0) {
    darkModeToggle.classList.add('scroll');
    contatoButton.classList.add('scroll');
  } else {
    darkModeToggle.classList.remove('scroll');
    contatoButton.classList.remove('scroll');
  }

  document.querySelector('.btn-abrir').addEventListener('click', function() {
    document.getElementById('menu-mobile').classList.add('abrir-menu');
  });

  document.querySelector('.btn-fechar i').addEventListener('click', function() {
    document.getElementById('menu-mobile').classList.remove('abrir-menu');
  });
});