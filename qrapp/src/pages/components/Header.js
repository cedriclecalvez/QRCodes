import React,  { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


export default function Header(props) {


	

    const [toMyCodes, setToMyCodes] = useState (false);
    const [toProfil, setToProfil] = useState (false);
    const [toMainPage, setToMainPage] = useState (false);
    const [toLoginPage, setToLoginPage] = useState (false);


    if (toMyCodes){
        setTimeout(()=> setToMyCodes(false), 30 );
        return (
            <Redirect to='/MyQRCodes' />
        )
    }else if (toProfil){
        setTimeout(()=> setToMyCodes(false), 30 );
        return (
            <Redirect to='/Profil' />
        )
    }else if (toMainPage){
        setTimeout(()=> setToMainPage(false), 30 );
        return (
            <Redirect to='/' />
        )
    }else if (toLoginPage){
        setTimeout(()=> setToLoginPage(false), 30 );
        return (
            <Redirect to='/Login' />
        )
    }else if (props.user){


        return (
            <Container>
                <Row>
                    <Col>
                        QR Code Creator
                    </Col>

                    <Col>
                        <button
                        onClick={()=> setToMyCodes(true) }
                        >
                            my QR codes
                        </button>                        
                    </Col>

                    <Col>
                        <button
                        onClick={()=> setToProfil(true) }
                        >
                            my profil
                        </button>                        
                    </Col>

                    <Col>
                        <button
                        onClick={()=> setToMainPage(true) }
                        >
                            main page
                        </button>                        
                    </Col>

                </Row>
            </Container>
        )

    } else {
        return (
            <Container>
                <Row>
                    
                    <Col>
                        QR Code Creator
                    </Col>

                    <Col>
                        <button
                        onClick={()=> setToLoginPage(true) }
                        >
                            sign in / sign up
                        </button>                        
                    </Col>

                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state){
    return {
        user : state.userReducer,
    }
}

export default connect(mapStateToProps, null)
