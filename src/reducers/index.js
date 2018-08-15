import { combineReducers } from "redux";

import loading from "./loading";
import stories from "./stories";
import story from "./story";

export default combineReducers({
    loading,
    stories,
    story
});
