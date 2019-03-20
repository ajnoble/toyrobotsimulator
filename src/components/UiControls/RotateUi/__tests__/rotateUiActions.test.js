import { rotateRobot } from "../rotateUiActions";
describe("rotateUiActions: rotateRobot()", () => {
  it("should create an action to rotate the robot right", () => {
    const payload = {
      rotateDirection: "right"
    };
    expect(rotateRobot(payload.rotateDirection)).toEqual({
      type: "ui/rotateRobot",
      payload: {
        ...payload
      }
    });
  });
  it("should create an action to rotate the robot left", () => {
    const payload = {
      rotateDirection: "left"
    };
    expect(rotateRobot(payload.rotateDirection)).toEqual({
      type: "ui/rotateRobot",
      payload: {
        ...payload
      }
    });
  });
});
