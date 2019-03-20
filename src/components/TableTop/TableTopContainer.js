import React from "react";
import { connect } from "react-redux";
import TableTop from "./TableTop";
import { COLS, ROWS } from "../../constants";

export const TableTopContainer = ({ xPos, yPos, direction }) => (
  <TableTop cols={COLS} rows={ROWS} robotPosition={{ xPos, yPos, direction }} />
);

const mapStateToProps = state => ({
  xPos: state.robotPosition.xPos,
  yPos: state.robotPosition.yPos,
  direction: state.robotPosition.direction
});

export default connect(
  mapStateToProps,
  {}
)(TableTopContainer);
