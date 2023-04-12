const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.reduce((acc, val) => {
    let match1, match2, match3;
    if (val.match(/(\.\w+$)/)) match1 = val.match(/(\.\w+$)/)[0]
    if (val.match(/(\.\w+){2}/)) match2 = val.match(/(\.\w+){2}/)[0].replace('.', '').split('.').reverse().map(el => ('.' + el)).join('');
    match3 = val.split('.').reverse().map(el => ('.' + el)).join('');
    let matches = [match1, match2, match3];
    for (let match of matches) {
      if (match) {
        if (match in acc) acc[match]++;
        else acc[match] = 1;
      }
    }
    return acc;
  }, {});
}

module.exports = {
  getDNSStats
};
