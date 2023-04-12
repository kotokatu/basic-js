const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i + 1)) {
      newStr += str.charAt(i);
    } else {
      newStr += str.charAt(i) + ' ';
    }
  }
  let arr = newStr.trim().split(' ');
  return arr.map(el => el.length > 1 ? el.length + el[0] : el[0]).join('');
}

module.exports = {
  encodeLine
};
