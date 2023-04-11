const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const SEASONS = {
    0: 'winter',
    1: 'winter',
    11: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'autumn',
    9: 'autumn',
    10: 'autumn'
  }
  let error = new Error('Invalid date!');
  if (!date) return 'Unable to determine the time of year!';
  try {Date.prototype.getMonth.call(date)} catch { throw error };
     return SEASONS[date.getMonth()];
}

module.exports = {
  getSeason
};
