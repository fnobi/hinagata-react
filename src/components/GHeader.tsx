import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import GNavi from "~/components/GNavi";
import ReactLogo from "~/components/ReactLogo";
import { MEDIA } from '~/constants/styleVariables';
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


const Wrapper = styled.header`
    padding: 20px;
    color: white;
    ${MEDIA.PC} {
        background-color: #222;
    }
    ${MEDIA.SP} {
        background-color: #002;
    }
`;

const GHeader: React.SFC<GHeaderProps> = ({
    userName,
    greeting,
    rotateUserName,
}) => (
    <Wrapper>
        <ReactLogo />
        <p onClick={rotateUserName}>
            {greeting}, {userName}
        </p>
        <GNavi />
    </Wrapper>
);

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(GHeader);
