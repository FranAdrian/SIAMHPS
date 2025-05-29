// Este script se encarga de cargar las unidades de medida disponibles en el sistema en la seccion de configuración de unidades de medida.
document.addEventListener('DOMContentLoaded', () => {
    const unidades = [
        { value: "kg", label: "Kilogramo (kg)" },
        { value: "g", label: "Gramo (g)" },
        { value: "mg", label: "Miligramo (mg)" },
        { value: "l", label: "Litro (l)" },
        { value: "ml", label: "Mililitro (ml)" },
        { value: "m", label: "Metro (m)" },
        { value: "cm", label: "Centímetro (cm)" },
        { value: "mm", label: "Milímetro (mm)" },
        { value: "unidad", label: "Unidad (u)" },
        { value: "paquete", label: "Paquete" },
        { value: "caja", label: "Caja" },
        { value: "par", label: "Par" },
        { value: "docena", label: "Docena" }
    ];

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
});