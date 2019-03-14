import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
const Button = styled.button`
  background: none};
  font-size: 1em;
  margin: 0;
  padding: 0 5px;
  border: none
`;
const arrowStyle = css`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  cursor: pointer;
`;
const ArrowUp = styled.div`
  ${arrowStyle}
  border-bottom:20px solid #f7c738;
`;
const Heading = styled.h3`
  color: #f7c738;
  text-shadow: 2px 2px MidnightBlue;
`;
const MoveUiWrapper = styled.div`
  text-align: center;
  display: inline-block;
  vertical-align: top;
  padding: 20px;
  grid-column: col / span 1;
`;
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
