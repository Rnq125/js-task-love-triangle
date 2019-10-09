/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(array = []) {
  let counter = 0;

  for (let i = 0; i < array.length; i++) {

      let a = array[i] - 1;
      if (i == a) continue;

      let b = array[a] - 1;
      if (a == b) continue;

      let c = array[b] - 1;
      if (b == c) continue;
      if (c == i) {
          counter++;
      }
   }
   return counter / 3;
}
