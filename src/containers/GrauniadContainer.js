import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import ArticleList from '../components/ArticleList';


const GrauniadContainer = () => {

    const [apiUrl, setApiUrl] = useState('https://content.guardianapis.com/search?page=1&q=&api-key=test');
    const [searchResults, setSearchResults] = useState([]);
    const [allSearchResults, setAllSearchResults] = useState([]);
    const [searched, setSearched] = useState("");
    const [thePage, setPage] = useState(1);
    const [dateFromm, setDateFrom] = useState("2000-01-01");
    

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
            if (allSearchResults.currentPage === allSearchResults.pages){
                return
            }
            page = (allSearchResults.currentPage+1)
        } else {
            if (allSearchResults.currentPage > 1){
            page = (allSearchResults.currentPage-1)
            } else {return}
        }
        setApiUrl(`https://content.guardianapis.com/search?page=${page}&q=${searched}&from-date=${dateFromm}&api-key=test`)
        setPage(page)
        // console.log(thePage)
    }

    const filterByDate = (dateFrom) => {
        // console.log(dateFrom)
        setApiUrl(`https://content.guardianapis.com/search?page=${thePage}&q=${searched}&from-date=${dateFrom}&api-key=test`)
        setDateFrom(dateFrom)
        // console.log(dateFromm)
    }

    return (
        <div>
            <h2>The GrauniadContainer</h2>
            <SearchBar searchApi={searchApi}/>
            <ArticleList articles = {searchResults} allArticles={allSearchResults} turnPage={turnPage} filterByDate={filterByDate} />
        </div>
    )

} 

export default GrauniadContainer;