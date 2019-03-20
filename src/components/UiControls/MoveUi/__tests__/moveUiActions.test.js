import { moveRobot } from "../moveUiActions";

describe("moveUiActions: moveRobot()", () => {
  it("should create an action to move the robot", () => {
    expect(moveRobot()).toEqual({
      type: "ui/moveRobot"
    });
  });
});
