import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export const MoveUi = ({ moveRobot }) => (
  <button onClick={() => moveRobot()}>Move Robot</button>
);

MoveUi.propTypes = {
  moveRobot: PropTypes.func.isRequired
};

export default MoveUi;
