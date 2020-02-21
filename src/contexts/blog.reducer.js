import { SENDING_REQUEST, REQUEST_FINISHED, SET_POSTS } from "./blog.actions";

export default function blogReducer(state, action) {
  switch (action.type) {
    case SENDING_REQUEST:
      return { ...state, loading: true };
    case REQUEST_FINISHED:
      return { ...state, loading: false };
    case SET_POSTS:
      return { ...state, blogPosts: action.payload };
    default:
      return state;
  }
}
