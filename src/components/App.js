import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
    Nav,
    Navbar,
    NavItem
} from "react-bootstrap";

import LoadingOverlay from "./LoadingOverlay";

const Wrapper = styled.div``;

const App = props => {
    return <Wrapper>
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">HN Reader</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem componentClass={Link} href="/" to="/">
                    Top
                </NavItem>
                <NavItem componentClass={Link} href="/best" to="/best">
                    Best
                </NavItem>
                <NavItem componentClass={Link} href="/new" to="/new">
                    New
                </NavItem>
                <NavItem componentClass={Link} href="/show" to="/show">
                    Show HN
                </NavItem>
                <NavItem componentClass={Link} href="/ask" to="/ask">
                    Ask HN
                </NavItem>
                <NavItem componentClass={Link} href="/jobs" to="/jobs">
                    Jobs
                </NavItem>
            </Nav>
        </Navbar>
        <div className="container">
            {props.children}
        </div>
        <LoadingOverlay loading={props.isLoading} />
    </Wrapper>;
};

export default App;
