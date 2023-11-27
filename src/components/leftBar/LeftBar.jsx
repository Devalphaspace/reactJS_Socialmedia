import React, { useContext } from "react";
import "./leftbar.scss";
import User from "../../assets/images/login3.jpg";
import Friends from "../../assets/images/1.png";
import Group from "../../assets/images/2.png";
import Market from "../../assets/images/3.png";
import Watch from "../../assets/images/4.png";
import Memories from "../../assets/images/5.png";
import Events from "../../assets/images/6.png";
import Gaming from "../../assets/images/7.png";
import Gallery from "../../assets/images/8.png";
import Videos from "../../assets/images/9.png";
import Messages from "../../assets/images/10.png";
import Tutorials from "../../assets/images/11.png";
import Courses from "../../assets/images/12.png";
import Fund from "../../assets/images/13.png";
import { AuthContext } from "../../context/AuthContext";

const LeftBar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Group} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fund</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
