import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdmitSubmit = e => {

        setEmail('');
        const user = { email }
        fetch('https://still-bastion-57482.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div className="p-5 m-5">
            <h2>Make Admin</h2>
            {
                success && <Alert severity="success">Made Admin Successfully!</Alert>
            }
            <form onSubmit={ handleAdmitSubmit }>
                <TextField
                    sx={ { width: '100%' } }
                    label="Email"
                    type="email"
                    variant="standard"
                    onBlur={ handleOnBlur }
                />
                <Button type="submit" variant="contained"> Make Admin</Button>

            </form>
        </div>
    );
};

export default MakeAdmin;