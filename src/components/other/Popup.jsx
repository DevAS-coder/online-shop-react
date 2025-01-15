import { useContext } from 'react'
import { motion } from "framer-motion";
import { PopupContext } from '../../Context/Togglecontext'

const Popup = ({ title, des }) => {

    const { isOpen, setisOpen } = useContext(PopupContext)
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            {(
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-6 rounded-lg shadow-lg w-80 box-border"
                    >
                        <h2 className="text-xl font-bold mb-4">{title}</h2>
                        <p className="mb-4">{des}</p>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded-lg"
                            onClick={() => {setisOpen(false)}}
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Popup;
