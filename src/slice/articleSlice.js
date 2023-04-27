import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
    name: "article",
    initialState: { 
        id: 0, 
        title: "", 
        content: "", 
        views: 0,
        date: new Date(Date.now()),
        editDate: new Date(Date.now()),

    },
    reducers: {
        registerArticle: (state, {payload: article}) => {
            console.log(article);
        },
        getArticle: (state, { payload: id }) => {
            console.log(id);
        },
        getArticleAsync: (state ,{payload: article}) => {
            console.log(article);
            return {
                ...state,
                id: article.id,
                title: article.title,
                content: article.content,
                date: article.date,
                editDate: article.editDate,
                view: article.views,
            };
        },
    },
});

export const articleReducers = articleSlice.reducer;
export const articleActions = articleSlice.actions;