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
  return(countRows() * countColumns()); // TODO: Try not to cheat anymore
}
