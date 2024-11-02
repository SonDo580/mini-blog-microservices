import React, { useState } from "react";
import CreateComment from "./CreateComment";
import CommentList from "./CommentList";

function PostCard({ post }) {
  const [refreshComments, setRefreshComments] = useState(false);

  const onCommentCreated = () => {
    setRefreshComments(!refreshComments);
  };

  return (
    <div className="card" style={{ width: "30%", marginBottom: "20px" }}>
      <div className="card-body">
        <h3>{post.title}</h3>
        <CommentList postId={post.id} refreshComments={refreshComments} />
        <CreateComment postId={post.id} onCommentCreated={onCommentCreated} />
      </div>
    </div>
  );
}

export default PostCard;
