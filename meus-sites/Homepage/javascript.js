const frase = 'Home page';
let indice = 0;

const escrita = document.getElementById('escrever');

const idIntervalo = setInterval(() => {
  escrita.innerHTML += frase.charAt(indice);
  indice++;
  if (indice > frase.length) clearInterval(idIntervalo);
  return;
}, 200);