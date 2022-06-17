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