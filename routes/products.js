var express = require('express');
var router = express.Router();
const fs = require('fs');
const { env } = require('process');
const request = require('request-promise-any')

// import QRcode from './qrCode'
let QRcode = require ('./qrCode')


/*
var qrcode = require("qrcode-svg");
class QRcode {
    constructor(type, data){
        this.data = data;
        this.type = type;
        console.log("QRcode class. data=", data)
        this.codeCreator = new qrcode(data);
    }

    set setType(type){
      this.type = type;
    }
    set setData(data){
      this.data = data;
    }
    
    
    get  getType(){
        return this.type;
    }
    
    get  getData(){
        return this.data;
    }
    get matrice(){
        return this.codeCreator.qrcode.modules
    }
}
*/


// API : codzz-qr-cods
//--------------------

router.post('/createQRCode', async function(req, res, next) {
  console.log("hello create QRcode.  req.body=", req.body)    

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
    
    try{
      var qrCodeClass = new QRcode (req.body.type, req.body.data)
      printTab(qrCodeClass.matrice);
    }catch(e){
      console.log(e)
    }
    
    
    console.log('result=', result)
    res.json(result)
  })
  

const printTab = (tab) =>{
  var output = '';
  for (var i = 0; i<tab.length; i+=1){
    for (var j = 0; j<tab[i].length; j+=1){
      output +=  tab[i][j] ? 'X' : ' ' 
    }
    output += '\r\n';
  }
  console.log(output)
}











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