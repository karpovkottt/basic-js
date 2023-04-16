const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 */ getSeason(new Date(2020, 02, 31)) /*=> 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let season = '';
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (typeof(date) !== 'object' || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  };
  
  let month = date.getMonth() + 1;

  if (month <= 2 || month === 12) {
    season = 'winter';
  } else
  if (month <= 5) {
    season = 'spring';
  } else
  if (month <= 8) {
    season = 'summer';
  } else
  if (month <= 11) {
    season = 'autumn'
  }
  return season;
}

module.exports = {
  getSeason
};
