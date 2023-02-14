import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { useSelector } from "react-redux";
import { LOGOUT, SIGNIN, SIGNUP } from '../../constants/actionTypes';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
const Success = () => {
    const reduxSavedDataLogin = useSelector((state) => state.authReducer.authData);
    const navigate = useNavigate();

    const dispatch = useDispatch();





    const logout = () => {
        dispatch({ type: LOGOUT });
        navigate('/');
    };

    const goback = () => {
        navigate('/');
    };


    return (
        <>

            <div style={{ flexDirection: 'column' }}>
                {reduxSavedDataLogin ?

                    <>
                        {reduxSavedDataLogin.type === SIGNIN ? `Hello ${reduxSavedDataLogin.data.result.name}, Thanks for Logging In` : null}

                        {reduxSavedDataLogin.type === SIGNUP ? `Hello ${reduxSavedDataLogin.data.result.name}, Thanks for Signing UP` : null}

                        <>
                            <Typography display="block"></Typography>
                        </>
                        <Button variant="contained" color="primary" style={{ marginTop: "30px" }}
                            onClick={logout}
                        >Logout</Button>
                    </>


                    :

                    <>
                        {`You are on wrong Page`}

                        <>
                            <Typography display="block"></Typography>
                        </>

                        <Button variant="contained" color="primary" style={{ marginTop: "30px" }}
                            onClick={goback}
                        >Go Back To Home</Button>
                    </>}



            </div>


        </>
    )
}

export default Success