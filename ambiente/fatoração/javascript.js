function calculo(){
  /* Tratamento preliminar da input (minúscula, sem espaço) */
  const text = window.document.getElementById("equacao").value.replace(/ /g, '').toLowerCase()

  /* Função que valida se a string está correta*/
  console.log('Código rodado')
  console.log('---------')
  console.log(text)
  console.log('---------')
  valido = validarEquacao(text)

  /* Função de indexação da posição de itens chaves da string */
  if(valido){
    console.log('Processando indexações')
    indexarElementos(text)
    separarOsTermos(text)
  }
}

function validarEquacao(text){
  let valido = true
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
      posicaoDosOperadoresErrada(){
        if(
        text[text.length-1] == '+'||
        text[text.length-1] == '-' ){
          valido = false
          console.log('Operadores matemáticos não podem estar no final de equações!')
      }
      },
      posicaoDasVariaveis(i){
        if((text[i] == 'x' || text[i] == 'y') && !isNaN(text[i+1])){
          valido = false
          console.log('Equação inválida.')
        }
      }
    }
    passosDeVerificacao.estaVazio()
    passosDeVerificacao.posicaoDosOperadoresErrada()
    for (let i = 0; i < text.length; i++){
      passosDeVerificacao.caracteresInvalidos(i)
      passosDeVerificacao.termoDeSegundoGrauIncorreto(i)
      passosDeVerificacao.posicaoDasVariaveis(i)
    }
    return valido
  }

function indexarElementos(text){
Mais = []
Menos = []
let Expoente = []
let X = []
let Y = []
OrdemSinais = []
PosicaoSinais = [0]

const passosDeIndexacao = {
  posicaoMais(i){
    if (text[i] == '+'){
      Mais.push(i)
    }
  },
  posicaoOperadores(i){
    if (text[i] == '+'){
      OrdemSinais.push('+')
      PosicaoSinais.push (i)
    }else{
      if(text[i] == '-'){
        OrdemSinais.push('-')
        PosicaoSinais.push (i)
      }
    }
  },
  posicaoMenos(i){
    if (text[i] == '-'){
        Menos.push(i)
    }
  },
  posicaoExp(i){
    if (text[i] == '^'){
        Expoente.push(i)
    }
  },
  posicaoX(i){
    if (text[i] == 'x'){
        X.push(i)
    }
  },
  posicaoY(i){
    if (text[i] == 'y'){
        Y.push(i)
    }
  }
}
  for (let i = 0; i < text.length; i++){
    passosDeIndexacao.posicaoMais(i)
    passosDeIndexacao.posicaoMenos(i)
    passosDeIndexacao.posicaoExp(i)
    passosDeIndexacao.posicaoX(i)
    passosDeIndexacao.posicaoY(i)
    passosDeIndexacao.posicaoOperadores(i)
  }
  PosicaoSinais.push(text.length)
  if(text[0] != '-' && text[0] != '+'){
    OrdemSinais.unshift('+')
  }
  console.log('Mais: ' + Mais)
  console.log('Menos: ' + Menos)
  console.log('Expoentes: ' + Expoente)
  console.log('X: ' + X)
  console.log('Y: ' + Y)
  console.log(PosicaoSinais)
  console.log(OrdemSinais)
}

function separarOsTermos(text){
  separacao = []
  for (let i = 0; i < OrdemSinais.length; i++){
    if(i == 0){
      separacao.push(text.slice(PosicaoSinais[i], PosicaoSinais[i+1]))
    }else{
      separacao.push(text.slice(PosicaoSinais[i]+1, PosicaoSinais[i+1]))
    }
  }
  stringTemporaria = ''
  bruto = []
  for (let i = 0; i < separacao.length; i++){
    for(let j = 0; j < (separacao[i]).length; j++){
      if(isNaN(separacao[i][j]) || (separacao[i][j-1] == '^')){
        stringTemporaria = stringTemporaria + separacao[i][j]
      }
    }
    bruto.push(stringTemporaria)
    stringTemporaria = ''
  }
  console.log(bruto)

  /* for (let i = 0; i < separacao.length; i++){
    for(let j = 0; j < (separacao[i]).length; j++){
      if(separacao[i][j] == 'x'){
        console.log('x')
      }else{
        console.log('n')
      }
    }
  }
 */
  console.log(separacao)
}
