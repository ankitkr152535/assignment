// routes
const express = require('express')
const router = express.Router();

router.get('/test1', (req, res) => {
    res.send("This is a different route 1");
});

module.exports = router;