import React from "react";
import PostCard from "./PostCard";

const MinorPost = () => {
  return (
    <div className="my-5 md:my-0">
      <div className="grid md:grid-cols-2 gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default MinorPost;
