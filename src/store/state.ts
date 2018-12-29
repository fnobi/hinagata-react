export interface IState {
    userId: number;
    userName: string;
    userComment?: string;
}

export const defaultState: IState = {
    userId: 10,
    userName: 'react',
};
