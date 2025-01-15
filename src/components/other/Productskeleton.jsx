function Productskeleton() {
    return (
        <div className="flex flex-col lg:flex-row w-11/12 lg:w-9/12 shadow-2xl shadow-slate-300 rounded-3xl p-5 lg:p-20 m-auto mt-5 animate-pulse">
            <div className="h-64 w-full lg:w-4/12 flex justify-center items-center shadow-md shadow-slate-200 p-5 lg:p-10 rounded-3xl bg-gray-300 mb-5 lg:mb-0">
            </div>
            <div className="w-full lg:w-7/12 lg:ml-10">
                <div className="h-6 bg-gray-400 rounded-md w-3/6 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded-md w-2/6 mb-3"></div>
                <div className="h-1 bg-gray-200 rounded-md w-3/6 mb-5"></div>
                <div className="h-4 bg-gray-300 rounded-md w-4/6 mb-3"></div>
                <div className="h-4 bg-gray-300 rounded-md w-5/6 mb-12"></div>
                <div className="h-6 bg-gray-400 rounded-md w-3/6 mb-5"></div>
                <div className="h-10 bg-gray-400 rounded-2xl w-full"></div>
            </div>
        </div>
    );
}

export default Productskeleton;
