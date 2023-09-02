const header =document.getElementById('header')
header.innerHTML = `
<div class="divprincipalheader">
            <div class="Header-divss">
                <div><img class="logo" src="./img/logo/Libre mercado (1).png" alt="Logo"></div>
                <div class="searchdiv"><input id="Buscador" type="search" placeholder="PC,Auriculares,Etc...."></div>
                <div class="div-cart">
                    <a type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight">
                        <div class="div-div-carrito">
                            <img class="iconcarrito  " src="./img/svg/shopping-cart-add-button_icon-icons.com_56132.png"
                                alt="Carrito">
                        </div>
                    </a>
                </div>
            </div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Tu Carrito</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div id="Carritodondemeter" class="offcanvas-body">
                   
                </div>
                <div id="TotalesDivInicial" class="offcavas-footer oofcanvacolor">
                   
                </div>
            </div>
        </div>
        </div> 
`
const footer = document.getElementById('Footerr')
footer.innerHTML = `
<div class="grupo-1">
            <div class="box1">
                <h2>SOBRE NOSOTROS</h2>
                <p>Aqui permitimos el libre mercado sin necesidad de falcedades o otras cosas, entregamos los
                    productos en el plazo de 15-20 dias</p>
            </div>
            <div class="box">
                <img class="imgfooter" src="./img/logo/Libre mercado (1).png" alt="">
            </div>
            <div class="box">
                <h2 class=" h2box">SIGUENOS</h2>
                <div class="red-social">
                    <a href="#"><img class="prueba-hover" src="./icons/icons8-facebook.svg" alt="facebook"></a>
                    <a href="#"><img class="prueba-hover" src="./icons/icons8-instagram.svg" alt="instagram"></a>
                    <a href="#"><img class="prueba-hover" src="./icons/icons8-twitter.svg" alt="twitter"></a>
                    <a href="#"><img class="prueba-hover" src="./icons/icons8-youtube.svg" alt="youtube"></a>
                </div>
            </div>
        </div>
`
const divdearriba = document.getElementById("divdearriba")
divdearriba.innerHTML = `
<button class="animated-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop"
aria-controls="staticBackdrop">
<span>Agrega tu producto</span>
<span></span>
</button>
<div class="offcanvas offcanvas-start titleoffcanvaedit " data-bs-backdrop="static" tabindex="-1"
id="staticBackdrop" aria-labelledby="staticBackdropLabel">
<div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Agrega tu producto</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body bodydeloofcanva titleoffcanvaedit  ">
    <div class="div-de-formi">
        <div class="formi">
            <form id="formulario" action="">
                <div class="subtitle">Creemos tu producto!</div>
                <div class="input-container ic1">
                    <input id="name" class="inpute" minlength="3" type="text" placeholder="">
                    <div class="cut"></div>
                    <label for="name" class="placeholderr">Nombre</label>
                </div>
                <div class="input-container ic2">
                    <input id="price" class="inpute" type="number" placeholder="">
                    <div class="cut"></div>
                    <label for="price" class="placeholderr">Precio</label>
                </div>
                <div class="input-container ic2">
                    <input id="Color" class="inpute" type="text" placeholder="">
                    <div class="cut cut-short"></div>
                    <label for="Color" class="placeholderr">Color
                    </label>
                </div>
                <div class="input-container ic2">
                    <input id="id" minlength="1" class="inpute" type="number" placeholder="">
                    <div class="cut cut-short"></div>
                    <label for="id" class="placeholderr">Id
                    </label>
                </div>
                <div class="input-container ic2">
                    <input id="httpsdeimg" minlength="1" class="inpute" type="text" placeholder="">
                    <div class="cut cut-short"></div>
                    <label for="httpsdeimg" class="placeholderr">Link de imagen
                    </label>
                </div>
            </form>
            <button type="reset" id="btncompras" class="submit">submit</button>
        </div>

    </div>
</div>
</div>
`


const productos = [];
const carritoDeCompras = [];
const PrecioFinal = [];
let nums = 0;
let memoriaTotalDeCarrito = 0;
let memoriatotalcompra =[];
let cantidad = 0;
let asegurador = 0;
let ids = 0;
let idssession = 0;
const DivDeCards = document.getElementById('cardcontainer');
let CARDS = 0;
const carritoDondeMeter = document.getElementById('Carritodondemeter');
const DivInicialTotales = document.getElementById('TotalesDivInicial');
////totales
const pTotalesFinales = document.createElement('p')
pTotalesFinales.classList = 'pTotales'
pTotalesFinales.innerText = 'Totales'
const DivAlmacenadorDePrecio = document.createElement('div')
DivAlmacenadorDePrecio.classList = 'Div-Totales-precio'
const pPreciosFinal = document.createElement('p')
pPreciosFinal.classList = 'precioTotal'
pPreciosFinal.setAttribute('id', 'totales')
pPreciosFinal.innerText = '0'
const botonDeComprarTotales = document.createElement("button")
botonDeComprarTotales.classList = 'BTNCOMPRASTO'
botonDeComprarTotales.innerText = 'Comprar'
botonDeComprarTotales.setAttribute('id', 'BtnComprasTotales')
DivAlmacenadorDePrecio.appendChild(pPreciosFinal)
DivInicialTotales.appendChild(pTotalesFinales)
DivInicialTotales.appendChild(DivAlmacenadorDePrecio)
DivInicialTotales.appendChild(botonDeComprarTotales)





////creador
class creadoDeProductos {
    constructor(nombre, precio, id, color, http) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.color = color;
        this.http = http;
        this.cantidad = 0;
    }
}
const btnentrie = document.getElementById('btncompras')
function agregaralcarritobb(pro, id) {
    const memori = JSON.parse(localStorage.getItem(`producto${id}`))
    console.log(memori)
    if (!memori) {
        const newpro = obtnewpro(pro)
        localStorage.setItem(`producto${id}`, JSON.stringify([newpro]));
        asegurador = null;
    } else {
        const proi = memori.findIndex(product => product.id === id);
        const newmemori = memori
        if (proi === -1) {
            newmemori.push(obtnewpro(pro))
            newsmemeori.push(obtnewpro(pro))
        } else {
            newmemori[proi].cantidad++;
            cantidad = newmemori[proi].cantidad
            console.log(newmemori)
        }
        localStorage.setItem(`producto${id}`, JSON.stringify(newmemori));
        asegurador = proi
    }
    agregaralcarritobb2(pro)
    traerDatosLocal(id)
    carritocards(id,pro.precio)
}
function agregaralcarritobb2(pro){
    let memoria = JSON.parse(localStorage.getItem("producto"));
    
    if(!memoria || memoria.length === 0) {
      const nuevoProducto = obtnewpro(pro)
      localStorage.setItem("producto",JSON.stringify([nuevoProducto]));
    }
    else {
      const indiceProducto = memoria.findIndex(produc => produc.id === pro.id)
      const nuevaMemoria = memoria;
      if(indiceProducto === -1){
        const nuevoProducto = obtnewpro(pro);
        nuevaMemoria.push(nuevoProducto);
        
      } else {
        nuevaMemoria[indiceProducto].cantidad ++;
      }
      localStorage.setItem("producto",JSON.stringify(nuevaMemoria));
    }


}
function ayudasdeproducto(pro){
    let memoria = JSON.parse(sessionStorage.getItem("producto"));
    console.log(memoria)
    if(!memoria || memoria.length === 0) {

      sessionStorage.setItem("producto",JSON.stringify([pro]));
    }
    else {
      const indiceProducto = memoria.findIndex(produc => produc.id === pro.id)
      const nuevaMemoria = memoria;
      if(indiceProducto === -1){
        nuevaMemoria.push(pro); 
      }
      sessionStorage.setItem("producto",JSON.stringify(nuevaMemoria));
    }

}

function agregaralcarritobbproductonew(pro, id) {
    
    console.log(pro)
    const memori = JSON.parse(sessionStorage.getItem(`producto${id}`))
    if (!memori) {
        const newpro = obtnewpro(pro)
        sessionStorage.setItem(`producto${id}`, JSON.stringify([newpro]));
        asegurador = null;
    } else {
        const proi = memori.findIndex(product => product.id === id);
        console.log(proi);
        const newmemori = memori
        if (proi === -1) {
            newmemori.push(obtnewpro(pro))
        } else {
            newmemori[proi].cantidad++;
            cantidad = newmemori[proi].cantidad
            console.log(newmemori)
        }
        sessionStorage.setItem(`producto${id}`, JSON.stringify(newmemori));
        asegurador = proi
    }
    agregaralcarritobb2productonew(pro)
    traerDatosSession(id)
    carritocardssession(id)
}

function agregaralcarritobb2productonew(pro){
    let memoria = JSON.parse(sessionStorage.getItem("producto"));
    console.log(memoria)
    if(!memoria || memoria.length === 0) {
      const nuevoProducto = obtnewpro(pro)
      sessionStorage.setItem("producto",JSON.stringify([pro]));
    }
    else {
      const indiceProducto = memoria.findIndex(produc => produc.id === pro.id)
      const nuevaMemoria = memoria;
      if(indiceProducto === -1){
        nuevaMemoria.push(obtnewpro(pro));
        
      } else {
        nuevaMemoria[indiceProducto].cantidad ++;
      }
      sessionStorage.setItem("producto",JSON.stringify(nuevaMemoria));
    }

}
function obtnewpro(x) {
    obje = x;
    obje.cantidad = 1;
    return obje;
}
function freeroi(ids,price) {
    console.log(ids)
    const memori = JSON.parse(localStorage.getItem(`producto${ids}`));
    console.log(memori)
    if (memori != null) {
        console.log
        const proi = memori.findIndex(product => product.id === ids);
        console.log(proi)
        traerDatosLocal(ids)
        carritocards(ids,price)
    }
}
function freeroisession(ids) {
    console.log(ids)
    const memori = JSON.parse(sessionStorage.getItem(`producto${ids}`));
    console.log(memori)
    if (memori != null) {
        const proi = memori.findIndex(product => product.id === ids);
        console.log(proi)
        traerDatosSession(ids)
        carritocardssession(ids)
    }
}
function unis() {
    const memori = JSON.parse(sessionStorage.getItem(`producto`))
    if (memori) {
        memori.forEach(element => {
            const nueProd = document.createElement("div")
            nueProd.classList = "divdecompras"
            DivDeCards.appendChild(nueProd)

            const divimagdecompra = document.createElement("div")
            divimagdecompra.classList = "imagenes-divcompras"
            const img = document.createElement("img")
            img.classList = "imgdecompras"
            img.src = element.http
            img.alt = element.nombre
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
            divtxt.getElementsByTagName("button")[0].addEventListener("click", () => agregaralcarritobbproductonew(element, element.id))

        });

    }
}
unis()
/////////////
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
            freeroi(element.id,element.precio)
            divtxt.getElementsByTagName("button")[0].addEventListener("click", () => agregaralcarritobb(element, element.id))

            // carritocards()
        });

    })
////producto nuevo
btnentrie.addEventListener("click", () => {
    const nombre = document.forms['formulario']
    const data = []
    for (let x of nombre) {
        data.push(x.value)
    }
    const memoria = JSON.parse(sessionStorage.getItem(`producto${data[3]}`))
    if (!memoria) {
        if (data[1] > 0 && data[3] > 0) {
            const ba = new creadoDeProductos(data[0], data[1], data[3], data[2], data[4])
            sessionStorage.setItem(`producto${data[3]}`, JSON.stringify([ba]))
            ayudasdeproducto(ba)
            Swal.fire({
                icon: 'success',
                title: 'Hecho',
                text: `has ingresado el producto!`

            })
            objetos(data[3])
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'algo salio mal!'
            })
        }
    } else {
        const datasss = memoria.findIndex(product => product.id === data[3]);
        console.log(datasss)
        if (datasss >= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Existe',
                text: 'Este producto ya existe!'
            })
        } else {
            if (data[1] > 0 && data[3] > 0) {
                const nuevamemoria = memoria
                const ba = new creadoDeProductos(data[0], data[1], data[3], data[2], data[4])
                nuevamemoria.push(ba)
                sessionStorage.setItem(`producto${data[3]}`, JSON.stringify(nuevamemoria))
                ayudasdeproducto(ba)
                Swal.fire({
                    icon: 'success',
                    title: 'Hecho',
                    text: `has ingresado el producto!`
                })
                objetos(data[3])
                console.log(memoria.id)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'algo salio mal!'
                })
            }
        }

    }
   document.getElementById("formulario").reset()
})
function objetos(id) {
    objetosAAgregar(id)
    console.log(id)
    return idssession = id
}
function objetosAAgregar(id) {
    const objetosAgregados = JSON.parse(sessionStorage.getItem(`producto${id}`));
    console.log(objetosAgregados);
    objetosAgregados.forEach(element => {
        const nueProd = document.createElement("div")
        nueProd.classList = "divdecomprasnuevo"
        DivDeCards.appendChild(nueProd)

        const divimagdecompra = document.createElement("div")
        divimagdecompra.classList = "imagenes-divcompras"
        const pnuevo = document.createElement('p')
        pnuevo.classList = 'labelnuevo'
        pnuevo.textContent = 'NEW'
        divimagdecompra.appendChild(pnuevo)
        const img = document.createElement("img")
        img.classList = "imgdecompras"
        img.src = element.http
        img.alt = element.nombre
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
                <img src="./img/iconos/cash_icon-icons.com_51090.ico" alt="#"></label>`
        pdivnumeros.appendChild(spannum)
        divnume.appendChild(pdivnumeros)
        divnume.appendChild(labelfornum)
        divtxt.appendChild(divnume)

        const btn = document.createElement("button");
        btn.classList = "botonDeComprar";
        btn.textContent = "comprar"
        divtxt.appendChild(btn)

        nueProd.appendChild(divtxt)
        divtxt.getElementsByTagName("button")[0].addEventListener("click", () => agregaralcarritobbproductonew(element, id))

    });
}
///datos
function traerDatosLocal(id) {
    const memoriaParaCarritoLocal = JSON.parse(localStorage.getItem(`producto${id}`));
    if(memoriaParaCarritoLocal != null){
        console.log(memoriaParaCarritoLocal)
    return memoriaTotalDeCarrito = [...memoriaParaCarritoLocal]}
    else{
        memoriaTotalDeCarrito =[]
    }

}
function traerDatosSession(id) {
    const memoriaParaCarritosession = JSON.parse(sessionStorage.getItem(`producto${id}`));
    return memoriaTotalDeCarrito = [...memoriaParaCarritosession]
}
//////resta
function restartcantidad(id) {
    const memori = JSON.parse(localStorage.getItem(`producto${id}`));
    const memoris = JSON.parse(localStorage.getItem("producto"));
    console.log(memori)
    const proi = memori.findIndex(product => product.id === id);
    const proiss = memoris.findIndex(product => product.id === id);
    const neu = memoris
    const newmemori = memori;
    memoris[proiss].cantidad--;
    newmemori[proi].cantidad--;
    let cant = newmemori[proi].cantidad
    console.log(cant)
    if (cant > 0) {
        localStorage.setItem(`producto${id}`, JSON.stringify(newmemori));
        localStorage.setItem("producto", JSON.stringify(neu));
        traerDatosLocal(id)
        carritocards(id,price)
    }
    else {
        localStorage.setItem(`producto${id}`, JSON.stringify(newmemori));
        localStorage.setItem("producto", JSON.stringify(neu));
        const borrar = document.getElementById(`div${id}`)
        borrar.remove()
    }
    console.log(price)
precioTotalesFinales()
}
function restartcantidadsession(id) {
    const memoris = JSON.parse(sessionStorage.getItem(`producto${id}`));
    const memori = JSON.parse(sessionStorage.getItem("producto"));
    console.log(memori)
    const proi = memoris.findIndex(product => product.id === id);
    const prois = memori.findIndex(product => product.id === id);
    console.log(prois)
    const newmemori = memoris;
    newmemori[proi].cantidad--;
    memori[prois].cantidad--;
    let cant = newmemori[proi].cantidad
    console.log(cant)
    if (cant > 0) {
        sessionStorage.setItem("producto", JSON.stringify(memori));
        sessionStorage.setItem(`producto${id}`, JSON.stringify(newmemori));
        traerDatosSession(id)
        carritocardssession(id)
    }
    else {
        sessionStorage.setItem("producto", JSON.stringify(memori));
        sessionStorage.setItem(`producto${id}`, JSON.stringify(newmemori));
        const borrar = document.getElementById(`div${id}`)
        borrar.remove()
    }
precioTotalesFinales()
}
////totales
function precioTotalesFinales() {   
    let productoss = [];
    let prs =0;
    const products = JSON.parse(sessionStorage.getItem(`producto`))
    console.log(products)
    const product = JSON.parse(localStorage.getItem(`producto`))
    console.log(product)
    if(product != null){
        productoss.push(...product)
    //   productoss = [...product]
    }
    if(products != null){
        productoss.push(...products)
        // productoss = [...products]
    }
    console.log(productoss)
    let total = 0;
    productoss.forEach(x => {
    total += x.precio * x.cantidad        
    });
    const totalprices = document.getElementById(`totales`)
    totalprices.innerText = `${total}`
}
function vaciar(){
    const products = JSON.parse(sessionStorage.getItem(`producto`))
    const product = JSON.parse(localStorage.getItem(`producto`))
if(product != null){
    let ids = 0;
    
    product.forEach(x => {        
        if(x.cantidad>0){
            console.log(x.cantidad)
           let cant = x.cantidad
        do {
            restartcantidad(x.id)
            cant--;
            console.log(cant)
        } while (cant>0);    
        localStorage.removeItem(`producto${x.id}`)}              
    });
    
}
if(products != null){
    products.forEach(x => {
        if(x.cantidad>0){
        console.log(x.cantidad)
           let cant = x.cantidad
        do {
            restartcantidadsession(x.id)
            cant--;
            console.log(cant)
        } while (cant>0);
        sessionStorage.removeItem(`producto${x.id}`)}
        })
}
}
botonDeComprarTotales.addEventListener("click",()=>{
    Swal.fire({
        text:'Seguro de su compra?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Listo'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Comprado!',
            'Gracias por el apoyo.',
            'success'
          )
          vaciar()
        }
      })
})
function carritocards(id,pricess) {
    const divDeContenedor = document.createElement('div');
    console.log(asegurador)
    // console.log(fijarse)
    let name = 0;
    let precio = 0;
    memoriaTotalDeCarrito.forEach(x => {
        name = x.nombre;
        precio = x.precio;
        return cantidad = x.cantidad

    })
    console.log(cantidad)
    if (cantidad > 0) {
        const fijarse = document.getElementById(`${id}`)
        if (fijarse === null) {
            asegurador = -1
            if (asegurador == -1 || asegurador == null) {

                divDeContenedor.classList = "divdecontenedor";
                divDeContenedor.setAttribute('id', `div${id}`)
                const divCarritoInside = document.createElement('div');
                divCarritoInside.classList = "divcarritoinside";
                const pdivinside = document.createElement('p');
                pdivinside.classList = 'pcarritoinside';
                pdivinside.innerText = `${name}`;
                const imgdecart = document.createElement('img');
                divCarritoInside.innerHTML = ` <img class="imgcarritoinside" src="img/${id}.jpg" alt="${name}">`
                const pDePrecios = document.createElement('p');
                pDePrecios.classList = "precioCarrito";
                pDePrecios.innerText = `${precio}`
                const pDeCantidad = document.createElement('p');
                pDeCantidad.classList = "cantidad";
                pDeCantidad.setAttribute("id", `${id}`)
                pDeCantidad.innerText = `${cantidad}`
                const imgdex = document.createElement('button')
                imgdex.textContent = '-'
                imgdex.classList = 'imgdex'
                divCarritoInside.appendChild(pdivinside);
                divCarritoInside.appendChild(imgdecart);
                divCarritoInside.appendChild(pDePrecios);
                divCarritoInside.appendChild(pDeCantidad)
                divDeContenedor.appendChild(divCarritoInside);
                divDeContenedor.appendChild(imgdex);
                carritoDondeMeter.appendChild(divDeContenedor);

                divDeContenedor.getElementsByTagName("button")[0].addEventListener("click", () => { restartcantidad(id,pricess) })
            }
        } else {
            const pDeCantidad = document.getElementById(id)
            pDeCantidad.innerText = `${cantidad}`
            console.log(pDeCantidad)

        }
    }
    precioTotalesFinales(cantidad,price)
}
function carritocardssession(id) {
    const divDeContenedor = document.createElement('div');
    divDeContenedor.setAttribute('id', `div${id}`)
    console.log(asegurador)
    let http = 0;
    let name = 0;
    let precio = 0;
    memoriaTotalDeCarrito.forEach(x => {
        http = x.http
        name = x.nombre;
        precio = x.precio;
        return cantidad = x.cantidad
    })
    const fijarse = document.getElementById(`${id}`)
    if (cantidad > 0) {
        if (fijarse === null) {
            asegurador = -1
            if (asegurador == -1 || asegurador == null) {

                divDeContenedor.classList = "divdecontenedor";
                const divCarritoInside = document.createElement('div');
                divCarritoInside.classList = "divcarritoinside";
                const pdivinside = document.createElement('p');
                pdivinside.classList = 'pcarritoinside';
                pdivinside.innerText = `${name}`;
                const imgdecart = document.createElement('img');
                divCarritoInside.innerHTML = ` <img class="imgcarritoinside" src=${http} alt="${name}">`
                const pDePrecios = document.createElement('p');
                pDePrecios.classList = "precioCarrito";
                pDePrecios.innerText = `${precio}`
                const pDeCantidad = document.createElement('p');
                pDeCantidad.classList = "cantidad";
                pDeCantidad.setAttribute("id", `${id}`)
                pDeCantidad.innerText = `${cantidad}`
                const imgdex = document.createElement('button')
                imgdex.textContent = '-'
                imgdex.classList = 'imgdex'
                divCarritoInside.appendChild(pdivinside);
                divCarritoInside.appendChild(imgdecart);
                divCarritoInside.appendChild(pDePrecios);
                divCarritoInside.appendChild(pDeCantidad)
                divDeContenedor.appendChild(divCarritoInside);
                divDeContenedor.appendChild(imgdex);
                carritoDondeMeter.appendChild(divDeContenedor);

                divDeContenedor.getElementsByTagName("button")[0].addEventListener("click", () => { restartcantidadsession(id) })
            }
        } else {
            const pDeCantidad = document.getElementById(id)
            pDeCantidad.innerText = `${cantidad}`
            console.log(pDeCantidad)

        }
    }
    precioTotalesFinales(id)
}