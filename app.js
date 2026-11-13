const boton = document.getElementById("enviar");

boton.addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value;
  const servicio = document.getElementById("servicio").value;

  const mensaje = "Hola Andy, soy " + nombre + ". Me interesa: " + servicio;
  const url = "https://wa.me/51940868182?text=" + encodeURIComponent(mensaje);

  window.open(url, "_blank");
  
if (nombre.trim() === "" || servicio.trim() === "") {
    alert("Por favor, complete todos los campos antes de enviar el mensaje.");
    return;
  }

});