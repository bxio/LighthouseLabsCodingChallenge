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

var howDangerous = (coordinate) => ({"^": 100, "~": 50})[lightCell(coordinate)] || 0; //fancy code is often better, thanks Sam (Update by Sam: I wouldn't use this in production haha)

function safetyReport() {
  return GRID.map(row => row.map(cell => (cell === "^") ? 100 : ((cell === "~") ? 50 : 0)));
}

function calcDistance(pointFrom, pointTo) {

  var xfrom = pointFrom.toUpperCase().charCodeAt(0) - 65;
  var xto = pointTo.toUpperCase().charCodeAt(0) - 65;
  
  var yfrom = pointFrom[1];
  var yto = pointTo[1];

  return Math.sqrt(Math.pow(Math.abs(xfrom - xto), 2) + Math.pow(Math.abs(yfrom - yto), 2)).toFixed(2);
}
