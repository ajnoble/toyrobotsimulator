import React from "react";
import { connect } from "react-redux";
import TableTop from "./TableTop";

export const TableTopContainer = ({ xPos, yPos, direction }) => {
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
