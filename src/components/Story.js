import React from "react";
import styled from "styled-components";

import hoursAgo from "../utils/hoursAgo";
import Comments from "./Comments";

const Wrapper = styled.div``;

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

const Text = styled.div`
    padding: 15px 0;
    font-size: 0.9em;
`;
Text.displayName = "Text";


class Story extends React.Component {
    componentDidMount() {
        this.props.clearStory();
        this.props.getStory(this.props.id);
    }
    render() {
        const { story } = this.props;
        if(!story)
            return null;
        return <Wrapper>
            <Title href={story.url} target="_blank">{story.title}</Title>
            <Summary>
                <Score>{story.score} points</Score>
                {" | "}
                <User>{story.by}</User>
                {" | "}
                <TimeAdded>{hoursAgo(story.time)}</TimeAdded>
            </Summary>
            <Text dangerouslySetInnerHTML={{__html: story.text}} />
            <Comments comments={story.comments} />
        </Wrapper>;
    }
}

export default Story;
