import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Robot from "./Robot";
const TableTopSquareDiv = styled.div.attrs({
  className: "TableTopSquare"
})`
  background-color: white;
  padding: 10%;
  text-align: center;
`;

export const TableTopSquare = ({ showRobot, direction }) => (
  <TableTopSquareDiv>
    {showRobot && <Robot direction={direction} />}
  </TableTopSquareDiv>
);
TableTopSquare.defaultProps = {
  direction: "east",
  showRobot: false
};
TableTopSquare.propTypes = {
  direction: PropTypes.string.isRequired,
  showRobot: PropTypes.bool
};
export default TableTopSquare;
