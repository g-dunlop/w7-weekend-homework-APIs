import React from 'react';
import Article from './Article'

const ArticleList = ({articles, allArticles}) => { 


    const articleNodes = articles.map((article, index) => {
        return <Article article={article} key={index}/>
    })

    return(
        <div>
            <h2>searchResults</h2>
            <p>Articles matching your search: {allArticles.total}</p>
            <p> Page {allArticles.currentPage} of {allArticles.pages}
            <button value="lower" >Previous Page</button>
            <button value="higher" >Next Page</button>
            </p>


            <h2>I'm the Article List</h2>
            <ul>
                {articleNodes}
            </ul>
        </div>
    )
}

export default ArticleList;