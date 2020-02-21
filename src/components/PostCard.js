import React from "react";
import { Link } from "react-router-dom";

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
          <Link to={`/${id}`}>
            <p>{title}</p>
          </Link>
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
