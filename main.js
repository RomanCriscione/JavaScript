let lugar = prompt("Elegí si tu planta es para exterior o interior");
let maceta = Number(prompt("Elegí el número de maceta"));
let aleatorio = parseInt(Math.floor(Math.random()*2.9));

function bienvenida(){
    console.log("Bienvenidos a Elegí tu planta")
}

function despedida(){
    console.log("Gracias por elegirnos")
}

bienvenida();



if(lugar === "exterior" && aleatorio === 0){
    console.log("Te puedo recomendar una planta de aljaba");
}else if(lugar === "exterior" && aleatorio === 1){
    console.log("Te puedo recomendar un pino");
}else if(lugar === "exterior" && aleatorio === 2){
    console.log("Te puedo recomendar un rosal");
}else if(lugar === "interior" && aleatorio === 0){
    console.log("Te puedo recomendar un crotón");
}else if(lugar === "interior" && aleatorio === 1){
    console.log("Te puedo recomendar una calathea");
}else if(lugar === "interior" && aleatorio === 2){
    console.log("Te puedo recomendar una alocasia");

}else{
    console.log("Elegiste una opción incorrecta");
}

for(let i=1; i<=27; i+=1){
if(i == maceta){
    console.log("para el tamaño de un maceta número " + maceta +" necesitas una bolsa de tierra grande");
}else{
    console.log("para el tamaño de un maceta número " + maceta +" necesitas una bolsa de tierra chica");
}

break

}

despedida();