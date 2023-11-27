import React, { useState } from "react";
import "./profile.scss";
import postsData from "../../data/postsData";
import commentsData from "../../data/commentsData";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Posts from "../../components/posts/Posts";
import { useParams } from "react-router-dom";
import Post from "../../components/posts/post/Post";
import Comments from "../../components/posts/comments/Comments";

const Profile = () => {
  const userId = useParams();
  const userDetails = postsData.filter((x) => x.id == userId.id);
  const userData = userDetails[0];


  const [like, setLike] = useState(false);

  const [commentOpen, setCommentOpen] = useState(false);
  return (
    <div className="profile">
      <div className="images">
        <img src={userData.cover} loading="lazy" className="cover" alt="cover" />
        <img
          src={userData.profilePic}
          className="profilePic"
          alt="profile-pic"
          loading="lazy"
        />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="https://facebook.com">
              <FacebookTwoToneIcon />
            </a>
            <a href="https://twitter.com">
              <TwitterIcon />
            </a>
            <a href="https://instagram.com">
              <InstagramIcon />
            </a>
          </div>
          <div className="center">
            <span className="name"> {userData.name} </span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{userData.place}</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>{userData.lan}</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
    <div className="userPosts">
    <div className="container">
        <div className="user">
          <div className="userInfo">
            <img  loading="lazy" src={userData.profilePic} alt="" />
            <div className="details">
             
                <span className="name">{userData.name}</span>
            
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="content">
          <p> {userData.desc} </p>
          <img loading="lazy" src={userData.contentPic} alt="" />
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
    </div>
  );
};

export default Profile;
