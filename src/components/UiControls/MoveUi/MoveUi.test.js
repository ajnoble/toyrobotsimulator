import React from "react";
import { shallow } from "enzyme";
import MoveUi from "./MoveUi";

describe("MoveUi", () => {
  const props = { moveRobot: jest.fn() };
  it("renders the MoveUi", () => {
    const component = shallow(<MoveUi {...props} />);
    expect(component.exists()).toBe(true);
    component.unmount();
  });
  it("submits the moveRobot function onClick ", () => {
    const button = shallow(<MoveUi {...props} />).find("button");
    button.simulate("click");
    expect(props.moveRobot.mock.calls.length).toEqual(1);
  });
});
