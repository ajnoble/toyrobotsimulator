import React from "react";
import { connect } from "react-redux";
import { moveRobot } from "./moveUiActions";
import MoveUi from "./MoveUi";

export const MoveUiContainer = ({ moveRobot }) => {
  return <MoveUi moveRobot={moveRobot} />;
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  moveRobot: moveRobot
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveUiContainer);
