import * as React from "react";
import { shallow, mount } from "enzyme";
import MoveUi from "../MoveUi";

describe("moveUiUtils", () => {
  const props = { moveRobot: jest.fn() };
  it("renders the MoveUi", () => {
    const component = shallow(<MoveUi {...props} />);
    expect(component.exists()).toBe(true);
    component.unmount();
  });
  it("submits the moveRobot function onClick ", () => {
    const button = mount(<MoveUi {...props} />);
    button.find("button").simulate("click");
    expect(props.moveRobot.mock.calls.length).toEqual(1);
    button.unmount();
  });
});
