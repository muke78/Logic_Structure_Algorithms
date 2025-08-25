/**
 * 1. Linear Search
 *📌 Recorres un arreglo elemento por elemento hasta encontrar lo que buscas.
 *🛠️ for, if, comparación ===.
 *🎯 Lógica secuencial, iteración.
 *🚀 Variante: buscar el índice de todos los elementos que coincidan, no solo el primero.
 */

// Importamos el módulo readline
const readline = require('readline');

// Creamos la interfaz de entrada y salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Recibo de arreglo de numeros y numero a buscar en forma de pregunta
rl.question('Dame un arreglo (separado por comas): ', (arr) => {
  rl.question('Dame un numero para buscar: ', (num) => {
    // Convertir el arreglo en numeros
    const array_numbers = arr.split(',').map((nb) => Number(nb.trim()));
    const search = Number(num);
    Linear_Search(array_numbers, search);
    rl.close();
  });
});

function Linear_Search(array, search) {
  for (let i = 0; i < array.length; i++) {
    // Validacion de busqueda
    search === array[i]
      ? console.log(`✅ El numero se encontro en la posicion ${i + 1}`)
      : console.log(`❌ No se encontro el numero en esta posicion ${i + 1}`);
  }
}

// Es nuestro arreglo para buscar [45, 11, 20, 5, 78, 34, 27, 10, 97, 25];
