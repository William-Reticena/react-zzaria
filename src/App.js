import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import firebase from './services/firebase'
import { useAuth } from './hooks'

import { HOME, LOGIN } from './routes'

const MainPage = lazy(() => import('./pages/main'))
const Login = lazy(() => import('./pages/login'))

const App = ({ location }) => {
  const { userInfo, setUserInfo, logout } = useAuth()
  const [didCheckUserIn, setDidCheckUserIn] = useState(false)

  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('dados do usuário:', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user: user && {
          ...user,
          firstName: user.displayName.split(' ')[0]
        }
      })
      setDidCheckUserIn(true)
    })
    window.logout = logout
  }, [setUserInfo, logout])

  if (!didCheckUserIn) {
    console.log('ainda não checou')
    return <LinearProgress />
  }

  if (isUserLoggedIn && location.pathname === LOGIN)
    return <Redirect to={HOME} />

  if (!isUserLoggedIn && location.pathname !== LOGIN)
    return <Redirect to={LOGIN} />

  if (isUserLoggedIn)
    console.log('usuario logado')
    if (location.pathname === '/login')
      return <Redirect to='/' />

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={HOME} component={MainPage} exact />
        <Route path={LOGIN} component={Login} />
      </Switch>
    </Suspense>
  )
}

export default App