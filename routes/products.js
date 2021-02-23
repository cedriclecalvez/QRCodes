var express = require('express');
var router = express.Router();
const fs = require('fs');
const http = require('https');
const request = require('request')
// var unirest = require("unirest");
  







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
      'x-rapidapi-key': '86e262822emshf8f1554c03d58f5p1c48ebjsn62553c054c54',
      'x-rapidapi-host': 'qrcode3.p.rapidapi.com',
      useQueryString: true
    },
    formData: {
      image: {
        value: fs.createReadStream('./public/img/logo192.png'),
        options: {filename: '1.JPG', contentType: 'application/octet-stream'}
      },
      text: req.body.data
    }
  };
  
  request(options, function (error, response, body) {
      if (error) throw new Error(error);
  
      console.log(body);
  });






    // HTTP REQUEST
    /* 

    const options = {
        "method": "POST",
        "hostname": "qrcode3.p.rapidapi.com",
        "port": null,
        "path": "/generateQRwithLogo",
        "headers": {
            "content-type": "multipart/form-data; boundary=---011000010111000001101001",
            'x-rapidapi-key': process.env.RAPIDAPI,
            'x-rapidapi-host': 'qrcode3.p.rapidapi.com',
            useQueryString: true
        },
        formData
    }

    const responseAPI = await http.request (options, function (res) {
        const chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            const body = Buffer.concat(chunks);
            console.log('body=', body)
        });
    });

    console.log('reponse API=',responseAPI);

    // for (let arg in responseAPI){
    //     console.log('arg=', arg)
    // }
    
    let result2 = {};
    result.HTTPParser=responseAPI.connection.parser;

    // console.log('responseAPI.connection.parser=', responseAPI.connection.parser)
*/




//  request with unirest
/*
    var reqAPI = unirest("POST", "https://qrcode3.p.rapidapi.com/generateQRwithLogo");
    
    reqAPI.headers({
        "content-type": "multipart/form-data; boundary=---011000010111000001101001",
        "x-rapidapi-key": "86e262822emshf8f1554c03d58f5p1c48ebjsn62553c054c54",
        "x-rapidapi-host": "qrcode3.p.rapidapi.com",
        "useQueryString": true
    });
    
    reqAPI.multipart([
        {
            image: {},
            "text": req.body.data
        }
    ]);
    
    
    reqAPI.end(function (resAPI) {
        if (resAPI.error) {
            console.log('resAPI.error=', resAPI.error);
        }else{

            console.log('reponse API=',resAPI.body);

            result.responseAPI=resAPI.body;
        }

    });
*/
    console.log('result=', result)
    res.json(result)
})

module.exports = router;