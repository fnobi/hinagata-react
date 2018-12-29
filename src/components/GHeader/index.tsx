import { connect } from "react-redux";
import IState from "../../store/state";
import GHeader, { IProps } from "./GHeader";

export default connect(
  (state: IState):IProps => ({ userName: state.userName }),
  dispatch => ({ dispatch }),
  ({ userName }) => ({
    userName
  })
)(GHeader);
