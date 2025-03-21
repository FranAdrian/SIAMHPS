//El código siguiente se encarga de cambiar el color de fondo de las celdas 
// vacías de una tabla y añadir un efecto intermitente a las celdas vacías de la tabla.
const table = document.querySelector("table");
const bodyCells = table.querySelectorAll("tbody td");
bodyCells.forEach(cell => {
    if (cell.textContent.trim() === "") {
        cell.style.animation = "glow .5s infinite alternate";
    }
});

// Añade el CSS para el efecto intermitente cuando una celda está vacía.
const style = document.createElement('style');
style.textContent = `
@keyframes glow {
    from {
        background-color: rgb(255, 80, 80);
    }
    to {
        background-color: rgba(255, 255, 255, 0);
    }
}
`;
document.head.appendChild(style);

// Permite editar el contenido de las celdas de la tabla al hacer doble clic sobre ellas.
// Al hacer doble clic sobre una celda, se convierte en un input de tipo texto.
bodyCells.forEach(cell => {
    cell.addEventListener('dblclick', () => {
        const originalContent = cell.textContent.trim();
        const input = document.createElement('input');
        input.type = 'text';
        input.value = originalContent;
        cell.textContent = '';
        cell.appendChild(input);
        input.focus();

        input.addEventListener('blur', () => {
            cell.textContent = input.value.trim();
        });

        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                input.blur();
            }
        });
    });
});

// Cambia el color de fondo de las filas pares e impares de la tabla.
// Las filas pares tendrán un color más claro y las impares un color más oscuro.

const rows = table.querySelectorAll("tbody tr");
rows.forEach((row, index) => {
    if (index % 2 === 0) {
        row.style.backgroundColor = "#ffff";
    } else {
        row.style.backgroundColor = "#f0f8ff"; 
    }
});

//----------ANIMACION PARA DESPLAZAMIENTO DE TEXTO EN CELDAS QUE NO SE ALCANZAN A VISUALIZAR----------------

// Añade el CSS para el efecto de desplazamiento del texto en las celdas pequeñas.
const scrollStyle = document.createElement('style');
scrollStyle.textContent = `
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    90% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(-100%);
    }
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
document.head.appendChild(scrollStyle);

// Aplica el efecto de desplazamiento a las celdas cuyo contenido no se alcanza a visualizar.
rows.forEach(row => {
    let hasOverflowingCell = false;
    row.querySelectorAll('td').forEach(cell => {
        if (cell.scrollWidth > cell.clientWidth) {
            const span = document.createElement('span');
            span.textContent = cell.textContent; // No repite el texto
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
                // Forzar el reflow para reiniciar la animación
                void span.offsetWidth;
                span.style.animation = '';
            });
        });
    }
});

