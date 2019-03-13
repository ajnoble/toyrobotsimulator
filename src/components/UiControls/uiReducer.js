import { cols, rows, directions } from "../../constants";
const placeRobot = (xPos, yPos, direction) => ({
  type: "ui/placeRobot",
  xPos,
  yPos,
  direction
});
const moveRobot = () => ({
  type: "ui/moveRobot"
});
const rotateRobot = rotateDirection => ({
  type: "ui/rotateRobot",
  rotateDirection
});
const rotateRobotLeft = () => rotateRobot("left");
const rotateRobotRight = () => rotateRobot("right");
const initialState = {
  xPos: 0,
  yPos: 0,
  direction: "east"
};

const uiReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case rotateRobot().type:
      const currentDirectionIndex = directions.indexOf(state.direction);
      let newDirectionIndex;
      switch (action.rotateDirection) {
        case "right":
          newDirectionIndex =
            currentDirectionIndex + 1 > directions.length - 1
              ? 0
              : currentDirectionIndex + 1;
          return {
            ...state,
            direction: directions[newDirectionIndex]
          };
        case "left":
          newDirectionIndex =
            currentDirectionIndex - 1 < 0
              ? directions.length - 1
              : currentDirectionIndex - 1;
          return {
            ...state,
            direction: directions[newDirectionIndex]
          };
        default:
          return state;
      }
    case moveRobot().type:
      let newPos;
      switch (state.direction) {
        case "north":
          newPos = state.yPos + 1;
          if (newPos > rows - 1) return state;
          return {
            ...state,
            yPos: newPos
          };
        case "east":
          newPos = state.xPos + 1;
          if (newPos > cols - 1) return state;
          return {
            ...state,
            xPos: newPos
          };
        case "south":
          newPos = state.yPos - 1;
          if (newPos < 0) return state;
          return {
            ...state,
            yPos: newPos
          };
        case "west":
          newPos = state.xPos - 1;
          if (newPos < 0) return state;
          return {
            ...state,
            xPos: newPos
          };
        default:
          return state;
      }
    case placeRobot().type:
      return {
        ...state,
        xPos: Number(action.xPos),
        yPos: Number(action.yPos),
        direction: action.direction
      };
    default:
      return state;
  }
};
export { uiReducer, placeRobot, moveRobot, rotateRobotLeft, rotateRobotRight };
