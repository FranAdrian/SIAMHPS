document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html") // Carga la navbar desde el archivo externo
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;

            // Detectar qué página está activa y cambiar el estilo de los elementos "button" e "i" de la .navbar que está en el archivo css
            let currentPage = window.location.pathname.split("/").pop();

            document.querySelectorAll("#navbar button, #navbar i").forEach(element => {
                if (element.getAttribute("data-page") === currentPage) {
                    element.classList.add("active");
                }
            });
        })
        .catch(error => console.error("Error al cargar la navbar:", error));
});