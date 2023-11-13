let lugar = prompt("Elegí si tu planta es para exterior o interior");
let maceta = Number(prompt("Elegí el número de maceta"));
let aleatorio = parseInt(Math.floor(Math.random()*2.9));
let luzInterior = prompt("¿Qué cantidad de luz recibiría la planta (opciones: mucha, media, poca, si es exterior dejar vacio)");



const pocaLuz = ["Spathiphillium", "Pattaya", "Sansiviera"];
const mediaLuz = ["Bambu", "Palmito", "Mostera"];
const muchaLuz = ["Peperomia", "Calathea", "Crotón"];
const exterior = ["Aljaba", "Pino", "Rosal"]

//Funciones
function bienvenida(){
    console.log("Bienvenidos a Elegí tu planta")
}

function despedida(){
    console.log("Gracias por elegirnos")
}

bienvenida();

//Elección de plantas

if(lugar === "exterior" && aleatorio === 0){
    console.log("Te puedo recomendar " + exterior[0] + ", ");
    document.write("Te puedo recomendar " + exterior[0]+ ", ");
}else if(lugar === "exterior" && aleatorio === 1){
    console.log("Te puedo recomendar " + exterior[1] + ", ");
    document.write("Te puedo recomendar " + exterior[1] + ", ");
}else if(lugar === "exterior" && aleatorio === 2){
    console.log("Te puedo recomendar " + exterior[2] + ", ");
    document.write("Te puedo recomendar " + exterior[2] + ", ");
}else if(lugar === "interior" && luzInterior === "poca" && aleatorio === 0){
    console.log("Te puedo recomendar " + pocaLuz[0] + ", ");
    document.write("Te puedo recomendar " + pocaLuz[0] + ", ");
}else if(lugar === "interior" && luzInterior === "poca" && aleatorio === 1){
    console.log("Te puedo recomendar " + pocaLuz[1] + ", ");
    document.write("Te puedo recomendar " + pocaLuz[1] + ", ");
}else if(lugar === "interior" && luzInterior === "poca" && aleatorio === 2){
    console.log("Te puedo recomendar " + pocaLuz[2] + ", ");
    document.write("Te puedo recomendar " + pocaLuz[2] + ", ");
}else if(lugar === "interior" && luzInterior === "media" && aleatorio === 0){
    console.log("Te puedo recomendar " + mediaLuz[0] + ", ");
    document.write("Te puedo recomendar " + mediaLuz[0] + ", ");
}else if(lugar === "interior" && luzInterior === "media" && aleatorio === 1){
    console.log("Te puedo recomendar " + mediaLuz[1] + ", ");
    document.write("Te puedo recomendar " + mediaLuz[1] + ", ");
}else if(lugar === "interior" && luzInterior === "media" && aleatorio === 2){
    console.log("Te puedo recomendar " + mediaLuz[2] + ", ");
    document.write("Te puedo recomendar " + mediaLuz[2] + ", ");
}else if(lugar === "interior" && luzInterior === "mucha" && aleatorio === 0){
    console.log("Te puedo recomendar " + muchaLuz[0] + ", ");
    document.write("Te puedo recomendar " + muchaLuz[0] + ", ");
}else if(lugar === "interior" && luzInterior === "mucha" && aleatorio === 1){
    console.log("Te puedo recomendar " + muchaLuz[1] + ", ");
    document.write("Te puedo recomendar " + muchaLuz[1] + ", ");
}else if(lugar === "interior" && luzInterior === "mucha" && aleatorio === 2){
    console.log("Te puedo recomendar " + muchaLuz[2] + ", ");
    document.write("Te puedo recomendar " + muchaLuz[2] + ", ");
}else{
    console.log("Elegiste una opción incorrecta, ");
    document.write("Elegiste una opción incorrecta, ");
}

for(let i=1; i<=27; i+=1){
if(i == maceta){
    console.log("para el tamaño de un maceta número " + maceta +" necesitas una bolsa de tierra grande.");
    document.write("para el tamaño de un maceta número " + maceta +" necesitas una bolsa de tierra grande.");
}else{
    console.log("para el tamaño de un maceta número " + maceta +" necesitas una bolsa de tierra chica.");
    document.write("para el tamaño de un maceta número " + maceta +" necesitas una bolsa de tierra chica.");
}

break

}

despedida();
