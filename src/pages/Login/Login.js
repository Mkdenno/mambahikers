import React from 'react'
import { Box } from '@mui/system'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import './login.css'


const Login = () => {
  return (
<>
            <div className='loginForm'
            >
                <div>
                    <h1>Login</h1>
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
                            <h3>Login</h3>

                            <TextField
                                id="filled-email-input"
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


                        </div>
                        <Button variant="outlined" className='Btn'>Login</Button>

                    </Box>
                </div>
            </div>



        </>
  )
}

export default Login