
// You should implement your task here.

module.exports = function towelSort (matrix) {
  result = [];

  if (arguments.length == 0) return result;

  for (let i = 0; i < matrix.length; i++ ) {
    let matrixRow = matrix[i];
    for (j = 0; j < matrixRow.length; j++) {
      if (i % 2 == 0) {
        result.push(matrixRow[j])
      } else {
        result.push(matrixRow[matrixRow.length - j - 1])
      }
    }
  }
  return result;
}
