const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 */ transform([, 2, 3, '--double-next', 4, 5]) /* => [1, 2, 3, 4, 4, 5]*/
    transform([1, 2, 3, '--discard-prev', 4, 5])
    transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]) /* => [1, 2, 4, 5]

 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const result = [];

  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    if (arr[i] === '--double-next') {
      result.pop();
      result.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev') {
      result.pop();
      result.push(result[result.length - 1]);
    } else if (arr[i] === '--discard-prev') {
      result.pop();
      result.pop();
    } else if (arr[i] === '--discard-next') {
      result.pop();
      result.push(null);
      i += 1;
    }
  }
  const final = [];
  result.forEach((item) => {
    if (item !== undefined && item !== null) {
      final.push(item);
    }})
  return final;
}

module.exports = {
  transform
};
