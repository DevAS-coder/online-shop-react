import { Link } from "react-router-dom";
import { useState } from "react";

function Catcard(props) {
    const { address, name, prnumber } = props;
    const urlName = name.toLowerCase().replace(/\s+/g, '-');
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseMove = () => {
        setIsDragging(true);
    };

    const handleMouseDown = () => {
        setIsDragging(false);
    };

    const handleClick = (e) => {
        if (isDragging) {
            e.preventDefault();
        }
    };

    return (
        <Link 
            to={`/category/${urlName}`} 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            onDragStart={(e) => {e.preventDefault()}}
        >
            <div className="p-10 mx-8 my-5 mb-14 text-center flex flex-col justify-center items-center shadow-xl rounded-2xl hover:shadow-2xl hover:shadow-pink-400 transition-all duration-300 ease-in-out cursor-pointer border-pink-600 border-4 bg-pink-100">
                <img className="mix-blend-multiply" src={address} width="300px" alt={address + `category`} />
                <div className="w-52 bg-gray-300 h-0.5 mb-5"></div>
                <h1 className="text-lg">{name}</h1>
                <h3>{prnumber} Products</h3>
            </div>
        </Link>
    );
}

export default Catcard;
