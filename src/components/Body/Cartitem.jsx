import { useContext } from "react";
import { cartContext } from "../../Context/Context";

function Cartitem({ item }) {
  const { cart, setCart } = useContext(cartContext);

  const onIncrease = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setCart(updatedCart);
  };

  const onDecrease = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setCart(updatedCart);
  };

  const deleteItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div
      key={item.id}
      className="flex flex-wrap items-center justify-between bg-pink-400 p-4 rounded-lg mb-1 text-white md:flex-nowrap"
    >
      {/* Image Section */}
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-contain bg-white rounded-lg mb-4 md:mb-0"
      />

      {/* Title Section */}
      <div className="flex-1 ml-4 text-center md:text-left">
        <h2 className="text-lg font-semibold line-clamp-2">{item.title}</h2>
      </div>

      {/* Price Section */}
      <div className="mx-5 w-4/12 text-center md:mx-6 md:w-1/12">
        <span className="block text-sm">Price By 1</span>
        <h2 className="font-semibold text-2xl">${item.price}</h2>
      </div>

      {/* Quantity Section */}
      <div className="flex items-center justify-center md:justify-center w-6/12 md:w-2/12">
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

      {/* Delete Button */}
      <button
        className="w-full md:w-auto md:ml-4 bg-red-600 px-4 py-1 rounded-lg text-white font-semibold mt-4 md:mt-0"
        onClick={() => deleteItem(item.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Cartitem;
