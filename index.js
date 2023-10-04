

//VARIABLES//

let variableSinvalor= "sin valor";

let booleano1 = "booleanos";

let booleano2 = "booleanos";

const PI = "3.14";

const TAU = 2 * Math.PI;

//BOLEANOS//

const booleanoAnd = booleano1 && booleano2;

const booleanoNot = !booleano1;

const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));


//Operadores//

let incrementarDesp = "2";

let resultadoDesp = incrementarDesp++;


let incrementarAntes = "2"

let resultadoAntes = ++incrementarAntes;




//bucles//

const contarHasta10_2 = "0"

for (contarHasta10_2; contarHasta10_2 < 10; contarHasta10_2++);

const postI = 0;
const postJ = 0;

for (const contador = 0; contador < 11; contador++) {
    postI += postJ++;
  }


let sumaPares = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
}


//Variables//

let variableValorNumerico = 33;

const MiNombre = "tu nombre";


const MiNumeroFav = 33;


const booleanoOr = booleano1 || booleano2;


const booleanoMix1 = (booleano1 && (TAU/2 === PI)) || (variableValorNumerico >= MiNumeroFav);

const seisNoEsNueve = 6 !== 9;

const booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU);


//operadores//

const valorSuma = MiNumeroFav + variableValorNumerico;

const valorResta = MiNumeroFav - variableValorNumerico;

const valorMultiplicacion = MiNumeroFav * variableValorNumerico;

const valorDivisión = MiNumeroFav / 3

//Bucles//

const contarHasta10 = 0;

while (contarHasta10 !== 10) {
    contarHasta10++;
  }


const preI = 0;
const preJ = 0;

for (var contador = 0; contador < 11; contador++) {
  preI += ++preJ;
}

const sumaImpares = 0;


for (const i = 0; i < 10; i++) {
  if (i % 2 !== 0) { 
    sumaImpares += i; 
  }
}