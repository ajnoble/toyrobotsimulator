const hasntFilledInAllFields = (xPos, yPos, direction) =>
  !xPos || !yPos || !direction ? true : false;

const invalidXcoordinate = (xPos, maxXpos) =>
  xPos > maxXpos || xPos < 0 ? true : false;

const invalidYcoordinate = (yPos, maxYpos) =>
  yPos > maxYpos || yPos < 0 ? true : false;

export { hasntFilledInAllFields, invalidXcoordinate, invalidYcoordinate };
