import React, { useContext } from "react";
import "./comments.scss";
import commentsData from "../../../data/commentsData";
import { AuthContext } from "../../../context/AuthContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="comments">
      <div className="userComment">
        <img src={currentUser.profilePic} alt="" />
   
          <input type="text" placeholder="write a comment" />
          <button>Send</button>
        
      </div>
      {commentsData.map((commentsData) => (
        <div key={commentsData.id} className="comment">
          <img src={commentsData.profilePic} alt="" />
          <div className="details">
            <span>{commentsData.name}</span>
            <p>{commentsData.desc}</p>
          </div>
          <span className="date">1 min ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
