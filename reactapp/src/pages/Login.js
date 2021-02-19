import React from 'react'
import { connect } from 'react-redux'

import Header from './components/Header'

const Login = (props) => {
    return (
        <div>
            <Header 
            btnLogin='Main Page'
            actionBtnLogin='/'
            />
            Login
        </div>
    )
}

const mapStateToProps = (state) => ({
    user : state.userReduser
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
