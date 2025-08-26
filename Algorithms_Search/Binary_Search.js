/**
 * ## 2. Binary Search
 *📌 Divide el arreglo a la mitad repetidamente para buscar un valor (requiere arreglo ordenado).
 *🛠️ `while`, índices `low` y `high`, matemáticas (`Math.floor`).
 *🎯 Pensar en divide y vencerás.
 *🚀 Variante: hacerlo recursivo.
 *
 */

// Importamos el modulo readline
const readline = require('readline');

// Creamos nuestra interfaz de entrada y salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Dame un arreglo (ordenado del menor a mayor): ', (arr) => {
  rl.question('Dame un numero para buscar: ', (num) => {
    // Convertir el arreglo de
    const arrray_numbers = arr.split(',').map((nb) => Number(nb.trim()));
    const search = Number(num);
    const end = arrray_numbers.length - 1;
    Binary_Search(arrray_numbers, search, end);
    rl.close();
  });
});

// Funcion para la busqueda binaria
function Binary_Search(array, search, end) {
  let start = 0;
  let iterations = 0;

  while (start <= end) {
    let position = Math.floor((start + end) / 2);
    iterations++;

    if (array[position] === search) {
      console.log(
        `✅ El numero se encontro en la posicion ${position} con un total de ${iterations} iteraciones`
      );
      return;
    }

    if (array[position] < search) {
      start = position + 1;
    } else {
      end = position - 1;
    }
  }

  console.log(
    `❌ El número ${search} no está en el arreglo después de ${iterations} iteraciones`
  );
}

// Es nuestro arreglo para buscar [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000, 4100, 4200, 4300, 4400, 4500, 4600, 4700, 4800, 4900, 5000];
