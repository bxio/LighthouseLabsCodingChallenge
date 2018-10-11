function countRows(){
  return(GRID.length);  // TODO: Refactor with more oomph..
}

function countColumns() {
  return GRID.length ? GRID[0].length : 0;
}

function gridSize(){
  return(countColumns()+" x "+countRows());
}

function totalCells(){
  return(countRows() * countColumns());
}

function convertColumn(coordinate) {
  return coordinate.toUpperCase().charCodeAt(0) - 65;
}

function lightCell(coordinate){
  return GRID[parseInt(coordinate[1])-1][convertColumn(coordinate)];
}

function isRock(coordinate) {
  return (lightCell(coordinate) == "^");
}

function isCurrent(coordinate) {
  return (lightCell(coordinate) == "~");
}

function isShip(coordinate) {
  return (lightCell(coordinate) == "v");
}

function lightRow(row){
  return GRID[row-1];
}
