function knightMoves(start, end) {
  const directions = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2],
  ];

  const queue = [];
  const visited = new Set();

  queue.push([start, [start]]);
  visited.add(start.toString());

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    const [x, y] = current;

    if (x === end[0] && y === end[1]) {
      return path;
    }

    for (let [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        const newPos = [newX, newY];

        if (!visited.has(newPos.toString())) {
          visited.add(newPos.toString());
          queue.push([newPos, [...path, newPos]]);
        }
      }
    }
  }
}

module.exports = knightMoves;