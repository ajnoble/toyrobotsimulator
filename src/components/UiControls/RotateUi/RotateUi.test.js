import React from "react";
import { shallow } from "enzyme";
import RotateUi from "./RotateUi";

describe("RotateUi", () => {
  const props = { rotateRobotLeft: jest.fn(), rotateRobotRight: jest.fn() };
  it("renders the RotateUi", () => {
    const component = shallow(<RotateUi {...props} />);
    expect(component.exists()).toBe(true);
    component.unmount();
  });
  it("submits the rotateRobotLeft function onClick ", () => {
    const button = shallow(<RotateUi {...props} />)
      .find("button")
      .at(0);
    button.simulate("click");
    expect(props.rotateRobotRight.mock.calls.length).toEqual(1);
  });
  it("submits the rotateRobotLeft function onClick ", () => {
    const button = shallow(<RotateUi {...props} />)
      .find("button")
      .at(1);
    button.simulate("click");
    expect(props.rotateRobotLeft.mock.calls.length).toEqual(1);
  });
});
