//COMIENZA CARDS DE PRODUCTOS 

const divProductos = document.getElementById("divProductos")

fetch("./productos.json")
    .then( (anteojos) => anteojos.json() )
    .then((lentes) => {

    lentes.forEach((anteojo) => {
        const div = document.createElement("div")
        div.innerHTML = `
        <article class="col-md-6">
            <figure class="width2" id="${anteojo.figure}">
                <img src="${anteojo.src}" alt="${anteojo.alt}" class="scale2 img-fluid">
                <figcaption class="txtCenter mt-3 fontSpecial txtMed">${anteojo.nombre}<br> ${anteojo.precio}</figcaption>
                <div class="text-center bgNormal">
                    <div class="card-body noneBorder">
                        <button id="${anteojo.id}" type="button" class="comprarbtn btn btn-outline-light w-25 boton__responsive"> <span class="txtSmall2 " >Comprar</span></button>
                    </div>
                </div>
            </figure>
        </article>
        `
        divProductos.append(div)
    }
)})

//COMIENZA FORMULARIO NOVEDADES
let botonEnviar = document.getElementById("botonEnviar")
let titulo = document.getElementById("titulo")
let mensaje

botonEnviar.addEventListener("click", function bienvenida(){
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email = document.getElementById("email").value

    let registroPrevio = yaEstaRegistrado(email) 

    if (registroPrevio){
        Swal.fire(
            "Ya te habias registrado, " + mensaje,
            "",
            "info"
        )
    }else{
        let verificarCampos = verificarDatos(nombre, apellido, email)
        if (verificarCampos){
            registrarDatos(nombre, apellido, email)
            Swal.fire({
                icon: 'success',
                title: 'Datos resgistrados!',
                showConfirmButton: false,
                timer: 1500
              })
        }else{
            Swal.fire(
                "Asegurate de completar todos tus datos.",
                "",
                "error"
            )
        }
    }
})

class Usuario{ //crea un objeto Usuario
    constructor (nombre, apellido, email){
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
    }
}

function yaEstaRegistrado(inputMail){
    let emailsGuardados = JSON.parse(localStorage.getItem("arrayDatosGuardados"))
    let encontrado = false
    let i
    if(emailsGuardados != null ){
        emailsGuardados.forEach(element => {
            if(element.email == inputMail){
                encontrado = true
                mensaje = element.nombre
            }
        });
    }
    return encontrado
}/*Chequea en mi localStorage del browser si algo ya existe. 
Si lo hay, lo recorre y te dice si lo que pusiste ya estaba registrado de antes. 
Si no lo estaba, tira false.*/

function verificarDatos(nombre, apellido, email){
    if (nombre == "" || apellido == "" || email == ""){
        return false
    }else{
        return true
    }
}/*Verifica si los campos estan vacios nada mas.*/

function registrarDatos(nombre, apellido, email){
    let usuarioNuevo = new Usuario(nombre, apellido, email)
    let arrayGuardadosYaFueCreado = localStorage.getItem("arrayDatosGuardados")
    if (arrayGuardadosYaFueCreado){
        let guardados = JSON.parse(localStorage.getItem("arrayDatosGuardados"))
        guardados.push(usuarioNuevo)

        let guardados_string = JSON.stringify(guardados)
        localStorage.setItem("arrayDatosGuardados", guardados_string)
    }else{
        let guardados = new Array()
        guardados.push(usuarioNuevo)
        let guardados_string = JSON.stringify(guardados)
        localStorage.setItem("arrayDatosGuardados", guardados_string)
    }
}/*Crea el nuevo usuario. Verifica que ya se haya creado el array en LocalStorage. 
Si ya estaba creado, pushea el usuario. Si no estaba creado, lo crea y pushea el usuario.*/ 

//COMIENZA TOAST DE BOTON DE COMPRA
let dijonbtn = document.getElementById("dijonbtn")
let lemansbtn = document.getElementById("lemansbtn")
let lyonbtn = document.getElementById("lyonbtn")
let nantesbtn = document.getElementById("nantesbtn")

function toast(){
    Toastify({
        text: "Añadido al carrito!",
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "#E0A367",
          }
    }).showToast();
}

dijonbtn.addEventListener("click", toast)
lemansbtn.addEventListener("click", toast)
lyonbtn.addEventListener("click", toast)
nantesbtn.addEventListener("click", toast)

/*
<article class="col-md-6">
	<figure class="width2" id="figureDijon">
		<img src="../img/dijon/dijon.jpg" alt="Anteojos de lente circular, madera rayada en rojo y negro." class="scale2 img-fluid">
	    <figcaption class="txtCenter mt-3 fontSpecial txtMed">Dijon <br> $7.500,00</figcaption>
		<div class="text-center bgNormal">
			<div class="card-body noneBorder">
				<button id="dijonbtn" type="button" class="comprarbtn btn btn-outline-light w-25 boton__responsive"> <span class="txtSmall2 " >Comprar</span></button>
			</div>
		</div>
	</figure>
</article>
*/