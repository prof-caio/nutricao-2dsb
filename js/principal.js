//-------------------------------------
//daqui pra baixo começa o js do site


//mudanças no título
//busca no site pelo titulo e armazena ele dentro da variável titulo
let titulo = document.querySelector(".titulo");
//mostra no devtools o conteudo de texto da variavel titulo para fins de teste
console.log(titulo.textContent);
//altera o conteudo da variável titulo para o texto desejado
titulo.textContent = "Fica Grande Nutrição";

//mudanças na tabela
//armazena na variavel paciente os dados do primeiro paciente
let paciente = document.querySelector("#primeiro-paciente");
//mostra no console o valor da variável paciente
console.log(paciente);

let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");


let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura*altura);
console.log(imc);

let tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

//validação de dados
if(peso <= 0 || peso >= 1000){
    tdImc.textContent = "Peso inválido!";
}
if(altura <= 0 || altura >= 3){
    tdImc.textContent = "Altura inválida!";
}
