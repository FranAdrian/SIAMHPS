//Script para cargar los datos de los activos en la sección de inventario de activos.

document.addEventListener('DOMContentLoaded', function () {
    // Cargar los datos desde el archivo JSON
    fetch('json/assets.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo de activos');
            }
            return response.json();
        })
        .then(assets => {
            renderTable(assets);
        })
        .catch(error => {
            console.error('Error al cargar los activos:', error);
        });

    function renderTable(assets) {
        const tbody = document.querySelector('table tbody');
        tbody.innerHTML = ""; // Limpiar contenido previo
        assets.forEach(asset => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${asset.nombre}</td>
                <td>${asset.tipo}</td>
                <td>${asset.piso}</td>
                <td>${asset.area}</td>
                <td>${asset.fabricante}</td>
                <td>${asset.modelo}</td>
                <td>${asset.serie}</td>
                <td>${asset.tiempo}</td>
                <td>${asset.estatus}</td>
            `;
            tbody.appendChild(row);
        });
        // Aplica los efectos de la tabla después de renderizar
        if (typeof applyTableEffects === "function") {
            applyTableEffects();
        }
    }
});