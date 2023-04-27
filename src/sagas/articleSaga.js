import { put } from "redux-saga/effects";
import Axios from "axios";
import { articleActions } from "../slice/articleSlice";
import history from "../utils/history";

export function* getArticleAsync(action) {
  const id = action.payload;

  const response = yield Axios.get(`http://localhost:4000/board/${id}`);

  console.log(response.data);

  yield put(articleActions.getArticleAsync(response.data));
}
