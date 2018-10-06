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
  return coordinate.charCodeAt(0) - 65;//You're supposed to do this with arrays, but it was easier just to return ascii values. Apparently there is a very very long video tutorial on how to solve on the forums.
}
