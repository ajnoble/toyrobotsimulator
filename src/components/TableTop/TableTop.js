import React from "react";
import PropTypes from "prop-types";
import TableTopSquare from "./TableTopSquare";
import { TableTopWrapper } from "./tableTopCss";
import { convertNumberToArray, coordinatesMatch } from "./tableTopUtils";

export const TableTop = ({ rows, cols, robotPosition }) => {
  const colsArray = convertNumberToArray(cols);
  const rowsArray = convertNumberToArray(rows);

  const TableRow = ({ yPos }) =>
    colsArray.map(index => {
      const squarePostion = { xPos: index % 5, yPos: yPos };
      return (
        <TableTopSquare
          position={squarePostion}
          direction={robotPosition.direction}
          showRobot={coordinatesMatch(robotPosition, squarePostion)}
          key={`TableTopSquare${index}`}
        />
      );
    });

  return (
    <TableTopWrapper rows={rows} cols={cols}>
      {rowsArray.reverse().map(index => (
        <TableRow key={`TableRow${index}`} yPos={index} />
      ))}
    </TableTopWrapper>
  );
};

TableTop.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
  robotPosition: PropTypes.object.isRequired
};

export default TableTop;
