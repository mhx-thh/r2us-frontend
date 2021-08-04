import React from "react";
import Loading from "../Loading/Loading";

function Posts({ posts, loading }) {
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mt-3">
            {post.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
