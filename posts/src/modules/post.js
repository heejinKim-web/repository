import { call, put, takeLatest } from "redux-saga/effects";
import { fetchPostsApi } from "./api";

export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const fetchPostRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

function* fetchPostsSaga() {
  try {
    const posts = yield call(fetchPostsApi);
    yield put(fetchPostSuccess(posts));
  } catch (error) {
    yield put(fetchPostFailure(error.message));
  }
}

export function* postsSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
