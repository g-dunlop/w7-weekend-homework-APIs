import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar'


const GrauniadContainer = () => {

    const [apiUrl, setApiUrl] = useState("https://content.guardianapis.com/search?page=1&q=&api-key=test");
    const [searchResults, setSearchResults] = ([])

    useEffect(() => {
        getNews();
    }, [apiUrl])



    const getNews = function() {
        fetch(apiUrl)
        //     , {
        //     headers : { 
        //       'content': 'application/json',
        //       'Accept': 'application/json'
        //      }
        //   })
        .then(response => response.json())
        //     {
        //     if (!response.ok){
        //         throw new Error('response not OK');
        //     // } JSON.stringify(res)
        //     } response.json()
        // })
        .then (data => console.log(data))
        .catch(error => console.error('there hass been a prob with fetch', error));
            // res.json())
            // console.log(res));
            // res.json())
        // .then(data => console.log(data.response.results));
    };


    const searchApi = (searchTerm) => {
        let newUrl = `https://content.guardianapis.com/search?page=1&q=${searchTerm}&api-key=test`
        setApiUrl(newUrl)
        // console.log(newUrl)
        // console.log(apiUrl)
    }


    return (
        <div>
            <h2>The GrauniadContainer</h2>
            <SearchBar searchApi={searchApi}/>
        </div>
    )

} 

export default GrauniadContainer;