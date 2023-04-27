import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { articleActions } from "../../../slice/articleSlice";

function ArticlePage({ match, location }) {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(match.params)
    dispatch(articleActions.getArticle(match.params.articleId));
  }, [match.params.articleId]);

  const { id, title, content } = useSelector((state) => ({
    id: state.articleReducers.id,
    title: state.articleReducers.title,
    content: state.articleReducers.content,
  }));
  const date = useSelector((state) => state.articleReducers.date);
  const views = useSelector((state) => state.articleReducers.views);

  return (
    <div>
      ArticlePage
      <br />
      글번호 : {id}
      <br />
      제목 : {title}
      <br />
      내용: {content}
      <br />
      {/* {date} */}
      <br />
      조회수: {views}
    </div>
  );
}


export default ArticlePage;