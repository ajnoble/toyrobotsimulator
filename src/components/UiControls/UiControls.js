import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PlaceUiContainer from "./PlaceUi";
import MoveUiContainer from "./MoveUi";
import RotateUiContainer from "./RotateUi";
const UiControlsDiv = styled.div.attrs({
  className: "UiControls"
})``;

export const UiControls = ({}) => (
  <UiControlsDiv>
    <PlaceUiContainer />
    <MoveUiContainer />
    <RotateUiContainer />
  </UiControlsDiv>
);
UiControls.defaultProps = {};
UiControls.propTypes = {};
export default UiControls;
