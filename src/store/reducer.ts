import { Actions, ActionType } from "./actions";
import IState from "./state";

export default (state: IState, action: Actions): IState => {
  switch (action.type) {
    case ActionType.SET_USER_NAME:
      return {
        ...state,
        userName: action.name
      };
    case ActionType.ROTATE_USER_NAME:
      return {
        ...state,
        userName: state.userName.slice(1) + state.userName.slice(0, 1)
      };
    default:
      return state;
  }
}
