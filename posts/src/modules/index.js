import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import postReducer, { postsSaga } from "./post";

const rootReducer = combineReducers({
  postReducer,
});

export function* rootSaga() {
  yield all([postsSaga()]);
}

export default rootReducer;
