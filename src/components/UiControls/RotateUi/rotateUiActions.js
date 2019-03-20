export const rotateRobot = rotateDirection => ({
  type: "ui/rotateRobot",
  payload: {
    rotateDirection
  }
});

export const rotateRobotLeft = () => rotateRobot("left");
export const rotateRobotRight = () => rotateRobot("right");
