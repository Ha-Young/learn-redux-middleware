import * as postsAPI from "../api/posts";

const GET_POSTS = "posts/GET_POSTS";
const GET_POSTS_SUCCESS = "posts/GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "posts/GET_POSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

const posts = () => {
  {
    type: GET_POSTS;
  }
};

const postsSuccess = (posts) => {
  {
    type: GET_POSTS_SUCCESS, posts;
  }
};

const postsError = (error) => {
  {
    type: GET_POSTS_ERROR, error;
  }
};

const post = () => {
  {
    type: GET_POST;
  }
};

const postSuccess = (post) => {
  {
    type: GET_POST_SUCCESS, post;
  }
};

const postError = (error) => {
  {
    type: GET_POST_ERROR, error;
  }
};

export const getPosts = () => async (dispatch) => {
  // 요청이 시작됨
  dispatch(posts());
  // API를 호출
  try {
    const posts = await postsAPI.getPosts();
    // 성공했을 때
    dispatch(postsSuccess(posts));
  } catch (e) {
    // 실패했을 때
    dispatch(postsError(e));
  }
};

export const getPost = () => async (dispatch) => {
  // 요청이 시작됨
  dispatch(post());
  // API를 호출
  try {
    const post = await postsAPI.getPost();
    // 성공했을 때
    dispatch(postSuccess(post));
  } catch (e) {
    // 실패했을 때
    dispatch(postError(e));
  }
};
