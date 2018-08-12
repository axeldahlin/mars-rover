# Ironhack - Mars Rovers Assignment

## Description

This program simulates the movement of 4 mars rovers over a 10 x 10 grid. One of the rovers is the original, the tree others are clones.

The original rovers position is identified by an "O" on the gridded map. This rover is controlled by the user using the arrow keys or by the validateCommand function.

The cloned rovers are each identified by a "C" on the gridded map. They move randomly around the map on their own. But its possible to control them too with the validateCommand function.

## How to controll rovers with validateCommand()

The validateCommand take two parameters like this:

**validateCommand (command, rover);**

The first argument is the command. It should be a string of all the commands you wants to give to the rover. Example:

**validateCommand("rrffflbblfrbb", roverOriginal);**

The second argument should be the rover you want to move. (roverOriginal, roverCloneOne, roverCloneTwo or roverCloneThree)

## Commands

f = "forward": Moves the rover forward one grid cell.

b = "backward": Moves the rover backward one grid cell.

r = "right": Turns the rover 90 degrees clockwise.

l = "left": Turns the rover 90 degrees counterclockwise.
