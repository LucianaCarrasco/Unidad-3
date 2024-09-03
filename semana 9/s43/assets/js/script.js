// Modificación de arrays

// .map(función)
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos

// 1-> Dado el siguiente array de números, crear un nuevo array de cada uno de los números multiplicados por 2.
/*
let nums = [1, 2, 3, 4, 5];
console.log(nums);
*/
//Con bucles
 /*let numPorDos = [];

 for (let nums of nums) {
 numsPorDos.push(num * 2);
 }*/

 //Usando map

 /*
 let numsPorDos = nums.map((n)=> n * 2);
 console.log(numsPorDos);

 //El arreglo orginal no se modifica
 console.log(nums);

 // 2 -> Dado el siguiente array de string, crear un array indicando que elementos están en mayúscula (true) y cuales en minúscula(false)
 console.log(2);

 let letras = ["a", "B", "c", "D", "e"];

 let sonMayusculas = letras.map((c) => c.toUpperCase() == c);

 console.log(sonMayusculas);
*/


/*
 // 3 -> Del arreglo de strings, crear un nuevo arreglo con la siguiente pauta: Si la palabra tiene más de 7 letras se pondrá "palabra larga", en caso contrario se pondrá "palabra corta"
let palabras = [
    "hola",
    "computadora",
    "casa",
    "programacion",
    "javascript",
    "ciclo",
  ];

  // ["palabra corta", "palabra larga", "palabra corta", "palabra larga", "palabra larga", "palabra corta"]

let palabraSize = palabras.map((palabra) => {
    if (palabra.length > 7) {
        return "palabra larga";
    }
    return "palabra corta";
})

console.log(palabraSize);

console.log(4);
const nums = [1, 2, 3, 4, 5];
console.log(nums);

let suma = nums.reduce((a, b) => a + b, 0);

console.log(suma);

console.log(5);
let multiplicación = nums.reduce((a, b) => a * b, 1);
console.log(multiplicación);
  
console.log(6);

let puntos = [11, 2, 1, 21, 23, 10];
console.log(puntos);

//Ordenar el arreglo por defecto
puntos.sort();
console.log("Ordenamiento por defecto");
console.log(puntos);

//Ordenamiento numérico estricto
puntos.sort((a, b) => a * b);
console.log("Ordenamiento numérico estricto");
console.log(puntos);
*/
  
const arr = [true, 1, "hola", 54.76, "a"];
console.log(arr);

arr.reverse();
console.log(arr);

//split

console.log("split");
const frase = "Hola buenos días a todas";
console.log(frase);

let palabras = frase.split(" ");
console.log(palabras);

const csv = "Perú,Argentina,Chile,Colombia";
console.log(csv);

let paises = csv.split(",");
console.log(paises);

console.log("join");

let strPalabras = palabras.join(" ");
console.log(strPalabras);

let strPaises = paises.join();
console.log(strPaises);



