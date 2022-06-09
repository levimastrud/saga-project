import React from 'react';
import Search from '../Search/search';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Search />
    </div>
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