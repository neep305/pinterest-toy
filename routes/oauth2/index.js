const express = require('express');
const router = express.Router();
const axios = require('axios').default;

/**
 * 
 */
router.get('/callback', (req, res, next) => {
    
    const code = req.query.code;
    res.send(req.path);

})

module.exports = router;