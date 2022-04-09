import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import ArticleList from '../components/ArticleList';


const GrauniadContainer = () => {

    const [apiUrl, setApiUrl] = useState('https://content.guardianapis.com/search?page=1&q=&api-key=test');
    const [searchResults, setSearchResults] = useState([]);
    const [allSearchResults, setAllSearchResults] = useState([]);
    const [searched, setSearched] = useState("");
    

    useEffect(() => {
       getNews() 
    }, [apiUrl])



    const getNews = function() {
        fetch(apiUrl)
        .then(response => response.json())
        .then (function(data){ 
            setSearchResults(data.response.results)
            setAllSearchResults(data.response)
        
        // .catch(error => console.error('there hass been a prob with fetch', error));
            
    });
}

    const searchApi = (searchTerm) => {
        let newUrl = `https://content.guardianapis.com/search?page=1&q=${searchTerm}&api-key=test`
        setApiUrl(newUrl)
        console.log(newUrl)
        setSearched(searchTerm)
        
    }

    const turnPage = (upOrDown) => {
        let page;
        if (upOrDown === 'higher'){
            page = (allSearchResults.currentPage+1)
        } else (
            page = (allSearchResults.currentPage-1)
        ) 
        setApiUrl(`https://content.guardianapis.com/search?page=${page}&q=${searched}&api-key=test`)
    }

    return (
        <div>
            <h2>The GrauniadContainer</h2>
            <SearchBar searchApi={searchApi}/>
            <ArticleList articles = {searchResults} allArticles={allSearchResults} turnPage={turnPage} />
        </div>
    )

} 

export default GrauniadContainer;