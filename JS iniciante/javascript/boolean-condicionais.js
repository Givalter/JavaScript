var posuiGraduacao = false;
var posuiDoutorado = false;

// switch

if(posuiGraduacao){
    console.log('É verdadeiro');
    
} else if(posuiDoutorado) {
    console.log('É falso');
} else {
    console.log('Não possui nada');
}


// switch

var corFavorita = 'vermelho'
switch(corFavorita){
    case 'azul':
        console.log('Olha para o céu');
        break;
    case 'vermelho':
        console.log('Olha para o rosa');
        break;

    case 'verde':
        console.log('Olha para a floresta');
        break;
    case 'amarelo':
        console.log('Olha para o sol');
        break;
    default:
        console.log('Cor favorita não encontrada');

}

            // exercicios

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadeGivalter = 10;
var idadeGelton = 10;

if(idadeGivalter > idadeGelton){
    console.log('E maior')
} else if( idadeGivalter === idadeGelton){
    console.log('E igual')
} else 
    console.log('É menor')    




// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)
// Número

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';  //true
var idade = 28;   //true
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log( !! nome, !!idade, !!posuiDoutorado, !!empregoFuturo,!!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var Brasil = 207;
var China = 1340;

if(Brasil > China){
    console.log('Brasil tem mais habitantes')
} else {
    console.log('Brasil tem menos habitantes')
}


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// golso









