canvas.addEventListener("mousedown", function(e) {

  const rect = canvas.getBoundingClientRect();

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const x = Math.floor(mouseX / TILE_SIZE);
  const y = Math.floor(mouseY / TILE_SIZE);

  if (e.button === 0) {
    // Left click = place block
    world[y][x] = 1;
  }

  if (e.button === 2) {
    // Right click = delete block
    world[y][x] = 0;
  }

  drawWorld();
});

// disable right-click menu
canvas.addEventListener("contextmenu", e => e.preventDefault());
