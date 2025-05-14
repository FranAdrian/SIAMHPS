const btn = document.getElementById('toggleLayoutBtn');
const wrapper = document.getElementById('tablesWrapper');
btn.addEventListener('click', () => {
    wrapper.classList.toggle('vertical-layout');
    wrapper.classList.toggle('horizontal-layout');
});