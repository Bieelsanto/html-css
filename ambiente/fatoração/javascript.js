function calculo(){
    /* Tratamento preliminar da input (minúscula, sem espaço) */
    var text = window.document.getElementById("texto").value.trim().replace(/ /g, '').toLowerCase()

    /* Função que valida se  a string está correta*/
    valido = validarEquação(text)
    if(valido){
        /* Funções de indexação da posição de itens chaves da string */
        som = posicaoSoma(text)
        sub = posicaoSub(text)
        exp = posicaoExp(text)
        xis = posicaoXis(text)

        /* Print do resultado das funções */
        console.log(som)
        console.log(sub)
        console.log(exp)
        console.log(xis)
        console.log(valido)
    }
}

function validarEquação(text) {
    let valido = true;
    let temExp = false;
    let doisXis = 0;
    const passosDeVerificacao = {
      caracteresValidos(i) {
        if (
          isNaN(text[i]) &&
          text[i] != "x" &&
          text[i] != "^" &&
          text[i] != "+" &&
          text[i] != "-"
        ) {
          valido = false;
          console.log("Utilize apenas números e os seguintes sinais: (+ - ^ x)");
          return valido;
        }
      },
      segundoGrauValido(i) {
        if (
          (text[i] == "^") &&
          (isNaN(text[i + 1]) || text[i - 1] != "x")
        ) {
          valido = false;
          console.log("Verifique o termo de segundo grau");
          return valido;
        }
      },
      temExpoente(i) {
        if (text[i] == "^") {
          temExp = true;
          return temExp;
        }
      },
      temDoisXis(i) {
        if (text[i] == "x") {
            doisXis = doisXis + 1;
            console.log(doisXis);
            return doisXis;
        }
      }
    };
    for (let i = 0; i < text.length; i++) {
      valido = passosDeVerificacao.caracteresValidos(i);
      valido = passosDeVerificacao.segundoGrauValido(i);
      temExp = passosDeVerificacao.temExpoente(i);
      doisXis =+ passosDeVerificacao.temDoisXis(i);
      console.log(doisXis);
    }
    if (!temExp) {
      valido = false;
      console.log("A equação não tem expoente! (Utilize ^ para designar um expoente.");
    }
    if (doisXis != 2) {
      valido = false;
      console.log("Um trinômio quadrado perfeito precisa ter dois x!");
    }
    console.log(doisXis);
    return valido;
  }

function posicaoSoma(text){
    let array = []
    for (let i = 0; i < text.length; i++){
        if (text[i] == '+'){
            array.push(i)
        }
        console.log(text[i])
    }
    return array
}

function posicaoSub(text){
    let array = []
    for (let i = 0; i < text.length; i++){
        if (text[i] == '-'){
            array.push(i)
        }
    }
    return array
}

function posicaoExp(text){
    let array = []
    for (let i = 0; i < text.length; i++){
        if (text[i] == '^'){
            array.push(i)
        }
    }
    return array
}

function posicaoXis(text){
    let array = []
    for (let i = 0; i < text.length; i++){
        if (text[i] == 'x'){
            array.push(i)
        }
    }
    return array
}