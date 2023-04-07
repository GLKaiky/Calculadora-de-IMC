function calculate(){
    var altura=(document.getElementById("altura").value)/100
    var peso=document.getElementById("peso").value

    var imc=peso/ (altura)**2;
    
    if(imc<18.5){
        window.alert("Você está magro de mais")
    }else if(imc>=18.5 && imc<=24.9){
        window.alert("Peso normal")
    }else if(imc>=25.0 && imc<=29.9){
        window.alert("Excesso de peso!")
    }else if(imc>=30.0 && imc<=34.9){
        window.alert("Obesidade Classe I")
    }else if(imc>=35.0 && imc<=39.9){
        window.alert("Obesidade Classe II")
    }else if(imc>=40.0){
        window.alert("Obesidade Classe III")
    } else {
        window.alert("Valor Inválido, tente novamente!")
    }
}