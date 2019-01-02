export enum AppActionType {
    SET_USER_NAME,
    ROTATE_USER_NAME,
}

export interface SetUserNameAction {
    type: AppActionType.SET_USER_NAME;
    name: string;
}

export interface RotateUserNameAction {
    type: AppActionType.ROTATE_USER_NAME;
}

export type AppActions = SetUserNameAction | RotateUserNameAction;
