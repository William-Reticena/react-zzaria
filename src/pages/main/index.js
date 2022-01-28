import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import Header from './header'

import {
  CHOOSE_PIZZA_FLAVOURS,
  CHOOSE_PIZZA_QUANTITY,
  CHECKOUT,
  CHECKOUT_CONFIRMATION,
  HOME,
} from '../../routes'

const ChoosePizzaSize = React.lazy(() => import('../choose-pizza-size'))
const ChoosePizzaFlavours = React.lazy(() => import('../chosse-pizza-flavours'))
const ChoosePizzaQuantity = React.lazy(() => import('../chosse-pizza-quantity'))
const Checkout = React.lazy(() => import('../checkout'))
const CheckoutConfirmation = React.lazy(() => import('../checkout-confirmation'))

const Main = () => {
  return (
    <>
      <Header />

      <Spacer />

       <Suspense fallback='Loading'>
         <Switch>
           <Route path={HOME} exact component={ChoosePizzaSize} />
           <Route path={CHOOSE_PIZZA_FLAVOURS} component={ChoosePizzaFlavours} />
           <Route path={CHOOSE_PIZZA_QUANTITY} component={ChoosePizzaQuantity} />
           <Route path={CHECKOUT} exact component={Checkout} />
           <Route path={CHECKOUT_CONFIRMATION} component={CheckoutConfirmation} />
         </Switch>
       </Suspense>
    </>
  )
}

const style = (theme) => {
  return {
    main: theme.mixins.toolbar
  }
}

const SpaceWrapper = (({ classes }) => (
    <div className={classes.main} />
))

const Spacer = withStyles(style)(SpaceWrapper)

export default Main