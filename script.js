// JavaScript para mejorar la interactividad
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript para manejar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formResponse = document.getElementById('formResponse');
    formResponse.innerHTML = '<p>Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>';
    formResponse.style.color = 'green';
    this.reset();
});
