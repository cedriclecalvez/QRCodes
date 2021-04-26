var qrcode = require("qrcode-svg");
class QRcode {
    constructor(type, data){
        this.data = data;
        this.type = type;
        console.log("QRcode class. data=", data)
        this.codeCreator = new qrcode(data);
    }
    
    get  type(){
        return this.type;
    }
    
    get  data(){
        return this.data;
    }
    get matrice(){
        return this.codeCreator.qrcode.modules
    }
    
}
