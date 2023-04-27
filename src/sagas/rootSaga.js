import { takeEvery, takeLatest } from "redux-saga/effects";
import { articleActions } from "../slice/articleSlice";
import { getArticleAsync } from "./articleSaga";

const { registerArticle, getArticle } = articleActions;

export default function* rootWatcher() {
  yield takeLatest(registerArticle.type);
  yield takeEvery(getArticle.type, getArticleAsync);
}