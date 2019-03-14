import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Robot from "./Robot";
const TableTopSquareDiv = styled.div.attrs({
  className: "TableTopSquare"
})`
  background-color: #0856d3;
  padding: 10%;
  position: relative;
  text-align: center;
`;
const Position = styled.div`
  color: ${props => props.theme.yellow};
  font-family: Arial;
  font-size: 12px;
  padding: 5px;
  position: absolute;
  top: 0;
  left: 0;
`;
export const TableTopSquare = ({ showRobot, direction, position }) => (
  <TableTopSquareDiv>
    {position && (
      <Position>
        x: {position.xPos}
        <br />
        y: {position.yPos}
      </Position>
    )}
    {showRobot && <Robot direction={direction} />}
  </TableTopSquareDiv>
);
TableTopSquare.defaultProps = {
  direction: "east",
  showRobot: false
};
TableTopSquare.propTypes = {
  position: PropTypes.object,
  direction: PropTypes.string.isRequired,
  showRobot: PropTypes.bool
};
export default TableTopSquare;
