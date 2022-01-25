import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Card,
  CardActionArea as MaterialCardAction,
  Divider as MaterialDivider,
  Grid,
  Typography,
} from '@material-ui/core'
import { AuthContext } from '../../contexts/auth'
import pizzaSizes from '../../fake-data/pizzas-sizes'

const ChoosePizzaSize = () => {
  const { userInfo } = useContext(AuthContext)

  return (
    <>
          <Grid container direction='column' alignItems='center'>
          <Title variant='h3'>
            O que vai ser hoje, {userInfo.user.firstName}? =)
          </Title>

          <Title variant='h4'>
            Escolha o tamanho da pizza
          </Title>

          <PizzasGrid>
            {pizzaSizes.map((pizza) => (
              <Grid item key={pizza.id} xs>
                <Card>
                  <CardActionArea to='/sabores-da-pizza'>
                    <Pizza>
                      <PizzaText>
                        {pizza.size}cm
                      </PizzaText>
                    </Pizza>

                    <Divider />

                    <Typography variant='h5'>{pizza.name}</Typography>
                    <Typography>
                      {pizza.slices} fatias, {' '}
                      {pizza.flavours} {' '}
                      {sigularOrPlural(pizza.flavours, 'sabor', 'sabores')}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </PizzasGrid>
      </Grid>
    </>
  )
}

function sigularOrPlural (amount, singular, plural) {
  return amount === 1 ? singular : plural
}

const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`

const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: true
})``

const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  padding: 20px;
`

const CardActionArea = styled(MaterialCardAction).attrs({
  component: Link
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 20px 0;
`

const Pizza = styled.div`
  align-items: center;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  position: relative;
  height: 200px;
  width: 200px;
  z-index: 1;

  &::before,
  &::after {
    background: #ccc;
    content: '';
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    height: 1px;
    width: 160px;
  }

  &::after {
    height: 160px;
    width: 1px;
  }
`

const PizzaText = styled(Typography).attrs({
  variant: 'h5'
})`
  align-items: center;
  background: #fff;
  border-radius: 50%;
  display: flex;
  height: 80px;
  position: relative;
  justify-content: center;
  width: 80px;
  z-index: 1;
`

export default ChoosePizzaSize