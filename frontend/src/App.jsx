import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './scenes/home/index'
import Login from './scenes/auth/login'
import Register from './scenes/auth/register'
import Posts from './scenes/posts/index'
import Comments from './scenes/comments/index'
import Profile from './scenes/profile/index'
import Navigate from './scenes/navigate/index'
import './App.css'

/* THEME */
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { themeSettings } from './theme'
import { createTheme } from '@mui/material/styles'


const App = () => {
  const mode = useSelector((state) => state.mode);  // redux state for dark mode
  const theme = useMemo(() => createTheme(themeSettings[mode]), [mode]); // theme settings for dark mode
  return (
    <div className='App'>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navigate />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/profile/:id/comments' element={<Profile />} />
            <Route path='/:id/comments' element={<Comments />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  )

}

export default App
