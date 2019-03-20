import { placeRobot } from "../placeUiActions";
describe("placeUiActions: placeRobot()", () => {
  it("should create an action to place the robot", () => {
    const payload = {
      xPos: 0,
      yPos: 0,
      direction: "east"
    };
    expect(placeRobot(payload.xPos, payload.yPos, payload.direction)).toEqual({
      type: "ui/placeRobot",
      payload: {
        ...payload
      }
    });
  });
});
