//Script para cargar los datos de los activos en la sección de inventario de activos.

document.addEventListener('DOMContentLoaded', function () {
    // Datos de ejemplo, puedes reemplazarlos por datos dinámicos si lo deseas
    const assets = [
        {
            nombre: "DESKTOP-AA",
            tipo: "Monitor de signos vitales",
            piso: "3",
            area: "Enfermería",
            fabricante: "ALPINION",
            modelo: "EJ-3MP10",
            serie: "12625",
            tiempo: "2 meses, 4 dias",
            estatus: "Activo"
        },
        {
            nombre: "MINISONO-EG",
            tipo: "Electrocardiografo",
            piso: "2",
            area: "Servicio social",
            fabricante: "ALPINION",
            modelo: "EJ-3MP10Modelo",
            serie: "0049434",
            tiempo: "2 meses, 4 dias",
            estatus: "Activo"
        },
        {
            nombre: "DESKTOP-CC",
            tipo: "Monitor de signos vitales",
            piso: "3",
            area: "Mantenimiento",
            fabricante: "ALPINION",
            modelo: "EJ-3MP10",
            serie: "445227",
            tiempo: "2 meses, 4 dias",
            estatus: "Activo"
        }
        // Puedes agregar más objetos aquí
    ];

    function renderTable() {
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

    renderTable();
});