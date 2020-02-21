import React from "react";

const PostCard = ({ title, author, date, id, image }) => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${image})`
        }}
      ></div>
      <div className="card-info">
        <div className="card-title">
          <p>{title}</p>
        </div>
        <div className="card-author-section">
          <p>{author}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
