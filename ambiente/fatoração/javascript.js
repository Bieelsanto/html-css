function expoente(array){
    return array == "^"
}

function spliter(text){
    for (let i = 0; i < text.length; i++){
        array.push(text[i])
    }
}

function calculo(){
    var text = window.document.getElementById("texto").value
    array = []
    array.spliter(text)
    var exp = array.findIndex(expoente)
    console.log(array)
    console.log(exp)
}
