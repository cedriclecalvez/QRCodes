var express = require('express');
var router = express.Router();
const { env } = require('process');
const request = require('request-promise-any')

const fs = require('fs');
var uniqid = require('uniqid');





// cloudinary
var cloudinary = require('cloudinary').v2;

cloudinary.config({
//  cloud_name: process.env.CLOUDINARYNAME 
//  api_key: process.env.CLOUDINARYAPIKEY 
//  api_secret: process.env.CLOUDINARYSECRETKEY 
// ----------------OR
 CLOUDINARY_URL: process.env.CLOUDINARYURL
});



  



// API : codzz-qr-cods
//--------------------

router.post('/createQRCode', async function(req, res, next) {
    console.log("hello route createQRcode", req.body)
    

    let result = {
        status : false
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

    
    await request(options, function (error, response, body) {
      if (error)
          throw new Error(error);
      console.log('responseAPI=', body);
      bodyParsed = JSON.parse(body)

      result.jpg = bodyParsed.url;
      // console.log('request result=', result)
      result.status = true;
  });
  

    console.log('result=', result)
    res.json(result)
})




router.post('/upload', async function(req, res, next) {


// si l'utilisateur est logger
    console.log("hello1 req query upload", req.query)

    var imagePath = './tmp/ '+uniqid()+'avatar.jpg'
    console.log("hello2-------------- imagePath",imagePath)

    var resultCopy = await req.files.avatar.mv(imagePath);
    console.log("fichiers",req.files.avatar)
    console.log("hello3-----------resultCopy", resultCopy)

    if(!resultCopy) {    
        var resultCloudinary = await cloudinary.uploader.upload(imagePath);
        res.json(resultCloudinary);
        console.log("hello4 ----------- resultCloudinary",resultCloudinary)
    } else {
        res.json( {error:resultCopy} );
    } 

    fs.unlinkSync(imagePath);
});









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