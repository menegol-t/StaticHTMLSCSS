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
/*
En un click, ejecuta bienvenida(). Si es verdad que hay un registro previo(linea 12), te avisa que ya
te registraste y no hace nada mas. 
Si esto es falso, verifica(linea 19) que hayas rellenado todos los inputs. Si verdaderamente los rellenaste, 
registra tus datos(linea 21). Si no rellenaste los inputs, te avisa. 
*/

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
}/*Chequea en mi localStorage del browser si algo ya existe, pero asume que no existe y deja false para toda la funcion
hasta que se demuestre lo contrario (linea 54). 
Si es verdad que hay un array, lo recorre (linea 56) y verifica que ese email se hubiera registrado antes (linea 57).
Cuando encuentra que si se registro, devuelve verdadero para toda la funcion (linea 58). Si no, deja el false(linea 5) y ya.
 */

function verificarDatos(nombre, apellido, email){
    if (nombre == "" || apellido == "" || email == ""){
        return false
    }else{
        return true
    }
}/*Verifica si los campos estan vacios nada mas. */

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
}/*Registra los datos.
Lineas: 
79: Crea el nuevo usuario. 
81: Verifica que ya se haya creado el array en LocalStorage. 
83: Si el array ya estaba creado, pushea el usuario. 
86: Si el array no estaba creado, lo crea y pushea el usuario.*/ 


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
}) /*Unicamente hace dinamicas las fotos de los lentes por venir, al obtenerlas de un json, como en aubier4.js */