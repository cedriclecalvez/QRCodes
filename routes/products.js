var express = require('express');
var router = express.Router();
const fs = require('fs');
const { env } = require('process');
const request = require('request');
const syncRequest = require('sync-request')



  



// API : codzz-qr-cods
//--------------------

router.post('/createQRCode', async function(req, res, next) {
    console.log("hello create QRcode", req.body)
    

    let result = {
        status : false
    }

    async function requestAPI(options, result){
        let ttt = await request(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            console.log('responseAPI=', body);
    
            result.jpg = body.url;
        });
    
        return true;
    }




    const options = {
        method: 'GET',
        url: 'https://codzz-qr-cods.p.rapidapi.com/getQrcode',
        qs: {type: req.body.type, value: req.body.data},
        headers: {
          'x-rapidapi-key': process.env.RAPIDAPI,
          'x-rapidapi-host': 'codzz-qr-cods.p.rapidapi.com',
          useQueryString: true
        }
    };
      
    result.status = await requestAPI(options, result);


    console.log('result=', result)
    res.json(result)
})












module.exports = router;





























    // API : QRcode3
    //-----------------
/*
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
  
      console.log('body=', body);
  });

*/