import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import { Alert, Button, Container, LinearProgress, Stack, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = (e) => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(loginData);
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, navigate);
        alert('Login Successful')
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
        <Container>
            <Grid container spacing={ 2 } sx={ { justifyContent: 'center', alignItems: 'center', padding: '30px' } }>
                <Grid item xs={ 12 } md={ 6 }>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={ handleLoginSubmit }>
                        <TextField
                            sx={ { width: '75%', m: 1 } }
                            id="standard-basic"
                            name="email"
                            onBlur={ handleOnChange }
                            label="Your Email"
                            variant="standard" />
                        <TextField
                            sx={ { width: '75%', m: 1 } }
                            type="password"
                            id="standard-basic"
                            name="password"
                            onBlur={ handleOnChange }
                            label="Your Password"
                            variant="standard" />

                        <Button sx={ { width: '75%', m: 1 } } type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={ { textDecoration: 'none' } } to="/Registration">
                            <Button sx={ { width: '75%', m: 1 } } type="submit" variant="text">New User? Register</Button>
                        </NavLink>

                        {
                            isLoading && <Stack sx={ { width: '100%', color: 'grey.500' } } spacing={ 2 }>
                                <LinearProgress color="secondary" />
                                <LinearProgress color="success" />
                                <LinearProgress color="inherit" />
                            </Stack>
                        }
                        {
                            user.email && <Alert severity="success">
                                User Created <strong>Successfully!</strong>
                            </Alert>
                        }
                        {
                            authError && <Alert variant="outlined" severity="error">
                                { authError }
                            </Alert>
                        }
                    </form>
                    <p>-------------------------------</p>
                    <Button onClick={ handleGoogleSignIn } variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <img style={ { width: '100%' } } src="https://innovationatwork.ieee.org/wp-content/uploads/2020/12/image-from-rawpixel-id-1029356-original_1024X684.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;