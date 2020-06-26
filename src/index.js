import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments"> 
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today 4:45pm"
                    commentText="WOw"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today 9:45am"
                    commentText="yeah very cool dude" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex"
                    timeAgo="Yesterday 12:45pm" 
                    commentText="actually not that cool....." 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));