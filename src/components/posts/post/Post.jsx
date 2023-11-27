import React, { useState } from "react";
import "./post.scss";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";

const Post = ({ posts }) => {
  const liked = true;

  const [like, setLike] = useState(false);

  const [commentOpen, setCommentOpen] = useState(false);

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={posts.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${posts.id}`}
                style={{ color: "inherit" }}
              >
                <span className="name">{posts.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="content">
          <p> {posts.desc} </p>
          <img src={posts.contentPic} alt="" />
        </div>
        <div className="actions">
          <div className="item" onClick={() => setLike(!like)}>
            {like ? (
              <FavoriteOutlinedIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
            <span>12 Likes</span>
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            <span>2 Comments</span>
          </div>
          <div className="item">
            <ShareOutlinedIcon />
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
