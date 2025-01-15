import React from 'react';
import { Link } from 'react-router-dom';

const Productcart = ({ id, name, description, price, imageUrl }) => {
    return (
        <Link to={`/product/${id}`}>
            <div className="max-w-sm rounded-3xl overflow-hidden shadow-xl my-2 hover:shadow-slate-400 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <div className='min-h-96 flex  justify-center items-center p-5 '>
                    <img src={imageUrl} alt={name} width="200px" />
                </div>
                <div className="px-6 py-4">
                    <p className="font-bold text-xl mb-2 line-clamp-1">{name}</p>
                    <p className="text-gray-700 text-base line-clamp-3">{description}</p>
                    <p className="text-gray-900 text-xl font-bold">${price}</p>
                    <button className='transition-all py-1 mt-5 w-full text-white bg-pink-600 border-pink-600 border-2 rounded-full hover:bg-white hover:text-pink-600'>See Details</button>
                </div>
            </div>
        </Link>
    );
};

export default Productcart;