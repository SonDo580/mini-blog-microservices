import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";

function PostList({ refresh }) {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:4000/posts");
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [refresh]);

  return (
    <div>
      <h1>Posts</h1>
      <div className="d-flex flex-row flex-wrap justify-content-between">
        {Object.values(posts).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default PostList;
