const productos = []
const carritoDeCompras = []
const PrecioFinal = []
const DivDeCards = document.getElementById('cardcontainer')
let CARDS = 0
class creadoDeProductos {
    constructor(nombre, precio, id, color) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
        this.color = color
        return [this.precio,this.nombre,this.id,this.color = color]
    }
}
function agregaralcarritobb(pro,id) {
    const memori = JSON.parse(localStorage.getItem("producto"))
    console.log(memori)
    if (!memori) {
        const newpro = obtnewpro(pro)
        localStorage.setItem("producto",JSON.stringify([newpro]));
    }else{
        const proi = memori.findIndex(product=> product.id === id );
        console.log(proi);
        const newmemori = memori
        if(proi === -1){
            newmemori.push(obtnewpro(pro))
        }else{
            newmemori[proi].cantidad ++;
        }
        localStorage.setItem("producto",JSON.stringify(newmemori));

}}
function obtnewpro(x){
    obje = x;
    obje.cantidad = 1;
    return obje;
}
//document.addEventListener("DOMContentLoaded",()=>{Fetchdata()})


fetch('api.json')
    .then((x) => {
        return x.json()
    })
    .then((data) => {
        // const nueProd = document.createElement("div")
        // nueProd.classList = "cardcontainer"
        data.forEach(element => {
            const nueProd = document.createElement("div")
            nueProd.classList = "divdecompras"
            DivDeCards.appendChild(nueProd)

            const divimagdecompra = document.createElement("div")
            divimagdecompra.classList = "imagenes-divcompras"
            const img = document.createElement("img")
            divimagdecompra.innerHTML = `<img class="imgdecompras" src="./img/${element.id}.jpg" alt="${element.nombre}">`
            divimagdecompra.appendChild(img)
            nueProd.appendChild(divimagdecompra)

            const divtxt = document.createElement("div")
            divtxt.classList = "div-texto"

            const pdivcomp = document.createElement("div")
            pdivcomp.classList = "pdivcompr-div"
            const pdc = document.createElement("p")
            pdc.classList = "pdivcompr"
            const spanpdiv = document.createElement("span")
            spanpdiv.classList = "spancompras"
            spanpdiv.textContent = `${element.nombre}`
            pdc.appendChild(spanpdiv)
            pdivcomp.appendChild(pdc)
            divtxt.appendChild(pdivcomp)

            const divnume = document.createElement("div")
            divnume.classList = "p-numeros-div"
            const pdivnumeros = document.createElement("p")
            pdivnumeros.classList = "pdivcompr-numeros"
            const spannum = document.createElement("span")
            spannum.classList = "Numeros"
            spannum.textContent = `${element.precio}`
            const labelfornum = document.createElement("label")
            labelfornum.innerHTML = `<label class="labelnumeros" for="pdivcompr-numeros">
                <img src="./img/iconos/cash_icon-icons.com_51090.ico" alt=""></label>`
            pdivnumeros.appendChild(spannum)
            divnume.appendChild(pdivnumeros)
            divnume.appendChild(labelfornum)
            divtxt.appendChild(divnume)

            const btn = document.createElement("button");
            btn.classList = "botonDeComprar";
            btn.textContent = "comprar"
            divtxt.appendChild(btn)

            nueProd.appendChild(divtxt)
            const ba =  new creadoDeProductos(element.nombre,element.precio,element.id,element.color)
            divtxt.getElementsByTagName("button")[0].addEventListener("click", () => agregaralcarritobb(element,element.id))

        });
    })