import React, { createContext, useState } from 'react'
import uuidv4 from 'uuid/v4'

const OrderContext = createContext()

function OrderProvider ({ children }) {
  const [pizzas, addPizza] = useState([])
  const [orderInProgress, setOrderInProgress] = useState(false)
  const [phone, addPhone] = useState('')
  const [address, addAddress] = useState({})

  function addPizzaToOrder (pizza) {
    if (orderInProgress)
      return addPizza((pizzas) => pizzas.concat(newPizza(pizza)))

    setOrderInProgress(true)
    addPizza([newPizza(pizza)])
  }

  function newPizza (pizza) {
    return {
      id: uuidv4(),
      ...pizza
    }
  }

  function removePizzaFromOrder (id) {
    console.log('removePizzaFromOrder:', id)
    addPizza((pizzas) => pizzas.filter(p => p.id !== id))
  }

  function sendOrder () {
    console.log('send order')
    setOrderInProgress(false)
  }

  return (
    <OrderContext.Provider value={{
      order: {
        pizzas,
        address,
        phone
      },
      addPizzaToOrder,
      removePizzaFromOrder,
      addAddress,
      addPhone,
      sendOrder
    }}>
      {children}
    </OrderContext.Provider>
  )
}

export { OrderProvider, OrderContext }