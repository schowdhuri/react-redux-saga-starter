import React from "react";
import styled from "styled-components";

import hoursAgo from "../utils/hoursAgo";

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

const Text = styled.p`
    padding: 15px;
    font-size: 0.9em;
`;
Text.displayName = "Text";

const Comment = styled.div`
    background: #f2f2f2;
    border-radius: 4px;
    margin-bottom: 10px;
`;
Comment.displayName = "Comment";

const Comments = styled.div`

`;
Comments.displayName = "Comments";

const CommentMeta = styled.div`
    border-radius: 4px 4px 0 0;
    background: #e3e3e4;
    padding: 5px 15px;
`;
CommentMeta.displayName = "CommentMeta";

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
            <Text>{story.text}</Text>
            <Comments>
                {story.comments.map(comment => (<Comment key={comment.id}>
                    <CommentMeta>
                        <User>{comment.by}</User>
                        {" | "}
                        <TimeAdded>{hoursAgo(comment.time)}</TimeAdded>
                    </CommentMeta>
                    <Text>{comment.text}</Text>
                </Comment>))}
            </Comments>
        </Wrapper>;
    }
}

export default Story;
