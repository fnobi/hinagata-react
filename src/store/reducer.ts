import { Actions, ActionType } from "./actions";
import IState from "./state";

export default (state: IState, action: Actions): IState => {
  switch (action.type) {
    case ActionType.SET_USER_NAME:
      return {
        ...state,
        userName: action.name
      };
    case ActionType.SET_USER_ID:
      return {
        ...state,
        userId: action.id
      };
    default:
      return state;
  }
}
