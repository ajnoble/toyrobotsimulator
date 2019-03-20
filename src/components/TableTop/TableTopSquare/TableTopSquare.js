import * as React from "react";
import PropTypes from "prop-types";
import Robot from "./Robot";
import { TableTopSquareWrapper, Position } from "./tableTopSquareCss";

export const TableTopSquare = ({ showRobot, direction, position }) => (
  <TableTopSquareWrapper>
    {position && (
      <Position>
        x: {position.xPos}
        <br />
        y: {position.yPos}
      </Position>
    )}
    {showRobot && <Robot direction={direction} />}
  </TableTopSquareWrapper>
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
