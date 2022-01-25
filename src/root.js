import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import MainPage from './pages/main'
// import Login from './pages/login'
import { CssBaseline, createTheme, ThemeProvider } from '@material-ui/core';
import AuthProvider from './contexts/auth';
import App from './App'

const theme = createTheme({
  typography: {
    useNextVariants: true
  }
})

const Root = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <CssBaseline />

      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </AuthProvider>
  </ThemeProvider>
)

export default Root