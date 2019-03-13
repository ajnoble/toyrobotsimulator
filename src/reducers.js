import { combineReducers } from "redux";
import { uiReducer } from "components/UiControls/uiReducer";

export default combineReducers({
  robotPosition: uiReducer
});
