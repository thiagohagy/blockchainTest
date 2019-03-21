const sha256 = require('crypto-js/sha256')

class Block {
    constructor(index = 0, previousHash = null, data = 'Genesis block', difficulty = 1) {
        this.index = index;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = new Date();
        this.difficulty = difficulty;
        this.nonce = 0;
        // this.hash = this.generateHash();

        this.mine()
    }

    generateHash() {
      // return sha256(this.index + this.previousHash + JSON.stringify(this.data) + this.timestamp).toString()
      return sha256(this.index + this.previousHash + JSON.stringify(this.data) + this.timestamp + this.nonce).toString()
    }

    mine() {
      this.hash = this.generateHash()

      while (!(/^0*$/.test(this.hash.substring(0, this.difficulty)))) {
        this.nonce+=1;
        let hash = this.generateHash();
        console.log(hash)
        this.hash = hash;
      }
    }
}

module.exports = Block