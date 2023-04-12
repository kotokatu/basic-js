const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexes = [];
  let sorted = [];
  let res = [];
  arr.forEach((el, ind) => el === -1 ? indexes.push(ind) : sorted.push(el));
  sorted.sort((a, b) => a - b);
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (indexes.includes(i)) {
      res[i] = -1;
    } else {
      res[i] = sorted[j];
      j++;
    }
  }
  return res;
}

module.exports = {
  sortByHeight
};
