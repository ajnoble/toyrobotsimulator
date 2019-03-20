import * as React from "react";
import { connect } from "react-redux";
import { placeRobot } from "./placeUiActions";
import PlaceUi from "./PlaceUi";
import { COLS, ROWS } from "../../../constants";

export const PlaceUiContainer = ({ placeRobot }) => (
  <PlaceUi rows={ROWS} cols={COLS} placeRobot={placeRobot} />
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
