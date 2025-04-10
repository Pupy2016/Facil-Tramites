// Agrega un evento de click al botón de comenzar
document.querySelector('#hero button').addEventListener('click', function() {
    // Redirige al usuario a la sección de servicios
    window.location.href = '#servicios';
});

// Agrega un evento de submit al formulario de contacto
document.querySelector('#contacto form').addEventListener('submit', function(event) {
    // Evita que el formulario se envíe por defecto
    event.preventDefault();
    // Obtiene los valores del formulario
    var nombre = document.querySelector('#contacto input[name="nombre"]').value;
    var correo = document.querySelector('#contacto input[name="correo"]').value;
    var mensaje = document.querySelector('#contacto textarea').value;
    
    // Envía el formulario mediante AJAX
    fetch('/contacto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
            correo: correo,
            mensaje: mensaje
        })
    })
   .then(response => response.json())
   .then(data => {
        // Muestra un mensaje de éxito
        alert('Formulario enviado con éxito');
        // Limpia el formulario
        document.querySelector('#contacto form').reset();
    })
   .catch(error => {
        // Muestra un mensaje de error
        alert('Error al enviar el formulario');
        console.error(error);
    });
});

// Agrega un evento de scroll para mostrar el botón de subir
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
        document.querySelector('#subir').style.display = 'block';
    } else {
        document.querySelector('#subir').style.display = 'none';
    }
});

// Agrega un evento de click al botón de subir
document.querySelector('#subir').addEventListener('click', function() {
    // Sube al usuario a la parte superior de la página
    window.scrollTo(0, 0);
});
// Agrega un evento de scroll para mostrar el botón de subir
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
        document.querySelector('#subir').style.display = 'block';
    } else {
        document.querySelector('#subir').style.display = 'none';
    }
});

// Agrega un evento de click al botón de subir
document.querySelector('#subir').addEventListener('click', function() {
    // Sube al usuario a la parte superior de la página
    window.scrollTo(0, 0);
});
