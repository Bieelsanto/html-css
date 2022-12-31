function calculo(){
    /* Tratamento preliminar da input (minúscula, sem espaço) */
    const text = window.document.getElementById("equacao").value.replace(/ /g, '').toLowerCase()

    /* Função que valida se a string está correta*/
    console.log('Código rodado')
    console.log('---------')
    console.log(text)
    console.log('---------')
    valido = validarEquacao(text)
    if(valido){
      /* Funções de indexação da posição de itens chaves da string */
      som = posicaoSoma()
      sub = posicaoSub()
      exp = posicaoExp()
      xis = posicaoX()
      ypslon = posicaoY()

      /* Print do resultado das funções */
      console.log(som)
      console.log(sub)
      console.log(exp)
      console.log(xis)
      console.log(valido)
    }
}

function validarEquacao(text){
  valido = true
  quantidadeOperadores = 0
    const passosDeVerificacao = {
      estaVazio(){
        if(text == ''){
          valido = false
          console.log('A caixa de texto está vazia!')
        }
      },
      caracteresInvalidos(i){
        if(
          isNaN(text[i]) &&
          text[i] != '^' &&
          text[i] != 'x' &&
          text[i] != 'y' &&
          text[i] != '+' &&
          text[i] != '-'
        ){
          console.log(i)
          console.log('Verifique os caracteres usados. Só são aceitos [^ + - x] e números!')
          valido = false
        } 
      },
      termoDeSegundoGrauIncorreto(i){
        if(text[i] == '^'){
          if((
          text[i-1] != 'x' && 
          text[i-1] != 'y') || 
          isNaN(text[i+1])
          ){
          console.log(i)
          console.log('Verifique o termo de segundo grau!')
          valido = false
          }
        }
      },
      operadoresInsuficientes(i){
        if(
          text[i] == '+' ||
          text[i] == '-'
        ){
          quantidadeOperadores++
        }
      },
      posicaoDasVariaveis(i){
        if((text[i] == 'x' || text[i] == 'y') && !isNaN(text[i+1])){
          valido = false
          console.log('Digite a sua variável da mesma maneira do exemplo.')
        }
      },
      verificadorDeSomatorios(){
        if (quantidadeOperadores != 2){
          valido = false
          console.log('Trinômios possuem apenas três termos!')
        }
      }
    }
    passosDeVerificacao.estaVazio()
    for (let i = 0; i < text.length; i++){
      passosDeVerificacao.caracteresInvalidos(i)
      passosDeVerificacao.termoDeSegundoGrauIncorreto(i)
      passosDeVerificacao.operadoresInsuficientes(i)
      passosDeVerificacao.posicaoDasVariaveis(i)
    }
    passosDeVerificacao.verificadorDeSomatorios()
    return valido
  }

function posicaoSoma(){
  let array = []
  for (let i = 0; i < text.length; i++){
      if (text[i] == '+'){
          array.push(i)
      }
      console.log(text[i])
  }
  return array 
}

function posicaoSub(){
  let array = []
  for (let i = 0; i < text.length; i++){
      if (text[i] == '-'){
          array.push(i)
      }
  }
  return array
}

function posicaoExp(){
  let array = []
  for (let i = 0; i < text.length; i++){
      if (text[i] == '^'){
          array.push(i)
      }
  }
  return array
}

function posicaoX(){
  let array = []
  for (let i = 0; i < text.length; i++){
      if (text[i] == 'x'){
          array.push(i)
      }
  }
  return array
}

function posicaoY(){
  let array = []
  for (let i = 0; i < text.length; i++){
      if (text[i] == 'y'){
          array.push(i)
      }
  }
  return array
}