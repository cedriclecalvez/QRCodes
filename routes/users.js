var express = require('express');
var router = express.Router();

var userModel = require('../models/user')
var bcrypt = require('bcrypt');
var uid2 = require('uid2')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/signUp', async function(req, res, next) {
  var result = false
  var saveUser = null
  var token = null
  var error = []

  if (req.body.firstName == ''
    || req.body.lastName == ''
    || req.body.email == ''
    || req.body.password == ''
    ){
      error.push('champs vides')
  }

  if (error.length == 0){
    const cost = 10;
    const hash = bcrypt.hashSync(myPlaintextPassword, cost);
    var salt = uid2(32)
    var newUser = new userModel ({
      lastName: req.body.lastname,
      firstName: req.body.firstname,
      email: req.body.email,
      password: hash,
      token: uid2(32),
      salt: salt
    });

    saveUser = await newUser.save()
    console.log("---------saveUser",saveUser)
    
    if(saveUser){
      result = true
      token = saveUser.token
    }
  }
 
 res.json({result, saveUser, token, error})
})


module.exports = router;
