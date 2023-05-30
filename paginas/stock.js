function Modelo(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
  }
  
  const stock = {
    modelos: [
      new Modelo("Lacoste", 10),
      new Modelo("Ray-Ban", 5),
      new Modelo("Carolina Herrera", 8),
      new Modelo("Gucci", 12),
      new Modelo("Prada", 6),
    ],
  
    buscarModelo: function(nombreModelo) {
      return this.modelos.find(modelo => modelo.nombre === nombreModelo);
    },
  };
  
  function generarFilasTabla() {
    const tbody = document.querySelector("#stock-table tbody");
    tbody.innerHTML = "";
  
    stock.modelos.forEach(modelo => {
      const fila = document.createElement("tr");
      const nombreCelda = document.createElement("td");
      const cantidadCelda = document.createElement("td");
  
      nombreCelda.textContent = modelo.nombre;
      cantidadCelda.textContent = modelo.cantidad;
  
      fila.appendChild(nombreCelda);
      fila.appendChild(cantidadCelda);
      tbody.appendChild(fila);
    });
  }
  
  function consultarCantidadDisponible() {
    const modeloInput = document.querySelector("#modelo-input");
    const nombreModelo = modeloInput.value.trim();
    modeloInput.value = "";
  
    const modeloEncontrado = stock.buscarModelo(nombreModelo);
  
    if (modeloEncontrado) {
      alert(`El modelo ${nombreModelo} se encuentra en stock y hay ${modeloEncontrado.cantidad} unidades disponibles.`);
    } else {
      alert(`Lo siento, el modelo ${nombreModelo} no se encuentra en stock.`);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    generarFilasTabla();
  
    const consultarBtn = document.querySelector("#consultar-btn");
    consultarBtn.addEventListener("click", consultarCantidadDisponible);
  });
  
  