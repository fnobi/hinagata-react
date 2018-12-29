import { Actions, ActionType } from "./actions";
import { IUser } from "./states/User";

export default (state: IUser, action: Actions): IUser => {
  switch (action.type) {
    case ActionType.SET_USER_NAME:
      return {
        ...state,
        name: action.name
      };
    case ActionType.SET_USER_ID:
      return {
        ...state,
        id: action.id
      };
    default:
      return state;
  }
}
