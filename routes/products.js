var express = require('express');
var router = express.Router();
const fs = require('fs');
const request = require('request')

  







router.post('/createQRCode', async function(req, res, next) {
    console.log("hello create QRcode", req.body)
    
    let result = {
        status : false
    }

    let formData = {
        image: {},
        text: req.body.data
    }


    
const options = {
    method: 'POST',
    url: 'https://qrcode3.p.rapidapi.com/generateQRwithLogo',
    headers: {
      'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
      'x-rapidapi-key': process.env.RAPIDAPI,
      'x-rapidapi-host': 'qrcode3.p.rapidapi.com',
      useQueryString: true
    },
    formData: {
      image: {
        value: fs.createReadStream('./public/img/logo192.png'),
        options: {filename: 'logo192.png', contentType: 'application/octet-stream'}
      },
      text: req.body.data
    }
  };
  
  request(options, function (error, response, body) {
      if (error) throw new Error(error);
  
      console.log(body);
  });




    console.log('result=', result)
    res.json(result)
})

module.exports = router;