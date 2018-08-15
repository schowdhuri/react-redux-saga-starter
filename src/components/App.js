import React from "react";
import styled from "styled-components";

import LoadingOverlay from "./LoadingOverlay";

const Wrapper = styled.div`
    padding: 20px;
`;

const App = props => {
    return <Wrapper>
        {props.children}
        <LoadingOverlay loading={props.isLoading} />
    </Wrapper>;
};

export default App;
