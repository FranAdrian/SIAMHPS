function cargarModal() {
    fetch("new_Input_Modal.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("modal-container").innerHTML = data;
            document.getElementById("miModal").style.display = "block";

            // Espera un poco para asegurarse de que el formulario ya está cargado
            setTimeout(() => {
                restaurarDatos();
                asignarEventosInputs();
            }, 100);
        });
}

function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
}

function guardarDatos() {
    sessionStorage.setItem("nombre", document.getElementById("nombre").value);
    sessionStorage.setItem("tipo", document.getElementById("tipo").value);
    sessionStorage.setItem("piso", document.getElementById("piso").value);
    sessionStorage.setItem("area", document.getElementById("area").value);
    sessionStorage.setItem("fabricante", document.getElementById("fabricante").value);
    sessionStorage.setItem("modelo", document.getElementById("modelo").value);
    sessionStorage.setItem("numeroSerie", document.getElementById("numeroSerie").value);
}

function restaurarDatos() {
    document.getElementById("nombre").value = sessionStorage.getItem("nombre") || "";
    document.getElementById("tipo").value = sessionStorage.getItem("tipo") || "";
    document.getElementById("piso").value = sessionStorage.getItem("piso") || "";
    document.getElementById("area").value = sessionStorage.getItem("area") || "";
    document.getElementById("fabricante").value = sessionStorage.getItem("fabricante") || "";
    document.getElementById("modelo").value = sessionStorage.getItem("modelo") || "";
    document.getElementById("numeroSerie").value = sessionStorage.getItem("numeroSerie") || "";
}

function asignarEventosInputs() {
    document.getElementById("nombre").addEventListener("input", guardarDatos);
    document.getElementById("tipo").addEventListener("input", guardarDatos);
    document.getElementById("piso").addEventListener("input", guardarDatos);
    document.getElementById("area").addEventListener("input", guardarDatos);
    document.getElementById("fabricante").addEventListener("input", guardarDatos);
    document.getElementById("modelo").addEventListener("input", guardarDatos);
    document.getElementById("numeroSerie").addEventListener("input", guardarDatos);
}

// Cerrar el modal si se hace clic fuera de él
window.addEventListener("click", function(event) {
    const modal = document.getElementById("miModal");
    if (event.target == modal) {
        cerrarModal();
    }
});

document.getElementById("btnAnadirActivo").addEventListener("click", function() {
    document.getElementById("nombre").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("piso").value = "";
    document.getElementById("area").value = "";
    document.getElementById("fabricante").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("numeroSerie").value = "";

    // Limpia también los datos almacenados en sessionStorage
    sessionStorage.removeItem("nombre");
    sessionStorage.removeItem("tipo");
    sessionStorage.removeItem("piso");
    sessionStorage.removeItem("area");
    sessionStorage.removeItem("fabricante");
    sessionStorage.removeItem("modelo");
    sessionStorage.removeItem("numeroSerie");
});