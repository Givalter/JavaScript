function areaQuadrado(lado){
  return lado * lado / 2;

}
console.log(areaQuadrado(10))

function pi() {
  return 3.14;
}
var toral = 5 * pi(); //15.7

console.log(pi)

function imc(peso, altura){
  const imc = peso / (altura * altura);
  return imc;
}
// imc(80, 1.80) // 80 2 1.80 são argumesntos
// imc(60, 1.70) // 60 2 1.70 são argumesntos

console.log(imc(80,1.8));

function Idade(idade){
  if(idade >= 91){
    return 'Velhice Extrema';
  } else if (idade >= 90) {
    return 'Ancião';
  } else if (idade >= 74) {
    return 'Idoso';
  } else if (idade >= 65) {
    return 'Aduto Pleno';
  } else if (idade >= 40) {
    return 'Aduto Jovem';
  } else if (idade >= 20) {
    return 'Adolescênte';
  } else (idade >= 12); {
    return 'Criança'
  }  
}
  


Idade(30)



function corFavorita(cor){
  if (cor === 'azul'){
    return 'Eu gosto do céu';
} else if (cor === 'verde'){
    return 'Eu gosto de floresta';
} else {
  return 'Não tenho cor preferida'
}
}

function notas(nota){

  if (nota >= 90) {
   return "Excelente!" ;
 } else if (nota >= 70) {
   return "Bom!";
 } else if (nota >= 50) {
   return "Regular";
 } else {
   return "Reprovado";
 }}

addEventListener('click', function() { console.log('oi')});

function mostrarConsole(){
  console.log('oi')
}

addEventListener('click', mostrarConsole);


function nota(notas){

 if (notas >= 90) {
  return "Excelente!" ;
} else if (notas >= 70) {
  return "Bom!";
} else if (notas >= 50) {
  return "Regular";
} else {
  return "Reprovado";
}}

function imc2(peso, altura){
  var imc = peso / ( altura **2 );
  console.log(imc);
}

imc2(20, 1.8)

