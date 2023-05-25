document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el envío del formulario
  
      const nombre = document.querySelector("#nombre").value;
      const email = document.querySelector("#email").value;
      const telefono = document.querySelector("#telefono").value;
      const mensaje = document.querySelector("#mensaje").value;
  
      const formularioData = {
        nombre,
        email,
        telefono,
        mensaje
      };
  
      // Obtener los datos existentes en localStorage o crear un nuevo array
      const formulariosGuardados = JSON.parse(localStorage.getItem("formularios")) || [];
  
      // Agregar el nuevo formulario al array
      formulariosGuardados.push(formularioData);
  
      // Guardar el array actualizado en localStorage
      localStorage.setItem("formularios", JSON.stringify(formulariosGuardados));
  
      // Restablecer los campos del formulario
      form.reset();
  
      // Mostrar mensaje de éxito
      alert("El formulario ha sido enviado con éxito. Recibirás una pronta respuesta.");

    });
  });
  