import React, { useContext, useEffect } from "react";
import BlogContext from "../contexts/blog.context";
import PostCard from "./PostCard";

const PostList = () => {
  const { getPosts, blogPosts, loading } = useContext(BlogContext);

  useEffect(() => {
    getPosts();
  }, []);

  console.log(blogPosts);

  return (
    <div className="posts">
      <div className="container">
        <h2>Posts</h2>
        {!loading ? (
          <div className="posts-grid-container">
            {blogPosts.map((post, i) => {
              return (
                <PostCard
                  key={i}
                  title={post.title}
                  image={post.image}
                  author={post.author}
                  date={post.date}
                  id={post.id}
                />
              );
            })}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default PostList;
