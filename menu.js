document.addEventListener('DOMContentLoaded', () => {
  const btnMenu = document.getElementById('btn-menu');
  const menu = document.getElementById('menu-mobile');
  const overlay = document.getElementById('overlay-menu');
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
  const header = document.querySelector('header');
  const contatoBtn = document.querySelector('.Contato');
  const body = document.body;

  // Função para abrir o menu
  const openMenu = () => {
      menu.classList.add('abrir-menu');
      overlay.classList.add('show-overlay');
  };

  // Função para fechar o menu
  const closeMenu = () => {
      menu.classList.remove('abrir-menu');
      overlay.classList.remove('show-overlay');
  };

  // Eventos de clique para abrir/fechar menu
  if (btnMenu) btnMenu.addEventListener('click', openMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
  const btnFechar = document.querySelector('.btn-fechar i');
  if (btnFechar) btnFechar.addEventListener('click', closeMenu);

  // Alternar modo escuro
  const toggleDarkMode = () => {
      body.classList.toggle('dark-mode');
  };

  if (darkModeToggle) darkModeToggle.addEventListener('click', toggleDarkMode);
  if (darkModeToggleMobile) darkModeToggleMobile.addEventListener('click', toggleDarkMode);

  // Evento de rolagem
  window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      if (scrollY > 50) {
          header.classList.add('scroll');
          contatoBtn.classList.add('scroll');
      } else {
          header.classList.remove('scroll');
          contatoBtn.classList.remove('scroll');
      }

      if (scrollY > 0) {
          darkModeToggle.classList.add('scroll');
          contatoBtn.classList.add('scroll');
      } else {
          darkModeToggle.classList.remove('scroll');
          contatoBtn.classList.remove('scroll');
      }
  });
});
