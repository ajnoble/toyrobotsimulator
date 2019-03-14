import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Robot from "./Robot";
const TableTopSquareDiv = styled.div.attrs({
  className: "TableTopSquare"
})`
  background-color: #0856d3;
  padding: 10%;
  text-align: center;
  position: relative;
`;
const Position = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  color: #f7c738;
  padding: 5px;
  font-family: Arial;
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
