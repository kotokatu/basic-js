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
  let str = `${n}`;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) >= str.charAt(i + 1) && i < str.length - 1) continue;
    str = str.replace(str.charAt(i), '');
    break;
  }

  return +str;
}

module.exports = {
  deleteDigit
};
