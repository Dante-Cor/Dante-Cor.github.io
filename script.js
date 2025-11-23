// Script.js (Opcional)

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portafolio cargado. ¡A trabajar en ese contenido!");

    // Ejemplo de funcionalidad: resaltar el enlace de navegación actual
    const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) { // Ajusta el -100 si es necesario
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
});

//DarkMode
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // 1. Verificar si el usuario ya tenía una preferencia guardada
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    // 2. Función para cambiar el tema al hacer clic
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Cambiar icono
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark'); // Guardar preferencia
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light'); // Guardar preferencia
        }
    });
});