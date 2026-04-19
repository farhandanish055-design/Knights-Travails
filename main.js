const knightMoves = require("./knightMoves");

const path = knightMoves([0, 0], [4, 5]);

console.log(`You made it in ${path.length - 1} moves! Here's your path:`);

path.forEach(pos => {
  console.log(pos);
});