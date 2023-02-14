import React, { useState, useEffect } from 'react'
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import Input from '../Input';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions.js/auth';


const LoginPage = () => {
    const dispatch = useDispatch();
    const [showPassword, setshowPassword] = useState(false);


    const [isSignUp, setisSignUp] = useState(false);
    const classes = useStyles();
    const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

    const [formData, setformData] = useState(initialState);

    const navigate = useNavigate();

    const reduxSavedDataLogin = useSelector((state) => state.authReducer.authData);
    console.log(reduxSavedDataLogin);





    let push = () => {
        navigate(`/success`);
    }




    useEffect(() => {
        console.log(reduxSavedDataLogin);
        if (reduxSavedDataLogin) {
            push("/success")
        }
    }, [reduxSavedDataLogin])


    const handleShowPassword = () => {
        setshowPassword((prevShowPass) => !prevShowPass);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        if (isSignUp) {
            dispatch(signup(formData));
        } else {
            dispatch(signin(formData));
        }
    };


    const switchMode = () => {
        setisSignUp((prev) => !prev);
    }

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    };


    return (

        <>
            <Container component='main' maxWidth="xs">

                <Paper className={classes.paper} elevation={3}>

                    <Typography variant="h5">
                        {isSignUp ? 'SIgn Up' : 'Sign In'}</Typography>
                    <form className={classes.form} >
                        <Grid container spacing={2} >
                            {
                                isSignUp && (
                                    <>
                                        <Input name='firstName' label="First Name" handleChange={handleChange} autoFocus half />
                                        <Input name='lastName' label="Last Name" handleChange={handleChange} half />
                                    </>
                                )
                            }
                            <Input name="email" label={"Email"} handleChange={handleChange} type="email" />
                            <Input name="password" label={"Password"} handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            {
                                isSignUp && <Input name="confirmPassword" label={"Repeat Password"} handleChange={handleChange} type="password" />

                            }
                        </Grid>



                        <Button type="Submit" fullWidth variant="contained" color="primary" style={{ marginTop: "20px" }} onClick={handleSubmit} className={classes.submit} >
                            {isSignUp ? "Sign Up" : "Sign In"}
                        </Button>



                        <Grid container justify="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignUp ? 'Already have an account? Sign In' : "Don't have an acoount. Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>

                    </form>
                </Paper>

            </Container>


        </>
    )
}

export default LoginPage