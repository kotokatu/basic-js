const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )~~`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw Error("You can't remove incorrect link!")
    };
    this.chain = this.chain.filter((el, ind) => {
      if (ind + 1 !== position) return el;
    })
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let chain = [...this.chain].join('');
    this.chain = [];
    return chain.substring(0, chain.length - 2);
  }
};

module.exports = {
  chainMaker
};
