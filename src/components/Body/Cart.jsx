import React, { useContext, useEffect, useState } from "react";
import { cartContext } from '../../Context/Context'
import Cartitem from "./Cartitem";

const Cart = () => {

  const { cart } = useContext(cartContext)
  const [finalPrice, setFinalPrice] = useState(0)
  useEffect(() => {
    const TotalPrice = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0)
    setFinalPrice(TotalPrice)
  }, [cart])

  if(cart.length == 0){
    return <div>Your Cart Is Empty</div>
  }

  return (

    <div className="w-8/12 mx-auto mt-3">
      {cart.map((item) => (
        <Cartitem item={item}/>
      ))}
      <div className="mt-5 mb-5 w-full h-1 bg-slate-300 rounded-full"></div>
      <div className="flex text-3xl text-pink-400 w-full justify-center ">Amount payable : ${finalPrice}</div>
      <div className="flex m-auto text-3xl mt-5 text-white bg-pink-400 w-96 py-2 rounded-full px-10 justify-center cursor-pointer">Go To Checkout</div>
    </div>


  ) 
  
};

export default Cart;
