import React from "react";
import { shallow } from "enzyme";
import UiControls from "../UiControls";

describe("UiControls", () => {
  it("renders the UiControls", () => {
    const component = shallow(<UiControls />);
    expect(component.exists()).toBe(true);
  });
});
