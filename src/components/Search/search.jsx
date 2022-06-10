import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom';
import star from './star.svg'
import hollowStar from './hollow_star.svg'


function Search() {
    const dispatch = useDispatch();
    let results = results = useSelector(store => store.search)
    let [searchInput, setSearchInput] = useState("");

    console.log('results are ', results);


    useEffect(() => {
    }, [])



    function searchButton() {
        console.log('search button', searchInput);
<<<<<<< HEAD
        dispatch({type: 'ADD_FAVS'})


=======
>>>>>>> 161473a2b926aa98f274e2912bd7915b2837e622
        dispatch({ type: "SEARCH", payload: searchInput })
        setSearchInput('')
    }

    return (
        < div>
            <div className="searchField">
                <input placeholder = 'search' value={searchInput} type="text" onChange={(event) => setSearchInput(event.target.value)} />
                <button id="search" onClick={() => searchButton()}>Search</button>
            </div>
            {results ? results.map((image, i) => (
                <div className="gallery">
                    <div key={i}>
                        <div className="buttons">
                            <select name="genre" id="genre">
                                <option value="" disabled selected>Genre</option>
                                <option value="funny">Funny</option>
                                <option value="meme">Meme</option>
                                <option value="stupid">Stupid</option>
                                <option value="food">Food</option>
                                <option value="reaction">Reaction</option>
                            </select>
                            <button>Add to favorites</button>
                        </div>
                        <img src={image.images.original.url} alt="Giphy" style={{ height: '600px', maxWidth: '600px' }} />
                    </div>
                </div>
            )) : ''}
        </div>
    )

}


export default Search;