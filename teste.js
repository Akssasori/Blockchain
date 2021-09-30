const Block = require('./block')

const block = new Block('7657', '7538496HFHFDH3', '6567383HFKDKDIE', '100');
console.log(block.toString());
console.log(Block.genesis().toString());
const primeiroBloco = Block.mineBlock(Block.genesis(), '$500');
console.log(primeiroBloco.toString());
