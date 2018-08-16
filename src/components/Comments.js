import React from "react";
import styled from "styled-components";

import hoursAgo from "../utils/hoursAgo";

const Wrapper = styled.div``;

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

const Comment = styled.div`
    background: #f2f2f2;
    border-radius: 4px;
    border: solid 1px #e3e3e4;
    margin-bottom: 10px;
`;
Comment.displayName = "Comment";

const Header = styled.div`
    border-radius: 4px 4px 0 0;
    background: #e3e3e4;
    padding: 5px 10px;
`;
Header.displayName = "Header";

const Content = styled.div`
    padding: 0 10px;
`;
Content.displayName = "Content";

const Comments = props => {
    const { comments } = props;
    if(!comments)
        return null;
    return (<Wrapper>
        {comments
            .filter(c => c.text)
            .map(comment => (<Comment key={comment.id}>
                <Header>
                    <User>{comment.by}</User>
                    {" | "}
                    <TimeAdded>{hoursAgo(comment.time)}</TimeAdded>
                </Header>
                <Content>
                    <Text dangerouslySetInnerHTML={{__html: comment.text}} />
                    {comment.comments
                        ? <Comments
                            comments={comment.comments} />
                        : null}
                </Content>
        </Comment>))}
    </Wrapper>);
};

export default Comments;