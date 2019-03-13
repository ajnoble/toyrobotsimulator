import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Robot from './Robot'
const TableTopSquareDiv = styled.div.attrs({
  className: "TableTopSquare"
})`
  background-color: white;
  padding: 20px;
`;



export const TableTopSquare = ({ showRobot, direction }) => (
   <TableTopSquareDiv>{showRobot && <Robot direction={direction} />}</TableTopSquareDiv>
);
TableTopSquare.defaultProps = {
  showRobot: false
};
TableTopSquare.propTypes = {
  showRobot: PropTypes.bool
};
export default TableTopSquare;
