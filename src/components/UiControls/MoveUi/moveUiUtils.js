import { COLS, ROWS } from "../../../constants";

const getAllowedNorthCoordinate = currentYpos => {
  const newPosition = currentYpos + 1;
  const newPositionAllowed = newPosition <= ROWS - 1;
  return {
    yPos: newPositionAllowed ? newPosition : currentYpos
  };
};

const getAllowedEastCoordinate = currentXpos => {
  const newPosition = currentXpos + 1;
  const newPositionAllowed = newPosition <= COLS - 1;
  return { xPos: newPositionAllowed ? newPosition : currentXpos };
};

const getAllowedSouthCoordinate = currentYpos => {
  const newPosition = currentYpos - 1;
  const newPositionAllowed = newPosition >= 0;
  return { yPos: newPositionAllowed ? newPosition : currentYpos };
};

const getAllowedWestCoordinate = currentXpos => {
  const newPosition = currentXpos - 1;
  const newPositionAllowed = newPosition >= 0;
  return { xPos: newPositionAllowed ? newPosition : currentXpos };
};

export const getAllowedMove = (direction, xPos, yPos) => {
  switch (direction) {
    case "north":
      return getAllowedNorthCoordinate(yPos);
    case "east":
      return getAllowedEastCoordinate(xPos);
    case "south":
      return getAllowedSouthCoordinate(yPos);
    case "west":
      return getAllowedWestCoordinate(xPos);
    default:
      return {};
  }
};
