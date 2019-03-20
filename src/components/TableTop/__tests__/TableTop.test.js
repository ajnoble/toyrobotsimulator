import React from "react";
import { shallow, mount } from "enzyme";
import TableTop from "../TableTop";
import TableTopSquare from "../TableTopSquare";
import { ROWS, COLS } from "../../../constants";

const getSquareWithRobotProps = component =>
  component
    .find(".Robot")
    .closest(TableTopSquare)
    .props();

describe("TableTop", () => {
  const defaultProps = {
    rows: ROWS,
    cols: COLS,
    robotPosition: {
      xPos: "",
      yPos: "",
      direction: ""
    }
  };
  it("renders the TableTop", () => {
    const component = shallow(<TableTop {...defaultProps} />);
    expect(component.exists()).toBe(true);
  });
  it("renders 25 (5x5) squares", () => {
    const component = mount(<TableTop {...defaultProps} />);
    expect(component.find(".TableTopSquare")).toHaveLength(25);
  });
  it("renders the robot at x=0, y=0", () => {
    const props = {
      rows: ROWS,
      cols: COLS,
      robotPosition: { xPos: 0, yPos: 0 }
    };
    const component = mount(<TableTop {...props} />);
    expect(getSquareWithRobotProps(component).position).toEqual(
      props.robotPosition
    );
    component.unmount();
  });
  it("renders the robot at x=3, y=3", () => {
    const props = {
      rows: ROWS,
      cols: COLS,
      robotPosition: { xPos: 3, yPos: 3 }
    };
    const component = mount(<TableTop {...props} />);
    expect(getSquareWithRobotProps(component).position).toEqual(
      props.robotPosition
    );
    component.unmount();
  });
});
