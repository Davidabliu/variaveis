const NomeCompleto = "Davi Wandelbruck";
const Nascimento = "2005";
const Idade = "19 anos";
const Local = "São José Dos Pinhais"

console.log (`oi eu sou ${NomeCompleto}, meu ano de nascimento é ${Nascimento} e atualmente tenho ${Idade}, moro em ${Local}`);

const listaDeViagens = new Array
  `Madrid na Espanha`,
  `Portugal`,
  `Estados Unidos`,
  `Sidney na Australia`,
  `Chile`
)

console.log (listaDeViagens);

console.log(listaDeViagens [0]);
listaDeViagens.push ("Coronel Vivida");
console.log(listaDeViagens);
listaDeViagens.splice(1,2);
console.log(listaDeViagens);

const idadeComprador = 19; 

if(idadeComprador < 18){
  console.log("infelizmente o sistema não disponibiliza venda para menores de idade")
}
if(idadeComprador >= 18){
  console.log ("você poderá prosseguir sua compra")
}