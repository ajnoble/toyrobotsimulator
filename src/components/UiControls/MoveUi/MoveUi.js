import * as React from "react";
import PropTypes from "prop-types";
import { MoveUiWrapper, Heading, Button, ArrowUp } from "./moveUiCss";

export const MoveUi = ({ moveRobot }) => (
  <MoveUiWrapper>
    <Heading>Advance Robot</Heading>
    <Button onClick={() => moveRobot()}>
      <ArrowUp />
    </Button>
  </MoveUiWrapper>
);

MoveUi.propTypes = {
  moveRobot: PropTypes.func.isRequired
};

export default MoveUi;
