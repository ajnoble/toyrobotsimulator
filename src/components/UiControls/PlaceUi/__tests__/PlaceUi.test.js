import React from "react";
import { mount } from "enzyme";
import { render, fireEvent, getByTestId } from "react-testing-library";
import PlaceUi from "../PlaceUi";
import { COLS, ROWS } from "../../../../constants";

describe("PlaceUi", () => {
  const props = { rows: ROWS, cols: COLS, placeRobot: jest.fn() };
  it("renders the PlaceUi", () => {
    const component = mount(<PlaceUi {...props} />);
    expect(component.exists()).toBe(true);
    component.unmount();
  });
  it("renders X input", () => {
    const component = mount(<PlaceUi {...props} />);
    expect(component.find(".PlaceUi__Xinput")).toHaveLength(1);
    component.unmount();
  });
  it("renders Y input", () => {
    const component = mount(<PlaceUi {...props} />);
    expect(component.find(".PlaceUi__Yinput")).toHaveLength(1);
    component.unmount();
  });
  it("renders Direction select", () => {
    const component = mount(<PlaceUi {...props} />);
    expect(component.find(".PlaceUi__DirectionDropdown")).toHaveLength(1);
    component.unmount();
  });
  it("renders Button", () => {
    const component = mount(<PlaceUi {...props} />);
    expect(component.find("button")).toHaveLength(1);
    component.unmount();
  });
  it("changes x, y and direction state when submitting", () => {
    const { container } = render(<PlaceUi {...props} />);
    const xPosInput = getByTestId(container, "PlaceUi__Xinput");
    const yPosInput = getByTestId(container, "PlaceUi__Yinput");
    const directionDropdown = getByTestId(
      container,
      "PlaceUi__DirectionDropdown"
    );
    const currentPlace = getByTestId(container, "PlaceUi__currentPlace");
    const submitButton = getByTestId(container, "PlaceUi__Button");

    fireEvent.change(xPosInput, { target: { value: 1 } });
    fireEvent.change(yPosInput, { target: { value: 1 } });
    fireEvent.change(directionDropdown, { target: { value: "west" } });
    fireEvent.click(submitButton);
    expect(currentPlace.textContent).toEqual("1, 1, west");
  });
});
