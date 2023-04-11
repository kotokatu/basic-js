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
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|';
  if (options.addition !== undefined) {
    let add = Array(options.additionRepeatTimes).fill(`${options.addition}`).join(`${options.additionSeparator}`);
    str += add;
  }
  return Array(options.repeatTimes).fill(str).join(`${options.separator}`);
}

module.exports = {
  repeater
};
