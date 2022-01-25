import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core'
import Header from './header'

const ChoosePizzaSize = React.lazy(() => import('../choose-pizza-size'))

const Main = () => {
  return (
    <>
      <Header />

      <Spacer />

      <Content>
       <Suspense fallback='Loading'>
         <Switch>
           <Route path='/' exact component={ChoosePizzaSize} />
         </Switch>
       </Suspense>
      </Content>
    </>
  )
}

const Content = styled.main`
  padding: 20px;
`

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