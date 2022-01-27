import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate()
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }
    const handleLoginSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert('Not match')
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={ 2 } sx={ { justifyContent: 'center', alignItems: 'center', padding: '30px' } }>
                <Grid item xs={ 12 } md={ 6 }>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    { !isLoading && <form onSubmit={ handleLoginSubmit }>
                        <TextField
                            sx={ { width: '75%', m: 1 } }
                            id="standard-basic"
                            type="name"
                            name="name"
                            onBlur={ handleOnBlur }
                            label="Your Name"
                            variant="standard" />
                        <TextField
                            sx={ { width: '75%', m: 1 } }
                            id="standard-basic"
                            type="email"
                            name="email"
                            onBlur={ handleOnBlur }
                            label="Your Email"
                            variant="standard" />
                        <TextField
                            sx={ { width: '75%', m: 1 } }
                            type="password"
                            id="standard-basic"
                            name="password2"
                            onBlur={ handleOnBlur }
                            label="Your Password"
                            variant="standard" />
                        <TextField
                            sx={ { width: '75%', m: 1 } }
                            type="password"
                            id="standard-basic"
                            name="password"
                            onBlur={ handleOnBlur }
                            label="Re-Type Your Password"
                            variant="standard" />

                        <Button sx={ { width: '75%', m: 1 } } type="submit" variant="contained">RegisterUser</Button>
                        <NavLink
                            style={ { textDecoration: 'none' } } to="Login">
                            <Button sx={ { width: '75%', m: 1 } } type="submit" variant="text">Already Registered? Please Login</Button>
                        </NavLink>

                    </form> }
                    {
                        isLoading && <Stack sx={ { width: '100%', color: 'grey.500' } } spacing={ 2 }>
                            <LinearProgress color="secondary" />
                            <LinearProgress color="success" />
                            <LinearProgress color="inherit" />
                        </Stack>
                    }
                    {
                        user.email && <Alert severity="success">
                            Suer Created <strong>Successfully!</strong>
                        </Alert>
                    }
                    {
                        authError && <Alert variant="outlined" severity="error">
                            { authError }
                        </Alert>
                    }

                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <img style={ { width: '100%' } } src="https://innovationatwork.ieee.org/wp-content/uploads/2020/12/image-from-rawpixel-id-1029356-original_1024X684.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Registration;