function calculo(){
    var text = window.document.getElementById("texto").value.trim().replace(' ', '')
    array = posicao(text)
}

function posicao(text){
    for (let i = 0; i < text.length; i++){
        if(text[i] == " "){
            text[i] = ""
        }
        console.log(text[i])
    }
}