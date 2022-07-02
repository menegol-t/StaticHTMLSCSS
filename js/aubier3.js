
//BOTON DE BUSQUEDA (desde la ubicacion de pages) Como las paginas son relativas, arme otro para el index

let formBusqueda = document.getElementById("formBusqueda")
let inputBoton = document.getElementById("inputBoton")


formBusqueda.addEventListener("submit", (e) => {
    e.preventDefault()
})

inputBoton.addEventListener("click", () => {
    let inputBusqueda = document.getElementById("inputBusqueda").value

    switch(inputBusqueda.toLowerCase()){
    case "dijon":
        window.location = "../pages/productos.html"
    break;

    case "le mans":
        window.location = "../pages/productos.html"
    break;

    case "lyon":
        window.location = "../pages/productos.html"
    break;

    case "nantes":
        window.location = "../pages/productos.html"
    break;

    case "toulouse": 
        window.location = "../pages/novedades.html"
    break;

    case "bourdeos":
        window.location = "../pages/novedades.html"
    break;

    case "precio":
        window.location = "../pages/novedades.html"
    break;

    case "lentes":
        window.location = "../pages/novedades.html"
    break;

    case "modelos":
        window.location = "../pages/novedades.html"
    break;

    case "garantia":
        window.location = "../pages/faq.html#garantia"
    break;
    
    case "madera":
        window.location = "../pages/faq.html#head1"
    break;

    case "abedul":
        window.location = "../pages/faq.html#head1"
    break;

    case "envios":
        window.location = "../pages/faq.html#envios"
    break;

    default:

    break;
    }
})
/*Un boton de busqueda con varias palabras de interes. Solo funciona cuando hace click para que 
se aseguren de buscar algo sin saltarse letras, debido que es un buscador bastante rudimentario
pero bueno hago lo que puedo con lo que tengo :) */

//Metodos de envio dinamicos
const divFormasEnvio = document.getElementById("formasDeEnvio")

fetch("../js/formasDeEnvio.json")
    .then( (anteojos) => anteojos.json() )
    .then((lentes) => {

    lentes.forEach((anteojo) => {
        divFormasEnvio.innerHTML +=  `
            <img src="../${anteojo.src}" alt="${anteojo.alt}" class="footer__img--margin">
        `
    })
})

//Metodos de pago dinamicos
const divFormasPago = document.getElementById("formasDePago")

fetch("../js/formasDePago.json")
    .then( (anteojos) => anteojos.json() )
    .then((lentes) => {

    lentes.forEach((anteojo) => {
        divFormasPago.innerHTML +=  `
            <img src="../${anteojo.src}" alt="${anteojo.alt}" class="footer__img--margin">
        `
    })
})