import React from 'react'
import styled from 'styled-components'
import Content from '../../ui/content'
import H4 from '../../ui'
import H6 from '../../ui'
import {
  Button,
  Container,
  Divider as MaterialDivider,
  Typography,
  Paper } from '@material-ui/core'
import { useAuth } from '../../hooks'
import OrderInfo from '../../ui/order-info'
import FooterCheckout from '../checkout/footer-checkout'

function CheckoutSucess () {
  const { userInfo } = useAuth()
  return (
    <>
      <Content>
        <Header>
          <H4>Oi {userInfo.user.firstName}!</H4>

          <Typography>
            Confere por favor, se está tudo certo com o seu pedido antes de finalizar?
          </Typography>
        </Header>

        <Container maxWidth='sm'>
          <PaperContainer>
            <H6 variant='h6'>Seu pedido:</H6>
            <OrderInfo />

            <Divider />

            <H6 variant='h6'>Endereço para entrega:</H6>

            <Divider />

            <H6 variant='h6'>Telefone para contato:</H6>
          </PaperContainer>
        </Container>
      </Content>

      <FooterCheckout justifyContent='center'>
        <Button variant='contained' color='primary' size='large'>
          Tudo certo!
        </Button>
      </FooterCheckout>
    </>
  )
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  text-align: center;
`

const PaperContainer = styled(Paper)`
  && {
    padding: ${({ theme }) => theme.spacing(3)}px;
  }
`

const Divider = styled(MaterialDivider)`
  && {
    margin: ${({ theme }) => theme.spacing(3, 0)};
  }
`

export default CheckoutSucess