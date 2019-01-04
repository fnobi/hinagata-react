import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import GHeader from '~/components/GHeader';
import { AppActions, AppActionType } from '~/store/actions';
import { AppState } from '~/store/state';

interface StateProps {
    userName: string;
}

interface DispatchProps {
    rotateUserName: () => AppActions;
}

export interface GHeaderProps extends StateProps, DispatchProps {
    greeting: string;
}

const mapStateToProps = (state: AppState): StateProps => ({
    userName: state.userName,
});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps => ({
    rotateUserName: () =>
        dispatch({
            type: AppActionType.ROTATE_USER_NAME,
        }),
});

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(GHeader);
