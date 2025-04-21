// Agrega un evento de click al botón de comenzar
document.querySelector('header button').addEventListener('click', function() {
    // Redirige al usuario a la sección de servicios
    window.location.href = '#servicios';
});

// Agrega un evento de scroll para mostrar el botón de subir
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
        document.querySelector('footer').style.display = 'block';
    } else {
        document.querySelector('footer').style.display = 'none';
    }
});

// Agrega un evento de click al botón de subir
document.querySelector('footer').addEventListener('click', function() {
    // Sube al usuario a la parte superior de la página
    window.scrollTo(0, 0);
});
