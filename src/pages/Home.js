import React from "react";
// import { hot } from "react-hot-loader";

import App from "../components/AppContainer";
import List from "../components/ListContainer";

const HomePage = () => {
    return (<App>
        <List />
    </App>);
};

// export default hot(module)(HomePage);
export default HomePage;
