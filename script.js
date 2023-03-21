
//quiero saber que me alcanza para comprar en el supermercado y para eso voy a realizar un presupuesto//
let entrada = Number(prompt("ingrese cuanto dinero tiene"))
presupuesto = entrada

let pan = 300
let leche = 400
let huevos = 200
let fideos = 500
let arroz = 200
let carne = 1200
let pollo = 1000
let yogurt = 300
let aceite = 600
let harina = 350

canastaBasica = (pan + leche + aceite + huevos);
canastaMedia = (pan + leche + huevos + arroz + fideos + carne + harina);
canastaCompleta = (pan + leche + huevos + arroz + fideos + carne + yogurt + pollo + aceite + harina);

if (presupuesto <= canastaBasica){
    alert("te alcanza para una canasta basica")
}else if(presupuesto <=canastaMedia){
    alert("te alcanza para una canasta media")
}else if(presupuesto <= canastaCompleta){
    alert("te podes comprar todo ricachon!")
}else{
    alert("anda a laburar que sino te vas a c... de hambre")
}
