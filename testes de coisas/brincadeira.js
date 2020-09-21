function conferir(){
    var user= document.getElementById("user_name").value
    var senha= document.getElementById("password").value
    console.log(user+senha)
    if(user=="admin" && senha=="admin_password"){
        window.location.replace("file:///C:/Users/Samsung/Desktop/Programa%C3%A7%C3%A3o/Sites%20do%20Leandro/testes/testes%20de%20coisas/teste.html")
    } else{
        alert("senha errada, tente de novo")
    }
}
