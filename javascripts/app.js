// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};


// Map Goes Here
// ======================
const map = [
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', 'X', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_']
];




// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'E':
      rover.direction = 'N'
      break;
    case 'S':
      rover.direction = 'E'
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }
  console.log(`Direction: ${rover.direction}`);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
  console.log(`Direction: ${rover.direction}`);
  
}






function checkEndOfMap(axis, moveDirectionIsNegative) {
  if (moveDirectionIsNegative) {
    if (rover[axis] - 1 < 0) {
      console.log('End of map.');
      return true;
    } 

  } else {
    if (rover[axis] + 1 > 9) {
      console.log('End of map.');
      return true;
    } 
  }
  return false;
}

function checkIfMoveIsFree(nextMove) {
  console.log('NextMove: ' + nextMove);
  if (nextMove === 'X') {
    console.log('Obstcal in the way');
    return false;
  } else {
    return true;
  }
}





function moveForward(rover){
  let nextMove;
  let axis;
  let moveDirectionIsNegative;
  console.log("moveForward was called");
  map[rover.y][rover.x] = '_';
  switch(rover.direction) {
    case 'N':
      //Checks if next move will be outside of map
      axis = 'y';
      moveDirectionIsNegative = true;
      if (checkEndOfMap(axis, moveDirectionIsNegative)) break;
      //Checks if next move will colide with obstical
      nextMove = map[rover.y - 1][rover.x];
      if (checkIfMoveIsFree(nextMove)) {
        rover.y--;
      }
      break;
    case 'E':
    //Checks if next move will be outside of map
      axis = 'x';
      moveDirectionIsNegative = false;
      if (checkEndOfMap(axis, moveDirectionIsNegative)) break;
      //Checks if next move will colide with obstical
      nextMove = map[rover.y][rover.x + 1];
      if (checkIfMoveIsFree(nextMove)) {
        rover.x++;
      }
      break;
    case 'S':
      //Checks if next move will be outside of map
      axis = 'y';
      moveDirectionIsNegative = false;
      if (checkEndOfMap(axis, moveDirectionIsNegative)) break;
      //Checks if next move will colide with obstical
      nextMove = map[rover.y + 1][rover.x];
      if (checkIfMoveIsFree(nextMove)) {
        rover.y++;
      }
      break;
    case 'W':
      //Checks if next move will be outside of map
      moveDirectionIsNegative = true;
      axis = 'x';
      if (checkEndOfMap(axis, moveDirectionIsNegative)) break;
      //Checks if next move will colide with obstical
      nextMove = map[rover.y][rover.x - 1];
      if (checkIfMoveIsFree(nextMove)) {
        rover.x--;
      }
      break;
    }
    rover.travelLog.push({x: rover.x, y: rover.y});
    map[rover.y][rover.x] = 'R';
    console.log(`X:${rover.x}, Y:${rover.y}`);
    console.log(map);
}

function moveBackward(rover){
  console.log("moveBackward was called")
  
  switch(rover.direction) {
    case 'N':
      rover.y++;
      break;
    case 'E':
      rover--;
      break;
    case 'S':
      rover.y--;
      break;
    case 'W':
      rover.x++;
      break;
    }
    checkMap();
    console.log(`X:${rover.x}, Y:${rover.y}`);
    rover.travelLog.push({x: rover.x, y: rover.y});
}

function handleCommands(commands) {
  for (let i = 0; i < commands.length; i++) {
    switch(commands[i]) {
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'f':
        moveForward(rover);
        break;
      case 'b':
        moveBackward(rover);
        break;
    }
  }
  console.log(rover.travelLog);
}

function validateCommand(command) {
  var patt = /[^f|b|l|r]/i;
  if (!patt.test(command)) {
      handleCommands(command);
  } else {
      console.log('That is invalid command.')
  }
}



document.addEventListener('keydown', (e) => {
  switch(e.keyCode) {
    case 37:
     //left
     rover.direction = 'W';
      validateCommand('f');
      break;
    case 38:
      //up
      rover.direction = 'N';
      validateCommand('f');
      break;
    case 39:
      //right
      rover.direction = 'E';
      validateCommand('f');
      break;
    case 40:
      //down
      rover.direction = 'S';
      validateCommand('f');
      break;
  }
});