import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Actions, ActionType } from "../../store/actions";
import IState from "../../store/state";
import GHeader from "./GHeader";

interface IStateProps {
  userName: string;
}

interface IDispatchProps {
  setUserName: (userName: string) => Actions;
}

export interface IGHeaderProps extends IStateProps, IDispatchProps {
  greeting: string,
}

const mapStateToProps = (state: IState): IStateProps => ({
  userName: state.userName
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>): IDispatchProps => ({
  setUserName: (name: string) =>
    dispatch({
      name,
      type: ActionType.SET_USER_NAME
    })
});

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(GHeader);
