import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const inputStyle = css`
  padding: 5px;
  margin: 5px;
  border-radius: 3px;
  border: 2px solid ${props => props.theme.yellow};
  color: ${props => props.theme.yellow};
  background: none;
  height: 20px;
  box-shadow: 2px 2px ${props => props.theme.darkBlue};
  ::placeholder {
    color: ${props => props.theme.yellow};
  }
`;
const PlaceUiWrapper = styled.div.attrs({
  className: "PlaceUi"
})`
  text-align: left;
  display: block;
  vertical-align: top;
  padding: 20px 20px 0;
  @media (max-width: ${props => props.theme.breakPoint}) {
    text-align: center;
  }
`;
const Input = styled.input.attrs(({ name }) => ({
  type: "number",
  className: name,
  max: 1,
  maxlength: 1
}))`
  ${inputStyle}
`;
const DirectionDropdown = styled.select.attrs({
  className: "PlaceUi__DirectionDropdown"
})`
  ${inputStyle}
  height: 36px;
`;
const HiddenWrapper = styled.div`
  display: none;
`;
const Heading = styled.h3`
  color: ${props => props.theme.yellow};
  text-shadow: 2px 2px ${props => props.theme.darkBlue};
`;

const Button = styled.button`
  font-size: 1em;
  padding: 5px;
  margin: 5px;
  border: 2px solid ${props => props.theme.yellow};
  border-radius: 3px;
  background: none;
  color: ${props => props.theme.yellow};
  font-family: "Righteous", cursive;
  box-shadow: 2px 2px ${props => props.theme.darkBlue};
  cursor: pointer;
  @media (max-width: ${props => props.theme.breakPoint}) {
    width: 60%;
  }
`;

const ErrorWrapper = styled.div`
  color: ${props => props.theme.yellow};
  padding: 5px 0 0;
`;

export const PlaceUi = ({ rows, cols, placeRobot }) => {
  const [xPos, setXpos] = useState("");
  const [yPos, setYpos] = useState("");
  const [direction, setDirection] = useState("");
  const [error, setError] = useState("");
  const handleClick = () => {
    if (!xPos || !yPos || !direction) {
      return setError("Please fill in all fields");
    }
    if (xPos > cols - 1 || xPos < 0) {
      return setError("Invalid x coordinate");
    }
    if (yPos > rows - 1 || yPos < 0) {
      return setError("Invalid y coordinate");
    }
    setError("");
    placeRobot(xPos, yPos, direction);
  };
  return (
    <PlaceUiWrapper>
      <HiddenWrapper data-testid="PlaceUi__currentPlace">
        {`${xPos + ", " + yPos + ", " + direction}`}
      </HiddenWrapper>
      <Heading>Reset Robot</Heading>
      {error !== "" && <ErrorWrapper>{error}</ErrorWrapper>}
      <div>
        <Input
          data-testid="PlaceUi__Xinput"
          name="PlaceUi__Xinput"
          placeholder={"X coordinate"}
          onChange={e => setXpos(e.currentTarget.value)}
        />
        <Input
          data-testid="PlaceUi__Yinput"
          name="PlaceUi__Yinput"
          placeholder={"Y coordinate"}
          onChange={e => setYpos(e.currentTarget.value)}
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
      </div>
      <Button data-testid="PlaceUi__Button" onClick={() => handleClick()}>
        Place Robot
      </Button>
    </PlaceUiWrapper>
  );
};
PlaceUi.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  placeRobot: PropTypes.func.isRequired
};
export default PlaceUi;
