import React, { PureComponent } from 'react'
import styled from 'styled-components'
import firebase from 'firebase'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as Logo} from './logo-react-zzaria.svg'

const firebaseConfig = {
  apiKey: "AIzaSyC-ztV67lfqLWbMMdMIDgI5KSnNO17E7Ko",
  authDomain: "reactzzaria-cb182.firebaseapp.com",
  projectId: "reactzzaria-cb182",
  storageBucket: "reactzzaria-cb182.appspot.com",
  messagingSenderId: "642464930174",
  appId: "1:642464930174:web:feb7b37dd3100fd16f7b2f",
  measurementId: "G-13LDVDY48P"
}

firebase.initializeApp(firebaseConfig)

class Login extends PureComponent {
  state = {
    isUserLoggedIn: false,
    user: null
  }

  login () {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  logout = () => {
    firebase.auth().signOut().then(() => {
      console.log('deslogou')
      this.setState({
        isUserLoggedIn: false,
        user: null
      })
    })
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('usuario:', user)
        this.setState({
          isUserLoggedIn: true,
          user
        })
      } else {
        console.log('nao logado', user)
        this.setState({
          isUserLoggedIn: false,
          user: null
        })
      }
    })
  }

  render () {
    const { isUserLoggedIn, user } = this.state
    return (
      <StyledContainer>
        <Grid container justifyContent='center' spacing={5}>
          <Grid item xs={6}>
            <Logo style={{ width: '100%'}} />
          </Grid>
    
          <Grid item xs={12} container justifyContent='center'>
            {isUserLoggedIn && (
              <>
                <pre>{user.displayName}</pre>
                <Button variant='contained' onClick={this.logout}>Sair</Button>
              </>
            )}

            {!isUserLoggedIn && (
              <GitHubButton onClick={this.login}>
                Entrar com GitHub
              </GitHubButton>
            )}
          </Grid>
        </Grid>
      </StyledContainer>
    )
  }
}


const StyledContainer = styled.div`
  padding: 40px;
`

const GitHubButton = styled(Button).attrs({ 
  variant: 'contained',
  fullWidth: true
})`
  font-size: 25px;
  max-width: 480px;
  padding: 15px;
  text-transform: none;
`

export default Login