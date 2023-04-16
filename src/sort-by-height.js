const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr2 = arr;
  let str = arr2.join(',').replace(/-1/g, '');
  let arr3 = str.split(',');
  arr3.sort((a, b) => a - b);
  let j = arr3.length - 1;
  for (let i = arr.length -1; i >= 0; i--) {
    if (arr[i] !== -1) {
      arr[i] = Number(arr3[j]);
      j = j - 1;
    }
  }
  return arr2;
}

module.exports = {
  sortByHeight
};
