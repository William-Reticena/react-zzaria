import React  from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import { useAuth } from '../../hooks'
import { ReactComponent as Logo} from '../../images/logo-react-zzaria.svg'
// import firebase from '../../services/firebase'

const Login = () => {
  const { login } = useAuth()

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
  padding: ${({ theme }) => theme.spacing(3)}px;
`

const GitHubButton = styled(Button).attrs({ 
  variant: 'contained',
  fullWidth: true
})`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  max-width: 480px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  text-transform: none;
`

export default Login