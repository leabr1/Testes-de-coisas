let logo = document.getElementById('logo')

logo.onclick = function(){
    alert('Está curioso sobre nossa logo?')
    if(confirm('Gostaria de mudar o texto da caixa?') == true){
        showMessage()
    }else{
        alert('Que pena')
    }
}

function showMessage(){
    let mudar = document.getElementById('mudar')
    mudar.textContent = prompt("Insira o texto que vai substituir o texto atual:")
}
function calcular_preco(precoDoProduto){
    
    if(confirm('Haverá a aplicação de taxas sobre o preço do produto')){
        let taxa = prompt("Insira a porcentagem da taxa a ser aplicada:")
        taxa = (precoDoProduto * taxa) / 100
        precoDoProduto += taxa
    }
    if(confirm('Ira aplicar algum desconto?') == true){
        let desconto = prompt('Insira a porcentagem de desconto a ser aplicado:'), descontoAAplicar = (precoDoProduto * desconto)/ 100
        precoDoProduto -= descontoAAplicar
    }
    return precoDoProduto
}
