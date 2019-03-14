import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TableTopSquare from "./TableTopSquare";

export const TableTop = ({ rows, cols, robotPosition }) => {
  const TableAndAxisWrapper = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(${cols}, 1fr);
    grid-template-rows: repeat(${rows}, 1fr);
    @media (max-width: 768px) {
      order: 2;
    }
  `;
  const TableTopWrapper = styled.div.attrs({
    className: "TableTopWrapper"
  })`
    grid-column: col / span 1;
    display: inline-grid;
    grid-template-columns: repeat(${cols}, 1fr);
    grid-template-rows: repeat(${rows}, 1fr);
    border: 1px solid #f7c738;
    grid-gap: 1px;
    background-color: #f7c738;
    box-shadow: 2px 2px MidnightBlue;
    @media (max-width: 768px) {
      order: 2;
      grid-column: col / span 2;
    }
  `;
  const YaxisLabelWrapper = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(${rows}, 50px);
    vertical-align: top;
  `;
  const XaxisLabelWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(${cols}, 50px);
    grid-template-rows: repeat(1, 50px);
    margin-left: 50px;
  `;
  const AxisLabel = styled.div`
    padding: 20px;
  `;
  const renderAxisLabels = (AxisWrapper, array) => (
    <AxisWrapper>
      {array.map(index => (
        <AxisLabel key={`${AxisLabel + index}`}>{index}</AxisLabel>
      ))}
    </AxisWrapper>
  );
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
  // {renderAxisLabels(YaxisLabelWrapper, [...Array(cols).keys()].reverse())}
  // {renderAxisLabels(XaxisLabelWrapper, [...Array(cols).keys()])}

  return (
    <TableTopWrapper>
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
