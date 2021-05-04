// array, matrix, spiral order
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
  let left = 0, top = 0, right = matrix[0].length - 1, bottom = matrix.length - 1;
  let res = [];
  while (left <= right && top <= bottom) {
      for (let i = left; i <= right; i++) res.push(matrix[top][i]);
      for (let i = top + 1; i <= bottom; i++) res.push(matrix[i][right]);
      if (left < right && top < bottom) {
          for (let i = right - 1; i > left; i--) res.push(matrix[bottom][i]);
          for (let i = bottom; i > top; i--) res.push(matrix[i][left]);
      }
      left++, top++, right--, bottom--;
  }
  return res;
};