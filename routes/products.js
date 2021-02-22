var express = require('express');
var router = express.Router();
const http = require('https');
  
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
            console.log('body.toString()=', body.toString());
        });
    });
    console.log('responseAPI=', responseAPI)

    res.json(result)
})

module.exports = router;