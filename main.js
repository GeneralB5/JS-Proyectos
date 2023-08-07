/// contrasena pra agregar bebida = 0819237
let Nombre = prompt("Registre su nombre aqui");
const BebidasEnStock = []
const BEBIDASSSinfo = [];
const BEBIDASSS = [];
const personasQueCompraron = [];
const prueba= [ {Nombre : "ivan",precio : 5}]
const registrodestock =()=>{
    const stockk = parseInt(prompt("Cuanto stock tiene disponible"))
    if (stockk > 0) { 
        return "si"
    }else{ 
    return "no"
    }
};
class BEBIDASS{
    constructor(nombre,precio,marca,stock){
        this.nombre = nombre
        this.precio = precio
        this.marca = marca
        this.stock = stock
    }
    mostrarInfo(){
        return ` Bebida = ${this.nombre} ,Precio = ${this.precio} ,Marca = ${this.marca} ,Stock = ${this.stock}`
    }
    documentMostrarInfo(){
        return`
        <b>Nombre = ${this.nombre}</b><br>
        <b>Precio = ${this.precio}</b><br>
        <b>Marca = ${this.marca}</b><br>
        <b>Stock = ${this.stock}</b><br>
        `
    }
    prompt1(){
        if(documentTrue == 1 && bebida4.stock == "si"){
            return `"Elija su bebida ( 1 coca, 2 fanta, 3 agua, 4 ${this.nombre} )"`
        }else{
            return "Elija su bebida ( 1 coca, 2 fanta, 3 agua)"
        }
    }
    nombreDeBebida(){
        return this.nombre
    }
}
 const Bebida1 = new BEBIDASS("CocaCola",4,"COCACOLACOMPANY","si");
 const Bebida2 = new BEBIDASS("Agua",2,"Andes","si");
 const Bebida3 = new BEBIDASS("Fanta",6,"COCACOLACOMPANY","si");
 let bebida4 = 0;
 class vueltaDeInformacion{ 
 constructor( DNIS,NombreS,dineroingresadosS){//////// dineroingresado,nombre,dni armar una funcion constructora
    this.DNIS = DNIS
    this.dineroingresadosS =dineroingresadosS
    this.NombreS =NombreS
}
     info(){
        return `Nombre: ${this.NombreS}, su dni es:${this.DNIS} y su dinero ingresado fue de: ${this.dineroingresadosS}</br>`
    }
}

    let documentTrue = 0;
let restas=(a,b)=> a-b;
let contadorDeIntentos = 0;
let bebida = 0;
let contadorDeIntentosTarjeta = 0;
let DNIFINAL = 0;
BEBIDASSS.push(Bebida1,Bebida2,Bebida3)
BEBIDASSSinfo.push(Bebida1.mostrarInfo(), Bebida2.mostrarInfo(), Bebida3.mostrarInfo());
if(Nombre == "0819237"){
 alert("Bienvenido, usted ingreso a agregar bebida");
 alert("Siga las consignas paso a paso porfavor");
 while(true){
let name = prompt("nombre de la bebida selecionada");
let price = parseInt(prompt("Ingrese su precio"));
let Company = prompt("Ingrese su compania de procedencia");
if(name == "" || !isNaN(price) || price > 1 || price < 10 || Company == ""|| price <= 10 ){
    bebida4 = new BEBIDASS(name,price,Company,registrodestock());
    BEBIDASSSinfo.push(bebida4.mostrarInfo())
    BEBIDASSS.push(bebida4)
    documentTrue = 1;
   while(true){
    Nombre = prompt("Ingrese su nombre real ")
    if(isNaN(Nombre)){
        break;
    } else{
        continue;
    }
    }
   
    break;
}else{
    alert("ingreselo de nuevo");
    continue;
}
 }}else{
    console.log("no quiso agregar bebida")
    bebida4 = new BEBIDASS("",0,"","no");
    
}
document.write(`
${Bebida1.documentMostrarInfo()}<br>
${Bebida2.documentMostrarInfo()}<br>
${Bebida3.documentMostrarInfo()}<br>
`
)
if(documentTrue == 1){
    document.write(`${bebida4.documentMostrarInfo()}<br>
    `)
}
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
    if (nombreIngresado === Nombre) {
        alert("Bienvenido");
        break;
    } else {
        alert("Intentelo devuelta (nombre o dni mal ingresado)");
    };
    contadorDeIntentos++;
} while (contadorDeIntentos < 3)
const prueba1 = BEBIDASSS.filter((x)=>{
    return x.stock == "si" 
})
for(let x of prueba1){
    BebidasEnStock.push(x.nombre)
}
alert(`Las bebidas en stock son:${BebidasEnStock}`)
const buscastock = BEBIDASSS.find((x)=>{
    return x == bebida4
})
console.log(buscastock)
if(isNaN(Nombre) ){//true1 == 1
let cantidadDeDinero = parseInt(prompt("ingrese el monto que dispone y le diremos que podra comprar"));
if(documentTrue == 1 && buscastock !== undefined ){
    while(true){
    if(cantidadDeDinero >= Bebida2.precio && cantidadDeDinero < Bebida1.precio){
        if(bebida4.precio >= Bebida2.precio && bebida4.precio < Bebida1.precio){
        alert(`Puede comprar ${Bebida2.nombre} y ${bebida4.nombre}`)
        break;
        }else{ alert(`Puede comprar ${Bebida2.nombre}`)
                break;  }
    }else if(cantidadDeDinero >= Bebida1.precio && cantidadDeDinero < Bebida3.precio ){
        if(bebida4.precio >= Bebida1.precio || bebida4.precio < Bebida3.precio){
        alert(`Puede comprar ${Bebida2.nombre}, ${bebida4.nombre} y ${Bebida1.nombre}`)
        break;}
        else{alert(`Puede comprar ${Bebida2.nombre} y ${Bebida1.nombre}`)
            break;}
    }else if(bebida4.precio >= Bebida3 || bebida4.precio < 10 && cantidadDeDinero >= Bebida3.precio){
        alert(`puede comprar todo el catalogo`)
        break;
    }else{
        alert(`Dinero insuficiente o no a ingresado dinero`)
        continue;
    }}

}else{
switch (true) {////dineroEnMano
    case (cantidadDeDinero < 2 ):
        alert ("dinero insuficiente");
        break;
    case (cantidadDeDinero >= 2, cantidadDeDinero < 3):
        alert(`Puede comprar ${Bebida2.nombre}`)
        break;
    case (cantidadDeDinero >= 3, cantidadDeDinero < 6 ):
        alert(`Puede comprar ${Bebida2.nombre} y ${Bebida1.nombre}`)
        break;
        case (cantidadDeDinero >= 6):
            alert(`Puede comprar ${Bebida2.nombre}, ${Bebida1.nombre} y ${Bebida3.nombre}`)
            break;
    default:
        alert("Lo que a ingresado no es dinero")
        break;
}}
if(cantidadDeDinero >= 2){///bebida
alert("Elija su bebida")
let bebidaElegida = parseInt(prompt(bebida4.prompt1()))
if(bebidaElegida == 3 && cantidadDeDinero >= Bebida2.precio){
    alert(`gracias por la compra de su ${Bebida2.nombre} `);
    bebida = Bebida2.precio;
}else if (bebidaElegida == 1 && cantidadDeDinero >= Bebida1.precio){
    alert(`gracias por la compra de su ${Bebida1.nombre} `);
    bebida = Bebida1.precio;
}else if(bebidaElegida == 2 && cantidadDeDinero >= Bebida3.precio){
    alert(`gracias por la compra de su ${Bebida3.nombre} `);
    bebida = Bebida3.precio;
}else if(bebidaElegida == 4 && documentTrue == 1 && cantidadDeDinero >= bebida4.precio && bebida4.stock == "si"){
    alert(`gracias por la compra de su ${bebida4.nombre} `);
    bebida = bebida4.precio;
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
    for(let x of BEBIDASSSinfo){
        console.log(x)
    }
    const persona1 = new vueltaDeInformacion(DNIFINAL,Nombre,cantidadDeDinero)
    const persona2 = new vueltaDeInformacion(1434131443431,"juan",3)
    const persona3 = new vueltaDeInformacion(1343343434,"pedro",8)
    const persona4 = new vueltaDeInformacion(12345678,"ignacio",12)
    personasQueCompraron.push(persona1.info(),persona2.info(),persona3.info(),persona4.info())
    const people = personasQueCompraron.filter((x)=>{ 
        return `<b>${x}</b></br>`
    })
    document.write(people)
}else{ 
    alert("Su tarjeta no a sido aceptada");
    console.error("Su tarjeta no a sido ingreada correctamente o reconocida");
    console.log("Se reiniciara el proceso");
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