const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')

const router = express.Router();



// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT url FROM favorites WHERE id=$1';
  pool.query(queryText,[req.params.id]).then(
    (result) => {res.send(result.rows)}
  ).catch((err) => {
    console.log('error completing SELECT favorite query',err)
    res.sendStatus(500);
  })
  
});

// add a new favorite
router.post('/', (req, res) => {
  const newFavorite = req.body;
  console.log('fav post', newFavorite);
  const queryText = 'INSERT INTO favorites ("url") VALUES($1)'
  const queryValues = newFavorite;
  pool.query(queryText,[queryValues])
  .then(() => {res.sendStatus(201)})
  .catch((err) => {
    console.log("error completing SELECT Favorites query",err)
    res.sendStatus(500);
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  const udatedFavorite = req.body;
const queryText = 'UPDATE "favorites" SET "url" = $1, search=$2 WHERE id=$3'

const queryValues = [
  udatedFavorite.url,
  udatedFavorite.search,
]
pool.query(queryText,queryValues)
.then(() => {res.sendStatus(200)})
.catch((err) => {
  console.log("Error completing a SELECT favorites query",err)
  res.sendStatus(500);
})
  // req.body should contain a category_id to add to this favorite image
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
