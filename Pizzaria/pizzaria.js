let preco = 0;
let textoConfirmacao = document.getElementById("textoConfirmar");

function calcular(){            
    preco = 0;

    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    let comBorda = document.getElementById("com_borda").checked;
    let semBorda = document.getElementById("sem_borda").checked;
    let tamanhoPizza = document.getElementById("tamanho_pizza").value;
    let batataFrita = document.getElementById("batata_frita").checked;
    let extraBacon = document.getElementById("extra_bacon").checked;
    let extraQueijo = document.getElementById("extra_queijo").checked;
    let bebida = parseFloat(document.getElementById("bebidas").value);
    let bebidasQuant = parseFloat(document.getElementById("bebidasQuant").value);
    let tamanhoBebidas = parseFloat(document.getElementById("tamanhoBebidas").value);


    if(comBorda == true){
        preco += 10;
    }

    if(tamanhoPizza == "Grande"){
        preco += 5;
    }

    if (batataFrita == true) {
        preco += 6;
    }

    if (extraBacon == true) {
        preco += 5;
    }

    if (extraQueijo == true) {
        preco += 4;
    }
    
    let listaPizzas = document.getElementsByClassName("pizzaForm");
    let testeP = [];
    let nomePizza = [];
    let testepreco = [];
    let precoPizzas = 0;
    let PizzaSelecionada = [];
    
    for (let index = 0; index < listaPizzas.length; index++) {
        
        testeP.push(listaPizzas[index].checked);
        nomePizza.push(" "+listaPizzas[index].id);
        testepreco.push(listaPizzas[index].value);

        if (testeP[index] == true) {
            
            precoPizzas += parseFloat(testepreco[index]);
            PizzaSelecionada.push(nomePizza[index]);
        
        }
    }

    preco += precoPizzas;

    preco += (bebida + tamanhoBebidas) * bebidasQuant;

    let precoBebidas = (bebida + tamanhoBebidas) * bebidasQuant;

    console.log(testeP,nomePizza,precoPizzas,PizzaSelecionada, preco, bebidasQuant, precoBebidas);

    confirmar.style.display = "block";
    textoConfirmacao.textContent = `Seu pedido foi pizza${PizzaSelecionada}, com ${bebidasQuant} bebidas, sendo o total R$ ${preco}. O pedido sera enviado para ${endereco}`;
}
