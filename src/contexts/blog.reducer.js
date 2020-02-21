import {
  SENDING_REQUEST,
  REQUEST_FINISHED,
  SET_POSTS,
  SET_POST,
  RESET_CURRENT_POST
} from "./blog.actions";

export default function blogReducer(state, action) {
  switch (action.type) {
    case SENDING_REQUEST:
      return { ...state, loading: true };
    case REQUEST_FINISHED:
      return { ...state, loading: false };
    case SET_POSTS:
      return { ...state, blogPosts: action.payload };
    case SET_POST:
      return { ...state, currentBlogPost: action.payload };
    case RESET_CURRENT_POST:
      return { ...state, currentBlogPost: null };
    default:
      return state;
  }
}
