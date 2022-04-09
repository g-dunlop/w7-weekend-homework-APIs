import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import ArticleList from '../components/ArticleList';


const GrauniadContainer = () => {

    const [apiUrl, setApiUrl] = useState('https://content.guardianapis.com/search?page=1&q=&api-key=test');
    const [searchResults, setSearchResults] = useState([]);
    const [allSearchResults, setAllSearchResults] = useState([]);

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
    }


    return (
        <div>
            <h2>The GrauniadContainer</h2>
            <SearchBar searchApi={searchApi}/>
            <ArticleList articles = {searchResults} allArticles={allSearchResults} />
        </div>
    )

} 

export default GrauniadContainer;