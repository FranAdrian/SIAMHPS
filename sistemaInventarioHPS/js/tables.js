//El código siguiente se encarga de cambiar el color de fondo de las celdas 
// vacías de una tabla y añadir un efecto intermitente a las celdas vacías de la tabla.

function applyTableEffects() {
    document.querySelectorAll("table").forEach(table => {
        // Celdas vacías con animación
        const bodyCells = table.querySelectorAll("tbody td");
        bodyCells.forEach(cell => {
            if (cell.textContent.trim() === "") {
                cell.style.animation = "glow .5s infinite alternate";
            } else {
                cell.style.animation = "";
            }
        });

        // Cambia el color de fondo de las filas pares e impares
        const rows = table.querySelectorAll("tbody tr");
        rows.forEach((row, index) => {
            if (index % 2 === 0) {
                row.style.backgroundColor = "#ffff";
            } else {
                row.style.backgroundColor = "#f0f8ff"; 
            }
        });

        // Efecto de desplazamiento para celdas con overflow
        rows.forEach(row => {
            let hasOverflowingCell = false;
            row.querySelectorAll('td').forEach(cell => {
                // Evita duplicar el span si ya existe
                if (cell.scrollWidth > cell.clientWidth && !cell.classList.contains('table-cell-scroll')) {
                    const span = document.createElement('span');
                    span.textContent = cell.textContent;
                    cell.textContent = '';
                    cell.appendChild(span);
                    cell.classList.add('table-cell-scroll');
                    hasOverflowingCell = true;
                }
            });
            if (hasOverflowingCell) {
                row.classList.add('table-row-scroll');
                row.addEventListener('mouseleave', () => {
                    row.querySelectorAll('.table-cell-scroll span').forEach(span => {
                        span.style.animation = 'none';
                        void span.offsetWidth;
                        span.style.animation = '';
                    });
                });
            }
        });
    });
}

// Ejecuta la función al cargar el archivo por primera vez
applyTableEffects();

// Añade el CSS para el efecto intermitente y desplazamiento solo una vez
if (!document.getElementById('custom-table-effects')) {
    const style = document.createElement('style');
    style.id = 'custom-table-effects';
    style.textContent = `
    @keyframes glow {
        from { background-color: rgb(255, 80, 80); }
        to { background-color: rgba(255, 255, 255, 0); }
    }
    @keyframes scroll {
        0% { transform: translateX(0); }
        90% { transform: translateX(-100%); }
        100% { transform: translateX(-100%); }
    }
    .table-cell-scroll {
        white-space: nowrap;
        overflow: hidden;
        position: relative;
    }
    .table-cell-scroll span {
        display: inline-block;
        animation: scroll 2s linear infinite;
        animation-play-state: paused;
    }
    .table-row-scroll:hover .table-cell-scroll span {
        animation-play-state: running;
    }
    `;
    document.head.appendChild(style);
}

//--------------BUSCADOR DE TABLA-------------------
// Añade un campo de búsqueda para filtrar los resultados de la tabla.
// Nota: Este buscador solo filtra la primera tabla por defecto.
// Si necesitas buscadores independientes para cada tabla, deberás adaptar el HTML y JS.

function filterTable() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filterColumn = document.getElementById('filterColumn').value;
    const table = document.querySelector('table tbody');
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells[filterColumn]) {
            const cellValue = cells[filterColumn].textContent || cells[filterColumn].innerText;
            rows[i].style.display = cellValue.toLowerCase().includes(input) ? '' : 'none';
        }
    }
}

function clearSearchInput() {
    document.getElementById('searchInput').value = '';
    filterTable();
}

