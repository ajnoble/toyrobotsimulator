import React from "react";
import { shallow, mount } from "enzyme";
import TableTopSquare from "../TableTopSquare";

describe("TableTopSquare", () => {
  it("renders the TableTopSquare", () => {
    const component = shallow(<TableTopSquare />);
    expect(component.exists()).toBe(true);
  });
  it("does not render the robot by default", () => {
    const component = mount(<TableTopSquare />);
    expect(component.find(".TableTopSquare").find(".Robot")).toHaveLength(0);
  });
  it("renders the Robot when showRobot is true", () => {
    const component = mount(<TableTopSquare showRobot={true} />);
    expect(component.find(".TableTopSquare").find(".Robot")).toHaveLength(1);
  });
});
