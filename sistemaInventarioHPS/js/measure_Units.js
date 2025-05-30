// Este script se encarga de cargar las unidades de medida disponibles en el sistema en la seccion de configuración de unidades de medida.
document.addEventListener('DOMContentLoaded', () => {
    fetch('json/measureUnits.json')
        .then(response => response.json())
        .then(unidades => {
            const select = document.getElementById('selectUnidadesDisponibles');
            if (select) {
                select.innerHTML = '';
                unidades.forEach(u => {
                    const option = document.createElement('option');
                    option.value = u.value;
                    option.textContent = u.label;
                    select.appendChild(option);
                });
            }
        })
        .catch(error => {
            console.error('Error cargando las unidades de medida:', error);
        });
});