import { Link } from "react-router-dom"
import Buttons from "../other/Buttons"
import Navbar from "./Navbar"
import logo from '../../assets/img/logo.webp'

function Header() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row justify-around py-5 items-center shadow-lg lg:px-5 xl:px-10">
        <Link to='/'><img src={logo} width="100px"/></Link>
        <Navbar/>
        <div className="flex items-center "> 
          <span className="material-symbols-outlined transition-all px-3 ml-2 text-pink-600 border-pink-600 border-2 rounded-lg hover:bg-pink-600 hover:text-white text-base cursor-pointer">shopping_cart</span>
          <Buttons model="primary" text="Log in"/>
          <Buttons model="accent" text="Sign up"/>
        </div>
    </div>
  )
}

export default Header