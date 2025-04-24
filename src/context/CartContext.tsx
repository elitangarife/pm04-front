'use client'
import React, { createContext, useContext, useState } from 'react'



export const CartContext = createContext(0)


const CartProvider = ({children}) => {
    const [cartData, setCartData] = useState([])






  return (
    <CartContext.Provider value={{cartData, setCartData}}>
        {children}
    </CartContext.Provider>
  )
}

export const useAuth = () => useContext(CartContext)