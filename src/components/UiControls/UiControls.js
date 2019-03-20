import * as React from "react";
import PlaceUiContainer from "./PlaceUi";
import MoveUiContainer from "./MoveUi";
import RotateUiContainer from "./RotateUi";
import { UiControlsWrapper } from "./uiControlsCss";

export const UiControls = () => (
  <UiControlsWrapper>
    <PlaceUiContainer />
    <MoveUiContainer />
    <RotateUiContainer />
  </UiControlsWrapper>
);

export default UiControls;
