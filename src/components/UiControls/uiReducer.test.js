import {
  uiReducer,
  placeRobot,
  moveRobot,
  rotateRobotLeft,
  rotateRobotRight
} from "./uiReducer";
const initialState = { xPos: 0, yPos: 0, direction: "east" };
describe("uiReducer", () => {
  it("returns the initial state given no action", () => {
    expect(uiReducer(initialState, undefined)).toEqual(initialState);
  });
  it("should update position, given initial state and placeRobot(1, 3, 'north') action", () => {
    expect(uiReducer(initialState, placeRobot(1, 3, "north"))).toEqual({
      ...initialState,
      xPos: 1,
      yPos: 3,
      direction: "north"
    });
  });
  it("should update position, given initial state and moveRobot() action", () => {
    expect(uiReducer(initialState, moveRobot())).toEqual({
      ...initialState,
      xPos: 1
    });
  });
  it("should not update position, given xPos is 4 and robot is facing east and moveRobot() action", () => {
    const updatedState = { xPos: 4, yPos: 0, direction: "east" };
    expect(uiReducer(updatedState, moveRobot())).toEqual({
      ...updatedState,
      xPos: 4
    });
  });
  it('should update direction to south, given initial state and rotateRobot("right") action', () => {
    expect(uiReducer(initialState, rotateRobotRight())).toEqual({
      ...initialState,
      direction: "south"
    });
  });
  it('should update direction to south, given initial state and rotateRobot("left") action', () => {
    expect(uiReducer(initialState, rotateRobotLeft())).toEqual({
      ...initialState,
      direction: "north"
    });
  });
});
