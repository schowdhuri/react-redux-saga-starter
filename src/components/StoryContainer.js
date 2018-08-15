import { connect } from "react-redux";

import * as actions from "../actions";
import { getStory } from "../selectors";
import Story from "./Story";

const mapStateToProps = state => ({
    story: getStory(state)
});

const mapDispatchToProps = dispatch => ({
    clearStory() {
        dispatch(actions.clearStory());
    },
    getStory(id) {
        dispatch(actions.getStory(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Story);
