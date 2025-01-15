import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {

    const [isopen, setisopen] = useState(false)
    const [buttontext, setbuttontext] = useState('Menu')
    const [Isselected, setIsselected] = useState(null)

    const clickhandler = () => {
        setisopen(!isopen)
        setbuttontext(isopen ? 'Menu' : 'Close')
    }

    const itemclickhandler = (index) => {
        setisopen(false)
        setbuttontext(isopen ? 'Menu' : 'Close')
        setIsselected(index)
    }

    const menuItems = [
        { path: '/', label: 'Main Page' },
        { path: '/category/electronics', label: 'Electronics' },
        { path: "/category/men's-clothing", label: "Men's clothing" },
        { path: "/category/women's-clothing", label: "Women's clothing" },
        { path: '/category/Jewelery', label: 'Jewelery' },
        { path: '/about-us', label: 'About us' },
    ]

    return (
        <div className="flex items-center sm:w-52 lg:w-auto sm:justify-end">
            <button className="border-pink-500 rounded-xl text-pink-500 border-4 flex justify-center items-center p-2 lg:hidden" onClick={clickhandler}><span className="material-symbols-outlined">{buttontext}</span><span>{buttontext}</span></button>

            <ul className={`transition-max-height duration-300 ease-in-out ${isopen ? 'max-h-80 py-4' : 'max-h-0'} overflow-hidden bg-slate-300  mt-3 rounded-xl -ml-16 top-48 sm:top-24 absolute md:-mr-16 lg:bg-white lg:max-h-80 lg:flex lg:space-x-4 lg:relative lg:top-0 xl:space-x-10 z-40`}>

                {menuItems.map((item, index) => (
                    <Link key={index} to={item.path}><li className={Isselected === index ? "text-pink-600 cursor-pointer border-b-2 border-pink-600 text-xl" : ""} onClick={() => itemclickhandler(index)}>{item.label}</li></Link>
                ))}

            </ul>
        </div>
    );
}

export default Navbar;
