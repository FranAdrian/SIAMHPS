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




