import React, { createContext, useState } from "react"

const OrderContext = createContext()

function OrderProvider ({ children }) {
  const [pizzas, addPizza] = useState([])

  function addPizzaToOrder (pizza) {
    addPizza((pizza) => pizzas.concat(pizza))
  }

  return (
    <OrderContext.Provider value={{
      order: {
        pizzas
      },
      addPizzaToOrder
    }}>
      {children}
    </OrderContext.Provider>
  )
}

export {OrderProvider, OrderContext}