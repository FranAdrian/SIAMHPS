// Este script se encarga de cambiar la disposición de las tablas entre vertical y horizontal al hacer clic en un botón.
const btn = document.getElementById('toggleLayoutBtn');
const wrapper = document.getElementById('tablesWrapper');
btn.addEventListener('click', () => {
    wrapper.classList.toggle('vertical-layout');
    wrapper.classList.toggle('horizontal-layout');
});