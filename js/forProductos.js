//COMIENZA CARDS DE PRODUCTOS DINAMICO 
const divProductos = document.getElementById("divProductos")

fetch("../js/productos.json")
    .then( (anteojos) => anteojos.json() )
    .then((lentes) => {

    lentes.forEach((anteojo) => {
        const article = document.createElement("article")
        article.className = "col-md-6"
        article.innerHTML =  `
        
            <figure class="width2" id="${anteojo.figure}">
                <img src="${anteojo.src}" alt="${anteojo.alt}" class="scale2 img-fluid">
                <figcaption class="txtCenter mt-3 fontSpecial txtMed">${anteojo.nombre}<br> ${anteojo.precio}</figcaption>
                <div class="text-center bgNormal">
                    <div class="card-body noneBorder">
                        <button id="${anteojo.id}" type="button" class="comprarbtn btn btn-outline-light w-25 boton__responsive"> <span class="txtSmall2 " >Comprar</span></button>
                    </div>
                </div>
            </figure>
        
        `
        divProductos.append(article)

    }) //Esto pone dinamicamente los productos en el html, buscandolos del JSON. 

    let dijonbtn =  document.getElementById("dijonbtn")
    let lemansbtn = document.getElementById("lemansbtn")
    let lyonbtn = document.getElementById("lyonbtn")
    let nantesbtn = document.getElementById("nantesbtn") 

    dijonbtn.addEventListener("click", toast)
    lemansbtn.addEventListener("click", toast)
    lyonbtn.addEventListener("click", toast)
    nantesbtn.addEventListener("click", toast) 

    /*Esto añade funcionalidad a los botones de los productos, que llaman a un toast.*/
})

//COMIENZA TOAST DE BOTON DE COMPRA
function toast(){
    Toastify({
        text: "Chequea mi ReactJS proyect para ver esta funcionalidad!",
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "#E0A367",
          }
    }).showToast();
}
//Este es el toast mencionado en la linea 38. 