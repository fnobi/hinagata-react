export enum ActionType {
  SET_USER_NAME = 'SET_USER_NAME',
  SET_USER_ID = 'SET_USER_ID',
}

export interface ISetUserNameAction {
  type: ActionType.SET_USER_NAME,
  name: string
}

export interface ISetUserIdAction {
  type: ActionType.SET_USER_ID,
  id: number
}

export type Actions = ISetUserNameAction | ISetUserIdAction;
