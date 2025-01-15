import { useContext, useState } from 'react'
import { cartContext } from '../../Context/Context'
import { PopupContext } from '../../Context/Togglecontext'
import Popup from './Popup'

function Buybox({ product }) {
    const [Quantity, setQuantity] = useState(1)
    const { isOpen, setisOpen } = useContext(PopupContext)
    const { increaseCart } = useContext(cartContext)

    const buttonClickHandler = () => {
        increaseCart(product, Quantity)
        setisOpen(true)
    };

    return (
        <div className="flex items-center mt-3">
            <button onClick={() => buttonClickHandler(product, Quantity)} className="transition-all py-1 w-10/12 text-white bg-pink-600 border-pink-600 border-2 rounded-full hover:bg-white hover:text-pink-600">
                Buy Now
            </button>
            <div className="flex justify-center items-center gap-4 ml-3 md:ml-10">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 text-2xl" onClick={() => { setQuantity(Quantity - 1), Quantity <= 1 ? setQuantity(1) : Quantity }}>-</button>
                <span>{Quantity}</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 text-2xl" onClick={() => { setQuantity(Quantity + 1) }}>+</button>
            </div>
            {
                isOpen && <Popup title={`Product Added To Cart!`} des={`${Quantity} "${product.title}" \n Added!`}/>
            }
        </div>
    )
}

export default Buybox