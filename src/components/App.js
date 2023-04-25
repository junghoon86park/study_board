import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticlePage from "./views/ArticlePage/ArticlePage";
import BoardPage from "./views/BoardPage/BoardPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import "../App.css";

function App(){
    return (
        <>
            <Routes>
                <Route exact path="/" Component={BoardPage} />
                <Route exact path="/article/:articleId" Component={ArticlePage} />
                <Route exact path="/register" Component={RegisterPage} />
            </Routes>
        </>        
    );
}

export default App;