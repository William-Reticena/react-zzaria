import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import { AuthContext } from '../../contexts/auth'
import { ReactComponent as Logo} from './logo-react-zzaria.svg'
// import firebase from '../../services/firebase'

const Login = () => {
  const { login } = useContext(AuthContext)

  return (
    <Container>
      <Grid container justifyContent='center' spacing={5}>
        <Grid item xs={6}>
          <Logo style={{ width: '100%'}} />
        </Grid>
  
        <Grid item xs={12} container justifyContent='center'>
          <GitHubButton onClick={login}>
            Entrar com GitHub
          </GitHubButton>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
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