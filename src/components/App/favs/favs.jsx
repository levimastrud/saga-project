import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function FavsList() {
    let params = useParams();
    console.log(params)

    let favsId = params.favId;
    let favorite = favsList.find(favorited => favorited.id === Number(favsId))
    console.log(`found favortie:`, favorite); 

    if(!favorite) return(
        <h2>INVALID FAVORITE</h2>
    )


    const dispatch = dispatch();
    const history = useHistory();


const favsList = useSelector(store => store.favsReducer);

useEffect(() => {
    dispatch({type: 'FETCH_FAVS'})
}, []);


return (
<>
<h3>Favorites</h3>
<ul>
        {favsList.map((favorite,index) => {
            <li key={index}><img src={favorite.url} /></li>
        })}
</ul>
</>
)

}

export default FavsList