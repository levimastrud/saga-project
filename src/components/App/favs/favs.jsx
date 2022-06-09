import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function FavsList() {
    let params = useParams();
    console.log(params)

    let favsId = params.favId
    const dispatch = useDispatch();
    const history = useHistory();


    const favsList = useSelector(store => store.favsReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVS' })
    }, []);


    return (
        <ul>
            {/* {favsList.map((favorite, index) => {
                <li key={index} >
                    <button onClick={() => history.push(`/favorites${favorite.id}`)} >Favorite</button>
                </li>
            })} */}
        </ul>
    )

}

export default FavsList