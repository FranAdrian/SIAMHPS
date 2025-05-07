
//Script para la pagina login que hace que si el usuario no rellena los campos y presione el botón, estos se pongan rojos y vibren
document.getElementById('submitLoginButton').addEventListener('click', function() {
    const usernameInput = document.getElementById('inputUser');
    const passwordInput = document.getElementById('inputPassword');
    
    if (usernameInput.value === '' || passwordInput.value === '') {
        [usernameInput, passwordInput].forEach(input => {
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
    }

    if (inputUser.value !== '' && inputPassword.value !== '') {
        window.location.href = 'user_Selection.html';
    }
    
});








