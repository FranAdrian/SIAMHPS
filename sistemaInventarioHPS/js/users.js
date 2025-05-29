//Este script carga los usuarios desde un archivo JSON y los muestra en la selección de usuario.

function renderUsers(users) {
    const container = document.querySelector('.subUserSelectionContainer');
    container.innerHTML = ""; // Limpiar contenido previo

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = "userContainer";
        userDiv.onclick = () => {
            // Guarda el correo del usuario seleccionado
            localStorage.setItem('usuarioSeleccionado', user.correo_electronico);
            window.location.href = 'main_Inventory.html';
        };

        const img = document.createElement('img');
        img.src = user.avatar;
        img.alt = `Usuario ${user.nombre}`;

        const p = document.createElement('p');
        // Si el usuario es administrador, muestra la corona
        if (user.rol && user.rol.toLowerCase() === "administrador") {
            const icon = document.createElement('i');
            icon.className = "fas fa-crown admin-crown";
            icon.title = "Administrador";
            p.appendChild(icon);
            p.appendChild(document.createTextNode(" "));
        }
        p.appendChild(document.createTextNode(user.nombre));

        userDiv.appendChild(img);
        userDiv.appendChild(p);
        container.appendChild(userDiv);
    });
}

document.getElementById('backBtn').onclick = function() {
    window.history.back();
};

document.addEventListener('DOMContentLoaded', () => {
    fetch('json/users.json')
        .then(response => response.json())
        .then(users => renderUsers(users))
        .catch(err => {
            console.error('Error cargando usuarios:', err);
        });
});

