const TILE_SIZE = 40;
const WIDTH = 20;
const HEIGHT = 15;

// 0 = empty, 1 = grass
let world = [];

function createWorld() {
  world = [];
  for (let y = 0; y < HEIGHT; y++) {
    let row = [];
    for (let x = 0; x < WIDTH; x++) {
      row.push(0);
    }
    world.push(row);
  }
}
