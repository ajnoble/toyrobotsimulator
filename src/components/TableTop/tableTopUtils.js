const convertNumberToArray = number => [...Array(number).keys()];

const coordinatesMatch = (coordinate1, coordinate2) =>
  coordinate1.xPos === coordinate2.xPos &&
  coordinate1.yPos === coordinate2.yPos;

export { convertNumberToArray, coordinatesMatch };
