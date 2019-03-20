import { combineReducers } from "redux";
import {
  uiControlsReducer,
  IRobotPosition
} from "components/UiControls/uiControlsReducer";

export interface IAppState {
  robotPosition: IRobotPosition;
}
export default combineReducers<IAppState>({
  robotPosition: uiControlsReducer
});
