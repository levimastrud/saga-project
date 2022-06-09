const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req);
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${search}&limit=25&offset=0&rating=pg-13&lang=en`).then((response) => {
        res.send(response.data);
}).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
})

module.exports = router