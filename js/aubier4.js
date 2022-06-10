let botonEnviar = document.getElementById("botonEnviar")
let titulo = document.getElementById("titulo")
let mensaje

botonEnviar.addEventListener("click", function bienvenida(){
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email = document.getElementById("email").value
    
    let registroPrevio = yaEstaRegistrado(email) 
    
    if (registroPrevio){
        titulo.innerText = mensaje
    }else{
        let verificarCampos = verificarDatos(nombre, apellido, email)
        if (verificarCampos){
            registrarDatos(nombre, apellido, email)
            titulo.innerText = "Hemos registrado tus datos con exito!"
        }else{
            titulo.innerText = "Por favor, completa todos tus datos."
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
                mensaje = "Ya teniamos registrados tus datos, " + element.nombre
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

        let guardados_string = JSON.stringify("guardados")
        localStorage.setItem("arrayDatosGuardados", guardados_string)
    }else{
        let guardados = new Array()
        guardados.push(usuarioNuevo)
        let guardados_string = JSON.stringify(guardados)
        localStorage.setItem("arrayDatosGuardados", guardados_string)
    }
}/*Crea el nuevo usuario. Verifica que ya se haya creado el array en LocalStorage. 
Si ya estaba creado, pushea el usuario. Si no estaba creado, lo crea y pushea el usuario.*/ 
