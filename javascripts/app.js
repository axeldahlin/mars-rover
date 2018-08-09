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
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
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


let positiveDirection;
let axis;

function checkMap (axis, direction) {
  if (typeof map[rover.x][rover.y] === 'undefined') {
    console.log('End of map. Can not move that way.');
    if (positiveDirection) {
      rover[axis]--;
    } else {
      rover[axis]++;
    }
  }
}

function moveForward(rover){
  console.log("moveForward was called")

  switch(rover.direction) {
    case 'N':
      rover.y--;
      positiveDirection = false;
      axis = 'y';
      checkMap(axis, positiveDirection);
      break;
    case 'E':
      rover.x++;
      positiveDirection = true;
      axis = 'x';
      checkMap(axis, positiveDirection);
      break;
    case 'S':
      rover.y++;
      positiveDirection = true;
      axis = 'y';
      checkMap(axis, positiveDirection);
      break;
    case 'W':
      rover.x--;
      positiveDirection = false;
      axis = 'x';
      checkMap(axis, positiveDirection);
      break;
    }
    console.log(`X:${rover.x}, Y:${rover.y}`);
    rover.travelLog.push({x: rover.x, y: rover.y});
    drawBoard(squareSide);
}

function moveBackward(rover){
  console.log("moveBackward was called")
  switch(rover.direction) {
    case 'N':
      rover.y++;
      positiveDirection = true;
      axis = 'y';
      checkMap(axis, positiveDirection);
      break;
    case 'E':
      rover--;
      positiveDirection = false;
      axis = 'x';
      checkMap(axis, positiveDirection);
      break;
    case 'S':
      rover.y--;
      positiveDirection = false;
      axis = 'y';
      checkMap(axis, positiveDirection);
      break;
    case 'W':
      rover.x++;
      positiveDirection = true;
      axis = 'x';
      checkMap(axis, positiveDirection);
      break;
    }
    console.log(`X:${rover.x}, Y:${rover.y}`);
    rover.travelLog.push({x: rover.x, y: rover.y});

    drawBoard(squareSide);
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

