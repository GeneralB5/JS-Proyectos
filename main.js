let restas=(a,b)=> a-b;
const nombre = prompt("Registre su nombre aqui");
let contadorDeIntentos = 0;
let bebida = 0
let contadorDeIntentosTarjeta = 0;
let true1 = 0;
alert("Log-in")
do {////login
    let nombreIngresado = prompt("Ingrese usuario")
    if (nombreIngresado === nombre) {
        alert("Bienvenido")
        true1 = 1;
        break
    } else {
        alert("Intentelo devuelta")
    };
    contadorDeIntentos++;
} while (contadorDeIntentos < 3)
if(true1 == 1){
let cantidadDeDinero = parseInt(prompt("ingrese el monto que dispone y le diremos que podra comprar"));
switch (true) {////dineroEnMano
    case (cantidadDeDinero < 2 ):
        alert ("dinero insuficiente")
        break;
    case (cantidadDeDinero >= 2, cantidadDeDinero < 3):
        alert("Puede comprar agua")
        break;
    case (cantidadDeDinero > 3, cantidadDeDinero < 5 ):
        alert("puede comprar agua y coca")
        break;
        case (cantidadDeDinero > 5):
            alert("puede comprar agua,coca y fanta")
            break
    default:
        alert("Lo que a ingresado no es dinero")
        break;
}
if(cantidadDeDinero >= 2){///bebida
alert("Elija su bebida")
let bebidaElegida = parseInt(prompt("Elija su bebida ( 1 coca, 2 fanta, 3 agua)"))
if(bebidaElegida == 3 && cantidadDeDinero >= 2){
    alert("gracias por la compra del agua")
    bebida = 2
}else if (bebidaElegida == 1 && cantidadDeDinero > 3){
    alert("gracias por la compra del coca")
    bebida = 4
}else if(bebidaElegida == 2 && cantidadDeDinero > 5){
    alert("gracias por la compra del fanta")
    bebida = 6
}else{
    alert("No se a podido realizar la compra")
}
if(bebida > 1){
    let resto = parseInt(restas(cantidadDeDinero,bebida))
    do {/////////metodoDePagoConTarjeta
    let tarjetaDeCreditoIngresada = prompt("ingrese su tarjeta (solo disponemos de visa,banco nacion,mastercard)");
    if (tarjetaDeCreditoIngresada == "visa" || tarjetaDeCreditoIngresada == "banco nacion" || tarjetaDeCreditoIngresada == "mastercard") {
        alert("gracias por su compra usted a gastado: "+ bebida +"$ y su resto es : " + resto + "$" )  
        break
    } else {
        alert("targeta no aceptada")
    }
    contadorDeIntentosTarjeta++
} while (contadorDeIntentosTarjeta < 3)
}else{}
}else{}
}else{}