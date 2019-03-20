import { getAllowedMove } from "../moveUiUtils";
describe("moveUiUtils: getAllowedMove()", () => {
  describe("wont push robot off the board for each direction", () => {
    it("returns a yPos=4 given that current yPos=4 and direction=north", () => {
      expect(getAllowedMove("north", 0, 4)).toEqual({ yPos: 4 });
    });
    it("returns a yPos=4 given that current xPos=4 and direction=east", () => {
      expect(getAllowedMove("east", 4, 0)).toEqual({ xPos: 4 });
    });
    it("returns a yPos=1 given that current yPos=0 and direction=south", () => {
      expect(getAllowedMove("south", 0, 0)).toEqual({ yPos: 0 });
    });
    it("returns a xPos=0 given that current xPos=0 and direction=west", () => {
      expect(getAllowedMove("west", 0, 0)).toEqual({ xPos: 0 });
    });
  });
  describe("will move robot by one in the correct direction", () => {
    it("returns a yPos=1 given that current yPos=0 and direction=north", () => {
      expect(getAllowedMove("north", 0, 0)).toEqual({ yPos: 1 });
    });

    it("returns a xPos=1 given that current xPos=0 and direction=east", () => {
      expect(getAllowedMove("east", 0, 0)).toEqual({ xPos: 1 });
    });

    it("returns a yPos=4 given that current xPos=4 and direction=south", () => {
      expect(getAllowedMove("south", 0, 4)).toEqual({ yPos: 3 });
    });

    it("returns a xPos=4 given that current xPos=4 and direction=west", () => {
      expect(getAllowedMove("west", 4, 0)).toEqual({ xPos: 3 });
    });
  });
});
