let qrcode = require ("qrcode-svg");


class QRcode {
    constructor(type, data){
        // this.type = type;
        // this.data = data;
        console.log("QRcode class. data=", data)
        this.codeCreator = new qrcode(data);
    }
    
    get type(){
        return this.type;
    }
    
    get data(){
        return this.data;
    }

    /**
     * @param {any} type
     */
    set setType(type){
        this.type = type;
    }
    /**
     * @param {any} data
     */
    set setData(data){
        this.data = data;
    }
    
    get matrice(){
        return this.codeCreator.qrcode.modules
    }
    
}

module.exports = QRcode;
