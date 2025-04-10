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