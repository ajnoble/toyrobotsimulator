import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TableTopSquare from "./TableTopSquare";

const TableTopWrapper = styled.div.attrs({
  className: "TableTopWrapper"
})`
  background-color: ${props => props.theme.yellow};
  border: 1px solid ${props => props.theme.yellow};
  box-shadow: 2px 2px ${props => props.theme.darkBlue};
  display: inline-grid;
  grid-column: col / span 1;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  grid-gap: 1px;
  @media (max-width: ${props => props.theme.breakPoint}) {
    order: 2;
    grid-column: col / span 2;
  }
`;

export const TableTop = ({ rows, cols, robotPosition }) => {
  const TableRow = ({ yPos }) =>
    [...Array(cols).keys()].map(index => {
      const squarePostion = { xPos: index % 5, yPos: yPos };
      return (
        <TableTopSquare
          position={squarePostion}
          direction={robotPosition.direction}
          showRobot={
            robotPosition.xPos === squarePostion.xPos &&
            robotPosition.yPos === squarePostion.yPos
          }
          key={`TableTopSquare${index}`}
        />
      );
    });

  return (
    <TableTopWrapper rows={rows} cols={cols}>
      {[...Array(rows).keys()].reverse().map(index => (
        <TableRow key={`TableRow${index}`} yPos={index} />
      ))}
    </TableTopWrapper>
  );
};
TableTop.defaultProps = {
  rows: 5,
  cols: 5,
  robotPosition: { xPos: 0, yPos: 0, direction: "east" }
};
TableTop.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
  robotPosition: PropTypes.object.isRequired
};
export default TableTop;
