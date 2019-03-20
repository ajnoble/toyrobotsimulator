import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  ArrowLeft,
  ArrowRight,
  Heading,
  RotateUiWrapper
} from "./rotateUiCss";

export const RotateUi = ({ rotateRobotLeft, rotateRobotRight }) => (
  <RotateUiWrapper>
    <Heading>Rotate Robot</Heading>
    <Button onClick={() => rotateRobotLeft()}>
      <ArrowLeft />
    </Button>
    <Button onClick={() => rotateRobotRight()}>
      <ArrowRight />
    </Button>
  </RotateUiWrapper>
);

RotateUi.propTypes = {
  rotateRobotRight: PropTypes.func.isRequired,
  rotateRobotLeft: PropTypes.func.isRequired
};

export default RotateUi;
