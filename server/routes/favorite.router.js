const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')

const router = express.Router();
let favorite = []


// return all favorite images
router.get('/', (req, res) => {
  res.send(favorite);
});

// add a new favorite
router.post('/', (req, res) => {
  favorite.push(req.body)
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
