
//Script para la pagina register que hace que si el usuario no rellena los campos y presione el botón, estos se pongan rojos y vibren
document.getElementById('submitRegisterButton').addEventListener('click', function() {
    const mailInput = document.getElementById('inputMail');
    const usernameInput = document.getElementById('inputUser');
    const passwordInput = document.getElementById('inputPassword');
    const confirmPasswordInput = document.getElementById('inputConfirmPassword');
    
    const inputs = [mailInput, usernameInput, passwordInput, confirmPasswordInput];
    
    inputs.forEach(input => {
        if (input.value === '') {
            input.classList.add('shake', 'error');
            setTimeout(() => {
                input.classList.remove('shake');//animacion de shake en css
            }, 500);
            setTimeout(() => {
                input.classList.remove('error');//animacion de error en css
            }, 750);
        }
    });

    if (inputs.every(input => input.value !== '')) {
        window.location.href = 'user_Selection.html';
    }
});

//Script para expresion regular de correo electronico, si no es correcto se pone rojo
document.getElementById('inputMail').addEventListener('input', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailInput = document.getElementById('inputMail');
    const errorMailMessage = document.getElementById('errorMailMessage');
    
    if (mailInput.value === '') {
        mailInput.classList.remove('error');
        errorMailMessage.style.display = 'none'; // Ocultar el mensaje de error si está vacío
    } else if (!emailRegex.test(mailInput.value)) {
        mailInput.classList.add('error');
        errorMailMessage.style.display = 'block'; // Mostrar el mensaje de error
    } else {
        mailInput.classList.remove('error');
        errorMailMessage.style.display = 'none'; // Ocultar el mensaje de error
    }
});

// Asegura de que el mensaje de error esté desactivado inicialmente
document.getElementById('errorMailMessage').style.display = 'none';