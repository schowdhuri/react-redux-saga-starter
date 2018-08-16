import React from "react";
// import { hot } from "react-hot-loader";

import * as STORY_TYPES from "../constants/storyTypes";
import App from "../components/AppContainer";
import List from "../components/ListContainer";

const HomePage = props => {
    const { storyType } = props.match.params;
    let selectedType = STORY_TYPES.TOP;
    Object.keys(STORY_TYPES).forEach(key => {
        if(STORY_TYPES[key].id === storyType)
            selectedType = STORY_TYPES[key];
    });
    return (<App storyType={selectedType}>
        <List storyType={selectedType} />
    </App>);
};

// export default hot(module)(HomePage);
export default HomePage;
