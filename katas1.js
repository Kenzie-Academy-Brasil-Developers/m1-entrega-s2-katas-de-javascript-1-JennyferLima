//oneThroughTwenty - Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)
function oneThroughTwenty(a,b) {
    
   /* Your code goes below
   Write a for or a while loop
   return the result*/

   array = [];

   for (let i = a; i <= b; i++){
    array.push(i);
   }

   return array;
    
}

console.log(oneThroughTwenty(1,20));
//call function oneThroughTwenty



//evensToTwenty - Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)
function evensToTwenty() {
  let numerosPares = [];

  let contador = 1;

  while(contador <= 20){
    
      if(contador % 2 == 0){
        numerosPares.push(contador);
      } 
      contador++;
  }

  return numerosPares;

}

console.log(evensToTwenty())





//oddsToTwenty - Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function oddsToTwenty(x) {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
   
  let numrosImpares = [];

  for(let i = 0; i < x.length; i++){
    if(x[i] % 2 != 0){
      numrosImpares.push(x[i]);
    }
   }

   return numrosImpares;
  
}

console.log(oddsToTwenty(arr));
//call function oddsToTwenty



//multiplesOfFive - Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)
function multiplesOfFive() {
    
  let multiplosCinco = [];

  for(let i = 1; i <= 100; i++){
    if(i % 5 == 0){
      multiplosCinco.push(i);
    }
  }

  return multiplosCinco;

}

console.log(multiplesOfFive()) //call function multiplesOfFive



//squareNumbers - Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)
function squareNumbers() {
    
  let quadradoPerfeito = [];

  for(let i = 1; i <= 100; i++){
    quadradoPerfeito.push(Math.pow(i,2)); //Math.pow(b,e): b -> Base, e -> Expoente
  }
      
  return quadradoPerfeito;
}

console.log(squareNumbers()) //call function squareNumbers



//countingBackwards - Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)

function countingBackwards(p,q) {
    
  let ordemContraria = [];

  for(let i = q; i >= p; i--){
    ordemContraria.push(i);
  }

  return ordemContraria;

}

console.log(countingBackwards(1,20)) //call function countingBackwards


/* OUTRA MANEIRA:

function countingBackwards() {
    
  let ordemContraria = [];

  for(let i = 20; i >= 1; i--){
    ordemContraria.push(i);
  }

  return ordemContraria;

}

console.log(countingBackwards()) */ 



//evenNumbersBackwards - Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)
function evenNumbersBackwards(m,n) {
    
  let ordemContrariaPares = [];

  for(let i = n; i >= m; i--){
    if(i % 2 == 0){
      ordemContrariaPares.push(i);
    }
  }

  return ordemContrariaPares;

}

console.log(evenNumbersBackwards(1,20)) //call function evenNumbersBackwards


//oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
function oddNumbersBackwards() {
    
  let numerosImpares = [];

  for(let i = 1; i < 20; i++){
    if(i % 2 != 0){
      numerosImpares.push(i);
    }
  }

  return numerosImpares;
}
console.log(oddNumbersBackwards());
//call function oddNumbersBackwards



//multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)
function multiplesOfFiveBackwards() {

  let multiplosCinco = [];

  for(let i = 100; i > 1; i--){
    if(i % 5 == 0){
      multiplosCinco.push(i);
    }
  }

  return multiplosCinco;

}

console.log(multiplesOfFiveBackwards()) //call function multiplesOfFiveBackwards


//squareNumbersBackwards - Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)
function squareNumbersBackwards() {
    
  let quadradoPerfeitoTrasPraFrente = [];
  
  for(let i = 100; i >= 1; i--){

    if(Math.sqrt(i) % 1 == 0){
      quadradoPerfeitoTrasPraFrente.push(i);
    }
    
  }

  return quadradoPerfeitoTrasPraFrente;
}
console.log(squareNumbersBackwards()) //call function squareNumbersBackwards


/*
OUTRA MANEIRA:

function squareNumbersBackwards() {
  let meuRetorno = [];
  for (let i = 10; i >= 1; i--){     
    meuRetorno.push(i * i)
  }
  return meuRetorno;
}
console.log(squareNumbersBackwards()); 
*/


