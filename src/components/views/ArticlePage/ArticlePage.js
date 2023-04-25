import React from "react";
import { useParams,useNavigate } from "react-router-dom";


const ArticlePage = () => {    
    
    const { articleId } = useParams();
    console.log(articleId)
    return (
        <div>
            ArticlePage - id: {articleId}
        </div>
    )    
}

export default ArticlePage;