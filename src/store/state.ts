export interface AppState {
    userId: number;
    userName: string;
    userComment?: string;
}

export const defaultState: AppState = {
    userId: 10,
    userName: 'react',
};
