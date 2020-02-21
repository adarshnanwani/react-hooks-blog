import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import BlogContext from "../contexts/blog.context";

const Post = props => {
  const { getPost, currentBlogPost } = useContext(BlogContext);

  let { id } = useParams();

  useEffect(() => {
    getPost(id);
  }, [id]);

  console.log(currentBlogPost);
  return (
    <div>
      {currentBlogPost ? (
        <>
          <div
            className="post-image"
            style={{
              backgroundImage: `url('${currentBlogPost.image}')`,
              width: "100%",
              height: "300px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative"
            }}
          ></div>
          <div className="post-content">
            <h2>{currentBlogPost.title}</h2>
            <p>{currentBlogPost.content}</p>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Post;
