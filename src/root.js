import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
// import MainPage from './pages/main'
// import Login from './pages/login'
import {
  CssBaseline,
  createTheme,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core';
import { AuthProvider, OrderProvider } from './contexts';
import App from './App'

const theme = createTheme({
  typography: {
    useNextVariants: true
  }
})

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <OrderProvider>
          <CssBaseline />
          <GlobalStyle />

          <BrowserRouter>
            <Route component={App} />
          </BrowserRouter>
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  </MuiThemeProvider>
)

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`

export default Root