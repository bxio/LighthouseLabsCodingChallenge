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

function firstCurrent(){
  return allCurrents()[0];
}

function shipReport(){//Transport Canada doesn't seem to be asking for a lot.
  return [allShips()[0],allShips()[allShips().length-1]];
}

function percentageReport(){
 return [(100*allRocks().length/totalCells()).toFixed(2),(100*allCurrents().length/totalCells()).toFixed(2)];
  //corner cases, what corner cases? ¯\_(ツ)_/¯
}

//var howDangerous = (coordinate) => ({"^": 100, "~": 50})[lightCell(coordinate)] || 0;
//Roger sam, not using dangerous code in production.

function dangerValue(value){
  if (value === "^"){
    return 100;
  } else if (value === "~"){
    return 50;
  } else {
    return 0; 
  }
}

function howDangerous(coordinate){
  return dangerValue(lightCell(coordinate));
}


function safetyReport(){
  return GRID.map(row => {
    return row.map(column => dangerValue(column));
  });
}

