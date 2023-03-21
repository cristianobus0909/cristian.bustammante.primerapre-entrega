
//quiero saber que me alcanza para comprar en el supermercado y para eso voy a realizar un presupuesto//
let presupuesto = Number(prompt("Ingrese cuanto dinero tiene"));
let total = 0;

while (total < presupuesto) {
    let item = prompt("Ingresa el nombre del artículo que deseas comprar:");
    let precio = parseFloat(prompt("Ingresa el precio del artículo:"));

    if (isNaN(precio) || precio <= 0) {
        alert("Ingresa un precio válido.");
    } else if (total + precio > presupuesto) {
        alert("Lo siento, no tienes suficiente presupuesto para comprar este artículo.");
    } else {
        total += precio;
        alert(`Has comprado ${item} por $${precio}. Tu total actual es de $${total}.`);
    }
}

alert(`Has alcanzado tu presupuesto de $${presupuesto}. Tu total final es de $${total}.`);