//Form de novedades

let formulario = document.getElementById("contacto")
let mailContacto = document.getElementById("email")
let nombreContacto = document.getElementById("nombre")

let mail = mailContacto.value
let nombre = nombreContacto.value

alert(mail)

formulario.addEventListener("submit", function enviarNewsletter(){
    formulario.innerHTML = "<h2>Genial, "+ nombre + "! Se te enviara el newsletter a "+ mail +"</h2>"
})