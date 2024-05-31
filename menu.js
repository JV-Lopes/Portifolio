
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

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var mensagem = document.getElementById('mensagem').value;
    var feedback = document.getElementById('feedback');

    if (nome === "" || email === "" || mensagem === "") {
        feedback.textContent = "Por favor, preencha todos os campos obrigatórios.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Mensagem enviada com sucesso!";
        feedback.style.color = "green";
        
        document.getElementById('contactForm').reset();
    }
});
