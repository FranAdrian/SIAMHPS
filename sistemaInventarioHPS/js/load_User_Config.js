fetch('json/users.json')
    .then(response => response.json())
    .then(users => {
        // Selecciona el primer usuario activo (puedes cambiar la lógica según tu necesidad)
        const user = users.find(u => u.activo);

        if (user) {
            document.querySelector('.profileImage').src = user.avatar;
            document.querySelector('.profileImage').alt = `Imagen de perfil de ${user.nombre}`;
            document.querySelector('.profileFullName').textContent = `${user.nombre} ${user.apellidos}`;
            document.querySelector('.profileUsername').textContent = `@${user.nombre.toLowerCase()}`;
            document.querySelector('.profileEmail').textContent = user.correo_electronico;
            document.querySelector('.profileRole').textContent = `Rol: ${user.rol}`;
            // Puedes ajustar el formato de la fecha de último acceso si tienes ese dato
            // document.querySelector('.profileLastLogin').textContent = `Último acceso: ...`;
        }
    })
    .catch(err => {
        console.error('Error cargando usuario:', err);
    });

    fetch('json/users.json')
    .then(response => response.json())
    .then(users => {
        // Selecciona el primer usuario activo
        const user = users.find(u => u.activo);

        if (user) {
            document.querySelector('.profileImage').src = user.avatar;
            document.querySelector('.profileImage').alt = `Imagen de perfil de ${user.nombre}`;
            document.querySelector('.profileFullName').textContent = `${user.nombre} ${user.apellidos}`;
            document.querySelector('.profileUsername').textContent = `@${user.nombre.toLowerCase()}`;
            document.querySelector('.profileEmail').textContent = user.correo_electronico;
            document.querySelector('.profileRole').textContent = `Rol: ${user.rol}`;
            // Si tienes el dato de último acceso, cámbialo aquí:
            // document.querySelector('.profileLastLogin').textContent = `Último acceso: ${user.ultimo_acceso}`;
        }
    })
    .catch(err => {
        console.error('Error cargando usuario:', err);
    });

    const correoSeleccionado = localStorage.getItem('usuarioSeleccionado');

fetch('json/users.json')
    .then(response => response.json())
    .then(users => {
        let user;
        if (correoSeleccionado) {
            user = users.find(u => u.correo_electronico === correoSeleccionado);
        }
        // Si no hay usuario seleccionado, toma el primero activo
        if (!user) {
            user = users.find(u => u.activo);
        }
        if (user) {
            document.querySelector('.profileImage').src = user.avatar;
            document.querySelector('.profileImage').alt = `Imagen de perfil de ${user.nombre}`;
            document.querySelector('.profileFullName').textContent = `${user.nombre} ${user.apellidos}`;
            document.querySelector('.profileUsername').textContent = `@${user.nombre.toLowerCase()}`;
            document.querySelector('.profileEmail').textContent = user.correo_electronico;
            document.querySelector('.profileRole').textContent = `Rol: ${user.rol}`;
            // document.querySelector('.profileLastLogin').textContent = `Último acceso: ...`;
        }
    })
    .catch(err => {
        console.error('Error cargando usuario:', err);
    });