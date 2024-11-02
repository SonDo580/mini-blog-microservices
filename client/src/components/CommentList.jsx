import React, { useEffect, useState } from "react";
import axios from 'axios';

function CommentList({ postId, refreshComments }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `http://localhost:4001/posts/${postId}/comments`
        );
        setComments(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [refreshComments]);

  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
