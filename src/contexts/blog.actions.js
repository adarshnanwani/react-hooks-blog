export const SENDING_REQUEST = "SENDING_REQUEST";
export const REQUEST_FINISHED = "REQUEST_FINISHED";
export const SET_POSTS = "SET_POSTS";
export const SET_POST = "SET_POST";
export const RESET_CURRENT_POST = "RESET_CURRENT_POST";

export const initiateRequest = () => {
  return { type: SENDING_REQUEST };
};

export const completeRequest = () => {
  return { type: REQUEST_FINISHED };
};

export const setPosts = data => {
  return { type: SET_POSTS, payload: data };
};

export const setPostById = data => {
  return { type: SET_POST, payload: data };
};

export const resetCurrentPost = data => {
  return { type: RESET_CURRENT_POST };
};
