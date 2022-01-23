import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import MainPage from './pages/main'
// import Login from './pages/login'
import { CssBaseline, LinearProgress } from '@material-ui/core';

const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

//74
const App = () => (
  <>
    <CssBaseline />

    <BrowserRouter>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path='/' component={MainPage} exact />
          <Route path='/login' component={Login} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </>
)

export default App;
