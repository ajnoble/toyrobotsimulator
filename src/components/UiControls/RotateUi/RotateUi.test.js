import React from "react";
import { shallow, mount } from "enzyme";
import RotateUi from "./RotateUi";

describe("RotateUi", () => {
  const props = { rotateRobotLeft: jest.fn(), rotateRobotRight: jest.fn() };
  it("renders the RotateUi", () => {
    const component = shallow(<RotateUi {...props} />);
    expect(component.exists()).toBe(true);
    component.unmount();
  });
  it("submits the rotateRobotLeft function onClick ", () => {
    const button = mount(<RotateUi {...props} />);
    button
      .find(".RotateButton")
      .at(0)
      .simulate("click");
    expect(props.rotateRobotLeft.mock.calls.length).toEqual(1);
    button.unmount();
  });
  it("submits the rotateRobotRight function onClick ", () => {
    const button = mount(<RotateUi {...props} />);
    button
      .find("button")
      .at(1)
      .simulate("click");
    expect(props.rotateRobotRight.mock.calls.length).toEqual(1);
    button.unmount();
  });
});
