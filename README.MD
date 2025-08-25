# 🔎 Algoritmos de Búsqueda

## 1. Linear Search
- [x] 📌 Recorres un arreglo elemento por elemento hasta encontrar lo que buscas.  
- [x] 🛠️ `for`, `if`, comparación `===`.  
- [x] 🎯 Lógica secuencial, iteración.  
- [x] 🚀 Variante: buscar el índice de todos los elementos que coincidan, no solo el primero.  

## 2. Binary Search
📌 Divide el arreglo a la mitad repetidamente para buscar un valor (requiere arreglo ordenado).  
🛠️ `while`, índices `low` y `high`, matemáticas (`Math.floor`).  
🎯 Pensar en divide y vencerás.  
🚀 Variante: hacerlo recursivo.  

---

# 🔃 Algoritmos de Ordenamiento

## 3. Bubble Sort
📌 Compara pares de elementos y los intercambia hasta ordenar todo.  
🛠️ `for`, `if`, `swap` de valores.  
🎯 Lógica de comparación, ciclos anidados.  
🚀 Variante: detectar si ya está ordenado y terminar antes.  

## 4. Selection Sort
📌 Busca el mínimo en el arreglo y lo coloca al inicio, repite con el resto.  
🛠️ `for`, `if`, índice auxiliar.  
🎯 Entender selección y reemplazo.  
🚀 Variante: implementarlo descendente.  

## 5. Insertion Sort
📌 Inserta cada elemento en la posición correcta de una lista parcialmente ordenada.  
🛠️ `while`, comparación, `splice`.  
🎯 Pensar en mover elementos hacia atrás.  
🚀 Variante: optimizar con búsqueda binaria.  

## 6. Merge Sort
📌 Divide el arreglo en mitades, ordena cada una y luego las combina.  
🛠️ Recursión, arrays, `slice`.  
🎯 Divide y vencerás.  
🚀 Variante: hacerlo iterativo con bucles.  

## 7. Quick Sort
📌 Elige un pivote y divide en menores/mayores al pivote, luego ordena recursivamente.  
🛠️ Recursión, arrays (`filter` o bucles).  
🎯 Manejar particiones.  
🚀 Variante: probar distintos métodos para elegir pivote.  

---

# 🔁 Algoritmos de Recursión

## 8. Serie Fibonacci
📌 Cada número es suma de los dos anteriores.  
🛠️ Recursión, condicionales.  
🎯 Pensar en casos base.  
🚀 Variante: optimizar con memoization.  

## 9. Factorial
📌 Producto de todos los números desde `n` hasta `1`.  
🛠️ Recursión o bucles.  
🎯 Casos base y decrecimiento.  
🚀 Variante: manejar números grandes con BigInt.  

## 10. Torre de Hanoi
📌 Mover discos de una torre a otra sin violar reglas.  
🛠️ Recursión, impresión de pasos.  
🎯 Planificación de movimientos.  
🚀 Variante: calcular número mínimo de movimientos.  

## 11. Suma de N números naturales
📌 Sumar de `1` a `n`.  
🛠️ Recursión o fórmula matemática.  
🎯 Pensar en reducción de problema.  
🚀 Variante: hacerlo con programación funcional (`reduce`).  

---

# 🔤 Algoritmos para Cadenas

## 12. Reverse string (sin `.reverse()`)
📌 Invertir caracteres de un string.  
🛠️ Bucles, arrays, concatenación.  
🎯 Pensar en índices.  
🚀 Variante: hacerlo recursivo.  

## 13. Palíndromo
📌 Revisar si una palabra se lee igual al derecho y al revés.  
🛠️ Strings, bucles, `toLowerCase()`.  
🎯 Comparaciones.  
🚀 Variante: ignorar espacios y signos.  

## 14. Contar caracteres
📌 Calcular cuántas veces aparece cada letra.  
🛠️ Objetos como diccionario, bucles.  
🎯 Mapear frecuencias.  
🚀 Variante: hacerlo con `Map`.  

## 15. Buscar subcadenas
📌 Verificar si un substring existe dentro de otro string.  
🛠️ `includes()`, bucles, slicing.  
🎯 Manejar rangos de índices.  
🚀 Variante: implementar algoritmo KMP o Boyer-Moore (avanzado).  

## 16. Anagramas
📌 Revisar si dos palabras tienen las mismas letras en diferente orden.  
🛠️ Ordenar letras, objetos de conteo.  
🎯 Comparar estructuras.  
🚀 Variante: verificar lista completa de palabras.  

---

# 🔢 Algoritmos de Matemáticas

## 17. Números primos
📌 Verificar si un número solo es divisible por 1 y él mismo.  
🛠️ Módulo `%`, bucles.  
🎯 Optimización en divisores.  
🚀 Variante: generar lista de primos (Criba de Eratóstenes).  

## 18. Exponenciación rápida
📌 Calcular potencias con dividir y vencerás (`n^k`).  
🛠️ Recursión, multiplicación.  
🎯 Pensar en casos pares/impares.  
🚀 Variante: modular exponentiation.  

## 19. Suma y multiplicación de matrices 2x2
📌 Operaciones básicas de álgebra lineal.  
🛠️ Arrays bidimensionales.  
🎯 Indexación de matrices.  
🚀 Variante: generalizar a NxN.  

## 20. Conteo con HashMap
📌 Contar frecuencia de palabras o duplicados en un arreglo.  
🛠️ Objetos `{}`, `Map`.  
🎯 Agrupación y conteo.  
🚀 Variante: hacerlo sensible a mayúsculas/minúsculas.  

---

# 🗺️ Algoritmos de Recorrido de Matrices

## 21. Búsqueda en matrices
📌 Buscar un valor en una matriz (lineal o binaria por fila/columna).  
🛠️ Bucles anidados.  
🎯 Pensar en coordenadas.  
🚀 Variante: matriz ordenada → búsqueda optimizada.  

## 22. Caminos en espiral
📌 Imprimir elementos de matriz en forma de espiral.  
🛠️ Bucles, límites dinámicos.  
🎯 Control de bordes.  
🚀 Variante: hacerlo recursivo.  

## 23. BFS (Breadth First Search)
📌 Recorrer nodos nivel por nivel.  
🛠️ Colas (`shift`, `push`).  
🎯 Manejar grafos o grids.  
🚀 Variante: shortest path en un grafo.  

## 24. DFS (Depth First Search)
📌 Recorrer nodos en profundidad antes de retroceder.  
🛠️ Pila (`push`, `pop`) o recursión.  
🎯 Backtracking.  
🚀 Variante: resolver laberintos.  
