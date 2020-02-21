import React, { useReducer } from "react";
import BlogContext from "./blog.context";
import blogReducer from "./blog.reducer";
import { SENDING_REQUEST, REQUEST_FINISHED, SET_POSTS } from "./blog.actions";

const BlogProvider = props => {
  const initialState = {
    blogPosts: [],
    currentBlogPost: null,
    loading: true
  };

  const [state, dispatch] = useReducer(blogReducer, initialState);

  const getPosts = async () => {
    try {
      dispatch({ type: SENDING_REQUEST });
      const res = await fetch("/posts");
      const data = await res.json();
      dispatch({ type: REQUEST_FINISHED });
      dispatch({ type: SET_POSTS, payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        ...state,
        getPosts: getPosts
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;