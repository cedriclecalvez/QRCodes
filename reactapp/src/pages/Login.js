import React from 'react'
import { connect } from 'react-redux'

import Header from './components/Header'
import inputForm from './components/inputForm'

const Login = () => {

    const {
        state : {login, password},
        bind,
        reset
    } = inputForm ({
        login : '',
        password : ''
    })

    const submitInput = async ( event )=>{

        const request = {
            method : 'POST',
            headers : {'Content-Type': 'application/x-www-form-urlencoded'},
            body : `login=${login}&password=${password}`
        }

        const responseBEraw = await fetch('/users/signIn', request);
        const response = await responseBEraw.json();


        if (response.result){

            event.preventDefault();
            reset();
        }
    }


    return (
        <div>
            <Header 
            btnLogin='Main Page'
            actionBtnLogin='/'
            />
            Login

            <form onSubmit={submitInput}>
                <input
                name='login'
                type='text'
                value={login}
                {...bind}
                /> 

                <input
                name='password'
                type='password'
                value={password}
                {...bind}
                /> 

            </form>

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
