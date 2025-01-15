import { createContext, useEffect, useState } from "react";

export const cartContext = createContext()

export const Context = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const increaseCart = (newProduct, Quantity) => {
        const existingProduct = cart.find((item) => item.id === newProduct.id);
      
        if (existingProduct) {
          const updatedCart = cart.map((item) =>
            item.id === newProduct.id
              ? { ...item, quantity: item.quantity + Quantity }
              : item
          );
          setCart(updatedCart);
        } else {
          const productForCart = { ...newProduct, quantity: Quantity };
          setCart([...cart, productForCart]);
        }
      };

    return (
        <cartContext.Provider value={{ cart, increaseCart, setCart }}>
            {children}
        </cartContext.Provider>
    )
}