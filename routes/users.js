var express = require('express');
var router = express.Router();

var userModel = require('../models/user')
var bcrypt = require('bcrypt');
var uid2 = require('uid2');


/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('respond with a resource');
});

// POST inscription
router.post('/signUp', async function(req, res, next) {

  var result = false
  var saveUser = null
  var token = null
  var error = []

  var userExist =  await userModel.findOne({email:req.body.email})
  if (userExist!=null){
    error.push('email existe déjà')
  }

  if (req.body.firstName == ''
    || req.body.lastName == ''
    || req.body.email == ''
    || req.body.password == ''
    ){
      error.push('champs vides')
  }

  if (error.length == 0){
    const cost = 10;
    const hash = bcrypt.hashSync(req.body.password, cost);
    var newUser = new userModel ({
      lastName: req.body.lastname,
      firstName: req.body.firstname,
      email: req.body.email,
      password: hash,
      token: uid2(32),
    });

    saveUser = await newUser.save()
    console.log("---------saveUser",saveUser)
    
    if(saveUser){
      result = true
      token = saveUser.token
    }
  }
 
 res.json({result, saveUser, token, error})
});



// POST pour se logger
router.post('/signIn', async function(req, res, next) {

  console.log('route /signIn')
  console.log('req.body.email=', req.body.email)
  var error = [];
  
  // if (req.body.firstName==""||req.body.lastname==""||req.body.email==""){
  if (req.body.email==""){
    error.push("champs vides")
  }

  // if (error.length==0){
    
  //   // comparaison des passwords
  //   var user = await userModel.findOne({ email: req.body.email });
  //   var password = req.body.password
  //   var token = user.token
    
  //   if (user){
  //     if (bcrypt.compareSync(password, user.password)) {
  //       login=true
  //     // res.json({ login: true, user, token, error });
    
  //     } else {
  //       login=false
  //       error.push("password incorrect")
  //     // res.json({ login: false, error });
  //     console.log('route /signIn, user=',  user  )
  //     console.log('route /signIn, token=', token)
  //     }
  //   } else{
  //     error.push("email n'existe pas ou incorrect")
  //   }
    
  // }
  console.log('route /signIn, email=', req.body.email)
  console.log('route /signIn, error=',  error)
  res.json({login, user, token, error})
})


module.exports = router;
