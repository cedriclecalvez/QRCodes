import React, {useState} from 'react'
import { connect } from 'react-redux'

import {Modal,  Form, Input, Button } from 'antd'

import Header from './components/Header'
// import inputForm from './components/inputForm'




const Login = () => {

    // const {
    //     state : {login, password},
    //     bind,
    //     reset
    // } = inputForm ({
    //     login : '',
    //     password : ''
    // })

    const [emailIN, setEmailIN] = useState('')
    const [password, setPassword] = useState('')
    
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [emailUP, setEmailUP] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')


    const [modal, setModal] = useState(false)
    const [modalText, setModalText] = useState('');





    const submitInput = async ()=>{

        const request = {
            method : 'POST',
            headers : {'Content-Type':'application/x-www-form-urlencoded'},
            body : `email=${emailIN}&password=${password}`
        }

        console.log ('Login.submitInput(), request pour email=', emailIN);
        // const responseBEraw = await fetch('/users/signIn', request);
        // console.log ('Login.submitInput(), response responseBEraw=', responseBEraw);
        
        // const response = await responseBEraw.json();
        // console.log ('Login.submitInput(), response BackEnd=', response);


        // if (response.result){

        //     event.preventDefault();
        //     setEmailIN('');
        //     setPassword('')
        // }
    }


    const submitSignUp = async ( )=>{

        console.log('Login.submitSigin()');
    

        if (password1 !== password2) {
            setModalText('the passwords are not identical')
            setModal(true);
        }else{

            const request = {
                method : 'POST',
                headers : {'Content-Type': 'application/x-www-form-urlencoded'},
                body : `email=${emailUP}&password=${password1}&firstname=${lastname}&firstname=${lastname}`
            }

            console.log ('Login.submitSignIn(), request pour email=', emailIN);
            const responseBEraw = await fetch('/users/signUp', request);
            const response = await responseBEraw.json();
            console.log ('Login.submitSignIn(), response BackEnd=', response);


            if (response.result){

                setEmailIN('');
                setPassword('')
            }
        }
    }

    return (
        <div>
            <Header 
            btnLogin='Main Page'
            actionBtnLogin='/'
            />
            Login

            <Form 
            // method='POST'
            onSubmit={ ()=> submitInput()}
            >
                <Form.Item
                label="login"
                name='emailIN'
                type='email'
                // value={emailIN}
                // name="username"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your username!',
                //   },
                // ]}
                >
                    <Input
                    onChange={ (e)=> setEmailIN(e.target.value)}
                    /> 
                </Form.Item>

                <Input
                name='password'
                type='password'
                value={password}
                onChange={ (e)=> setPassword(e.target.value)}
                /> 

                <Button
                onClick={()=> submitInput()}
                >
                    login
                </Button>
            </Form>

            Registration
            <form>
                <input
                name='firstname'
                type='text'
                value={firstname}
                placeholder={'Your firstname'}
                onChange={ (e)=> setFirstname(e.target.value)}
                /> 

                <input
                name='lastname'
                type='text'
                value={lastname}
                placeholder={'Your lastname'}
                onChange={ (e)=> setLastname(e.target.value)}
                /> 
                <input
                name='emailUP'
                type='email'
                value={emailUP}
                placeholder={'Your email'}
                onChange={ (e)=> setEmailUP(e.target.value)}
                /> 

                <input
                name='password1'
                type='password'
                placeholder={'Your password'}
                value={password1}
                onChange={ (e)=> setPassword1(e.target.value)}
                /> 
                <input
                name='password2'
                type='password'
                placeholder={'confirme password'}
                value={password2}
                onChange={ (e)=> setPassword2(e.target.value)}
                /> 

                <button
                onClick={submitSignUp}
                >
                    Sign Up
                </button>
            </form>

            <Modal
            title='Error'
            visible={modal}
            onOk={()=>setModal(false)}
            onCancel={()=>setModal(false)}
            >
                {modalText}

            </Modal>

        </div>
    )
}

const mapStateToProps = (state) => ({
    user : state.userReduser
})

const mapDispatchToProps = {
    
}

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login
