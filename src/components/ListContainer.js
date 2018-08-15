import { connect } from "react-redux";

import * as actions from "../actions";
import { getIndex } from "../selectors";
import List from "./List";

const mapStateToProps = state => ({
    stories: getIndex(state)
});

const mapDispatchToProps = dispatch => ({
    getIndex() {
        dispatch(actions.getIndex());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
