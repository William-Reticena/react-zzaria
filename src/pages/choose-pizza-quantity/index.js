import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Button,
  Input as MaterialInput
} from '@material-ui/core'
import HeaderContent from '../../ui/header-content'
import H4 from '../../ui'
import Content from '../../ui/content'
import Footer from '../../ui/footer'
import { Redirect, Link } from 'react-router-dom'
import { HOME, CHECKOUT } from '../../routes'
import { useOrder } from '../../hooks'

function ChoosePizzaQuantity ({ location }) {
  const [quantity, setQuantity] = useState(1)
  const {  addPizzaToOrder } = useOrder()

  if (!location.state)
    <Redirect to={HOME} />

  function handleChange (e) {
    const { value } = e.target

    if (value >= 1)
      setQuantity(value)
  }

  const addPizza = () => {
    addPizzaToOrder({
      ...location.state,
      quantity
    })
  }

  return (
    <>
      <Content>
        <HeaderContent>
          <H4>
          Quantas pizzas você gostaria <br />
          de pedir, com esses sabores?
          </H4>
        </HeaderContent>

        <MainContent>
          <Input value={quantity} onChange={handleChange} autoFocus />
          <ButtonAddPizza
            to={HOME}
            onClick={addPizza}
          >
            Adicionar e <br />
            montar outra
          </ButtonAddPizza>
        </MainContent>
      </Content>

      <Footer
        buttons={{
          back: {
            children: 'Mudar Sabores',
          },

          action: {
            to: CHECKOUT,
            onClick: addPizza,
            children: 'Finalizar compra',
          }
        }}
      />
    </>
  )
}

const Input = styled(MaterialInput).attrs({
  type: 'number'
})`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  }

  & input {
    font-size: 80px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }
`

const MainContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`

const ButtonAddPizza = styled(Button).attrs({
  color: 'secondary',
  component: Link,
  variant: 'contained'
})`
  && {
    text-align: center;
  }
`

export default ChoosePizzaQuantity