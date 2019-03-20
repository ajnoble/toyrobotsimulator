import { DIRECTIONS } from "../../../constants";

const maxDirectionsIndex = DIRECTIONS.length - 1;

const getNewDirectionRight = currentDirection => {
  const currentDirectionindex = DIRECTIONS.indexOf(currentDirection);
  const nextDirectionAllowed = currentDirectionindex + 1 <= maxDirectionsIndex;
  return {
    direction: nextDirectionAllowed
      ? DIRECTIONS[currentDirectionindex + 1]
      : DIRECTIONS[0]
  };
};

const getNewDirectionLeft = currentDirection => {
  const currentDirectionindex = DIRECTIONS.indexOf(currentDirection);
  const nextDirectionAllowed = currentDirectionindex - 1 >= 0;
  return {
    direction: nextDirectionAllowed
      ? DIRECTIONS[currentDirectionindex - 1]
      : DIRECTIONS[maxDirectionsIndex]
  };
};

const getNewDirection = (rotateDirection, currentDirection) =>
  rotateDirection === "right"
    ? getNewDirectionRight(currentDirection)
    : rotateDirection === "left"
    ? getNewDirectionLeft(currentDirection)
    : currentDirection;

export { getNewDirection };
