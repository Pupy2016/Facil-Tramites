const formulario = document.querySelector('form');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.querySelector('input[name="nombre"]').value;
  const correo = document.querySelector('input[name="correo"]').value;
  const solicitud = document.querySelector('select[name="solicitud"]').value;
  const pais = document.querySelector('select[name="pais"]').value;
  const celular = document.querySelector('input[name="celular"]').value;
  const mensaje = document.querySelector('textarea[name="mensaje"]').value;

  // Enviar la información al servidor
  fetch('/enviar-solicitud', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre,
      correo,
      solicitud,
      pais,
      celular,
      mensaje
    })
  })
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error(error));
});
const formulario = document.querySelector('form');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.querySelector('input[name="nombre"]').value;
  const correo = document.querySelector('input[name="correo"]').value;
  const solicitud = document.querySelector('select[name="solicitud"]').value;
  const pais = document.querySelector('select[name="pais"]').value;
  const celular = document.querySelector('input[name="celular"]').value;
  const mensaje = document.querySelector('textarea[name="mensaje"]').value;

  if (nombre === '' || correo === '' || solicitud === '' || pais === '' || celular === '' || mensaje === '') {
    alert('Por favor, complete todos los campos');
    return;
  }

  // Validar patrones de los campos
  if (!/[a-zA-Z\s]+/.test(nombre)) {
    alert('El nombre solo puede contener letras y espacios');
    return;
  }

  if (!/[0-9\s]+/.test(celular)) {
    alert('El número de celular solo puede contener números y espacios');
    return;
  }

  // Enviar el formulario si todo está válido
  fetch('/enviar-solicitud', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre,
      correo,
      solicitud,
      pais,
      celular,
      mensaje
    })
  })
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error(error));
});
