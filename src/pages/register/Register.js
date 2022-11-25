import React from 'react'
import { Box } from '@mui/system'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import './register.css'

const Register = () => {
    return (
        <>
            <div className='registerForm'
            >
                <div>
                    <h1>Register With Us</h1>
                </div>
                <div>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '55ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <div >
                            <h3>Register</h3>
                            <TextField
                                id="filled-firstnamme-input"
                                type="email"
                                label="First Name"
                                variant="filled"
                            /><br />
                            <TextField
                                id="filled-lastname-input"
                                type="email"
                                label="Last Name"
                                variant="filled"
                            /><br />
                            <TextField
                                id="filled-password-input"
                                type="email"
                                label="Email"
                                variant="filled"
                            /><br />
                            <TextField
                                id="filled-password-input"
                                label="PassWord"
                                type="password"
                                variant="filled"
                            /><br />
                            <TextField
                                id="filled-password-input"
                                label="Confirm PassWord"
                                type="password"
                                variant="filled"
                            />


                        </div>
                        <Button variant="outlined" className='Btn'>Register</Button>

                    </Box>
                </div>
            </div>



        </>
    )
}

export default Register