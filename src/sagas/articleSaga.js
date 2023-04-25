import { call, put, getContext } from "redux-saga/effects";
import Axios from "axios";
import { articleActions } from "../slice/articleSlice";
import history from "../utils/history";

export function* registerArticleAsync(action,location){
    const data = action.payload;    
    const response = yield Axios.post("http://localhost:4000/board/", data);    
    alert("저장되었습니다.");    

    console.log(response.data.id);
    //history.push(`/article/${response.data.id}`);
    history.push(`/article/${response.data.id}`, response.data.id);
    //history.push({pathname: `/article/${response.data.id}`, data: response.data.id, });
    window.location.reload(false);
    
}