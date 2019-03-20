import * as React from "react";
import { connect } from "react-redux";
import { rotateRobotLeft, rotateRobotRight } from "./rotateUiActions";
import RotateUi from "./RotateUi";

export const RotateUiContainer = ({ rotateRobotLeft, rotateRobotRight }) => (
  <RotateUi
    rotateRobotLeft={rotateRobotLeft}
    rotateRobotRight={rotateRobotRight}
  />
);

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  rotateRobotLeft: rotateRobotLeft,
  rotateRobotRight: rotateRobotRight
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RotateUiContainer);
