import { createContext, useEffect, useState } from "react";

export const cartContext = createContext()

export const Context = ({children}) => {
    
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const increaseCart = (newProduct, Quantity) => {
        const productForCart = {...newProduct , quantity: Quantity}
        setCart([...cart, productForCart])
    }

    return(
    <cartContext.Provider value={{cart, increaseCart}}>
        {children}
    </cartContext.Provider>
    )
}