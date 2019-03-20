export const placeRobot = (xPos, yPos, direction) => ({
  type: "ui/placeRobot",
  payload: {
    xPos,
    yPos,
    direction
  }
});
