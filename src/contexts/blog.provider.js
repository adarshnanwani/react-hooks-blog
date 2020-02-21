import React, { useReducer } from "react";
import BlogContext from "./blog.context";
import blogReducer from "./blog.reducer";
import {
  initiateRequest,
  completeRequest,
  setPosts,
  setPostById
} from "./blog.actions";

const BlogProvider = props => {
  const initialState = {
    blogPosts: [],
    currentBlogPost: null,
    loading: true
  };

  const [state, dispatch] = useReducer(blogReducer, initialState);

  const getPosts = async () => {
    try {
      dispatch(initiateRequest());
      const res = await fetch("/posts");
      const data = await res.json();
      dispatch(completeRequest());
      dispatch(setPosts(data));
    } catch (err) {
      console.log(err);
    }
  };

  const getPost = async id => {
    try {
      dispatch(initiateRequest());
      const res = await fetch(`posts/${id}`);
      const data = await res.json();
      dispatch(completeRequest());
      dispatch(setPostById(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        ...state,
        getPosts,
        getPost
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
