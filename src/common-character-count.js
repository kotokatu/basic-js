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
  let obj1 = {};
  let obj2 = {};
  s1 = [...s1];
  s2 = [...s2];
  for (let el of s1) {
    obj1[el] = s1.filter(item => item === el).length;
  }
  for (let el of s2) {
    obj2[el] = s2.filter(item => item === el).length;
  }
  let count = 0;
  for (let el in obj1) {
    if (obj2[el]) count += Math.min(obj1[el], obj2[el]);
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
