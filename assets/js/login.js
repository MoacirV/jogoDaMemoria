const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

// Função que valida o input: se o valor tiver mais de 2 caracteres, habilita o botão
const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    } 
        button.setAttribute('disabled', '');
    
}

// Evento que ocorre ao enviar o formulário
const handleSubmit = (event) => {
    // Previne o comportamento padrão de enviar o formulário e recarregar a página
    event.preventDefault();
    
    // Salva o valor do input no localStorage
    localStorage.setItem('player', input.value);
    window.location = 'assets/pages/game.html';
}

// Adiciona o evento de input ao campo de entrada
input.addEventListener('input', validateInput);

// Adiciona o evento de submit ao formulário
form.addEventListener('submit', handleSubmit);
