// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log({ email, password });
//         setEmail("");
//         setPassword("");
//     };

//     return (
//         <main className='login'>
//             <h1 className='loginTitle'>Log into your account</h1>
//             <form className='loginForm' onSubmit={handleSubmit}>
//                 <label htmlFor='email'>Email Address</label>
//                 <input
//                     type='text'
//                     name='email'
//                     id='email'
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label htmlFor='password'>Password</label>
//                 <input
//                     type='password'
//                     name='password'
//                     id='password'
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button className='loginBtn'>SIGN IN</button>
//                 <p>
//                     Don't have an account? <Link to='/register'>Create one</Link>
//                 </p>
//             </form>
//         </main>
//     );
// };
// export default Login;

import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './Form.jsx';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const Login = () => {

const theme = useTheme();
const isNonMobileScreen = useMediaQuery("(min-width: 1000px)")

  return (
    <div>
      <Box>
        <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
          <Typography variant="h1"
            fontWeight="bold"
            fontSize="32"
            color="primary"
            textAlign="center"
          >
            theJobar
          </Typography>
        </Box>
        <Box
          width={isNonMobileScreen ? "50%" : "90%"}
          p="1rem"
          m="1rem auto"
          borderRadius="1rem"
          boxShadow="0 0 10px rgba(0,0,0,0.2)"
          backgroundColor={theme.palette.background.default}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            fontSize="24"
            sx={{mb: "1rem"}}
          >
            Welcome to theJobar!<br />
            Login to your account.
          </Typography>
          <AuthForm />
        </Box>
      </Box>
    </div>
  )
};

export default Login;
