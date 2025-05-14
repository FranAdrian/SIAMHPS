        // Cambia la sección visible al hacer clic en el menú
        document.querySelectorAll('.configMenu button').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.configMenu button').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                document.querySelectorAll('.configSection').forEach(sec => sec.classList.remove('active'));
                document.getElementById(this.dataset.section).classList.add('active');
            });
        });