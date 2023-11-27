import React, { useContext } from "react";
import "./story.scss";
import storyData from "../../data/storyData";
import { AuthContext } from "../../context/AuthContext";

const Story = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="stories">
      <div className="user">
        <img loading="lazy" src={currentUser.profilePic} alt="" />
        <button>+</button>
        <span>{currentUser.name}</span>
      </div>

      {storyData.map((storyData) => (
        <div key={storyData.id} className="story">
          <img loading="lazy" src={storyData.img} alt="" />
          <span>{storyData.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Story;
