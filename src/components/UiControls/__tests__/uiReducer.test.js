import uiControlsReducer from "../uiControlsReducer";
import { rotateRobotLeft, rotateRobotRight } from "../RotateUi/rotateUiActions";
import { moveRobot } from "../MoveUi/moveUiActions";
import { placeRobot } from "../PlaceUi/placeUiActions";

const initialState = { xPos: 0, yPos: 0, direction: "east" };

describe("uiControlsReducer", () => {
  it("returns the initial state given no action", () => {
    expect(uiControlsReducer(initialState, undefined)).toEqual(initialState);
  });
  it("should update position, given initial state and placeRobot(1, 3, 'north') action", () => {
    expect(uiControlsReducer(initialState, placeRobot(1, 3, "north"))).toEqual({
      ...initialState,
      xPos: 1,
      yPos: 3,
      direction: "north"
    });
  });
  it("should update position, given initial state and moveRobot() action", () => {
    expect(uiControlsReducer(initialState, moveRobot())).toEqual({
      ...initialState,
      xPos: 1
    });
  });
  it("should not update position, given xPos is 4 and robot is facing east and moveRobot() action", () => {
    const updatedState = { xPos: 4, yPos: 0, direction: "east" };
    expect(uiControlsReducer(updatedState, moveRobot())).toEqual({
      ...updatedState,
      xPos: 4
    });
  });
  it('should update direction to south, given initial state and rotateRobot("right") action', () => {
    expect(uiControlsReducer(initialState, rotateRobotRight())).toEqual({
      ...initialState,
      direction: "south"
    });
  });
  it('should update direction to south, given initial state and rotateRobot("left") action', () => {
    expect(uiControlsReducer(initialState, rotateRobotLeft())).toEqual({
      ...initialState,
      direction: "north"
    });
  });
});
