// Importar las clases y módulos necesarios
import { Leon, Oso, Lobo, Serpiente, Aguila } from './clases/tipos.js';
import dataAnimales from './animales.js';

let animales = []; // Arreglo para almacenar los objetos de animales registrados

// Función para recargar la tabla de animales en la interfaz de usuario
const reloadTable = () => {
  const animalesTemplate = document.getElementById("Animales"); // Obtiene el contenedor de la tabla de animales
  animalesTemplate.innerHTML = ""; // Limpia el contenido actual de la tabla
  animales.forEach((p, i) => {
    // Itera sobre cada animal en el arreglo
    const animalCard = document.createElement("div"); // Crea un nuevo elemento div para la tarjeta del animal
    animalCard.classList.add("Animal");

    // Crea el contenido HTML de la tarjeta del animal
    animalCard.innerHTML = `
    <div class="card" id="miCardDetalle">
      <img src="${p.getImg()}" alt="" data-toggle="modal" data-target="#exampleModal" onclick="modalDetails(${i})">
      <i class="fa-solid fa-volume-high fa-2xl" style="color: #ffffff;" id="sonido" onclick="playSound('${p.getNombre()}')"></i>
      </div>
    `;

    animalesTemplate.appendChild(animalCard); // Agrega la tarjeta del animal al contenedor de la tabla de animales
  });
};

// Función para reproducir el sonido del animal seleccionado
window.playSound = (nombre) => {
  const animal = animales.find((a) => a.getNombre() == nombre); // Encuentra el objeto de animal correspondiente al nombre
  console.log(animal); // Imprime el objeto animal en la consola
  // Selecciona el método de sonido según el tipo de animal y lo reproduce
  if (animal instanceof Leon) {
    animal.Rugir();
  } else if (animal instanceof Lobo) {
    animal.Aullar();
  } else if (animal instanceof Oso) {
    animal.Gruñir();
  } else if (animal instanceof Serpiente) {
    animal.Sisear();
  } else if (animal instanceof Aguila) {
    animal.Chillar();
  }
};

// Función para mostrar los detalles de un animal en el modal
window.modalDetails = (i) => {
  const modalBody = document.querySelector(".modal-body"); // Obtiene el cuerpo del modal
  const animal = animales[i]; // Obtiene el objeto de animal correspondiente al índice
  // Agrega el HTML correspondiente al cuerpo del modal para mostrar los detalles del animal
  const modalContent = ` 
  <img src="${animal.getImg()}" alt="">
  <h5 class="modal-title">${animal.getNombre()}</h5>
    <p class="modal-p">Edad: ${animal.getEdad()}</p>
    <p class="modal-p">Comentarios: ${animal.getComentarios()}</p>
`;
modalBody.innerHTML = modalContent;
};

// Variable para almacenar la ruta de la imagen del animal seleccionado
let imagenSrc = "";
// Variable para almacenar el sonido del animal seleccionado
let sonido = "";

// Evento de cambio en la selección del tipo de animal
document.getElementById("animal").addEventListener("change", async (e) => {
  const animalSelected = e.target.value; // Obtiene el valor seleccionado en el elemento de selección
  const animalesData = await dataAnimales.getData(); // Obtiene los datos de animales del módulo animalesData
  const animalObject = animalesData.find((a) => a.name == animalSelected); // Encuentra el objeto de animal correspondiente al nombre seleccionado
  imagenSrc = `/assets/imgs/${animalObject.imagen}`; // Establece la ruta de la imagen del animal
  sonido = animalObject.sonido; // Establece el sonido del animal
  const preview = document.getElementById("preview"); // Obtiene el elemento de vista previa de imagen
  preview.parentElement.classList.remove("p-5"); // Remueve una clase de estilo del contenedor de la vista previa
  preview.style.backgroundImage = `url(${imagenSrc})`; // Establece la imagen de fondo de la vista previa
});

// Evento de clic en el botón de agregar animal
document.getElementById("btnRegistrar").addEventListener("click", () => {
  const nombre = document.getElementById("animal").value; // Obtiene el nombre del animal seleccionado
  const edad = document.getElementById("edad").value; // Obtiene la edad del animal ingresada
  const comentarios = document.getElementById("comentarios").value; // Obtiene los comentarios del animal ingresados

  let nuevoAnimal; // Variable para almacenar el objeto de animal creado

  // Crea el objeto de animal correspondiente según el tipo seleccionado y asigna la instancia a la variable nuevoAnimal
  switch (nombre) {
    case "Leon":
      nuevoAnimal = new Leon(nombre, edad, imagenSrc, comentarios,'Rugido.mp3');
      break;
    case "Lobo":
      nuevoAnimal = new Lobo(nombre, edad, imagenSrc, comentarios, 'Aullido.mp3');
      break;
    case "Oso":
      nuevoAnimal = new Oso(nombre, edad, imagenSrc, comentarios,'Grugido.mp3');
      break;
    case "Serpiente":
      nuevoAnimal = new Serpiente(nombre, edad, imagenSrc, comentarios,'Siseo.mp3');
      break;
    case "Aguila":
      nuevoAnimal = new Aguila(nombre, edad, imagenSrc, comentarios, 'Chillido.mp3');
      break;
    default:
      break;
  }

  animales.push(nuevoAnimal); // Agrega el objeto de animal al arreglo de animales
  reloadTable(); // Recarga la tabla de animales en la interfaz de usuario
});

// Llama a la función reloadTable al cargar la página para mostrar los animales registrados previamente
window.onload = reloadTable;