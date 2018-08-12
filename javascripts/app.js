//Coded by Axel Dahlin
// to controll any rover from the console: validateCommand(command, marsRover)
//Commands:
// f - forward
// b- backward
// l- turn left
// r - turn right

// marsRover Objects Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
  letterOnMap: 'R'
};

let roverCloneOne = {
  direction: "N",
  x: 9,
  y: 0,
  travelLog: [],
  letterOnMap: 'C'
};

let roverCloneTwo = {
  direction: "N",
  x: 9,
  y: 9,
  travelLog: [],
  letterOnMap: 'C'
};

let roverCloneThree = {
  direction: "N",
  x: 0,
  y: 9,
  travelLog: [],
  letterOnMap: 'C'
};

// Map Goes Here
// ======================
const map = [
  ['R', '_', '_', '_', '_', '_', '_', '_', '_', 'C'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['C', '_', '_', '_', '_', '_', '_', '_', '_', 'C']
];

function generateObstacles() {
  for (let i = 0; i < 5; i++) {
  const randomNum1 = Math.floor(Math.random() * 8) + 1;
  const randomNum2 = Math.floor(Math.random() * 8) + 1;
  map[randomNum1][randomNum2] = 'X';
  }
}

generateObstacles();

// ======================
function turnLeft(marsRover){
  console.log("turnLeft was called!");
  switch(marsRover.direction) {
    case 'N':
    marsRover.direction = 'W'
      break;
    case 'E':
    marsRover.direction = 'N'
      break;
    case 'S':
    marsRover.direction = 'E'
      break;
    case 'W':
    marsRover.direction = 'S';
      break;
  }
  console.log(`Direction: ${marsRover.direction}`);
}

function turnRight(marsRover){
  console.log("turnRight was called!");
  switch(marsRover.direction) {
    case 'N':
    marsRover.direction = 'E'
      break;
    case 'E':
    marsRover.direction = 'S'
      break;
    case 'S':
    marsRover.direction = 'W'
      break;
    case 'W':
    marsRover.direction = 'N';
      break;
  }
  console.log(`Direction: ${marsRover.direction}`);
}

function checkEndOfMap(axis, moveDirectionIsNegative, marsRover) {
  if (moveDirectionIsNegative) {
    if (marsRover[axis] - 1 < 0) {
      console.log('End of map.');
      return true;
    } 

  } else {
    if (marsRover[axis] + 1 > 9) {
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
  } else if (nextMove !== '_') {
    console.log('Rover in the way');
    return false;

  } else {
    return true;
  }
}

function moveForward(marsRover){
  let nextMove;
  let axis;
  let moveDirectionIsNegative;
  console.log("moveForward was called");
  map[marsRover.y][marsRover.x] = '_';
  console.log(marsRover);
  switch(marsRover.direction) {
    case 'N':
      //Checks if next move will be outside of map
      axis = 'y';
      moveDirectionIsNegative = true;
      if (checkEndOfMap(axis, moveDirectionIsNegative, marsRover)) break;
      //Checks if next move will colide with obstical
      nextMove = map[marsRover.y - 1][marsRover.x];
      if (checkIfMoveIsFree(nextMove)) {
        marsRover.y--;
      }
      break;
    case 'E':
    //Checks if next move will be outside of map
      axis = 'x';
      moveDirectionIsNegative = false;
      if (checkEndOfMap(axis, moveDirectionIsNegative, marsRover)) break;
      //Checks if next move will colide with obstical
      nextMove = map[marsRover.y][marsRover.x + 1];
      if (checkIfMoveIsFree(nextMove)) {
        marsRover.x++;
      }
      break;
    case 'S':
      //Checks if next move will be outside of map
      axis = 'y';
      moveDirectionIsNegative = false;
      if (checkEndOfMap(axis, moveDirectionIsNegative, marsRover)) break;
      //Checks if next move will colide with obstical
      nextMove = map[marsRover.y + 1][marsRover.x];
      if (checkIfMoveIsFree(nextMove)) {
        marsRover.y++;
      }
      break;
    case 'W':
      //Checks if next move will be outside of map
      moveDirectionIsNegative = true;
      axis = 'x';
      if (checkEndOfMap(axis, moveDirectionIsNegative, marsRover)) break;
      //Checks if next move will colide with obstical
      nextMove = map[marsRover.y][marsRover.x - 1];
      if (checkIfMoveIsFree(nextMove)) {
        marsRover.x--;
      }
      break;
    }
    marsRover.travelLog.push({x: marsRover.x, y: marsRover.y});
    map[marsRover.y][marsRover.x] = marsRover.letterOnMap;
    drawBoard();
}

function moveBackward(marsRover){
  let nextMove;
  let axis;
  let moveDirectionIsNegative;
  console.log("moveBackward was called");
  map[marsRover.y][marsRover.x] = '_';
  console.log(marsRover);
  switch(marsRover.direction) {
    case 'N':
      //Checks if next move will be outside of map
      axis = 'y';
      moveDirectionIsNegative = false;
      if (checkEndOfMap(axis, moveDirectionIsNegative, marsRover)) break;
      //Checks if next move will colide with obstical
      nextMove = map[marsRover.y + 1][marsRover.x];
      if (checkIfMoveIsFree(nextMove)) {
        marsRover.y++;
      }
      break;
    case 'E':
    //Checks if next move will be outside of map
      axis = 'x';
      moveDirectionIsNegative = true;
      if (checkEndOfMap(axis, moveDirectionIsNegative, marsRover)) break;
      //Checks if next move will colide with obstical
      nextMove = map[marsRover.y][marsRover.x - 1];
      if (checkIfMoveIsFree(nextMove)) {
        marsRover.x--;
      }
      break;
    case 'S':
      //Checks if next move will be outside of map
      axis = 'y';
      moveDirectionIsNegative = true;
      if (checkEndOfMap(axis, moveDirectionIsNegative, marsRover)) break;
      //Checks if next move will colide with obstical
      nextMove = map[marsRover.y - 1][marsRover.x];
      if (checkIfMoveIsFree(nextMove)) {
        marsRover.y--
      }
      break;
    case 'W':
      //Checks if next move will be outside of map
      moveDirectionIsNegative = false;
      axis = 'x';
      if (checkEndOfMap(axis, moveDirectionIsNegative, marsRover)) break;
      //Checks if next move will colide with obstical
      nextMove = map[marsRover.y][marsRover.x + 1];
      if (checkIfMoveIsFree(nextMove)) {
        marsRover.x++;
      }
      break;
    }
    marsRover.travelLog.push({x: marsRover.x, y: marsRover.y});
    map[marsRover.y][marsRover.x] = marsRover.letterOnMap
    drawBoard();
}

function handleCommands(commands, marsRover) {
  for (let i = 0; i < commands.length; i++) {
    switch(commands[i]) {
      case 'l':
        turnLeft(marsRover);
        break;
      case 'r':
        turnRight(marsRover);
        break;
      case 'f':
        moveForward(marsRover);
        break;
      case 'b':
        moveBackward(marsRover);
        break;
    }
  }
  console.log(rover.travelLog);
}

function validateCommand(command, marsRover) {
  var patt = /[^f|b|l|r]/i;
  if (!patt.test(command)) {
      handleCommands(command, marsRover);
  } else {
      console.log('That is invalid command.');
  }
}

document.addEventListener('keydown', (e) => {
  switch(e.keyCode) {
    case 37:
     //left
      rover.direction = 'W';
      validateCommand('f', rover);
      break;
    case 38:
      //up
      rover.direction = 'N';
      validateCommand('f', rover);
      break;
    case 39:
      //right
      rover.direction = 'E';
      validateCommand('f', rover);
      break;
    case 40:
      //down
      rover.direction = 'S';
      validateCommand('f', rover);
      break;
  }
});

function moveRoverClone(roverClone) {
  setInterval(function(){
    const randomNumbers = Math.floor(Math.random() * 3);
    const commands = ['r', 'l', 'f', 'b'];
    validateCommand(commands[randomNumbers], roverClone);
   }, 250);

}  

moveRoverClone(roverCloneOne);
moveRoverClone(roverCloneTwo);
moveRoverClone(roverCloneThree);