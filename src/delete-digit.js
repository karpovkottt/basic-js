const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let str = n.toString();
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr[i] = str.slice(0, i) + str.slice(i + 1, str.length);
  }
  arr.sort((a, b) => b - a);
  return Number(arr[0]);
}

module.exports = {
  deleteDigit
};
