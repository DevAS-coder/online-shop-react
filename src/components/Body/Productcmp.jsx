import { useState } from "react"
import Buybox from "../other/Buybox"

function Productcmp({product}) {

    return (
        <div className="flex flex-col lg:flex-row w-11/12 lg:w-9/12 shadow-2xl shadow-slate-300 rounded-3xl p-5 lg:p-20 m-auto mt-5">
            <div className="w-full lg:w-4/12 flex justify-center items-center shadow-md shadow-slate-200 p-5 lg:p-10 rounded-3xl mb-5 lg:mb-0">
                <img src={product.image} alt={product.title} className="max-w-full h-auto" />
            </div>
            <div className="w-full lg:w-7/12 ml-0 lg:ml-10">
                <h1 className="text-xl lg:text-2xl font-semibold">{product.title}</h1>
                <h3 className="mb-3 text-sm lg:text-base">{product.category}</h3>
                <div className="h-1 bg-gray-200 rounded-md w-3/6"></div>
                <p className="text-sm lg:text-base mt-3">
                    Rate: {product.rating?.rate}{" "}
                    <span className="material-symbols-outlined relative top-1.5 text-yellow-500 mb-12">
                        star
                    </span>{" "}
                    From {product.rating?.count} Count
                </p>
                <p className="mb-10 text-sm lg:text-base">
                    Description: {product.description}
                </p>
                <p className="text-gray-900 text-lg lg:text-xl font-bold">
                    Price: ${product.price}
                </p>
                <Buybox/>
            </div>
        </div>
    )
}

export default Productcmp