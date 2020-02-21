import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import BlogContext from "../contexts/blog.context";
import BlogDispatchContext from "../contexts/blogDispatch.context";

const Post = () => {
  const { currentBlogPost } = useContext(BlogContext);
  const { getPost, resetCurrentPost } = useContext(BlogDispatchContext);

  let { id } = useParams();

  useEffect(() => {
    getPost(id);
    //Below code will run before component unmounts
    return () => {
      resetCurrentPost();
    };
  }, [id]);

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
