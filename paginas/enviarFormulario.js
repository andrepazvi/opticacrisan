document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
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
  
  
      const formulariosGuardados = JSON.parse(localStorage.getItem("formularios")) || [];
  

      formulariosGuardados.push(formularioData);
  

      localStorage.setItem("formularios", JSON.stringify(formulariosGuardados));
  

      form.reset();
  
      alert("El formulario ha sido enviado con éxito. Recibirás una pronta respuesta.");

    });
  });
  