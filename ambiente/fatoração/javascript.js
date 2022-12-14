function calculo(){
    var text = window.document.getElementById("texto").value
    text.split("")
    console.log(text)
    var exp = text.findIndex(expoente)
    function expoente(text){
        return text == "^"
    }
    console.log(exp)
}
