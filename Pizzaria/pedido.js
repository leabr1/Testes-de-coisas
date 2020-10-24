let formulario = document.getElementById("formulario_pedido")
let chamarForm = document.getElementById("pedir")
let pagina = document.getElementById("tudo")

 function pop_up(){
    formulario.style.display = "block"
    pagina.style.filter = "blur(20px)"
}

function fecharPopUp(){
        formulario.style.display = "none"
        pagina.style.filter = "blur(0)"
}