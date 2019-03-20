import { getNewDirection } from "../rotateUiUtils";

describe("rotateUiUtils: getNewDirection()", () => {
  describe("rotate direction is right", () => {
    const direction = "right";
    it("returns east given current direction north", () => {
      expect(getNewDirection(direction, "north")).toEqual("east");
    });
    it("returns south given current direction east", () => {
      expect(getNewDirection(direction, "east")).toEqual("south");
    });
    it("returns west given current direction south", () => {
      expect(getNewDirection(direction, "south")).toEqual("west");
    });
    it("returns north given current direction west", () => {
      expect(getNewDirection(direction, "west")).toEqual("north");
    });
  });
  describe("rotate direction is left", () => {
    const direction = "left";
    it("returns west given current direction north", () => {
      expect(getNewDirection(direction, "north")).toEqual("west");
    });
    it("returns south given current direction west", () => {
      expect(getNewDirection(direction, "west")).toEqual("south");
    });
    it("returns east given current direction south", () => {
      expect(getNewDirection(direction, "south")).toEqual("east");
    });
    it("returns north given current direction east", () => {
      expect(getNewDirection(direction, "east")).toEqual("north");
    });
  });
});
