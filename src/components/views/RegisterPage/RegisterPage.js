import React, { useState } from "react";
import RegisterOrEdit from "./Sections/RegisterOrEdit";
import { useDispatch, useSelector } from "react-redux";
import { articleActions } from "../../../slice/articleSlice";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const { views, date, editDate } = useSelector((state) => ({
        views: state.articleReducers.views,
        date: state.articleReducers.date,
        editDate: "",
    }));

    const [TitleValue, setTitleValue] = useState("");
    const [ContentValue, setContentValue] = useState("");
    const [IsForUpdate, setIsForUpdate] = useState(false);

    const onTitleChange = (event) => {        
        setTitleValue(event.currentTarget.value);        
    };
    console.log(TitleValue);
    
    const onContentChange = (event) => {
      setContentValue(event.currentTarget.value);
    };
    console.log(ContentValue);
    
    const onSubmitArticle = (event) => {
        event.preventDefault();
        if(
            TitleValue === "" || 
            TitleValue === null || 
            TitleValue === undefined
        ){
            alert("제목을 작성하십시요.");
            return false;
        }
        if(
            ContentValue === "" ||
            ContentValue === null ||
            ContentValue === undefined
        ){
            alert("내용을 작성하십시요.");
            return false;
        }
        const article = { title : TitleValue, content: ContentValue, views: views, date: date, editDate:editDate, };
        dispatch(articleActions.registerArticle(article));
    };

    return (
        <>
            <RegisterOrEdit titleValue={TitleValue} contentValue={ContentValue} handleTitleChange={onTitleChange} handleContentChange={onContentChange} handleSubmit={onSubmitArticle} updateRequest={IsForUpdate} />
        </>
    )    
}

export default RegisterPage;