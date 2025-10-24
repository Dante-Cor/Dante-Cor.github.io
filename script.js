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