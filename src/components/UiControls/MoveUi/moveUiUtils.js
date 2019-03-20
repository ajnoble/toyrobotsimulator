import { COLS, ROWS } from "../../../constants";

const getAllowedNorthCoordinate = currentYpos => {
  const newPosition = currentYpos + 1;
  if (newPosition > ROWS - 1) return currentYpos;
  return newPosition;
};

const getAllowedEastCoordinate = currentXpos => {
  const newPosition = currentXpos + 1;
  if (newPosition > COLS - 1) return currentXpos;
  return newPosition;
};

const getAllowedSouthCoordinate = currentYpos => {
  const newPosition = currentYpos - 1;
  if (newPosition < 0) return currentYpos;
  return newPosition;
};

const getAllowedWestCoordinate = currentXpos => {
  const newPosition = currentXpos - 1;
  if (newPosition < 0) return currentXpos;
  return newPosition;
};

export const getAllowedMove = (direction, xPos, yPos) => {
  switch (direction) {
    case "north":
      return {
        yPos: getAllowedNorthCoordinate(yPos)
      };
    case "east":
      return {
        xPos: getAllowedEastCoordinate(xPos)
      };
    case "south":
      return {
        yPos: getAllowedSouthCoordinate(yPos)
      };
    case "west":
      return {
        xPos: getAllowedWestCoordinate(xPos)
      };
    default:
      return {};
  }
};
