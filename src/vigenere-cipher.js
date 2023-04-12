const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.direct = type;
    this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }
  encrypt(string, key) {
    if (string === undefined || key === undefined) throw Error('Incorrect arguments!')
    string = string.toUpperCase();
    key = key.toUpperCase();
    let res = '';
    for (let i = 0, j = 0; i < string.length; i++) {
      if (this.alphabet.includes(string.charAt(i))) {
        res += this.alphabet[(this.alphabet.indexOf(string.charAt(i)) + this.alphabet.indexOf(key.charAt(j % key.length))) % 26];
        j++;
      }
      else {
        res += string.charAt(i);
      }
    }
    return this.direct ? res : [...res].reverse().join('');
  }
  decrypt(string, key) {
    if (string === undefined || key === undefined ) throw Error('Incorrect arguments!');
    string = string.toUpperCase();
    key = key.toUpperCase();
    let res = '';
    for (let i = 0, j = 0; i < string.length; i++) {
      if (this.alphabet.includes(string.charAt(i))) {
        let char = (this.alphabet.indexOf(string.charAt(i)) - this.alphabet.indexOf(key.charAt(j % key.length))) % 26;
        if (char < 0) char = 26 + char;
        res += this.alphabet[char];
        j++;
      }
      else {
        res += string.charAt(i);
      }
    }
    return this.direct ? res : [...res].reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
