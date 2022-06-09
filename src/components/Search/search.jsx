import axios from "axios";
import React, {useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux"
import { useHistory } from 'react-router-dom';


function Search() {
const dispatch = useDispatch();
const results = useSelector(store => store.search)
let [searchInput, setSearchInput] =useState();

function searchButton(){

    dispatch({ type: "SEARCH", payload: url})
}

    return(
        <div>
            <input value={searchInput} type="text" onChange={(event) => setSearchInput(event.target.value)} />
            <button id="search" onClick={() => searchButton()}>Search</button>
        </div>
    )

}


export default Search;