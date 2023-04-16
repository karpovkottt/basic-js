const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 */
repeater('STRING', { repeatTimes: 3, separator: '**',
addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 /* => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = '';
  let addition = '';
  const delStr = /undefined/g;
  for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
    if (!options.additionSeparator) {
      addition = addition + (options.addition + '|');
    } else {
      addition = addition + (options.addition + options.additionSeparator);
    }
  }
  addition = addition + options.addition;

  for (let i = 0; i < options.repeatTimes - 1; i++) {
    if (!options.separator) {
      result = result + (str + addition + '+')
    } else {
      result = result + (str + addition + options.separator);
    }
  }
  result = result + (str + addition)
  // console.log(result.replace(delStr, ''))
  return result.replace(delStr, '');

}

module.exports = {
  repeater
};
