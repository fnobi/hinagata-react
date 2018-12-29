import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Actions, ActionType } from "~/store/actions";
import { IState } from "~/store/state";
import GHeader from "./GHeader";

interface IStateProps {
  userName: string;
}

interface IDispatchProps {
  rotateUserName: () => Actions;
}

export interface IGHeaderProps extends IStateProps, IDispatchProps {
  greeting: string;
}

const mapStateToProps = (state: IState): IStateProps => ({
  userName: state.userName
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>): IDispatchProps => ({
  rotateUserName: () =>
    dispatch({
      type: ActionType.ROTATE_USER_NAME
    })
});

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(GHeader);
