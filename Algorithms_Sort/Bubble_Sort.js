/**
 * ## 3. Bubble Sort
 * 📌 Compara pares de elementos y los intercambia hasta ordenar todo.
 * 🛠️ `for`, `if`, `swap` de valores.
 * 🎯 Lógica de comparación, ciclos anidados.
 * 🚀 Variante: detectar si ya está ordenado y terminar antes.
 */

// Importamos el modulo readline
const readline = require('readline');

// Creamos la instacia de entrada y salida

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pedimos al usuario un arreglo desordenado para ordenar
rl.question('Dame un arreglo (desordenado): ', (arr) => {
  // Convertir el arreglo a numeros
  const array_number = arr.split(',').map((ar) => Number(ar.trim()));
  Bubble_Sort(array_number);
  rl.close();
});
// Funcion para el ordenamiento en burbuja
function Bubble_Sort(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
      console.log(i, j);
    }
  }
  console.log(array);
}

// 5, 1, 15, 30, 40, 2, 60, 100, 28
