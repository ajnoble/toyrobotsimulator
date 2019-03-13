import React from "react";
import { shallow, mount } from "enzyme";
import UiControls from "./UiControls";

describe("UiControls", () => {
  it("renders the UiControls", () => {
    const component = shallow(<UiControls />);
    expect(component.exists()).toBe(true);
  });
  //   it("renders 25 (5x5) squares", () => {
  //     const component = mount(<TableTop />);
  //     expect(component.find(".TableTopSquare")).toHaveLength(25);
  //     component.unmount();
  //   });
  //   it("renders the robot in first square", () => {
  //     const component = mount(<TableTop />);
  //     expect(
  //       component
  //         .find(".TableTopSquare")
  //         .first()
  //         .find(".Robot")
  //     ).toHaveLength(1);
  //   });
  //   it("renders the robot in seventh square", () => {
  //     const props = { robotPosition: 6 };
  //     const component = mount(<TableTop {...props} />);
  //     expect(
  //       component
  //         .find(".TableTopSquare")
  //         .at(props.robotPosition)
  //         .find(".Robot")
  //     ).toHaveLength(1);
  //   });
});
