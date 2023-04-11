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
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error ("'arr' parameter must be an instance of the Array!");
  arr = arr.map((el, ind) => {
    if (arr[ind - 1] === '--discard-next') {
      el = '--discard-next';
    }
    if (el === '--double-next') {
      el = arr[ind + 1];
    }
    return el;
  });
  arr = arr.map((el, ind) => {
    if (arr[ind + 1] === '--discard-prev') {
      el = '--discard-prev';
    }
    if (el === '--double-prev') {
      el = arr[ind - 1];
    }
    return el;
  })
  return arr.filter(el => {
    if (el !== '--discard-next' && el !== '--discard-prev' && el !== '--double-next' && el !== '--double-prev') return el;
  });
}

module.exports = {
  transform
};
