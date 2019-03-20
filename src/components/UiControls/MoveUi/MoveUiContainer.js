import React from "react";
import { connect } from "react-redux";
import { moveRobot } from "./moveUiActions";
import MoveUi from "./MoveUi";

export const MoveUiContainer = ({ moveRobot }) => (
  <MoveUi moveRobot={moveRobot} />
);

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  moveRobot: moveRobot
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveUiContainer);
