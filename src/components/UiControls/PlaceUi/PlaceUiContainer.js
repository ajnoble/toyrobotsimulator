import React from "react";
import { connect } from "react-redux";
import { placeRobot } from "../uiReducer";
import PlaceUi from "./PlaceUi";
import { cols, rows } from "constants";

export const PlaceUiContainer = ({ placeRobot }) => (
  <PlaceUi rows={rows} cols={cols} placeRobot={placeRobot} />
);
const mapStateToProps = state => ({
  xPos: state.robotPosition.xPos,
  yPos: state.robotPosition.yPos,
  direction: state.robotPosition.direction
});

const mapDispatchToProps = {
  placeRobot: placeRobot
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceUiContainer);
