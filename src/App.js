import React, { lazy, Suspense, useEffect, useState, useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import firebase from './services/firebase'
import { AuthContext } from './contexts/auth'

const MainPage = lazy(() => import('./pages/main'))
const Login = lazy(() => import('./pages/login'))

const App = ({ location }) => {
  const { userInfo, setUserInfo, logout } = useContext(AuthContext)
  const [didCheckUserIn, setDidCheckUserIn] = useState(false)

  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('dados do usuário:', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
      setDidCheckUserIn(true)
    })
    window.logout = logout
  }, [setUserInfo, logout])

  if (!didCheckUserIn)
  console.log('ainda não chegou')

  if (isUserLoggedIn)
    console.log('usuario logado')
    if (location.pathname === '/login')
      return <Redirect to='/' />

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path='/' component={MainPage} exact />
        <Route path='/login' component={Login} />
      </Switch>
    </Suspense>
  )
}

export default App