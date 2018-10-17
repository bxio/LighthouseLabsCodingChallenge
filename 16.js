function countRows() {
  return (GRID.length);  // TODO: Refactor with more oomph..
}

function countColumns() {
  return GRID.length ? GRID[0].length : 0;
}

function gridSize() {
  return (countColumns() + " x " + countRows());
}

function totalCells() {
  return (countRows() * countColumns());
}

function convertColumn(coordinate) {
  return coordinate.toUpperCase().charCodeAt(0) - 65;
}

function lightCell(coordinate) {
  return GRID[parseInt(coordinate[1]) - 1][convertColumn(coordinate)] ? GRID[parseInt(coordinate[1]) - 1][convertColumn(coordinate)] : false;
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

function lightRow(row) {
  return GRID[row - 1];
}

function lightColumn(column) {
  return GRID.map(function (value, index) { return value[convertColumn(column)]; });
}

function allRocks() {
    var results = [];
    GRID.map((row, rowIndex) => {
        row.map((colItem, colIndex) => {
            if (colItem === "^" ) {
                results.push(String.fromCharCode(colIndex + 65) + (rowIndex + 1));
                //don't forget your offsets people
            }
            return;
        });
    })
    return results;
}

function allCurrents() {
    var results = [];
    GRID.map((row, rowIndex) => {
        row.map((colItem, colIndex) => {
            if (colItem === "~" ) {
                results.push(String.fromCharCode(colIndex + 65) + (rowIndex + 1));
                //don't forget your offsets people
            }
            return;
        });
    })
    return results;
}

function allShips() {
    var results = [];
    GRID.map((row, rowIndex) => {
        row.map((colItem, colIndex) => {
            if (colItem === "v" ) {
                results.push(String.fromCharCode(colIndex + 65) + (rowIndex + 1));
                //don't forget your offsets people
            }
            return;
        });
    })
    return results;
}

function firstRock(){
  return allRocks()[0];
}

function firstCurrent(){//lol, let's get one more day out of the question
  return allCurrents()[0];
}
