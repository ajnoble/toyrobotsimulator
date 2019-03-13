import React from "react";
import { connect } from "react-redux";
import { moveRobot } from "components/UiControls/uiReducer";
import MoveUi from "./MoveUi";
import { cols, rows } from "constants";

export const MoveUiContainer = ({ xPos, yPos, moveRobot }) => {
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
