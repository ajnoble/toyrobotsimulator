import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export const RotateUi = ({ rotateRobotLeft, rotateRobotRight }) => (
  <React.Fragment>
    <button onClick={() => rotateRobotRight()}>Rotate Right</button>
    <button onClick={() => rotateRobotLeft()}>Rotate Left</button>
  </React.Fragment>
);

RotateUi.propTypes = {
  rotateRobotRight: PropTypes.func.isRequired,
  rotateRobotLeft: PropTypes.func.isRequired
};

export default RotateUi;
