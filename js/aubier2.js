//Pedir datos al usuario, si es menor de 14 no puede utilizar tarjeta de debito en Arg.

let edad = parseInt(prompt("Ingrese su edad"))
let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")

while(nombre == "" || nombre == "null" || apellido == "" || apellido == "null" || edad  == "" || edad == "null"){
    alert("Por favor, completa todos tus datos.")
    nombre = prompt("Ingrese su nombre")
    apellido = prompt("Ingrese su apellido")
    edad = parseInt(prompt("Ingrese su edad"))
}

if(isNaN(edad)){
    alert("Por favor, ingresa tu edad en numeros enteros.")
}else if(edad < 14){
    alert("Si eres menor de 14 años, no podemos aceptar tu pago en tarjeta de débito/crédito en territorio Argentino. Te haremos un resumen del precio, pero para realizar tu compra tendrás que acercarte a nuestro local y pagar en efectivo.")
}else{
    alert("Hola, "+ nombre +" "+ apellido + "!")
}

//Juego de adivinanza por 5% off. 

let juego = confirm("¿Quieres jugar a adivinar el numero del 1 al 100 por un 5% de descuento?")

const premioNum = 88 

let numeroUsuario = 0

if(!juego){
    alert("Qué aguafiestas.")
}else{
    while(premioNum != numeroUsuario){
        let numeroUsuario = prompt("Ingrese su advinanza, o seleccione cancelar para salir.")
        if(numeroUsuario == null){
            break
        }
        let respuesta = adivinanza(numeroUsuario)
        alert(respuesta)
    }
}

function adivinanza(ingresoDelUsuario){
    let respuesta = ""
    let numero = parseInt(ingresoDelUsuario)

    if(numero == "" || isNaN(numero)){
        respuesta = "Debes ingresar un numero."
    }else if(numero < premioNum){
        respuesta = "Ingresaste un numero menor."
    }else if(numero > premioNum){
        respuesta = "Ingresaste un numero mayor."
    }else{
        respuesta = "¡Genial! Utiliza el codigo 88AUBIER88 para un 5% de descuento."
    }
    return respuesta
}

//Que modelo de lente quiere y en base a esto cual es el precio con impuesto y descuento por primera compra.

let inputModelo = prompt("¿Qué modelo de lentes quieres?")

let modelo = inputModelo.toLowerCase()

switch(modelo){
    case "dijon":
        modelo = 7500
    break;

    case "le mans":
        modelo = 7600
    break;

    case "lyon":
        modelo = 7200
    break;

    case "nantes":
        modelo = 7500
    break;

    default:
    alert("Por favor ingresa un modelo valido");
    break;
}

let precioFinal = suma(modelo,iva(modelo))

let precioFinalDescuento = resta(suma(modelo,iva(modelo)),juegoDescuento(modelo))

function iva(impuesto){
    return impuesto * 0.21
}

function juegoDescuento(juegoDesc){
    return juegoDesc / 20
}

function suma(x,y){
    return x + y
}

function resta(x,y){
    return x - y
}

let codigo = prompt("Si tienes un codigo de descuento, ingresalo aqui.")

if(codigo != "88AUBIER88"){
    alert("Genial! El precio final despúes de IVA (sin descuento) quedaría en: " + "$" + precioFinal)
}else{
    alert("Genial! El precio final, con IVA y descuento es: "+"$"+precioFinalDescuento)
}
