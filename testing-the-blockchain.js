const BlockChain = require('./blockchain');

const blockchain = new BlockChain(4);
blockchain.addBlock({amount: 4});
// blockchain.addBlock({amount: 50});

console.log(blockchain.isValid()); // true
blockchain.blocks[1].data.amount = 30000; // ataque malicioso
console.log(blockchain.isValid()); // false

console.log(blockchain.blocks);


// https://medium.com/tableless/como-implementar-o-blockchain-em-javascript-com-menos-de-80-linhas-c2ff4852ee13