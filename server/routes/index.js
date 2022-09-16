var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api',(req,res)=>{
  const message = {
    status : 200,
    message : 'api request successfull'
  }
  res.status(200).json(message)
})
router.post('/login',(req,res)=>{
})

module.exports = router;
