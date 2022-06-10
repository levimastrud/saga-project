import React from 'react';
import { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Favorites from './Favortites/Favorites';
import Search from '../Search/search';
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
  );
}

export default App;

/* 
  NOTES 
-database will need:
  -id, url, foriegn key from category_id
- when image is favorited we will need to store URL and have the user select a category it falls under to send to database for storage.
*/