document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar el envío del formulario de contacto
    const contactForm = document.querySelector('.contact form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('¡Gracias por contactarnos! Te responderemos pronto.');
        contactForm.reset();
    });

    // Función para manejar el botón de inicio de inversión
    const investButton = document.querySelector('.hero button');
    investButton.addEventListener('click', function() {
        alert('¡Gracias por empezar a invertir con nosotros! Tu futuro financiero está en buenas manos.');
    });

    // Función para manejar el desplazamiento suave a las secciones
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
```

---

**Instrucciones para Agregar el JavaScript:**

1. **Copia el código JavaScript** en un archivo llamado `script.js`.
2. **Agrega el archivo `script.js`** al mismo directorio que tu archivo `index.html`.
3. **Enlaza el archivo JavaScript** en tu archivo `index.html` antes de la etiqueta de cierre `</body>`:

```html
<script src="script.js"></script>
