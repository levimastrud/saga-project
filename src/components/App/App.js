import React from 'react';
<<<<<<< HEAD
import Search from '../Search/search';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Search />
    </div>
=======
import { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Favorites from './Favortites/Favorites';
import Search from './Search/Search';
import './App.css';

function App(props) {
  return (
    <Router>
      <header>
      <nav id='navbar'>
        <h3><Link to='/search'>Search</Link></h3>
        <h3><Link to='/favorites'>Favorites</Link></h3>
      </nav>
      </header>
      <Switch>
        <Route path='/search'>
          <Search/>
        </Route>
        <Route path='/favorites'>
          <Favorites/>
        </Route>
      </Switch>
    </Router>
>>>>>>> bc7a29b3691b4a4c917a6a86789efd939e6f003b
  );
}

export default App;

/* 
  NOTES 
-search will look like this: https://api.giphy.com/v1/gifs/search?api_key={YOUR API KEY HERE}={SEARCH CRITERIA HERE}&limit=25&offset=0&rating=pg-13&lang=en
-database will need:
  -id, url, foriegn key from category_id
- when image is favorited we will need to store URL and have the user select a category it falls under to send to database for storage.
*/