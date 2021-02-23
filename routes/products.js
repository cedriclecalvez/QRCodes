var express = require('express');
var router = express.Router();
const request = require('request');
  
router.post('/createQRCode', async function(req, res, next) {
    console.log("hello create QRcode", req.body)
    const dataFront = JSON.parse(req.body)

    const options = {
        method: 'POST',
        url: 'https://qrcode3.p.rapidapi.com/generateQRwithLogo',
        headers: {
        'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
        'x-rapidapi-key': process.env.RAPIDAPI,
        'x-rapidapi-host': 'qrcode3.p.rapidapi.com',
        useQueryString: true
        },
        formData: {image: {}, text: dataFront.data}
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
})

module.exports = router;