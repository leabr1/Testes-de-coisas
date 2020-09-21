function calcular(){
    nome = document.getElementById("Nome").value
    endereco= document.getElementById("endere").value
    pizza=document.getElementById("pizza").value
    tamanho = document.getElementById("tamanho_pizza").value
    batata= document.getElementById("batata_frita").checked
    bacon = document.getElementById("extra_bacon").checked
    queijo = document.getElementById("extra_queijo").checked
    bebida = document.getElementById("bebidas").value
    pagar()
}
function anotar(borda){
    var minha_borda = borda
    tipo_borda=minha_borda 
}
function pagar(){
    var preco = 0
    if(pizza == "Pizza de mussarela"){
        preco = 50.00+preco
    }else{
        if(pizza == "Pizza de 4 queijo"){
            preco=48.00+preco
        }else{
            if(pizza == "Pizza de frango e catupiry"){
                preco=46.00 + preco
            }else{
                if(pizza == "Pizza de calabresa"){
                    preco=64.00+preco
                }else{
                    if(pizza=="Pizza marguerita"){
                        preco= 69.00+preco
                    }else{
                        if(pizza=="Pizza califórnia"){
                            preco=60.00+preco
                        }else{
                            if(pizza=="Pizza de atum"){
                                preco=30.90+preco
                            }else{
                                if(pizza=="Pizza primavera"){
                                    preco=45.00+preco
                                }else{
                                    if(pizza=="Pizza vegetariana"){
                                        preco=64.00+preco
                                    }else{
                                        if(pizza=="Pizza de escarola"){
                                            preco=45.00+preco
                                        }else{
                                            if(pizza=="Pizza nordestina"){
                                                preco=56.00+preco
                                            }else{
                                                if(pizza=="Pizza paulista"){
                                                    preco=66.00+preco
                                                }else{
                                                    if(pizza=="Pizza de brigadeiro"){
                                                        preco=33.00+preco
                                                    }else{
                                                        if(pizza=="Pizza de banana"){
                                                            preco=44.00+preco
                                                        }else{
                                                            if(pizza=="Pizza de strogonoff"){
                                                                preco=78.00+preco
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if(tipo_borda=="com borda"){
        preco=preco+5.00
    }
    acompanhamento=""
    if(tamanho=="Grande"){
        preco=preco+5.00
    }   
    if(batata==true){
        preco=preco+5.00
        acompanhamento=acompanhamento+"batata frita"
    }
    if(bacon==true){
        preco=preco+10.00
        acompanhamento=acompanhamento+" extra bacon"
    }
    if(queijo==true){
        preco=preco+7.00
        acompanhamento=acompanhamento+" extra queijo"
    }
    if(bebida=="coca cola"){
        preco=preco+8.00
    }else{
        if(bebida=="pepsi"){
            preco=preco+5.00
        }else{
            if(bebida=="guarana antartica"){
                preco=preco+4.00
            }
        }
    }
    alert("Seu pedido foi uma "+pizza+" "+tipo_borda+" tamanho "+tamanho+" e com os acompanhamentos: "+acompanhamento+" junto com "+bebida+" para o endereço: "+endereco+".")
    var pagamento = confirm("O total é R$:"+preco+" gostaria de confirmar a compra?")
    if(pagamento==true){
        alert("pagamento bem sucedido (se bem que não pagou nada)")
    }
}

