import React, {useState}    from 'react';

import Header from './components/Header';

import { Layout, Button } from 'antd'
const { Sider } = Layout;

export default function MainPage() {

    const [input, setInput] = useState('');
    const [typeQRcode, setTypeQRcode] = useState('URL');
    const [qrcodeImg, setQRcodeImg] = useState (null)


    const generateQRcode = async () => {


        let data;
        if (typeQRcode === 'URL' || typeQRcode === 'text' ){
            data = input;
        }else{
            data = JSON.stringify(input);
        }

        const requet={
            method : 'POST',
            headers : {'Content-Type': 'application/x-www-form-urlencoded'},
            body : `data=${data}&type=${typeQRcode}`
        }

        const responseBEraw = await fetch('/products/createQRCode', requet);
        if (responseBEraw.status === 200){

            const responseBE = await responseBEraw.json();
            console.log('responseBE=', responseBE);
            // if (responseBE.status){
                //     setQRcodeImg(responseBE.jpg)
                // }
            
        }else{
            console.log('pas de reponse de Backend')
            console.log('responseBEraw.status = ', responseBEraw.status)
        }


    }

    return (
        <div>
            <Header
            btnLogin='sign in / sign up'
            actionBtnLogin='/Login'
            />

            <Layout>
                <Sider >
                    <Button>
                        URL
                    </Button>
                    <Button>
                        text
                    </Button>
                    <Button>
                        map
                    </Button>
                </Sider>


                <Layout>
                    <Layout>
                        <input
                        className={'inputText'}
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
                    </Layout>


                    <Layout>
                    
                        resultat:

                        { qrcodeImg 
                        ? <img 
                        src={qrcodeImg}
                        />
                        : ''}
                        your QR code
                    </Layout>
                </Layout>

            </Layout>
        </div>
    )
}
