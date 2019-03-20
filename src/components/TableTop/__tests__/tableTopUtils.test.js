import { convertNumberToArray, coordinatesMatch } from "../tableTopUtils";

describe("tableTopUtils", () => {
  describe("convertNumberToArray()", () => {
    it("returns array given a number", () => {
      const keyedArray = [0, 1, 2, 3, 4];
      expect(convertNumberToArray(5)).toEqual(keyedArray);
    });
  });
  describe("coordinatesMatch()", () => {
    it("returns true given matching coordinates", () => {
      const coordinate = {
        xPos: 1,
        yPos: 1
      };
      expect(coordinatesMatch(coordinate, coordinate)).toEqual(true);
    });
    it("returns false given differt coordinates", () => {
      const coordinate1 = {
        xPos: 1,
        yPos: 1
      };
      const coordinate2 = {
        xPos: 1,
        yPos: 3
      };
      expect(coordinatesMatch(coordinate1, coordinate2)).toEqual(false);
    });
  });
});
