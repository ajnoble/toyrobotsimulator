import React from "react";
import styled from "styled-components";
import PlaceUiContainer from "./PlaceUi";
import MoveUiContainer from "./MoveUi";
import RotateUiContainer from "./RotateUi";

const UiControlsDiv = styled.div.attrs({
  className: "UiControls"
})`
  @media (max-width: ${props => props.theme.breakPoint}) {
    grid-column: col / span 2;
    text-align: center;
  }
`;

export const UiControls = ({}) => (
  <UiControlsDiv>
    <PlaceUiContainer />
    <MoveUiContainer />
    <RotateUiContainer />
  </UiControlsDiv>
);

export default UiControls;
