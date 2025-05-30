document.addEventListener('DOMContentLoaded', function() {
    fetch('json/roleType.json')
        .then(response => response.json())
        .then(data => {
            // Para el select de usuario
            const selectUsuario = document.getElementById('rolUsuario');
            if (selectUsuario) {
                selectUsuario.innerHTML = '<option value="">Seleccionar rol</option>';
                data.forEach(rol => {
                    const option = document.createElement('option');
                    option.value = rol.id;
                    option.textContent = rol.name;
                    selectUsuario.appendChild(option);
                });
            }

            // Para el select de asignación de roles
            const selectRoles = document.getElementById('selectRoles');
            if (selectRoles) {
                selectRoles.innerHTML = '<option value="">Seleccionar rol</option>';
                data.forEach(rol => {
                    const option = document.createElement('option');
                    option.value = rol.id;
                    option.textContent = rol.name;
                    selectRoles.appendChild(option);
                });
            }
        })
        .catch(error => {
            console.error('Error cargando roles:', error);
        });
});