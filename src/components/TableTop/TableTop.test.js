import React from "react";
import { shallow, mount } from "enzyme";
import TableTop from "./TableTop";
import TableTopSquare from "./TableTopSquare";

const getSquareWithRobotProps = component =>
  component
    .find(".Robot")
    .closest(TableTopSquare)
    .props();

describe("TableTop", () => {
  it("renders the TableTop", () => {
    const component = shallow(<TableTop />);
    expect(component.exists()).toBe(true);
  });
  it("renders 25 (5x5) squares", () => {
    const component = mount(<TableTop />);
    expect(component.find(".TableTopSquare")).toHaveLength(25);
  });
  it("renders the robot at x=0, y=0", () => {
    const props = { robotPosition: { xPos: 0, yPos: 0 } };
    const component = mount(<TableTop {...props} />);
    expect(getSquareWithRobotProps(component).position).toEqual(
      props.robotPosition
    );
    component.unmount();
  });
  it("renders the robot at x=3, y=3", () => {
    const props = { robotPosition: { xPos: 3, yPos: 3 } };
    const component = mount(<TableTop {...props} />);
    expect(getSquareWithRobotProps(component).position).toEqual(
      props.robotPosition
    );
    component.unmount();
  });
});
