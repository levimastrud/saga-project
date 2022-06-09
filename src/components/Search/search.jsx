import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom';


function Search() {
    //const dispatch = useDispatch();
    //const results = useSelector(store => store.search)
    let [searchInput, setSearchInput] = useState();
    let imgUrl = ``;
    let img2Url = '';

    function searchButton() {
        console.log('search button', searchInput);
       
        
        //dispatch({ type: "SEARCH", payload: url})
    }

    return (
        <>
            <div>
                <input value={searchInput} type="text" onChange={(event) => setSearchInput(event.target.value)} />
                <button id="search" onClick={() => searchButton()}>Search</button>
            </div>
            <div>
                <img source={img2Url} alt="Giphy" style={{ height: '600px', maxWidth: '600px' }} />
            </div>
        </>
    )

}


export default Search;