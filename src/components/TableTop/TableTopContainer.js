import React from "react";
import { connect } from "react-redux";
import TableTop from "./TableTop";
import { cols, rows } from "constants";
export const TableTopContainer = ({ rows, cols, xPos, yPos, direction }) => {
  console.log(xPos, yPos, direction);
  return <TableTop robotPosition={{ xPos, yPos, direction }} />;
};

const mapStateToProps = state => ({
  xPos: state.robotPosition.xPos,
  yPos: state.robotPosition.yPos,
  direction: state.robotPosition.direction
});

export default connect(
  mapStateToProps,
  {}
)(TableTopContainer);
