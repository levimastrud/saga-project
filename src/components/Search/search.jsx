import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom';


function Search() {
    const dispatch = useDispatch();
    const results = useSelector(store => store.search)
    let [searchInput, setSearchInput] = useState('');
    let imgUrl = ``;
    let img2Url = '';

    function searchButton() {

        console.log('search button', searchInput);
    }

    return (
        <>
            <div>
                <h1>Search</h1>
                <input value={searchInput} type="text" onChange={(event) => setSearchInput(event.target.value)} />
                <button id="search" onClick={() => searchButton()}>Search</button>
            </div>
            <div>
                <img source={imgUrl} alt="Giphy" style={{ height: '600px', maxWidth: '600px' }} />
            </div>
        </>
    )

}


export default Search;