
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
        window.location.href = 'main_Inventory.html';
    }
});