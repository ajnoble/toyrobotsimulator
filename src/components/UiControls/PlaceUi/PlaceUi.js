import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  hasntFilledInAllFields,
  invalidXcoordinate,
  invalidYcoordinate
} from "./placeUiUtils";
import {
  PlaceUiWrapper,
  Input,
  DirectionDropdown,
  HiddenWrapper,
  Heading,
  Button,
  ErrorWrapper
} from "./placeUiCss";

export const PlaceUi = ({ rows, cols, placeRobot }) => {
  const [xPos, setXpos] = useState("");
  const [yPos, setYpos] = useState("");
  const [direction, setDirection] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (hasntFilledInAllFields(xPos, yPos, direction)) {
      return setError("Please fill in all fields");
    }
    if (invalidXcoordinate(xPos, cols - 1)) {
      return setError("Invalid x coordinate");
    }
    if (invalidYcoordinate(yPos, rows - 1)) {
      return setError("Invalid y coordinate");
    }
    setError("");
    placeRobot(Number(xPos), Number(yPos), direction);
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
