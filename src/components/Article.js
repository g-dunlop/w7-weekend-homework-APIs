import React from 'react';

const Article = ({article}) => {



    return(
        <div>
            <h4><a href={article.webUrl}>{article.webTitle}</a></h4>
            <p>{article.sectionName}</p>
            <p>{article.webPublicationDate}</p>
            <p></p>
            {/* <p>{article.apiUrl}</p> */}

        </div>
    )
}

export default Article;