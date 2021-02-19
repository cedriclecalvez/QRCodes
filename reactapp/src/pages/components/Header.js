import React,  { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { Col, Row } from 'antd';

function Header(props) {


	

    const [toMyCodes, setToMyCodes] = useState (false);
    const [toProfil, setToProfil] = useState (false);
    const [toMainPage, setToMainPage] = useState (false);
    const [toLoginPage, setToLoginPage] = useState (false);


    if (toMyCodes){
        setTimeout(()=> setToMyCodes(false), 300 );
        return (
            <Redirect to='/QRCodes' />
        )
    }else if (toProfil){
        setTimeout(()=> setToMyCodes(false), 300 );
        return (
            <Redirect to='/Profil' />
        )
    }else if (toMainPage){
        setTimeout(()=> setToMainPage(false), 300 );
        return (
            <Redirect to='/' />
        )
    }else if (toLoginPage){
        console.log('to Login')
        setTimeout(()=> setToLoginPage(false), 300 );
        return (
            <Redirect to={props.actionBtnLogin} />
        )
    }else if (props.user){


        return (
            <div>
                <Row>
                    <Col span={6}>
                        QR Code Creator
                    </Col>

                    <Col span={6}>
                        <button
                        onClick={()=> setToMyCodes(true) }
                        >
                            my QR codes
                        </button>                        
                    </Col>

                    <Col span={6}>
                        <button
                        onClick={()=> setToProfil(true) }
                        >
                            my profil
                        </button>                        
                    </Col>

                    <Col span={6}>
                        <button
                        onClick={()=> {
                            props.newUser({});
                            setToMainPage(true)} }
                        >
                            logout
                        </button>                        
                    </Col>

                </Row>
            </div>
        )

    } else {
        return (
            <div>
                <Row>
                    
                    <Col span={6}>
                        QR Code Creator
                    </Col>

                    <Col span={6}>
                    </Col>
                    <Col span={6}>
                    </Col>

                    <Col span={6}>
                        <button
                        onClick={()=> setToLoginPage(true) }
                        >
                            {props.btnLogin}
                        </button>                        
                    </Col>

                </Row>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user : state.userReducer,
    }
}

function mapDispatchToProps(dispatch){
    return {
        newUser : ( user )=>{
            dispatch ({type : user, user})
        }
    }
        
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
