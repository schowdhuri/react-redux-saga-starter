import React from "react";

import App from "../components/AppContainer";
import Story from "../components/StoryContainer";

const StoryPage = props => {
    return (<App>
        <Story id={props.match.params.storyId} />
    </App>);
};

export default StoryPage;
