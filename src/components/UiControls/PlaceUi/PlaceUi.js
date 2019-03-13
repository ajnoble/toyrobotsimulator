import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const inputStyle = css`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
  border: 2px solid royalblue;
  color: royalblue;
`;
const PlaceUiWrapper = styled.div.attrs({
  className: "PlaceUi"
})``;
const Input = styled.input.attrs(({ name }) => ({
  type: "text",
  className: name
}))`
  ${inputStyle}
`;
const DirectionDropdown = styled.select.attrs({
  className: "PlaceUi__DirectionDropdown"
})`
  ${inputStyle}
`;

export const PlaceUi = ({ rows, cols, placeRobot }) => {
  const [xPos, setXpos] = useState(null);
  const [yPos, setYpos] = useState(null);
  const [direction, setDirection] = useState("");
  const [error, setError] = useState("");
  const handleClick = () => {
    if (!xPos || !yPos || !direction) {
      return setError("Please fill in all fields");
    }
    if (xPos > cols || xPos < 0) {
      return setError("Invalid x coordinate");
    }
    if (yPos > rows || yPos < 0) {
      return setError("Invalid y coordinate");
    }
    setError();
    placeRobot(xPos, yPos, direction);
  };
  return (
    <PlaceUiWrapper>
      <div data-testid="PlaceUi__currentPlace">
        {xPos &&
          yPos &&
          direction &&
          `${xPos + ", " + yPos + ", " + direction}`}
      </div>
      <div>
        <Input
          data-testid="PlaceUi__Xinput"
          name="PlaceUi__Xinput"
          placeholder="X"
          onChange={e => setXpos(Number(e.currentTarget.value))}
        />
        <Input
          data-testid="PlaceUi__Yinput"
          name="PlaceUi__Yinput"
          placeholder="Y"
          onChange={e => setYpos(Number(e.currentTarget.value))}
        />
        <DirectionDropdown
          data-testid="PlaceUi__DirectionDropdown"
          onChange={e => setDirection(e.currentTarget.value)}
        >
          <option value="">Direction</option>
          <option value="north">NORTH</option>
          <option value="east">EAST</option>
          <option value="south">SOUTH</option>
          <option value="west">WEST</option>
        </DirectionDropdown>
        <button data-testid="PlaceUi__Button" onClick={() => handleClick()}>
          Place Robot
        </button>
        {error !== "" && <div>{error}</div>}
      </div>
    </PlaceUiWrapper>
  );
};
PlaceUi.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  placeRobot: PropTypes.func.isRequired
};
export default PlaceUi;
