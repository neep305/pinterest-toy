var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pinterest', (req, res, next) => {
  const link = 'https://api.pinterest.com/oauth/?response_type=code&redirect_uri=https://localhost:3001/oauth2/callback&client_id=5018911578559397548&scope=read_public,write_public&state=768uyFys';
  res.redirect(link);
});

module.exports = router;
