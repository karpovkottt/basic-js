const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (s1 === '' || s2 === '') {
    return 0;
  }
  if (s1.length === 1) {
    if (s1 === s2) {
      return 1;
    } else {
      return 0;
    }
  }
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) !== -1) {
      s2 = s2.slice(0, s2.indexOf(s1[i])) + s2.slice(s2.indexOf(s1[i]) + 1, s2.length);
      count += 1;
    }
  }
 return count;
}

getCommonCharacterCount('aabcc', 'adcaa')

module.exports = {
  getCommonCharacterCount
};
