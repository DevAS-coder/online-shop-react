import { useState } from 'react'

function Buybox() {
    const [Quantity, setQuantity] = useState(1)
    
    return (
        <div className="flex items-center mt-3">
            <button className="transition-all py-1 w-10/12 text-white bg-pink-600 border-pink-600 border-2 rounded-full hover:bg-white hover:text-pink-600">
                Buy Now
            </button>
            <div className="flex justify-center items-center gap-4 ml-3 md:ml-10">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 text-2xl" onClick={() => { setQuantity(Quantity - 1), Quantity <= 0 ? setQuantity(0) : Quantity }}>-</button>
                <span>{Quantity}</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 text-2xl" onClick={() => { setQuantity(Quantity + 1) }}>+</button>
            </div>
        </div>
    )
}

export default Buybox