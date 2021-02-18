import React, {useState}    from 'react';

import Header from './components/Header';


export default function MainPage() {

    const [input, setInput] = useState('');
    const [typeQRcode, setTypeQRcode] = useState('URL');
    const [qrcodeImg, setQRcodeImg] = useState (null)


    const generateQRcode = async () => {


        const body = JSON.stringify ({
            data : input,
            type : typeQRcode,

        });
        const requet={
            method : 'POST',
            headers : {'Content-Type': 'application/x-www-form-urlencoded'},
            body 
        }

        const responseBEraw = await fetch('/createQRCode');
        const responseBE = await responseBEraw.json();

        console.log (responseBE);
        if (responseBE.jpg){
            setQRcodeImg(responseBE.jpg)
        }

    }

    return (
        <div>
            <Header />

            <Component>
                <Row>
                    <Col>
                        <Button>
                            URL
                        </Button>
                        <Button>
                            text
                        </Button>
                        <Button>
                            map
                        </Button>
                    </Col>


                    <Col>
                        <input
                        className={inputText}
                        placeholder={'Your URL'}
                        value = {input}
                        onChange={ (e)=> setInput(e.target.value)}
                        >
                        </input>

                        <button
                        onClick={ ( ) => generateQRcode()}
                        >
                            create QR code
                        </button>
                    </Col>


                    <Col>
                    
                        resultat:

                        { qrcodeImg 
                        ? <img 
                        src={qrcodeImg}
                        />
                        : ''}
                        your QR code
                    </Col>

                </Row>
            </Component>
        </div>
    )
}
