import { combineReducers } from "redux";
import news from "./news";

const rootReducer = combineReducers({
  newsList: news,
});

export default rootReducer;
