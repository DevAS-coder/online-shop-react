import { createContext, useEffect, useState } from "react";

export const PopupContext = createContext()

export const Togglecontext = ({ children }) => {

    const [isOpen, setisOpen] = useState(false)

    return (
        <PopupContext.Provider value={{ isOpen, setisOpen }}>
            {children}
        </PopupContext.Provider>
    )
}