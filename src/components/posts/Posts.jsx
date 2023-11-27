import React from "react";
import "./posts.scss";
import postsData from "../../data/postsData";
import Post from "./post/Post";

const Posts = () => {
  return (
    <div className="posts">
      {
      postsData.map((posts) => (
       <Post posts={posts} key={posts.id}/>
      ))
      }
    </div>
  );
};

export default Posts;
