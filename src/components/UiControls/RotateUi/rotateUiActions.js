const rotateRobot = rotateDirection => ({
  type: "ui/rotateRobot",
  payload: {
    rotateDirection
  }
});

const rotateRobotLeft = () => rotateRobot("left");
const rotateRobotRight = () => rotateRobot("right");

export { rotateRobot, rotateRobotLeft, rotateRobotRight };
