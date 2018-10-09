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

function convertColumn(coordinate){
  return coordinate.charCodeAt(0) - 65;
}

function lightCell(coordinate){
  return GRID[parseInt(coordinate[1])-1][convertColumn(coordinate)];
}

function isRock(coordinate){
  return true ? lightCell(coordinate) : "^";
}
