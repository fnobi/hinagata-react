import { AppAction, AppActionType } from '~/store/actions';
import { AppState } from '~/store/state';

export default (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case AppActionType.SET_USER_NAME:
            return {
                ...state,
                userName: action.name,
            };
        case AppActionType.ROTATE_USER_NAME:
            return {
                ...state,
                userName: state.userName.slice(1) + state.userName.slice(0, 1),
            };
        default:
            return state;
    }
};
