import Comment from "./Comment";

const commentData = [
    {
        name: "사람1", 
        comment: "댓글1"
    }, 
    {
        name: "사람2", 
        comment: "댓글2"
    }, 
    {
        name: "사람3", 
        comment: "댓글3"
    }, 
    {
        name: "사람4", 
        comment: "댓글4"
    }
];

function CommentList() {
    return (
        <>
            {commentData.map(item => {
                return <Comment name={item.name} comment={item.comment} />;
            })}
        </>
    );
}

export default CommentList;