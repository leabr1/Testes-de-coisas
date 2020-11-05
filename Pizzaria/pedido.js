let formulario = document.getElementById("formulario_pedido");
let chamarForm = document.getElementById("pedir");
let pagina = document.getElementById("tudo");
let confirmar = document.getElementById("confirmarPedido");

 function pop_up(){
    formulario.style.display = "block";
    pagina.style.filter = "blur(20px)";
}

function fecharPopUp(){
        formulario.style.display = "none";
        pagina.style.filter = "blur(0)";
}

function confirmacao() {
        formulario.style.display = "none";
        pagina.style.filter = "blur(0)";
        confirmar.style.display = "none";
        alert("Pedido realizado com sucesso!");
}

function cancelar(){
        confirmar.style.display = "none";
        alert("Pedido Cancelado com sucesso!");
}