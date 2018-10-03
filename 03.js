function countRows() {
  return (GRID.length);
}

function countColumns() {
  return GRID.length ? GRID[0].length : 0;
}

function gridSize() {
  return (countColumns() + " x " + countRows());//TODO: Giff real challenge pls
}
