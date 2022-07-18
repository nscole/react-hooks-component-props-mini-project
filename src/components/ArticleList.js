import React from "react";
import Article from "./Article.js";


function ArticleList ({posts}) {
    const ArticleArray = posts.map((post) => (
        <Article
            key={posts.id}
            title={posts.title}
            date={posts.date}
            preview={posts.preview}
            minutes={posts.minutes}
            />
    ))
    return <main>
        {ArticleArray}
    </main> 
}


export default ArticleList;
