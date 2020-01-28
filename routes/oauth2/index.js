const express = require('express');
const router = express.Router();
const axios = require('axios').default;

const fs = require('fs');

/**
 * 
 */
router.get('/callback', (req, res, next) => {
    
    // get callback code
    const code = req.query.code;
    const pinterest = req.app.get('pinterest');
    
    const app_id = pinterest.app_id;
    const app_secret = pinterest.app_secret;

    // post pinterest access_token
    if (code && app_id && app_secret) {
        axios.post('https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=' + app_id + '&client_secret=' + app_secret + '&code=' + code)
        .then((response) => {
            console.log(response.data);

            fs.writeFile(`${__basedir}/pin_access_token.json`, response.data, (err) => {
                console.log(err);
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    res.send(req.path);

})

module.exports = router;