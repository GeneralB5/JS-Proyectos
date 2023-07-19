const nombre = prompt("Registre su nombre aqui");
function vueltaDeInformacion( DNIS,NombreS,dineroingresadosS){//////// dineroingresado,nombre,dni armar una funcion constructora
    this.DNIS = DNIS
    this.dineroingresadosS =dineroingresadosS
    this.NombreS =NombreS
    return "Nombre de la persona: " +this.NombreS+". Su dni es: "+this.DNIS+". Eldionero ingresado fue: "+this.dineroingresadosS
    }
let restas=(a,b)=> a-b;
let contadorDeIntentos = 0;
let bebida = 0;
let contadorDeIntentosTarjeta = 0;
let true1 = 0;
let DNIFINAL = 0;
while(true){
    let DNIngresado = prompt("Ingrese su dni para terminar su registro (maximo de 8 numeros)");
        let DNI = DNIngresado.slice(0,8)
if(!isNaN(DNI) && DNI >= DNIngresado && DNI >= 10000000 ){
    DNIFINAL = DNI;
    break;
}else{
alert("no lo a ingresado correctamente")
continue;   
}
}
alert("Log-in")
do {////login
    let nombreIngresado = prompt("Ingrese usuario")
    if (nombreIngresado === nombre) {
        alert("Bienvenido");
        true1 = 1;
        break;
    } else {
        alert("Intentelo devuelta (nombre o dni mal ingresado)");
    };
    contadorDeIntentos++;
} while (contadorDeIntentos < 3)
if(true1 == 1){
let cantidadDeDinero = parseInt(prompt("ingrese el monto que dispone y le diremos que podra comprar"));
switch (true) {////dineroEnMano
    case (cantidadDeDinero < 2 ):
        alert ("dinero insuficiente");
        break;
    case (cantidadDeDinero >= 2, cantidadDeDinero < 3):
        alert("Puede comprar agua")
        break;
    case (cantidadDeDinero > 3, cantidadDeDinero < 5 ):
        alert("puede comprar agua y coca")
        break;
        case (cantidadDeDinero > 5):
            alert("puede comprar agua,coca y fanta")
            break;
    default:
        alert("Lo que a ingresado no es dinero")
        break;
}
if(cantidadDeDinero >= 2){///bebida
alert("Elija su bebida")
let bebidaElegida = parseInt(prompt("Elija su bebida ( 1 coca, 2 fanta, 3 agua)"))
if(bebidaElegida == 3 && cantidadDeDinero >= 2){
    alert("gracias por la compra del agua");
    bebida = 2;
}else if (bebidaElegida == 1 && cantidadDeDinero > 3){
    alert("gracias por la compra del coca");
    bebida = 4;
}else if(bebidaElegida == 2 && cantidadDeDinero > 5){
    alert("gracias por la compra del fanta");
    bebida = 6;
}else{
    alert("No se a podido realizar la compra");
}
if(bebida > 1){
    let resto = parseInt(restas(cantidadDeDinero,bebida))
    do {/////////metodoDePagoConTarjeta
    let tarjetaDeCreditoIngresada = prompt("ingrese su tarjeta (solo disponemos de visa,banco nacion,mastercard)");
    if (tarjetaDeCreditoIngresada == "visa" || tarjetaDeCreditoIngresada == "banco nacion" || tarjetaDeCreditoIngresada == "mastercard") {
        alert("gracias por su compra usted a gastado: "+ bebida +"$ y su resto es : " + resto + "$" );  
        break;
    } else {
        alert("tarjeta no aceptada");
    }
    contadorDeIntentosTarjeta++
} while (contadorDeIntentosTarjeta < 3)
    console.log(vueltaDeInformacion(DNIFINAL,nombre,cantidadDeDinero));
}else{ 
    alert("Su tarjeta no a sido aceptada");
    console.error("Su tarjeta no a sido ingreada correctamente o reconocida");
    onsole.log("Se reiniciara el proceso");
}
}else{
    alert("Dinero insuficiente");
    console.error("No posee el dinero suficiente para efectuar este pago");
    console.log("Se reiniciara el proceso");
}
}else{
    alert("No se ha podido ingresar");
    console.error("A ingresado mas de tres veces mal su cuenta por lo cual no a ingresado");
    console.log("Se reiniciara el proceso");
}