import {
  hasntFilledInAllFields,
  invalidXcoordinate,
  invalidYcoordinate
} from "../placeUiUtils";

describe("placeiUtils", () => {
  describe("hasntFilledInAllFields()", () => {
    describe("hasnt filled in all fields", () => {
      it("returns true", () => {
        expect(hasntFilledInAllFields("", "", "")).toEqual(true);
      });
    });
    describe("has filled in all fields", () => {
      it("returns false", () => {
        expect(hasntFilledInAllFields("0", "0", "east")).toEqual(false);
      });
    });
  });
  describe("invalidXcoordinate()", () => {
    it("returns true given xPos=5 and maxXpos=4", () => {
      const xPos = 5;
      const maxXpos = 4;
      expect(invalidXcoordinate(xPos, maxXpos)).toEqual(true);
    });
    it("returns false given xPos=2 and maxXpos=4", () => {
      const xPos = 2;
      const maxXpos = 4;
      expect(invalidXcoordinate(xPos, maxXpos)).toEqual(false);
    });
  });
  describe("invalidYcoordinate()", () => {
    it("returns true given yPos=5 and maxYpos=4", () => {
      const yPos = 5;
      const maxYpos = 4;
      expect(invalidYcoordinate(yPos, maxYpos)).toEqual(true);
    });
    it("returns false given yPos=2 and maxYpos=4", () => {
      const yPos = 2;
      const maxYpos = 4;
      expect(invalidYcoordinate(yPos, maxYpos)).toEqual(false);
    });
  });
});
