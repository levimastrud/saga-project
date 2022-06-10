import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom';


function Search() {
    const dispatch = useDispatch();
    let results = results = useSelector(store => store.search)
    let [searchInput, setSearchInput] = useState("");
    let imgUrl = [];

    console.log('results are ', results);
    

    useEffect(() => {
    }, [])

    

    function searchButton() {
        console.log('search button', searchInput);


        dispatch({ type: "SEARCH", payload: searchInput })
    }

    return (
        < div id="gallery">
            <div>
                <input value={searchInput} type="text" onChange={(event) => setSearchInput(event.target.value)} />
                <button id="search" onClick={() => searchButton()}>Search</button>
            </div>
               {results ? results.map((image,i) => (
            <div key={i}>
                <img src={image.images.original.url} alt="Giphy" style={{ height: '600px', maxWidth: '600px' }} />
            </div>
               )  ): ''}
        </div>
    )

}


export default Search;