const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.body.search);
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.body.search}&limit=10&offset=0&rating=pg-13&lang=en`)
    .then((response) => res.send(response.data))
    .catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
})

module.exports = router