import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import GNavi from '~/components/GNavi';
import ReactLogo from '~/components/ReactLogo';
import { AppActions, AppActionType } from '~/store/actions';
import { AppState } from '~/store/state';

interface StateProps {
    userName: string;
}

interface DispatchProps {
    rotateUserName: () => AppActions;
}

interface GHeaderProps extends StateProps, DispatchProps {
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

const GHeader: React.SFC<GHeaderProps> = ({
    userName,
    greeting,
    rotateUserName,
}) => (
    <div>
        <ReactLogo />
        <p onClick={rotateUserName}>
            {greeting}, {userName}
        </p>
        <GNavi />
    </div>
);

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(GHeader);
