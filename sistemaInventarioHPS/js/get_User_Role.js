document.addEventListener('DOMContentLoaded', function() {
    fetch('json/roleType.json')
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById('rolUsuario');
            // Limpia las opciones actuales excepto la primera
            select.innerHTML = '<option value="">Seleccionar rol</option>';
            data.forEach(rol => {
                const option = document.createElement('option');
                option.value = rol.id;
                option.textContent = rol.name;
                select.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error cargando roles:', error);
        });
});