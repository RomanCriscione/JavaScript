document.addEventListener("DOMContentLoaded", () => {
const entradaPlanta = document.querySelector(".planta");
const entradaLugar = document.querySelector(".lugar");
const entradaMaceta = document.querySelector(".maceta");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const salida1 = document.querySelector(".output1");
const salida2 = document.querySelector(".output2");
let aleatorio = parseInt(Math.floor(Math.random()*2.9));

//Funciones

function planta(nombre, lugar, luz){
this.nombre = nombre;
this.lugar = lugar;
this.luz = luz;
}


// constantes

const spatiphillium = new planta("Spatiphllium", "interior", "poca");
const pattaya = new planta("Pattaya", "interior", "poca");
const sansiviera = new planta("Sansiviera", "interior", "poca");
const bambu = new planta("Bambu", "interior", "bastante");
const palmito = new planta("Palmito", "interior", "bastante");
const mostera = new planta("Mostera", "interior", "bastante");
const peperomia = new planta("Peperomia", "interior", "mucha");
const calathea = new planta("Calathea", "interior", "mucha");
const croton = new planta("Crotón", "interior", "mucha");
const aljaba = new planta("Aljaba", "exterior", "");
const pino = new planta("Pino", "exterior", "");
const rosal = new planta("Rosal", "exterior", "");
const parrafo1= document.getElementById("parrafo1");

//Array

const tierra = ["chica", "mediana", "grande"]

//Eventos

btn1.addEventListener("click", () => {
  if (entradaPlanta.value !== "") {
    if (entradaPlanta.value === "Interior" && entradaLugar.value === "Poca" && aleatorio === 0) {
      salida1.textContent = ("Para el lugar de la casa que elegiste te recomendamos " + spatiphillium.nombre);
    } else if (entradaPlanta.value === "Interior" && entradaLugar.value === "Poca" && aleatorio === 1) {
      salida1.textContent = ("Para el lugar de la casa que elegiste te recomendamos " + pattaya.nombre);
    } else if (entradaPlanta.value === "Interior" && entradaLugar.value === "Poca" && aleatorio === 2) {
      salida1.textContent = ("Para el lugar de la casa que elegiste te recomendamos " + sansiviera.nombre);
    } else if (entradaPlanta.value === "Interior" && entradaLugar.value === "Bastante" && aleatorio === 0) {
      salida1.textContent = ("Para el lugar de la casa que elegiste te recomendamos " + bambu.nombre);
    } else if (entradaPlanta.value === "Interior" && entradaLugar.value === "Bastante" && aleatorio === 1) {
      salida1.textContent = ("Para el lugar de la casa que elegiste te recomendamos " + palmito.nombre);
    } else if (entradaPlanta.value === "Interior" && entradaLugar.value === "Bastante" && aleatorio === 2) {
      salida1.textContent = ("Para el lugar de la casa que elegiste te recomendamos " + mostera.nombre);
    } else if (entradaPlanta.value === "Interior" && entradaLugar.value === "Mucha" && aleatorio === 0) {
      salida1.textContent = ("Para el lugar de la casa que elegiste te recomendamos " + peperomia.nombre);
    } else if (entradaPlanta.value === "Interior" && entradaLugar.value === "Mucha" && aleatorio === 1) {
      salida1.textContent = ("Para el lugar de la casa que elegiste te recomendamos " + calathea.nombre);
    } else if (entradaPlanta.value === "Interior" && entradaLugar.value === "Mucha" && aleatorio === 2) {
      salida1.textContent = ("Para el lugar de la casa que elegiste te recomendamos " + croton.nombre);
    } else if (entradaPlanta.value === "Exterior" && aleatorio === 0) {
      salida1.textContent = ("Para el lugar de la casa que elegiste te recomendamos " + aljaba.nombre);
    } else if (entradaPlanta.value === "Exterior" && aleatorio === 1) {
      salida1.textContent = ("Para el lugar de la casa que elegiste te recomendamos " + pino.nombre);
    } else if (entradaPlanta.value === "Exterior" && aleatorio === 2) {
      salida1.textContent = ("Para el lugar de la casa que elegiste te recomendamos " + rosal.nombre);
    } 
    const resultadoJSON = JSON.stringify({
    plantaRecomendada: salida1.textContent,
    mensaje: parrafo1.textContent
  });
   localStorage.setItem('resultadoBtn1', resultadoJSON);
   parrafo1.textContent = "Elegí el número de maceta para saber la cantidad de tierra que necesitas";
  }
});

btn2.addEventListener("click", () => {
  if (entradaMaceta.value !== "") {
    if (entradaMaceta.value === "Número 20 o menos") {
      salida2.textContent = ("Te recomendamos una bolsa de tierra chica");
    } else if (entradaMaceta.value === "Entre 20 y 30") {
      salida2.textContent = ("Te recomendamos una bolsa de tierra mediana");
    }else if (entradaMaceta.value === "Más de 30") {
      salida2.textContent = ("Te recomendamos una bolsa de tierra grande");
    }
}
const resultadoJSON = JSON.stringify({
    tierraRecomendada: salida2.textContent,
    mensaje: parrafo1.textContent
  });

  localStorage.setItem('resultadoBtn2', resultadoJSON);
parrafo1.textContent = "¡Muchas gracias!";
});
});
