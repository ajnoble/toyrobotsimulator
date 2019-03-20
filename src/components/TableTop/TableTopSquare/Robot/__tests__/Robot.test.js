import React from "react";
import { shallow } from "enzyme";
import Robot from "../Robot";

describe("Robot", () => {
  it("renders the Robot", () => {
    const component = shallow(<Robot direction={"west"} />);
    expect(component.exists()).toBe(true);
  });
});
