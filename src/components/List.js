import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import hoursAgo from "../utils/hoursAgo";

const Wrapper = styled.div``;
const Story = styled.div`
    background: #f2f2f2;
    border-radius: 2px;
    margin-bottom: 2px;
    padding: 10px 15px;
    &:hover {
        background: #efefef;
    }
`;
Story.displayName = "Story";

const Title = styled.a`
    display: block
`;
Title.displayName = "Title";

const Summary = styled.div`
    font-size: 0.9em;
    margin-top: 5px;
    color: #999;
`;
Summary.displayName = Summary;

const Score = styled.div`
    display: inline-block;
`;
Score.displayName = "Score";

const User = styled.div`
    display: inline-block;
`;
User.displayName = "User";

const TimeAdded = styled.div`
    display: inline-block;
`;
TimeAdded.displayName = "TimeAdded";

const Discuss = styled(Link)`
    display: inline-block;
`;
Discuss.displayName = "Discuss";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storyType: null
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.storyType !== prevState.storyType) {
            return { storyType: nextProps.storyType };
        } else {
            return null;
        }
    }
    componentDidMount() {
        this.props.getIndex(this.state.storyType);
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.storyType !== this.state.storyType)
            this.props.getIndex(this.state.storyType);
    }
    render() {
        const { stories } = this.props;
        return <Wrapper>
            {stories.map(story => <Story key={story.id}>
                <Title href={story.url} target="_blank">{story.title}</Title>
                <Summary>
                    <Score>{story.score} points</Score>
                    <User>{story.by}</User>
                    {" | "}
                    <TimeAdded>{hoursAgo(story.time)}</TimeAdded>
                    {" | "}
                    <Discuss to={`/story/${story.id}`}>Discuss</Discuss>
                </Summary>
            </Story>)}
        </Wrapper>;
    }
}

export default List;
