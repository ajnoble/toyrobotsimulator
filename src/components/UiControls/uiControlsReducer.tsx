import { rotateRobot } from "./RotateUi/rotateUiActions";
import { moveRobot } from "./MoveUi/moveUiActions";
import { placeRobot } from "./PlaceUi/placeUiActions";
import { getNewDirection } from "./RotateUi/rotateUiUtils";
import { getAllowedMove } from "./MoveUi/moveUiUtils";

const initialState = {
  xPos: "",
  yPos: "",
  direction: ""
};

const updateDirectionState = (state, rotateDirection) => ({
  ...state,
  direction: getNewDirection(rotateDirection, state.direction)
});

const updateXandYstate = state => ({
  ...state,
  ...getAllowedMove(state.direction, state.xPos, state.yPos)
});

const updateXandYandDirectionState = (state, xPos, yPos, direction) => ({
  ...state,
  xPos,
  yPos,
  direction
});

const uiControlsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case rotateRobot().type:
      const { rotateDirection } = action.payload;
      return updateDirectionState(state, rotateDirection);
    case moveRobot().type:
      return updateXandYstate(state);
    case placeRobot().type:
      const { xPos, yPos, direction } = action.payload;
      return updateXandYandDirectionState(state, xPos, yPos, direction);
    default:
      return state;
  }
};

export default uiControlsReducer;