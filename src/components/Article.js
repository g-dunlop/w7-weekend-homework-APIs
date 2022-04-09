import React from 'react';

const Article = ({article}) => {



    return(
        <div>
            <h4>{article.webTitle}</h4>
            <p>{article.sectionName}</p>
            <p>{article.webUrl}</p>
            <p>{article.apiUrl}</p>

        </div>
    )
}

export default Article;