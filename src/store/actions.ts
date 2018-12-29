export enum ActionType {
  SET_USER_NAME = 'SET_USER_NAME',
  ROTATE_USER_NAME = 'ROTATE_USER_NAME',
}

export interface ISetUserNameAction {
  type: ActionType.SET_USER_NAME,
  name: string
}

export interface IRotateUserNameAction {
  type: ActionType.ROTATE_USER_NAME
}

export type Actions = ISetUserNameAction | IRotateUserNameAction;
