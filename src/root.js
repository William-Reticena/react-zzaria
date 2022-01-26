import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import MainPage from './pages/main'
// import Login from './pages/login'
import { CssBaseline, createTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import AuthProvider from './contexts/auth';
import App from './App'

const theme = createTheme({
  typography: {
    useNextVariants: true
  }
})

const Root = () => (
  <MuiThemeProvider>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />

        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </MuiThemeProvider>
)

export default Root