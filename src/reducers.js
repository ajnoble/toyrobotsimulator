import { combineReducers } from "redux";
import uiControlsReducer from "components/UiControls/uiControlsReducer";

export default combineReducers({
  robotPosition: uiControlsReducer
});
