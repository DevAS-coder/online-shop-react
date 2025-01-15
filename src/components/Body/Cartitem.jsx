import { useContext, useState } from "react"
import { cartContext } from "../../Context/Context"

function Cartitem({ item }) {

	const { cart, setCart } = useContext(cartContext)
	const onIncrease = (id) => {
		const updatedCart = cart.map((item) => {
			if (item.id === id){
				return {...item, quantity: item.quantity + 1}
			}else{
				return item
			}
			
		})
		setCart(updatedCart)
	}

	const onDecrease = (id) => {
		const updatedCart = cart.map((item) => {
			if (item.id === id && item.quantity > 1){
				return {...item, quantity: item.quantity - 1}
			}else{
				return item
			}
			
		})
		setCart(updatedCart)
	}

	const deleteItem = (id) => {
		const updatedCart = cart.filter((item) => (
			item.id === id ? false : true
		))
		setCart(updatedCart)
	}

	return (
		<div key={item.id} className="flex items-center justify-between bg-pink-400 p-4 rounded-lg mb-1 text-white">
			<img
				src={item.image}
				alt={item.title}
				className="w-24 h-24 object-contain bg-white rounded-lg"
			/>

			<div className="flex-1 ml-4">
				<h2 className="text-lg font-semibold">{item.title}</h2>
			</div>

			<div className="mx-10 ">
				<span>Price By 1</span><h2 className="font-semibold text-2xl text-center">${item.price}</h2>
			</div>

			<div className="flex items-center">
				<button
					className="bg-white text-pink-500 px-2 py-1 rounded-lg font-bold mx-1"
					onClick={() => onDecrease(item.id)}
				>
					-
				</button>
				<span className="px-3 font-semibold">{item.quantity}</span>
				<button
					className="bg-white text-pink-500 px-2 py-1 rounded-lg font-bold mx-1"
					onClick={() => onIncrease(item.id)}
				>
					+
				</button>
			</div>

			<button
				className="ml-4 bg-red-600 px-4 py-2 rounded-lg text-white font-semibold"
				onClick={() => deleteItem(item.id)}
			>
				Delete
			</button>
		</div>
	)
}

export default Cartitem