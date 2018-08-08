// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

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
    default:
        console.log('That is not a valid command.')
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
    default:
        console.log('That is not a valid command.')
  }
  console.log(`Direction: ${rover.direction}`);
  
}

function moveForward(rover){
  console.log("moveForward was called")
  switch(rover.direction) {
    case 'N':
      if (rover.y === 0) {
        console.log('End of map. Can not move that way.');
        break;
      } else {
        rover.y--;
      }
      break;
    case 'E':
      if (rover.x === 10) {
        console.log('End of map. Can not move that way.');
        break;
      } else {
        rover.x++;
      }
      break;
    case 'S':
      if (rover.y === 10) {
        console.log('End of map. Can not move that way.');
        break;
      } else {
        rover.y++;
      }
      break;
    case 'W':
      if (rover.x === 0) {
        console.log('End of map. Can not move that way.');
        break;
        } else {
          rover.x--;
        }
      break;
    }

    console.log(`X:${rover.x}, Y:${rover.y}`);
    rover.travelLog.push({x: rover.x, y: rover.y});
}

function moveBackward(rover){
  console.log("moveBackward was called")
  switch(rover.direction) {
    case 'N':
      if (rover.y === 10) {
        console.log('End of map. Can not move that way.');
        break;
      } else {
        rover.y++;
      }
      break;
    case 'E':
      if (rover.x === 0) {
        console.log('End of map. Can not move that way.');
        break;
      } else {
        rover.x--;
      }
      break;
    case 'S':
      if (rover.y === 0) {
        console.log('End of map. Can not move that way.');
        break;
      } else {
        rover.y--;
      }
      break;
    case 'W':
      if (rover.x === 10) {
        console.log('End of map. Can not move that way.');
        break;
        } else {
          rover.x++;
        }
      break;
    }

    console.log(`X:${rover.x}, Y:${rover.y}`);
    rover.travelLog.push({x: rover.x, y: rover.y});
}




function handleCommands(commands) {
  for (let i = 0; i < commands.length; i++) { 
    if(string.indexOf() !== -1;)

  }
  

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
      default:  
        console.log('That is an invalid command.');
    }
  }
  console.log(rover.travelLog);
}

