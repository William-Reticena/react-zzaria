import React from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'

const Content = ({ children, ...props }) => (
  <Main {...props}>
    <Container>
      {children}
    </Container>
  </Main>
)

const Main = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(3)}px;
`

export default Content