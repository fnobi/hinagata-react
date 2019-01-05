import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import GNavi from '~/components/GNavi';
import ReactLogo from '~/components/ReactLogo';
import { AppAction, AppActionType } from '~/store/actions';
import { AppState } from '~/store/state';

interface StateProps {
    userName: string;
}

interface DispatchProps {
    rotateUserName: () => AppAction;
}

interface Props extends StateProps, DispatchProps {
    greeting: string;
}

const mapStateToProps = (state: AppState): StateProps => ({
    userName: state.userName,
});

const mapDispatchToProps = (dispatch: Dispatch<AppAction>): DispatchProps => ({
    rotateUserName: () =>
        dispatch({
            type: AppActionType.ROTATE_USER_NAME,
        }),
});

const GHeader: React.SFC<Props> = ({ userName, greeting, rotateUserName }) => (
    <div>
        <ReactLogo onClick={rotateUserName} />
        {greeting}, {userName}
        <GNavi />
    </div>
);

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(GHeader);
