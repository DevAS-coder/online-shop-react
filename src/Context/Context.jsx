import { createContext, useState } from "react";

const cartContext = createContext()

function Context({children}) {

    const [Cart, setCart] = useState([])

    return(
    <cartContext.Provider value={{Cart, setCart}}>
        {children}
    </cartContext.Provider>
    )
}

export default Context