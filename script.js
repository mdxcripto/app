document.addEventListener("DOMContentLoaded", function() {
    // URL del archivo JSON
    const urlContenido = '/contenido';

function animateText(elementId, text) {
  let i = 0;
  const speed = 100; // Velocidad de la animación (en milisegundos)
  const element = document.getElementById(elementId);

  function typeWriter() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}

// Función para animar el texto de "escribirse"
function animateText(elementId, text, speed = 100) {
  let i = 0;
  const element = document.getElementById(elementId);

  // Esta función irá escribiendo el texto letra por letra
  function typeWriter() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}

// Simulamos que cargamos el texto desde el servidor (esto es solo un ejemplo)
const descripcion = "Bitcoin es una criptomoneda descentralizada.";

// Llamamos a la función de animación para la descripción
animateText('descripcion-moneda', descripcion);

// Llama a la función para animar la palabra "Bitcoin"
animateText('palabra-animada', 'Bitcoin');

    // Función para obtener el contenido desde el servidor
    function obtenerContenido() {
        fetch('http://blackholesol.site/contenido')
            .then(response => response.json())
            .then(data => {
                // Mostrar la moneda y su descripción
                document.getElementById('nombre-moneda').innerText = data.moneda.nombre;
                document.getElementById('descripcion-moneda').innerText = data.moneda.descripcion;
                document.getElementById('imagen-moneda').src = data.moneda.imagen;

                // Mostrar el contador
                const ultimaActualizacion = new Date(data.ultimaActualizacion);
                const ahora = new Date();
                const tiempoRestante = calcularTiempoRestante(ultimaActualizacion, ahora);
                mostrarContador(tiempoRestante);
            })
            .catch(error => {
                console.error('Error al obtener el contenido:', error);
            });
    }

    // Función para calcular el tiempo restante hasta el próximo día
    function calcularTiempoRestante(ultimaActualizacion, ahora) {
        const proximoDia = new Date(ahora);
        proximoDia.setHours(0, 0, 0, 0);
        proximoDia.setDate(proximoDia.getDate() + 1);
        const tiempoRestante = proximoDia - ahora;
        return tiempoRestante;
    }

    // Función para mostrar el contador en formato "hh:mm:ss"
    function mostrarContador(tiempoRestante) {
        const horas = Math.floor(tiempoRestante / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        document.getElementById('contador').innerText = `${horas}h ${minutos}m ${segundos}s`;

        // Actualiza el contador cada segundo
        setTimeout(() => {
            mostrarContador(tiempoRestante - 1000);
        }, 1000);
    }

    // Llama a la función para obtener el contenido
    obtenerContenido();
});
