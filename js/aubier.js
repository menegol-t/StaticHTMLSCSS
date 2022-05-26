// Declaro mis lentes en venta como array, objetos, etc. 

const arrayLentes = [{Modelo: "Dijon", Color: "Rojo con rayas negras", Stock: 5, Precio: 7500, Lente: "Tinte negro",},
{Modelo: "Le mans", Color: "Madera oscura", Stock: 14 , Precio: 7600, Lente:"Degrade dorado"},
{Modelo: "Lyon", Color:"Madera clara", Stock: 12 , Precio: 7200, Lente: "Degrade dorado"},
{Modelo: "Nantes", Color: "Madera oscura", Stock: 0, Precio: 7500, Lente:"Degrade dorado" ,},]

//Pedir datos al usuario, si es menor de 14 no puede utilizar tarjeta de debito en Arg.

let nombre = prompt("Ingrese su nombre") 
let prueba = prompt("ingresa algo") //IMPORTANTE!!!! No se porque, pero si pongo solo las 3 variables nombre apellido y edad, la pagina web no registra el prompt apellido y se lo salta. Para eso puse una tercera variable llamada "prueba" que no hace nada. Simplemente es la variable que mi web ignora para que si salga el campo apellido, y no si porque. Te invito a remover esta variable y ver si a vos te funciona descargandote el archivo JS.
let apellido = prompt("Ingrese su apellido")
let edad = prompt("Ingrese su edad")

while(nombre == "" || nombre == null || apellido == "" || apellido == null || edad  == "" || edad == null){
    alert("Por favor, completa todos tus datos.")
    nombre = prompt("Ingrese su nombre")
    apellido = prompt("Ingrese su apellido")
    edad = prompt("Ingrese su edad")
}

while(isNaN(edad)){
    alert("Por favor, ingresa tu edad en numeros enteros.")
    edad = prompt("Ingrese su edad")
}

if(edad < 14){
    alert("Si eres menor de 14 años, no podemos aceptar tu pago en tarjeta de débito/crédito en territorio Argentino. Te haremos un resumen del precio, pero para realizar tu compra tendrás que acercarte a nuestro local y pagar en efectivo.")
}else{
    alert("Hola, "+ nombre +" "+ apellido + "!")
}

//Recorrer nuestros productos

let mensajeEleccion = confirm("¿Quieres ver todos nuestros modelos y sus caracteristicas?")

if(mensajeEleccion){
    //alert(arrayLentes[0]+ "\n" + arrayLentes[1]+ arrayLentes[2]+ "\n"+ arrayLentes[3])
    for (const x of arrayLentes){
    alert(" Modelo: "+ x.Modelo +"."+ "\n Color: "+ x.Color +"."+ "\n Precio (pre-impuestos): $" + x.Precio +"."+ "\n Color del vidrio: "+ x.Lente +".")
    }
}

//Avisar de falta de stock

let lentesDisponibles = arrayLentes.filter( (x) => x.Stock > 0)

let listaLentesDisponibles = lentesDisponibles.map( (x) => x.Modelo)

alert("Advertencia! Nuestros unicos lentes disponibles de momento son estos: "+ "\n-"+ listaLentesDisponibles[0] +"\n-"+ listaLentesDisponibles[1]+ "\n-"+ listaLentesDisponibles[2]+"\nDisculpe las molestias.")


//Juego de adivinanza por 5% off. 

let juego = confirm("¿Quieres jugar a adivinar el numero del 1 al 100 por un 5% de descuento?")

const premioNum = 88 

let numeroUsuario = 0

if(!juego){
    alert("Qué aguafiestas.")
}else{
    while(premioNum != numeroUsuario){
        numeroUsuario = prompt("Ingrese su advinanza, o seleccione cancelar para salir.")
        if(numeroUsuario == null){
            break
        }
        respuesta = adivinanza(numeroUsuario)
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

let inputModelo = prompt("¿Qué modelo de lentes quieres?").toLowerCase();

let modelo = inputModelo

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

    case null:
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

