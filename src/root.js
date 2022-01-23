import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import MainPage from './pages/main'
// import Login from './pages/login'
import { CssBaseline } from '@material-ui/core';
import AuthProvider from './contexts/auth';
import App from './App'

const Root = () => (
  <AuthProvider>
    <CssBaseline />

    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </AuthProvider>
)

export default Root;
//81