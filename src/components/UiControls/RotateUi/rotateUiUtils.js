import { DIRECTIONS } from "../../../constants";

const getNewDirectionRight = currentDirection => {
  const currentDirectionindex = DIRECTIONS.indexOf(currentDirection);
  return currentDirectionindex + 1 > DIRECTIONS.length - 1
    ? DIRECTIONS[0]
    : DIRECTIONS[currentDirectionindex + 1];
};

const getNewDirectionLeft = currentDirection => {
  const currentDirectionindex = DIRECTIONS.indexOf(currentDirection);
  return currentDirectionindex - 1 < 0
    ? DIRECTIONS[DIRECTIONS.length - 1]
    : DIRECTIONS[currentDirectionindex - 1];
};

const getNewDirection = (rotateDirection, currentDirection) =>
  rotateDirection === "right"
    ? getNewDirectionRight(currentDirection)
    : rotateDirection === "left"
    ? getNewDirectionLeft(currentDirection)
    : currentDirection;

export { getNewDirection };
