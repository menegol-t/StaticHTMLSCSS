//COMIENZA FORMULARIO NOVEDADES
let botonEnviar = document.getElementById("botonEnviar")
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

class Usuario{ 
    constructor (nombre, apellido, email){
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
    }
}//crea un objeto Usuario

function yaEstaRegistrado(inputMail){
    let emailsGuardados = JSON.parse(localStorage.getItem("arrayDatosGuardados"))
    let encontrado = false
    if(emailsGuardados != null ){
        emailsGuardados.forEach( element => {
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

        let guardadosString = JSON.stringify(guardados)
        localStorage.setItem("arrayDatosGuardados", guardadosString)
    }else{
        let guardados = new Array()
        guardados.push(usuarioNuevo)
        let guardadosString = JSON.stringify(guardados)
        localStorage.setItem("arrayDatosGuardados", guardadosString)
    }
}/*Lineas: 
73: Crea el nuevo usuario. 
74: Verifica que ya se haya creado el array en LocalStorage. 
75: Si ya estaba creado, pushea el usuario. 
81: Si no estaba creado, lo crea y pushea el usuario.*/ 


//COMIENZA CARDS DE COSAS NUEVAS DINAMICO
const divCosasNuevas = document.getElementById("cosas__nuevas")

fetch("../js/novedades.json")
    .then( (anteojos) => anteojos.json() )
    .then((lentes) => {

    lentes.forEach((anteojo) => {
        const figure = document.createElement("figure")
        figure.className = "figure__novedades"
        figure.innerHTML =  `
            <img src="${anteojo.src}" alt="${anteojo.alt}" class="scale2 img-fluid">
            <figcaption class="txtCenter fontSpecial pt-3 txtMed">${anteojo.nombre}</figcaption>
        `
        divCosasNuevas.append(figure)

    })
}) /*Unicamente hace dinamicas las fotos de los lentes por venir, al obtenerlas de un json */