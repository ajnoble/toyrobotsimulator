import React from "react";
import { connect } from "react-redux";
import {
  rotateRobotLeft,
  rotateRobotRight
} from "components/UiControls/uiReducer";
import RotateUi from "./RotateUi";

export const RotateUiContainer = ({ rotateRobotLeft, rotateRobotRight }) => {
  return (
    <RotateUi
      rotateRobotLeft={rotateRobotLeft}
      rotateRobotRight={rotateRobotRight}
    />
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  rotateRobotLeft: rotateRobotLeft,
  rotateRobotRight: rotateRobotRight
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RotateUiContainer);
