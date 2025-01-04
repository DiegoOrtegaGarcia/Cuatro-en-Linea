let combos3x3 = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

export let combo7x6=[
  // Combinaciones horizontales
  [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], // Fila 1
  [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13], // Fila 2
  [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20], // Fila 3
  [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27], // Fila 4
  [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34], // Fila 5
  [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41], // Fila 6

  // Combinaciones verticales
  [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35], // Columna 1
  [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36], // Columna 2
  [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37], // Columna 3
  [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38], // Columna 4
  [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39], // Columna 5
  [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40], // Columna 6
  [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41], // Columna 7
 
  // Combinaciones diagonales (de izquierda a derecha)
  [0, 8, 16, 24], // Diagonal desde la fila 1
  [1, 9, 17, 25], // Diagonal desde la fila 1
  [2, 10, 18, 26], // Diagonal desde la fila 1
  [3, 11, 19, 27], // Diagonal desde la fila 1
  [7, 15, 23, 31], // Diagonal desde la fila 2
  [8, 16, 24, 32], // Diagonal desde la fila 2
  [9, 17, 25, 33], // Diagonal desde la fila 2
  [10, 18, 26, 34], // Diagonal desde la fila 2
  [14, 22, 30, 38], // Diagonal desde la fila 3
  [15, 23, 31, 39], // Diagonal desde la fila 3
  [16, 24, 32, 40], // Diagonal desde la fila 3
  [17, 25, 33, 41],

  //

  [3, 9, 15, 21], // Diagonal desde la fila 1
  [4, 10, 16, 22], // Diagonal desde la fila 1
  [5, 11, 17, 23], // Diagonal desde la fila 1
  [6, 12, 18, 24], // Diagonal desde la fila 1
  [10, 16, 22, 28], // Diagonal desde la fila 2
  [11, 17, 23, 29], // Diagonal desde la fila 2
  [12, 18, 24, 30], // Diagonal desde la fila 2
  [13, 19, 25, 31], // Diagonal desde la fila 2
  [17, 23, 29, 35], // Diagonal desde la fila 3
  [18, 24, 30, 36], // Diagonal desde la fila 3
  [19, 25, 31, 37], // Diagonal desde la fila 3
  [20, 26, 32, 38]  // Diagonal desde la fila 3
]