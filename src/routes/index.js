import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../utils/history";
import HomePage from "../pages/Home";
import StoryPage from "../pages/Story";

export default () => (<Router history={history}>
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/:storyType" exact component={HomePage} />
        <Route path="/story/:storyId" exact component={StoryPage} />
    </Switch>
</Router>);
