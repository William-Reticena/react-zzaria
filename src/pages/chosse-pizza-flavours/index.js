import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import { H4 } from '../../ui'
import { HeaderContent } from '../../ui/header-content'
import { HOME } from '../../routes'
import PizzasGrid from '../../ui/pizzas-grid'
import { pizzaFlavours } from '../../fake-data/pizza-flavours'
import { singularOrPlural } from '../../utils'
import Divider from '../../ui/divider'
import CardLink from '../../ui/card-link'
import { Grid, Card as MaterialCard, Typography } from '@material-ui/core'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}))

  if (location.state)
    return <Redirect to={HOME} />

  const { flavours, id } = location.state

  const handleChangeCheckbox = (pizzaId) => (e) => {
    if (checkboxesChecked(checkboxes).length === flavours && e.target.checked === true)
      return 
    setCheckboxes((checkboxes) => {
      return {
        ...checkboxes,
        [pizzaId]: e.target.checked
      }
    })
  }

  return (
    <>
      <HeaderContent>
        <H4>
          Escolha até {flavours} {' '}
          {singularOrPlural(flavours, 'sabor', 'sabores')}
        </H4>
      </HeaderContent>

      <PizzasGrid>
        {pizzaFlavours.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card checked={!!checkboxes[pizza.id]}>
              <Label>
                <Checkbox
                  checked={!!checkboxes[pizza.id]}
                  onChange={handleChangeCheckbox(pizza.id)}
                />
                <Img src={pizza.image} alt={pizza.name} />

                <Divider />

                <Typography>{pizza.name}</Typography>
                <Typography variant='h5'>
                  {pizza.value[id]}
                </Typography>
              </Label>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  )
}

const Label = styled(CardLink).attrs({
  component: 'label'
})``

function checkboxesChecked (checkboxes) {
  return Object.values(checkboxes).filter(Boolean)
} 

const Card = styled(MaterialCard)`
  border: 2px solid transparent;
  border-color: ${({ theme, checked }) => checked ? theme.palette.secondary.light : '' };
`

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`

const Img = styled.img`
  width: 200px;
`

export default ChoosePizzaFlavours