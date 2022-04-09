import React from 'react';
import Article from './Article'

const ArticleList = ({articles, allArticles, turnPage, filterByDate}) => { 

    const handleClick = (evt) => {
        console.log(evt.target.value)
        turnPage(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        filterByDate(evt.target.dateFrom.value)
    }

    const articleNodes = articles.map((article, index) => {
        return <Article article={article} key={index}/>
    })

    return(
        <div>
            <h2>searchResults</h2>
            <p>Articles matching your search: {allArticles.total}</p>
            <p> Page {allArticles.currentPage} of {allArticles.pages}
            <button onClick={handleClick} value="lower" >Previous Page</button>
            <button onClick={handleClick} value="higher" >Next Page</button>
            </p>
            <p>Filter By Date From:</p>
            <form onSubmit={handleSubmit}>
                    <input type="date" name="dateFrom"></input>
                    <input type="submit"></input>
                </form>

            <h2>I'm the Article List</h2>
            <ul>
                {articleNodes}
            </ul>
        </div>
    )
}

export default ArticleList;