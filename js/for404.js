//El error 404 en el link a Facebook e Instagram en el footer, usando API thecatAPI
function conseguirGatito(url, gatitoConseguido) {
    let xmlhttp = new XMLHttpRequest(); 
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        try {
          var gatito = JSON.parse(xmlhttp.responseText);
        } catch (err) {
          console.log(err.message + " en la solicitud: " + xmlhttp.responseText);
          return;
        }
        gatitoConseguido(gatito);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
/*Recibe por parametro el link a la api y le hace una solicitud http con los parametros que exige
la documentacion (linea 15 del codigo). 
Si sale bien (linea 5), me intenta devolver una variable global(linea 7) con el resultado traducido de JSON, para 
despues usarlo en la funcion que me vino como parametro. Si no sale bien, me consolea el error (linea 9).
*/
  
conseguirGatito('https://api.thecatapi.com/v1/images/search?mime_types=gif', function(gatito) {
    let html = '<img alt="GIF de un gatito." src="' + gatito[0]["url"] + '">';
    document.getElementById("image").innerHTML = html;
}); 
/*Llama a la funcion que consigue y traduce el json, dandole como parametro el link de la api y una funcion.
La funcion mete el gif del gatito dentro del HTML.
*/
