import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Button = styled.button.attrs({
  className: "RotateButton"
})`
  background: none};
  font-size: 1em;
  margin: 0;
  padding: 0 5px;
  border: none
`;
const arrowStyle = css`
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  cursor: pointer;
`;
const ArrowRight = styled.div`
  ${arrowStyle}
  border-left:20px solid #f7c738;
`;
const ArrowLeft = styled.div`
  ${arrowStyle}
  border-right:20px solid #f7c738;
`;
const Heading = styled.h3`
  text-shadow: 2px 2px MidnightBlue;
  color: #f7c738;
`;
const RotateUiWrapper = styled.div`
  text-align: center;
  display: inline-block;
  vertical-align: top;
  padding: 20px;
`;

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
